import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { config } from "dotenv";

config(); // load .env when running this file directly or via Bun

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);