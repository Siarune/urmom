import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const UpdateQuote = z.object({
	id: z.number(),
	name: z.string(),
})

export default resolver.pipe(
	resolver.zod(UpdateQuote),
	resolver.authorize(),
	async ({ id, ...data }) => {
		// TODO: in multi-tenant app, you must add validation to ensure correct tenant
		const quote = await db.quote.update({ where: { id }, data })

		return quote
	}
)
