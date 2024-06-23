import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/database/schema.ts',
	out: './drizzle',
	dialect: 'mysql',
	dbCredentials: {
	  host: process.env.DB_HOST,
	  user: process.env.DB_USER,
	  port: process.env.DB_PORT,
	  password: process.env.DB_PASSWORD,
	  database: process.env.DB_NAME,
	},
  });
