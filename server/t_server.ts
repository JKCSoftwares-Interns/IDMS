import express from "express";
import cors from "cors";

const data: Data = require("./src/test/fake_data/products_data.json");
const transport_data: Data = require("./src/test/fake_data/transport_data.json");
const vendors_data: Data = require("./src/test/fake_data/vendors_data.json");

const PORT = 8000;

const app = express();

app.use(cors());

/* ----------------------------------------- */

app.get("/products", async (_, res) => {
	res.json(data);
});

app.post("/products/edit/:id", async (req, res) => {
	const id = req.params.id;
  const product = req.body;
  if (!id || !product) {
    res.status(400).send("No id or product provided");
    return;
  }
  data[id] = product;
  res.status(200).send("Product edited successfully");
});

app.delete("/products/delete/:id", async (req, res) => {
	const id = req.params.id;
  if (!id) {
    res.status(400).send("No id provided");
    return;
  }
  delete data[id];
  res.status(200).send("Product deleted successfully");
});

		app.listen(PORT, () => {
			console.log("BACKEND_MODE false");
			console.log(`Server is running at http://localhost:${PORT}`);
		});

/* ---------------TRANSPORT--------------- */

app.get("/transport", async (_, res) => {
	res.json(transport_data);
});

/* ---------------VENDORS--------------- */

app.get("/vendors", async (_, res) => {
	res.json(vendors_data);
});

/* ---------------Helper Functions--------------- */

interface Data {
  [key: string]: Product;
}

interface Product {
	productId: string;
	productName: string;
	category: string;
	measuringUnit: string;
	packSize: number;
	noOfUnits: number;
	unitMRP: number;
	packMRP: number;
	manufacturer: string;
	marketer: string;
	supplier: string;
	upc: string;
	hsn: string;
	cgst: number;
	sgst: number;
	igst: number;
	cess: number;
	loadPrice: number;
	unloadingPrice: number;
	dateAdded: string;
	addedBy: string;
	lastEditedDate: string;
	lastEditedBy: string;
}

function parseData(product: any) {
	if (!product || typeof product !== "object") {
		console.log(typeof product);
		console.log(product);
		return null;
	}

	/* have to reparse the json the fit the database schema; 
  will think of another way of doing this later... */
	const intfields = [
		"packSize",
		"noOfUnits",
		"unitMRP",
		"packMRP",
		"cgst",
		"sgst",
		"igst",
		"cess",
		"loadPrice",
		"unloadingPrice",
	];
	for (const field of intfields) {
		if (typeof product[field] !== "string" || isNaN(Number(product[field]))) {
			console.log(typeof product[field]);
			console.log(product[field]);
			console.log("setting default value for", field);
			product[field] = 0;
		} else {
			product[field] = Number(product[field]);
		}
	}

	console.log("CHECKING:", product);
	return product;
}

