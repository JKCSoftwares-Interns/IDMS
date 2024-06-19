import mariadb from "mariadb";
import {drizzle, MySql2Database} from "drizzle-orm/mysql2";
import * as schema from './schema';

if (
    !process.env.DB_HOST ||
    !process.env.DB_PORT ||
    !process.env.DB_NAME ||
    !process.env.DB_USER ||
    !process.env.DB_PASSWORD
) {
    throw new Error("Missing database connection");
}

/*--------Setting Up DB---------*/

const createDatabase = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    connectionLimit: 5,
});

await (async () => {
    try {
        const conn = await pool.getConnection();
        await conn.query(createDatabase);
    } catch (err) {
        console.error('Error creating database:', err);
        process.exit(1);
    }
})();

/*---------------------------------*/

console.log("[db] Database setup complete! Initializing database ...");

export const connector = mariadb.createPool({
    ...pool,
    database: process.env.DB_NAME,
});

export const db: MySql2Database<typeof schema> = drizzle(pool, { schema, mode: 'default' });