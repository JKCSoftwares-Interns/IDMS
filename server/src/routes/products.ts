/*------IMPORT----------*/

import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";

/*------INTERFACE-------*/

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
	dateAdded: Date;
	addedBy: string;
	lastEditedDate: Date;
	lastEditedBy: string;
}

const router = express.Router();

/*----------LOGGING FUNCTION------------*/

function greetStatus(route: string) {
	console.log(`/products/${route} is running`);
}

/*----------PATH FUNCTIONS------------*/

router.get("/", async (_, res) => {
	greetStatus("show");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const data = await conn.query("SELECT * FROM products");
		// console.log(typeof data);
		res.json(data);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	} finally {
		if (conn) conn.release();
	}
});

router.post("/add", async (req, res) => {
	greetStatus("add");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const product: Partial<Product> = req.body;
		console.log("product be like:", product);
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
				"admin", //must be changed to include user from session data
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

router.get("/edit/:id", async (req, res) => {
	let conn: PoolConnection | null = null;
	try {
	  conn = await pool.getConnection();
	  const { id } = req.params;
	  const rows = await conn.query("SELECT * FROM products WHERE productId = ?", [id]);
	  if (rows.length === 0) {
		res.status(404).send("Product not found");
	  } else {
		res.json(rows[0]);
	  }
	} catch (err) {
	  console.log(err);
	  res.status(500).send(err);
	} finally {
	  if (conn) conn.release();
	}
  });

router.post("/edit/:id", async (req, res) => {
	console.log("ID ==>", req.params.id);

	greetStatus("edit");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		console.log("DATA RECEIVED:", req.body);
		const product: Product = req.body;
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

router.delete("/delete/:id", async (req, res) => {
	greetStatus("delete");

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

export default router;
