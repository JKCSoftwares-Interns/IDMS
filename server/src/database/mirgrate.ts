import { migrate } from "drizzle-orm/mysql2/migrator";
import {db, pool} from "./init";

console.log("[migrate] Running migrations ...");

await migrate(db, { migrationsFolder: "../../../drizzle/" } )

await pool.end();

console.log("[migrate] All migrations have been ran, exiting ...");