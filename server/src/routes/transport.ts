/*------IMPORT----------*/

import express from "express";
import {db} from '../database/db';
import {NewTransport, transport} from "../database/schema";
import {eq, sql} from "drizzle-orm";

/*------SETUP-------*/

const router = express.Router();

/*----------LOGGING FUNCTION------------*/

function greetStatus(route: string) {
    console.log(`/transports/${route} is running`);
}

/*----------PATH FUNCTIONS------------*/

router.get("/", async (_, res) => {
    greetStatus("show");

    try {
        const data = await db.select().from(transport);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

});

router.post("/add", async (req, res) => {
    greetStatus("add");

    const data: NewTransport = req.body;

    console.log("data:\n", data);

    try {
        await db.insert(transport).values({
            ...data,
            addedBy: "admin", // will be changed later
            lastEditedDate: null,
            lastEditedBy: null
        })
        res.status(200).send("transport added successfully");
    } catch (err) {
        console.error("couldn't add: ", err);
        res.status(500).send("Error adding transport");
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
        const data = await db.select().from(transport).where(eq(transport.transportId, id));
        res.send(data);
    } catch (err) {
        console.error("ID not found: ", err);
        res.status(404).send("Not Found");
    }

});


router.post("/edit/:id", async (req, res) => {

    const data: NewTransport = req.body;

    const id = parseInt(req.params.id, 10);

    console.info("ID access:", id);

    if (isNaN(id)) {
        throw new Error("Invalid ID format");
    }

    console.log("data:\n", data);

    try {
        await db.update(transport).set({
            ...data,
            lastEditedBy: "admin", // needs to change
            lastEditedDate: sql`NOW()`,
        }).where(eq(transport.transportId, id));
        res.status(200).send("Update successful");
    } catch (e) {
		console.error("Error updating transport", e);
		res.status(500).send("Error updating transport");
	}

});

router.delete("/delete/:id", async (req, res) => {

    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        throw new Error("Invalid ID format");
    }

    try {
        await db.delete(transport).where(eq(transport.transportId, id));
        res.status(200).send("transport deleted successfully");
    } catch (err) {
        console.error("Error deleting transport:", err);
        res.status(500).send("Error deleting transport");
    }

})

export default router;
