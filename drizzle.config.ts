import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: "./src/db/schema.ts",
    out: "./drizzle",                  // where migrations will be generated
    dialect: "postgresql",             // change to "mysql" or "sqlite" if needed
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
})