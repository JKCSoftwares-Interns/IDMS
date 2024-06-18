/*------IMPORT----------*/

import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";

/*------INTERFACE-------*/
interface Transport {
	tranportId: string;
	transportName: string;
	businessName: string;
	vehicleName: string;
	email: string;
	mobileNumber: number;
	alternateMobileNumber: number;
	addressLine1: string;
	addressLine2: string;
	landmark: string;
	city: string;
	district: string;
	state: string;
	pinCode: number;
	branchOffice: string;
	aadharNumber: number;
	panNumber: number;
	driverName: string;
	driverMobileNumber: number;
	driverAlternateNumber: number;
	status: string;
	dateAdded: string;
	addedBy: string;
	lastEditedDate: string;
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
		const data = await conn.query("SELECT * FROM transports");
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
		const transports: Transport = req.body;
		await conn.query(
			`
    INSERT INTO transports (
        transportName, businessName, vehicleName, email, mobileNumber, alternateMobileNumber, addressLine1, addressLine2, landmark, city, district, state, pinCode, branchOffice, aadharNumber, panNumber, driverName, driverMobileNumber, driverAlternateNumber, status, dateAdded, addedBy, lastEditedDate, lastEditedBy
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, NULL, NULL
    );
    `,
			[
				transports.transportName,
				transports.businessName,
				transports.vehicleName,
				transports.email,
				transports.mobileNumber,
				transports.alternateMobileNumber,
				transports.addressLine1,
				transports.addressLine2,
				transports.landmark,
				transports.city,
				transports.district,
				transports.state,
				transports.pinCode,
				transports.branchOffice,
				transports.aadharNumber,
				transports.panNumber,
				transports.driverName,
				transports.driverMobileNumber,
				transports.driverAlternateNumber,
				transports.status,
				"admin", //must be changed to include user from session data
			]
		);
		res.status(200).send("Transport added successfully");
	} catch (err) {
		console.log("couldn't add: ", err);
		res.status(500).send("Error adding Transport");
	} finally {
		if (conn) conn.release();
	}
});


router.get("/edit/:id", async (req, res) => {

	let conn: PoolConnection | null = null;
	try {
	  conn = await pool.getConnection();
	  const { id } = req.params;
	  const rows = await conn.query("SELECT * FROM transports WHERE transportId = ?", [id]); 
	  if (rows.length === 0) {
		res.status(404).send("Transport not found");
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
		const transports: Transport = req.body;
		if (!transports) {
			console.log("error 400");
			res.status(400).send("Invalid transport data");
			return;
		}
		await conn.query(
			`
		UPDATE transports SET
            transportName = ?,
            businessName = ?,
            vehicleName = ?,
            email = ?,
            mobileNumber = ?,
            alternateMobileNumber = ?,
            addressLine1 = ?,
            addressLine2 = ?,
            landmark = ?,
            city = ?,
            district = ?,
            state = ?,
            pinCode = ?,
            branchOffice = ?,
            aadharNumber = ?,
            panNumber = ?,
            driverName = ?,
            driverMobileNumber = ?,
            driverAlternateNumber = ?,
            status = ?,
            lastEditedDate = NOW(),
            lastEditedBy = ?
            WHERE transportId = ?
		`,
			[
				transports.transportName,
				transports.businessName,
				transports.vehicleName,
				transports.email,
				transports.mobileNumber,
				transports.alternateMobileNumber,
				transports.addressLine1,
				transports.addressLine2,
				transports.landmark,
				transports.city,
				transports.district,
				transports.state,
				transports.pinCode,
				transports.branchOffice,
				transports.aadharNumber,
				transports.panNumber,
				transports.driverName,
				transports.driverMobileNumber,
				transports.driverAlternateNumber,
				transports.status,
				transports.lastEditedBy,
				req.params.id,
			]
		);
		res.status(200).send("Transport updated successfully");
	} catch (err) {
		console.log("couldn't update: ", err);
		res.status(500).send("Error updating transport");
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
		DELETE FROM transports
		WHERE transportId = ?
		`,
			[id]
		);
		res.status(200).send("Transport deleted successfully");
	} catch (err) {
		console.log("couldn't delete: ", err);
		res.status(500).send("Error deleting Transport");
	} finally {
		if (conn) conn.release();
	}
});

export default router;