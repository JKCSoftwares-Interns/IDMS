import express from "express";
import cors from "cors";

import { initializeDB } from "./src/config/db";
import productsRoute from "./src/routes/products";
import vendorsRoute from "./src/routes/vendors";

const PORT = 8000;

const app = express();

app.use(cors({
	origin: 'http://localhost:3000'
}));
app.use(express.json());

// For Products
app.use('/products', productsRoute);

//For Vendors
app.use('/vendors', vendorsRoute);


app.get("/", (_, res) => {
	res.send("IDMS | JKCSoftware LLP running 🚀");
});

/* ----------------------------------------- */

async function startServer() {
	try {
		await initializeDB();
		app.listen(PORT, () => {
			console.log(`Server is running at http://localhost:${PORT}`);
		});
	} catch (err) {
		console.error(
			"Failed to start server due to database initialization error:",
			err
		);
	}
}

/* ----------------------------------------- */

startServer();