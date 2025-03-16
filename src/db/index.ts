import { drizzle } from "drizzle-orm/vercel-postgres"
import { serial, text, pgTableCreator } from "drizzle-orm/pg-core"

// const db = drizzle(process.env.DB_URL!)
const db = drizzle()
export default db

const pgTable = pgTableCreator((name) => `urmom_${name}`);

export const quotes = pgTable("quotes", {
	id: serial().primaryKey(),
	content: text().notNull(),
})
