/*------IMPORT----------*/

import express from "express";
import {db} from '../database/db';
import {NewSupplier, supplier} from "../database/schema";
import {eq, sql} from "drizzle-orm";

/*------SETUP-------*/

const router = express.Router();

interface example {
	user: string,
	date: number | undefined,
}

/*----------LOGGING FUNCTION------------*/

function greetStatus(route: string) {
	console.log(`/suppliers/${route} is running`);
}

/*----------PATH FUNCTIONS------------*/

router.get("/", async (_, res) => {
	greetStatus("show");

	try {
		const data = await db.select().from(supplier);
		res.json(data);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}

});

router.post("/add", async (req, res) => {
	greetStatus("add");

	const data: NewSupplier = req.body;

	console.log("data:\n", data);

	try {
		await db.insert(supplier).values({
			...data,
			addedBy: "admin", // will be changed later
			lastEditedDate: null,
			lastEditedBy: null
		})
		res.status(200).send("supplier added successfully");
	} catch (err) {
		console.error("couldn't add: ", err);
		res.status(500).send("Error adding supplier");
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
		const data = await db.select().from(supplier).where(eq(supplier.supplierId, id));
		res.send(data);
	} catch (err) {
		console.error("ID not found: ", err);
		res.status(404).send("Not Found");
	}

});


router.post("/edit/:id", async (req, res) => {

	const data: NewSupplier = req.body;

	const id = parseInt(req.params.id, 10);

	console.info("ID access:", id);

	if (isNaN(id)) {
		throw new Error("Invalid ID format");
	}

	console.log("data:\n", data);

	try {
		await db.update(supplier).set({
			...data,
			lastEditedBy: "admin", // needs to change
			lastEditedDate: sql`NOW()`,
		}).where(eq(supplier.supplierId, id));
		res.status(200).send("Update successful");
	} catch (e) {
		console.error("Error updating supplier", e);
		res.status(500).send("Error updating supplier");
	}

});

router.delete("/delete/:id", async (req, res) => {

	const id = parseInt(req.params.id, 10);

	if (isNaN(id)) {
		throw new Error("Invalid ID format");
	}

	try {
		await db.delete(supplier).where(eq(supplier.supplierId, id));
		res.status(200).send("supplier deleted successfully");
	} catch (err) {
		console.error("Error deleting supplier:", err);
		res.status(500).send("Error deleting supplier");
	}

})

export default router;
