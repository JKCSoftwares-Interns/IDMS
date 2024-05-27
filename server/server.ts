import express from "express";
import { initializeDB } from "./db";
import mariadb, { PoolConnection } from "mariadb";
import cors from "cors";
import path from "path";
const PORT = 5173;

const pool = mariadb.createPool({
	host: "localhost",
	user: "root",
	password: "test",
	port: 3306,
	database: "testidms",
	connectionLimit: 5,
});

const CLIENT_DIR = path.join(__dirname, "../client/dist");
const ENTRY = path.join(CLIENT_DIR, "index.html");

const app = express();

app.use(cors());
app.use(express.static(CLIENT_DIR));
app.use(express.json());

interface Product {
	productId: string;
	productName: string;
	category: string;
	measuringUnit: string;
	packSize: number;
	noOfUnits: number;
	unitMRP: number;
	packMRP: number;
	manufacturer: string;
	marketer: string;
	supplier: string;
	upc: string;
	hsn: string;
	cgst: number;
	sgst: number;
	igst: number;
	cess: number;
	loadPrice: number;
	unloadingPrice: number;
	dateAdded: string;
	addedBy: string;
	lastEditedDate: string;
	lastEditedBy: string;
}

app.get("/test", (_, res) => {
	console.log("/test is running");
	res.send("hello world");
});

app.get("/products/show", async (_, res) => {
	console.log("/products/show is running");
	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const data = await conn.query("SELECT * FROM products");
		res.json(data);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	} finally {
		if (conn) conn.release();
	}
});

app.post("/products/add/it", async (req, res) => {
	console.log("/products/add is running");
	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const product: Product = parseData(req.body);
		await conn.query(
			`
    INSERT INTO products (
      productName, category, measuringUnit, packSize, noOfUnits, 
      unitMRP, packMRP, manufacturer, marketer, supplier, upc, hsn, cgst, 
      sgst, igst, cess, loadPrice, unloadingPrice, dateAdded, addedBy, 
      lastEditedDate, lastEditedBy
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, NULL, NULL
    );
    `,
			[
				product.productName,
				product.category,
				product.measuringUnit,
				product.packSize,
				product.noOfUnits,
				product.unitMRP,
				product.packMRP,
				product.manufacturer,
				product.marketer,
				product.supplier,
				product.upc,
				product.hsn,
				product.cgst,
				product.sgst,
				product.igst,
				product.cess,
				product.loadPrice,
				product.unloadingPrice,
				product.addedBy,
			]
		);
		res.status(200).send("Product added successfully");
	} catch (err) {
		console.log("couldn't add: ", err);
		res.status(500).send("Error adding product");
	} finally {
		if (conn) conn.release();
	}
});

app.post("/products/edit/:id", async (req, res) => {
	console.log("/products/edit is running");
	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const product: Product = parseData(req.body);
		if (!product) {
			console.log("error 400");
			res.status(400).send("Invalid product data");
			return;
		}
		await conn.query(
			`
		UPDATE products SET
		  productName = ?, 
		  category = ?, 
		  measuringUnit = ?, 
		  packSize = ?, 
		  noOfUnits = ?, 
		  unitMRP = ?, 
		  packMRP = ?, 
		  manufacturer = ?, 
		  marketer = ?, 
		  supplier = ?, 
		  upc = ?, 
		  hsn = ?, 
		  cgst = ?, 
		  sgst = ?, 
		  igst = ?, 
		  cess = ?, 
		  loadPrice = ?, 
		  unloadingPrice = ?, 
		  lastEditedDate = NOW(), 
		  lastEditedBy = ?
		WHERE productId = ?
		`,
			[
				product.productName,
				product.category,
				product.measuringUnit,
				product.packSize,
				product.noOfUnits,
				product.unitMRP,
				product.packMRP,
				product.manufacturer,
				product.marketer,
				product.supplier,
				product.upc,
				product.hsn,
				product.cgst,
				product.sgst,
				product.igst,
				product.cess,
				product.loadPrice,
				product.unloadingPrice,
				product.lastEditedBy,
				req.params.id,
			]
		);
		res.status(200).send("Product updated successfully");
	} catch (err) {
		console.log("couldn't update: ", err);
		res.status(500).send("Error updating product");
	} finally {
		if (conn) conn.release();
	}
});

app.delete("/products/delete/:id", async (req, res) => {
	console.log("/products/delete is running");
	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const id = req.params.id;
		if (!id) {
			res.status(400).send("No id provided");
			return;
		}
		await conn.query(
			`
		DELETE FROM products
		WHERE productId = ?
		`,
			[id]
		);
		res.status(200).send("Product deleted successfully");
	} catch (err) {
		console.log("couldn't delete: ", err);
		res.status(500).send("Error deleting product");
	} finally {
		if (conn) conn.release();
	}
});

/* ----------------------------------------- */

app.get("*", (_, res) => {
	console.log(`index is being served from ${ENTRY}`);
	res.sendFile(ENTRY);
});

async function startServer() {
	try {
		await initializeDB();
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (err) {
		console.error(
			"Failed to start server due to database initialization error:",
			err
		);
	}
}

startServer();

/* ---------------Helper Functions--------------- */

function parseData(product: any) {
	if (!product || typeof product !== "object") {
		console.log(typeof product);
		console.log(product);
		return null;
	}

	/* have to reparse the json the fit the database schema; 
  will think of another way of doing this later... */
	const intfields = [
		"packSize",
		"noOfUnits",
		"unitMRP",
		"packMRP",
		"cgst",
		"sgst",
		"igst",
		"cess",
		"loadPrice",
		"unloadingPrice",
	];
	for (const field of intfields) {
		if (typeof product[field] !== "string" || isNaN(Number(product[field]))) {
			console.log(typeof product[field]);
			console.log(product[field]);
			console.log("setting default value for", field);
			product[field] = 0;
		} else {
			product[field] = Number(product[field]);
		}
	}

	console.log("CHECKING:", product);
	return product;
}
