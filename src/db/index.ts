import { drizzle } from "drizzle-orm/vercel-postgres"
import { serial, text, pgTableCreator } from "drizzle-orm/pg-core"

const db = drizzle()
export default db

const pgTable = pgTableCreator((name) => `urmom_${name}`)

export const quotes = pgTable("quotes", {
	id: serial().primaryKey(),
	content: text().notNull(),
})

export const cwt = pgTable("catwifetheory", {
	id: serial().primaryKey(),
	content: text().notNull(),
})
