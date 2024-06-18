/* May not work right now */

import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";

interface Supplier {
	supplierId: string;
	supplierName: string;
	businessName: string;
	mobileNumber: number;
	alternateMobileNumber: number;
	email: string;
	addressLine1: string;
	addressLine2: string;
	city: string;
	state: string;
	pinCode: number;
	beneficiaryName: string;
	accountNumber: string;
	ifscCode: string;
	virtualPaymentAddress: string;
	remarks: string;
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
		const data = await conn.query("SELECT * FROM suppliers");
		res.json(data);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	} finally {
		if (conn) conn.release();
	}
});

router.get("/count", async (_, res) => {
	greetStatus("count");
  
	let conn: PoolConnection | null = null;
	try {
	  conn = await pool.getConnection();
	  const data = await conn.query("SELECT COUNT(*) FROM suppliers");
	  res.json(Number(data[0]['COUNT(*)']));
	} catch (err) {
	  console.log(err);
	  res.sendStatus(500);
	} finally {
	  if (conn) conn.release();
	}
  });

router.post("/add", async (req, res) => {
	greetStatus("add");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const suppliers: Supplier = parseData(req.body);
		await conn.query(
			`
    INSERT INTO suppliers (
	 supplierName, businessName, mobileNumber, alternateMobileNumber, email, addressLine1, addressLine2, city, state, pinCode, beneficiaryName, accountNumber, ifscCode, virtualPaymentAddress, remarks, dateAdded, addedBy, lastEditedDate, lastEditedBy
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, NULL, NULL
    );
    `,
			[
				suppliers.supplierName,
				suppliers.businessName,
				suppliers.mobileNumber,
				suppliers.alternateMobileNumber,
				suppliers.email,
				suppliers.addressLine1,
				suppliers.addressLine2,
				suppliers.city,
				suppliers.state,
				suppliers.pinCode,
				suppliers.beneficiaryName,
				suppliers.accountNumber,
				suppliers.ifscCode,
				suppliers.virtualPaymentAddress,
				suppliers.remarks,
				suppliers.dateAdded,
				suppliers.addedBy,
				suppliers.lastEditedDate,
				suppliers.lastEditedBy
			]
		);
		res.status(200).send("Supplier added successfully");
	} catch (err) {
		console.log("couldn't add: ", err);
		res.status(500).send("Error adding Supplier");
	} finally {
		if (conn) conn.release();
	}
});

router.get("/edit/:id", async (req, res) => {
	let conn: PoolConnection | null = null;
	try {
	  conn = await pool.getConnection();
	  const { id } = req.params;
	  const rows = await conn.query("SELECT * FROM suppliers WHERE supplierId = ?", [id]);
	  if (rows.length === 0) {
		res.status(404).send("Supplier not found");
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
		const suppliers: Supplier = parseData(req.body);
		if (!suppliers) {
			console.log("error 400");
			res.status(400).send("Invalid suppliers data");
			return;
		}
		await conn.query(
			`
		UPDATE suppliers SET
		supplierName = ?,
		businessName = ?,
		mobileNumber = ?,
		alternateMobileNumber = ?,
		email = ?,
		addressLine1 = ?,
		addressLine2 = ?,
		city = ?,
		state = ?,
		pinCode = ?,
		beneficiaryName = ?,
		accountNumber = ?,
		ifscCode = ?,
		virtualPaymentAddress = ?,
		remarks = ?,
		lastEditedDate = NOW(),
		lastEditedBy = ?
		WHERE supplierId = ?
		`,
			[
				suppliers.supplierName,
				suppliers.businessName,
				suppliers.mobileNumber,
				suppliers.alternateMobileNumber,
				suppliers.email,
				suppliers.addressLine1,
				suppliers.addressLine2,
				suppliers.city,
				suppliers.state,
				suppliers.pinCode,
				suppliers.beneficiaryName,
				suppliers.accountNumber,
				suppliers.ifscCode,
				suppliers.virtualPaymentAddress,
				suppliers.remarks,
				suppliers.lastEditedBy,
				req.params.id,
			]
		);
		res.status(200).send("Supplier updated successfully");
	} catch (err) {
		console.log("couldn't update: ", err);
		res.status(500).send("Error updating supplier");
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
		DELETE FROM suppliers
		WHERE supplierId = ?
		`,
			[id]
		);
		res.status(200).send("Supplier deleted successfully");
	} catch (err) {
		console.log("couldn't delete: ", err);
		res.status(500).send("Error deleting Supplier");
	} finally {
		if (conn) conn.release();
	}
});

export default router;

/* ---------------Helper Functions--------------- */

function greetStatus(route: string) {
	console.log(`/suppliers/${route} is running`);
}

function parseData(supplier: any) {
	if (!supplier || typeof supplier !== "object") {
		console.log(typeof supplier);
		console.log(supplier);
		return null;
	}

	/* have to reparse the json the fit the database schema; 
  will think of another way of doing this later... */
	const intfields = [
		"mobileNumber",
		"alternateMobileNumber",
		"pinCode",
	];
	for (const field of intfields) {
		if (typeof supplier[field] !== "string" || isNaN(Number(supplier[field]))) {
			console.log(typeof supplier[field]);
			console.log(supplier[field]);
			console.log("setting default value for", field);
			supplier[field] = 0;
		} else {
			supplier[field] = Number(supplier[field]);
		}
	}

	console.log("CHECKING:", supplier);
	return supplier;
}
