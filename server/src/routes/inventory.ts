/* May not work right now */

import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";

interface Inventory {
    inventoryId: string;
	orderedDate: string;
	dateOfEntry: string;
	referenceNumber: string;
    supplier: string;
	reason: string;
	productId: string;
	dateOfManufacture: string;
	dateOfExpiry: string;
    quantity: number;
	purchasePrice: number;
	sellingPrice: number;
	batchNumber: string;
	storageLocation: string;
	additionalNote: string;
	dateAdded: string;
	addedBy: string;
	lastEditedDate: string;
	lastEditedBy: string;
}

const router = express.Router();

router.get("/", async (_, res) => {
	greetStatus("show");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const data = await conn.query("SELECT * FROM inventory");
		// console.log(await conn.query("DESCRIBE inventory"));
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
		const inventory: Inventory = parseData(req.body);
		await conn.query(`
    INSERT INTO inventory (
        inventoryId,orderedDate,dateOfEntry,referenceNumber,supplier,reason,productId,dateOfManufacture,dateOfExpiry,quantity,purchasePrice,sellingPrice,batchNumber,storageLocation,additionalNote,dateAdded,addedBy,lastEditedDate,lastEditedBy
        ) VALUES (
			?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, NOW(),?,NULL,NULL
        );
        `,
			[
				inventory.inventoryId,
				inventory.orderedDate,
				inventory.dateOfEntry,
				inventory.referenceNumber,
				inventory.supplier,
				inventory.reason,
				inventory.productId,
				inventory.dateOfManufacture,
				inventory.dateOfExpiry,
				inventory.quantity,
				inventory.purchasePrice,
				inventory.sellingPrice,
				inventory.batchNumber,
				inventory.storageLocation,
				inventory.additionalNote,
				inventory.dateAdded,
				inventory.addedBy,
				inventory.lastEditedDate,
				inventory.lastEditedBy,
			]
		);
		res.status(200).send("Inventory added successfully");
	} catch (err) {
		console.log("couldn't add: ", err);
		res.status(500).send("Error adding into inventory");
	} finally {
		if (conn) conn.release();
	}
});

// router.get("/edit/:id", async (req, res) => {
// 	let conn: PoolConnection | null = null;
// 	try {
// 	  conn = await pool.getConnection();
// 	  const { id } = req.params;
// 	  const rows = await conn.query("SELECT * FROM products WHERE productId = ?", [id]);
// 	  if (rows.length === 0) {
// 		res.status(404).send("Product not found");
// 	  } else {
// 		res.json(rows[0]);
// 	  }
// 	} catch (err) {
// 	  console.log(err);
// 	  res.status(500).send(err);
// 	} finally {
// 	  if (conn) conn.release();
// 	}
//   });

// router.post("/edit/:id", async (req, res) => {
// 	console.log("ID ==>", req.params.id);

// 	greetStatus("edit");

// 	let conn: PoolConnection | null = null;
// 	try {
// 		conn = await pool.getConnection();
// 		console.log("DATA RECEIVED:", req.body);
// 		const product: Inventory = parseData(req.body);
// 		if (!product) {
// 			console.log("error 400");
// 			res.status(400).send("Invalid product data");
// 			return;
// 		}
// 		await conn.query(
// 			`
		// UPDATE products SET
		//   productName = ?, 
		//   category = ?, 
		//   measuringUnit = ?, 
		//   packSize = ?, 
		//   noOfUnits = ?, 
		//   unitMRP = ?, 
		//   packMRP = ?, 
		//   manufacturer = ?, 
		//   marketer = ?, 
		//   supplier = ?, 
		//   upc = ?, 
		//   hsn = ?, 
		//   cgst = ?, 
		//   sgst = ?, 
		//   igst = ?, 
		//   cess = ?, 
		//   loadPrice = ?, 
		//   unloadingPrice = ?, 
		//   lastEditedDate = NOW(), 
		//   lastEditedBy = ?
		// WHERE productId = ?
// 		`,
// 			[
// 				product.productName,
// 				product.category,
// 				product.measuringUnit,
// 				product.packSize,
// 				product.noOfUnits,
// 				product.unitMRP,
// 				product.packMRP,
// 				product.manufacturer,
// 				product.marketer,
// 				product.supplier,
// 				product.upc,
// 				product.hsn,
// 				product.cgst,
// 				product.sgst,
// 				product.igst,
// 				product.cess,
// 				product.loadPrice,
// 				product.unloadingPrice,
// 				product.lastEditedBy,
// 				req.params.id,
// 			]
// 		);
// 		res.status(200).send("Product updated successfully");
// 	} catch (err) {
// 		console.log("couldn't update: ", err);
// 		res.status(500).send("Error updating product");
// 	} finally {
// 		if (conn) conn.release();
// 	}
// });

// router.delete("/delete/:id", async (req, res) => {
// 	greetStatus("delete");

// 	let conn: PoolConnection | null = null;
// 	try {
// 		conn = await pool.getConnection();
// 		const id = req.params.id;
// 		if (!id) {
// 			res.status(400).send("No id provided");
// 			return;
// 		}
// 		await conn.query(
// 			`
// 		DELETE FROM products
// 		WHERE productId = ?
// 		`,
// 			[id]
// 		);
// 		res.status(200).send("Product deleted successfully");
// 	} catch (err) {
// 		console.log("couldn't delete: ", err);
// 		res.status(500).send("Error deleting product");
// 	} finally {
// 		if (conn) conn.release();
// 	}
// });

export default router;

/* ---------------Helper Functions--------------- */

function greetStatus(route: string) {
	console.log(`/inventory/${route} is running`);
}

function parseData(inventory: any) {
	if (!inventory || typeof inventory !== "object") {
		console.log(typeof inventory);
		console.log(inventory);
		return null;
	}

	/* have to reparse the json the fit the database schema; 
  will think of another way of doing this later... */
	const intfields = [
		"quantity",
		"purchasePrice",
		"sellingPrice",
	];
	for (const field of intfields) {
		if (typeof inventory[field] !== "string" || isNaN(Number(inventory[field]))) {
			console.log(typeof inventory[field]);
			console.log(inventory[field]);
			console.log("setting default value for", field);
			inventory[field] = 0;
		} else {
			inventory[field] = Number(inventory[field]);
		}
	}

	console.log("CHECKING:", inventory);
	return inventory;
}
