/*------IMPORT----------*/

import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";

/*------INTERFACE-------*/
interface Vendor {
    vendorId: string;
    vendorName: string;
    businessName: string;
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
    gstin: number;
    fssai: number;
    registrationNumber: number;
    aadharNumber: number;
    panNumber: number;
    otherDocuments: string;
    status: string;
    dateAdded: string;
    addedBy: string;
    lastEditedDate: string;
    lastEditedBy: string;
}

const router = express.Router();

/*----------LOGGING FUNCTION------------*/
function greetStatus(route: string) {
	console.log(`/vendors/${route} is running`);
}

router.get("/", async (_, res) => {
    greetStatus("show");

    let conn: PoolConnection | null = null;
    try {
        conn = await pool.getConnection();
        const data = await conn.query("SELECT * FROM vendors");
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
        const vendors: Partial<Vendor> = req.body;
        console.log("vendor be like:", vendors);

        await conn.query(
            `
    INSERT INTO vendors (
         vendorName, businessName, email, mobileNumber, alternateMobileNumber, addressLine1, addressLine2, landmark, city, district, state, pinCode, gstin, fssai, registrationNumber, aadharNumber, panNumber, otherDocuments, status, dateAdded, addedBy, lastEditedDate, lastEditedBy 
        
    ) VALUES (
         ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, NULL, NULL
    );
    `,
            [
                vendors.vendorId,
                vendors.vendorName,
                vendors.businessName,
                vendors.email,
                vendors.mobileNumber,
                vendors.alternateMobileNumber,
                vendors.addressLine1,
                vendors.addressLine2,
                vendors.landmark,
                vendors.city,
                vendors.district,
                vendors.state,
                vendors.pinCode,
                vendors.gstin,
                vendors.fssai,
                vendors.registrationNumber,
                vendors.aadharNumber,
                vendors.panNumber,
                vendors.otherDocuments,
                vendors.status,
                "admin",//must be changed to include user from session data
            ]
        );
        res.status(200).send("Vendor added successfully");
    } catch (err) {
        console.log("couldn't add: ", err);
        res.status(500).send("Error adding Vendor");
    } finally {
        if (conn) conn.release();
    }
});

/*---------------EXP--------------------- */
router.get("/edit/:id", async (req, res) => {
	let conn: PoolConnection | null = null;
	try {
	  conn = await pool.getConnection();
	  const { id } = req.params;
	  const rows = await conn.query("SELECT * FROM vendors WHERE vendorId = ?", [id]);
	  if (rows.length === 0) {
		res.status(404).send("Vendor not found");
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
        const vendors: Vendor = req.body;
        if (!vendors) {
            console.log("error 400");
            res.status(400).send("Invalid vendor data");
            return;
        }
        await conn.query(
            `
		UPDATE vendors SET
        
        vendorName = ?,
        businessName = ?,
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
        gstin = ?,
        fssai = ?,
        registrationNumber = ?,
        aadharNumber = ?,
        panNumber = ?,
        otherDocuments = ?,
        status = ?,
        lastEditedDate = NOW(),
        lastEditedBy = ?

        WHERE vendorId = ?
		`,
            [
                vendors.vendorName,
                vendors.businessName,
                vendors.email,
                vendors.mobileNumber,
                vendors.alternateMobileNumber,
                vendors.addressLine1,
                vendors.addressLine2,
                vendors.landmark,
                vendors.city,
                vendors.district,
                vendors.state,
                vendors.pinCode,
                vendors.gstin,
                vendors.fssai,
                vendors.registrationNumber,
                vendors.aadharNumber,
                vendors.panNumber,
                vendors.otherDocuments,
                vendors.status,
                vendors.lastEditedBy,
                req.params.id,
            ]
        );
        res.status(200).send("Vendor updated successfully");
    } catch (err) {
        console.log("couldn't update: ", err);
        res.status(500).send("Error updating Vendor");
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
		DELETE FROM vendors
		WHERE vendorId = ?
		`,
            [id]
        );
        res.status(200).send("Vendor deleted successfully");
    } catch (err) {
        console.log("couldn't delete: ", err);
        res.status(500).send("Error deleting Vendor");
    } finally {
        if (conn) conn.release();
    }
});


export default router;