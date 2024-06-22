/*--------IMPORTS---------*/

import mysql from "mysql2/promise";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { drizzle, MySql2Database } from "drizzle-orm/mysql2";
import * as schema from "./schema";

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

console.info("[db] Creating database ...");
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
		console.info("[db] Creating database ...");
		const conn = await pool.getConnection();
		await conn.query(createDatabase);
		console.info("[db] Database Created!");
        pool.end();
	} catch (err) {
		console.error("Error creating database:", err);
		process.exit(1);
	}

	// Migrating database

	const connector = mysql.createPool({
		...pool,
		database: process.env.DB_NAME,
	});

	const db: MySql2Database<typeof schema> = drizzle(connector, {
		schema,
		mode: "default",
	});
	try {
		console.info("[migrate] Running migrations ...");
		await migrate(db, { migrationsFolder: "drizzle" });
		await connector.end();
		console.info("[migrate] All migrations have run, exiting ...");
		process.exit(0);
	} catch (error) {
		console.error("Error running migrations:", error);
		process.exit(1);
	}
})();

/*------------------output--------------------*/

/*

[db] Creating database ...
[db] Creating database ...
[db] Database Created!
Ignoring invalid configuration option passed to Connection: _events. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection
Ignoring invalid configuration option passed to Connection: _eventsCount. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection
Ignoring invalid configuration option passed to Connection: _maxListeners. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection
[migrate] Running migrations ...
Error running migrations: 351 |     if (connection instanceof PromisePoolConnection) connection.release();
352 |   }
353 | 
354 |   query(sql, args) {
355 |     const corePool = this.pool;
356 |     const localErr = new Error();
                         ^
error: Access denied for user ''@'172.17.0.1' (using password: NO)
 code: "ER_ACCESS_DENIED_ERROR"

*/