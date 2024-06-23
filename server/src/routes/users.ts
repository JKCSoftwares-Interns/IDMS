/*------IMPORT----------*/

import express from "express";
import {db} from '../database/db';
import {NewUser, User, user} from "../database/schema";
import {eq, sql} from "drizzle-orm";

/*------SETUP-------*/

const router = express.Router();

/*----------LOGGING FUNCTION------------*/

function greetStatus(route: string) {
    console.log(`/products/${route} is running`);
}

/*----------PATH FUNCTIONS------------*/

router.get("/", async (_, res) => {
    greetStatus("show");

    try {
        const data = await db.select().from(user);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

});

router.post("/add", async (req, res) => {
    greetStatus("add");

    const data: NewUser = req.body;

    try {
        await db.insert(user).values({
            ...data,
            addedBy: "admin", // will be changed later
            lastEditedDate: null,
            lastEditedBy: null
        })
        res.status(200).send("Product added successfully");
    } catch (err) {
        console.error("couldn't add: ", err);
        res.status(500).send("Error adding product");
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
        const data = await db.select().from(user).where(eq(user.userId, id));
        res.send(data);
    } catch (err) {
        console.error("ID not found: ", err);
        res.status(404).send("Not Found");
    }

});


router.post("/edit/:id", async (req, res) => {

    const data: NewUser = req.body;

    const id = parseInt(req.params.id, 10);

    console.info("ID access:", id);

    if (isNaN(id)) {
        throw new Error("Invalid ID format");
    }

    console.log("data:\n", data);

    try {
        await db.update(user).set({
            ...data,
            lastEditedBy: "admin", // needs to change
            lastEditedDate: sql`NOW()`,
        }).where(eq(user.userId, id));
        res.status(200).send("Update successful");
    } catch (e) {
		console.error("Error updating product", e);
		res.status(500).send("Error updating product");
	}

});

router.delete("/delete/:id", async (req, res) => {

    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        throw new Error("Invalid ID format");
    }

    try {
        await db.delete(user).where(eq(user.userId, id));
        res.status(200).send("Product deleted successfully");
    } catch (err) {
        console.error("Error deleting product:", err);
        res.status(500).send("Error deleting product");
    }

})

export default router;