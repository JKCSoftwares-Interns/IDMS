import mariadb, { PoolConnection } from "mariadb";

export async function initializeDB() {
  console.log("Initializing database...");

  const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "test",
    port: 3306,
    connectionLimit: 5,
  });

  let conn: PoolConnection | null = null;
  try {
    conn = await pool.getConnection();
    await conn.query(`CREATE DATABASE IF NOT EXISTS testidms;`);
    await conn.query(`USE testidms;`);

		const productsSchema = await readFile(
			path.join(__dirname, "..", "models", "productSchema.sql"),
			"utf8"
		);
		const transportSchema = await readFile(
			path.join(__dirname, "..", "models", "transportSchema.sql"),
			"utf8"
		);
		const vendorsSchema = await readFile(
			path.join(__dirname, "..", "models", "vendorSchema.sql"),
			"utf8"
		);
		const offersSchema = await readFile(
			path.join(__dirname, "..", "models", "offerSchema.sql"),
			"utf8"
		);
		const inventorySchema = await readFile(
			path.join(__dirname, "..", "models", "inventorySchema.sql"),
			"utf8"
		);

		const userSchema = await readFile(
			path.join(__dirname, "..", "models", "userSchema.sql"),
			"utf8"
		);


		await conn.query(productsSchema);

		await conn.query(transportSchema);

		await conn.query(vendorsSchema);

		await conn.query(offersSchema);

		await conn.query(inventorySchema);

		await conn.query(userSchema);

    console.log("Database initialized successfully.");
  } catch (err) {
    console.error("Error initializing database: ", err);
  } finally {
    if (conn) conn.release();
  }
}

export const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "test",
  port: 3306,
  database: "testidms",
  connectionLimit: 5,
});
