import express from "express";
import cors from "cors";
import { validateDatabase } from "./src/database/db";

import productsRoute from "./src/routes/products";
// import vendorsRoute from "./src/routes/vendors";
// import transportRoute from "./src/routes/transport";
// import offersRoute from "./src/routes/offers";
// import inventoryRoute from "./src/routes/inventory";
// import suppliersRoute from "./src/routes/suppliers";
// import userRoute from "./src/routes/users";

const PORT = 8000;

const app = express();

app.use(cors({
	origin: 'http://localhost:3000'
}));
app.use(express.json());


app.use('/products', productsRoute);
// app.use('/vendors', vendorsRoute);
// app.use('/transport', transportRoute);
// app.use('/offers', offersRoute);
// app.use('/inventory', inventoryRoute);
// app.use(`/suppliers`, suppliersRoute);
// app.use('/user', userRoute);



app.get("/", (_, res) => {
	res.send("hello world!");
});

/* ----------------------------------------- */

async function startServer() {
	try {
		await validateDatabase();
		app.listen(PORT, () => {
			console.info(`Server is running at http://localhost:${PORT}`);
		});
	} catch (err) {
		console.error(
			"Failed to start server due to database initialization error:",
			err
		);
	}
}

/* ----------------------------------------- */

await startServer();