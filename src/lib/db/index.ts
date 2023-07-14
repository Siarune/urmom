import { drizzle } from 'drizzle-orm/postgres-js';
import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core"
import postgres from 'postgres';
import 'dotenv/config'

const client = postgres(process.env.DATABASE_URL as string);
const db = drizzle(client);
console.log("db init...")
export default db

export const quotes = pgTable("quotes", {
	id: serial("id").primaryKey().notNull(),
	content: text("content").notNull(),
	public: boolean("public").default(true).notNull(),
});
