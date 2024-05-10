import { drizzle } from 'drizzle-orm/vercel-postgres';
import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core"
import { sql } from '@vercel/postgres';

const db = drizzle(sql)
export default db;

export const quotes = pgTable("urmom_quotes", {
	id: serial("id").primaryKey().notNull(),
	content: text("content").notNull(),
	public: boolean("public").default(true).notNull(),
});
