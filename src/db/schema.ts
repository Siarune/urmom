import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export const quotes = pgTable("quotes", {
	id: serial("id").primaryKey().notNull(),
	content: text("content").notNull(),
	public: boolean("public").default(true).notNull(),
});
