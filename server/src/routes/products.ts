/*------IMPORT----------*/

import express from "express";
import {db} from '../database/db';
import {NewProduct, Product, product} from "../database/schema";
import {eq, sql} from "drizzle-orm";

/*------INTERFACE-------*/

const router = express.Router();

/*----------LOGGING FUNCTION------------*/

function greetStatus(route: string) {
    console.log(`/products/${route} is running`);
}

/*----------PATH FUNCTIONS------------*/

router.get("/", async (_, res) => {
    greetStatus("show");

    try {
        const data = await db.select().from(product);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

});

router.post("/add", async (req, res) => {
    greetStatus("add");

    const data: NewProduct = req.body;

    try {
        await db.insert(product).values({
            ...data,
            addedBy: "admin", // will be changed later
            lastEditedDate: null,
            lastEditedBy: null
        })
        res.status(200).send("Product added successfully");
    } catch (err) {
        console.log("couldn't add: ", err);
        res.status(500).send("Error adding product");
    }
});

router.get("/edit/:id", async (req, res) => {

    greetStatus("update");

    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        throw new Error("Invalid ID format");
    }

    console.info(`${id} accessed`);

    try {
        const data = await db.select().from(product).where(eq(product.productId, id));
        res.send(data);
    } catch (err) {
        console.error("ID not found: ", err);
        res.status(404).send("Not Found");
    }

});


router.post("/edit/:id", async (req, res) => {

    const data: NewProduct = req.body;

    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        throw new Error("Invalid ID format");
    }

    try {
        await db.update(product).set({
            ...data,
            lastEditedBy: "admin", // needs to change
            lastEditedDate: sql`NOW()`,
        }).where(eq(product.productId, id));
    } catch {
		console.error("Error updating product");
		res.status(500).send("Error updating product");
	}

});

export default router;
