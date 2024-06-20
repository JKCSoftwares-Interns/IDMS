/*--------IMPORTS---------*/

import mysql from "mysql2/promise";
import { migrateDatabase } from "./migrate";

/*--------Checking .env ---------*/

if (
	!process.env.DB_HOST ||
	!process.env.DB_PORT ||
	!process.env.DB_NAME ||
	!process.env.DB_USER ||
	!process.env.DB_PASSWORD
) {
	throw new Error("Missing database connection");
}

/*--------Setting up DB---------*/

const createDatabase = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;

const pool: mysql.Pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: parseInt(process.env.DB_PORT),
	connectionLimit: 5,
});

/*--------Initializing DB---------*/

await (async () => {
	let connection: mysql.PoolConnection | null = null;

	// Creating database
	try {
		const conn = await pool.getConnection();
		await conn.query(createDatabase);
		await migrateDatabase();
        pool.end();
	} catch (err) {
		console.error("Error creating database:", err);
		process.exit(1);
	}
	
})();
