/* May not work right now */

import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";
import { cp } from "fs";

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
		await conn.query(
			`
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

router.get("/count", async (_, res) => {
	//counts product
	greetStatus("count");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const [row]: [{ count: number }] = await conn.query("SELECT COUNT(*) AS count FROM products");
		const result: string = row.count.toString(); //cannot send as number; automatically converts to `number` at frontend.
		console.log("Sending `product` count:", result, typeof result);
		res.send(result);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	} finally {
		if (conn) conn.release();
	}
});

router.post("/names", async (req, res) => {
	const { name } = req.body;
	greetStatus("count");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const data = await conn.query(
			"SELECT productName FROM products WHERE supplier IS ?",
			[name]
		);
		res.send(data); //still sends in json
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	} finally {
		if (conn) conn.release();
	}
});

router.get("/supp", async (_, res) => {
	greetStatus("count");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const data = await conn.query("SELECT supplier FROM products");
		res.send(data); //still sends in json
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	} finally {
		if (conn) conn.release();
	}
});

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
	const intfields = ["quantity", "purchasePrice", "sellingPrice"];
	for (const field of intfields) {
		if (
			typeof inventory[field] !== "string" ||
			isNaN(Number(inventory[field]))
		) {
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
