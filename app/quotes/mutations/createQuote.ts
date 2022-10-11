import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const CreateQuote = z.object({
	name: z.string(),
})

export default resolver.pipe(resolver.zod(CreateQuote), resolver.authorize(), async (input) => {
	// TODO: in multi-tenant app, you must add validation to ensure correct tenant
	// const quote = await db.quote.create({ data: input })

	// return quote
})
