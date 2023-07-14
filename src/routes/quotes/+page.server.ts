import { desc } from "drizzle-orm"
import type { PageServerLoad } from "./$types"
import db, { quotes } from "$lib/db"

export const load = (async () => {
	return db
		.select()
		.from(quotes)
		.orderBy(desc(quotes.id))
		.limit(500)

}) satisfies PageServerLoad
