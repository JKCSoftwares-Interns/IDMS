/*------IMPORT----------*/

import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";

/*------INTERFACE-------*/
interface Offer {
    offerId: string;
    offerType: string;
    offerName: string;
    startDate: string;
    endDate: string;
    offers: string;
    discountValue: number;
    discountPercentage: number;
    maximumDiscountValue: number;
    minimumPurchase: number;
    offerApplicabilityFrequency: string;
    applicableTo: string;
    status: string;
    dateAdded: string;
    addedBy: string;
    lastEditedDate: string;
    lastEditedBy: string;
}

const router = express.Router();

/*----------LOGGING FUNCTION------------*/

function greetStatus(route: string) {
	console.log(`/offerss/${route} is running`);
}

/*----------PATH FUNCTIONS------------*/

router.get("/", async (_, res) => {
	greetStatus("show");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const data = await conn.query("SELECT * FROM offers");
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
        const offers: Partial<Offer> = req.body;
		console.log("offers be like:", offers);
		await conn.query(
            `
    INSERT INTO offers (
        offerType, offerName, startDate, endDate, offers, discountValue,
        discountPercentage, maximumDiscountValue, minimumPurchase,
        offerApplicabilityFrequency, applicableTo, status, dateAdded, addedBy,
        lastEditedDate, lastEditedBy
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, NULL, NULL
    );
    `,
            [
                offers.offerType,
                offers.offerName,
                offers.startDate,
                offers.endDate,
                offers.offers,
                offers.discountValue,
                offers.discountPercentage,
                offers.maximumDiscountValue,
                offers.minimumPurchase,
                offers.offerApplicabilityFrequency,
                offers.applicableTo,
                offers.status,
                "admin", //must be changed to include user from session data
            ]
        );
        res.status(200).send("Offer added successfully");
    } catch (err) {
        console.log("couldn't add: ", err);
        res.status(500).send("Error adding Offer");
    } finally {
        if (conn) conn.release();
    }
});


router.get("/edit/:id", async (req, res) => {
	let conn: PoolConnection | null = null;
	try {
	  conn = await pool.getConnection();
	  const { id } = req.params;
	  const rows = await conn.query("SELECT * FROM offers WHERE offerId = ?", [id]);
	  if (rows.length === 0) {
		res.status(404).send("Offer not found");
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
		const offers: Offer = req.body;
		if (!offers) {
			console.log("error 400");
			res.status(400).send("Invalid offer data");
			return;
		}
		await conn.query(
			`
		UPDATE offers SET
		    offerType = ?,
            offerName = ?,
            startDate = ?,
            endDate = ?,
            offers = ?,
            discountValue = ?,
            discountPercentage = ?,
            maximumDiscountValue = ?,
            minimumPurchase = ?,
            offerApplicabilityFrequency = ?,
            applicableTo = ?,
            status = ?,
            lastEditedDate = NOW(),
            lastEditedBy = ?
		WHERE offerId = ?
		`,
			[
				offers.offerType,
                offers.offerName,
                offers.startDate,
                offers.endDate,
                offers.offers,
                offers.discountValue,
                offers.discountPercentage,
                offers.maximumDiscountValue,
                offers.minimumPurchase,
                offers.offerApplicabilityFrequency,
                offers.applicableTo,
                offers.status,
                offers.lastEditedBy,
				req.params.id,
			]
		);
		res.status(200).send("Offer updated successfully");
	} catch (err) {
		console.log("couldn't update: ", err);
		res.status(500).send("Error updating Offer");
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
		DELETE FROM offers
		WHERE offerId = ?
		`,
			[id]
		);
		res.status(200).send("Offer deleted successfully");
	} catch (err) {
		console.log("couldn't delete: ", err);
		res.status(500).send("Error deleting Offer");
	} finally {
		if (conn) conn.release();
	}
});

export default router;