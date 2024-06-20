import mysql from 'mysql2/promise';
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

/*---------------------------------*/

console.log("[db] Initializing database ...");

export const connector: mysql.Pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    connectionLimit: 5,
    database: process.env.DB_NAME,
});

export const db: MySql2Database<typeof schema> = drizzle(connector, { schema, mode: 'default' });

export async function validateDatabase(): Promise<void> {
    let connection: mysql.PoolConnection | null = null;

    try {
        connection = await connector.getConnection();
    } catch (error) {
        console.error("Database not properly setup, please run the setup script. ", error)
    } finally {
        connection?.release();
    }

}