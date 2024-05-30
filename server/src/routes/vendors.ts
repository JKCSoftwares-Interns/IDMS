/* May not work right now */

import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";

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

router.get("/", async (_, res) => {
    greetStatus("show");

    let conn: PoolConnection | null = null;
    try {
        conn = await pool.getConnection();
        const data = await conn.query("SELECT * FROM vendors");
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

router.post("/add", async (req, res) => {
    console.log("/vendors/add is running");
    let conn: PoolConnection | null = null;
    try {
        conn = await pool.getConnection();
        const vendors: Vendor = parseData(req.body);
        await conn.query(
            `
    INSERT INTO vendors (
        vendorId, vendorName, businessName, email, mobileNumber, alternateMobileNumber, addressLine1, addressLine2, landmark, city, district, state, pinCode, gstin, fssai, registrationNumber, aadharNumber, panNumber, otherDocuments, status, dateAdded, addedBy, lastEditedDate, lastEditedBy 
        
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, NULL, NULL
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
                vendors.dateAdded,
                vendors.addedBy,
                vendors.lastEditedDate,
                vendors.lastEditedBy
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
	res.send(req.params.id)
});

router.post("/edit/:id", async (req, res) => {
    console.log("/vendors/edit is running");
    let conn: PoolConnection | null = null;
    try {
        conn = await pool.getConnection();
        const vendors: Vendor = parseData(req.body);
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

router.delete("/vendors/delete/:id", async (req, res) => {
    console.log("/vendors/delete is running");
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

/* ---------------Helper Functions--------------- */
// Have to refactor the code from here onwards
function greetStatus(route: string) {
    console.log(`/vendors/${route} is running`);
}

function parseData(vendor: any) {
    if (!vendor || typeof vendor !== "object") {
        console.log(typeof vendor);
        console.log(vendor);
        return null;
    }

    /* have to reparse the json the fit the database schema; 
  will think of another way of doing this later... */
    const intfields = [
        "mobileNumber",
        "alternateMobileNumber",
        "pinCode",
        "gstin",
        "fssai",
        "registrationNumber",
        "aadharNumber",
        "panNumber",
    ];
    for (const field of intfields) {
        if (typeof vendor[field] !== "string" || isNaN(Number(vendor[field]))) {
            console.log(typeof vendor[field]);
            console.log(vendor[field]);
            console.log("setting default value for", field);
            vendor[field] = 0;
        } else {
            vendor[field] = Number(vendor[field]);
        }
    }

    console.log("CHECKING:", vendor);
    return vendor;
}