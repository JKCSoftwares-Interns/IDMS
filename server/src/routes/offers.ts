/*------IMPORT----------*/

import express from "express";
import {db} from '../database/db';
import {NewOffer, offer} from "../database/schema";
import {eq, sql} from "drizzle-orm";

/*------SETUP-------*/

const router = express.Router();

/*----------LOGGING FUNCTION------------*/

function greetStatus(route: string) {
    console.log(`/offers/${route} is running`);
}

/*----------PATH FUNCTIONS------------*/

router.get("/", async (_, res) => {
    greetStatus("show");

    try {
        const data = await db.select().from(offer);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

});

router.post("/add", async (req, res) => {
    greetStatus("add");

    const data: NewOffer = req.body;

    console.log("data:\n", data);

    try {
        await db.insert(offer).values({
            ...data,
            addedBy: "admin", // will be changed later
            lastEditedDate: null,
            lastEditedBy: null
        })
        res.status(200).send("offer added successfully");
    } catch (err) {
        console.error("couldn't add: ", err);
        res.status(500).send("Error adding offer");
    }
});

router.get("/edit/:id", async (req, res) => {

    greetStatus("update");

    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        throw new Error("Invalid ID format");
    }

    // console.info(`${id} accessed`);

    try {
        const data = await db.select().from(offer).where(eq(offer.offerId, id));
        res.send(data);
    } catch (err) {
        console.error("ID not found: ", err);
        res.status(404).send("Not Found");
    }

});


router.post("/edit/:id", async (req, res) => {

    const data: NewOffer = req.body;

    const id = parseInt(req.params.id, 10);

    console.info("ID access:", id);

    if (isNaN(id)) {
        throw new Error("Invalid ID format");
    }

    console.log("data:\n", data);

    try {
        await db.update(offer).set({
            ...data,
            lastEditedBy: "admin", // needs to change
            lastEditedDate: sql`NOW()`,
        }).where(eq(offer.offerId, id));
        res.status(200).send("Update successful");
    } catch (e) {
		console.error("Error updating offer", e);
		res.status(500).send("Error updating offer");
	}

});

router.delete("/delete/:id", async (req, res) => {

    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        throw new Error("Invalid ID format");
    }

    try {
        await db.delete(offer).where(eq(offer.offerId, id));
        res.status(200).send("offer deleted successfully");
    } catch (err) {
        console.error("Error deleting offer:", err);
        res.status(500).send("Error deleting offer");
    }

})

export default router;
