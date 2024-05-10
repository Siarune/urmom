import type { Config } from "drizzle-kit"

export default {
	schema: "src/db/index.ts",
	out: "./drizzle",
	driver: "pg",
	tablesFilter: "urmom_*",
	dbCredentials: { connectionString: process.env.POSTGRES_URL_SECURE as string }
} satisfies Config
