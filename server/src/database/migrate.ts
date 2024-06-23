import { migrate } from "drizzle-orm/mysql2/migrator";
import { connector, db } from "./db";

export async function migrateDatabase() {
	console.info("[migrate] Running migrations ...");
	try {
		await migrate(db, { migrationsFolder: "drizzle" });
		await connector.end();
	} catch (error) {
		console.error("Error running migrations:", error);
		process.exit(1);
	}
	console.info("[migrate] All migrations have run, exiting ...");
}
