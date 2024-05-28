import express from "express";
import cors from "cors";

import { initializeDB } from "./config/db";
import productsRoute from "./routes/products";

const PORT = 8000;

const app = express();

app.use(cors({
	origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use('/products', productsRoute);

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