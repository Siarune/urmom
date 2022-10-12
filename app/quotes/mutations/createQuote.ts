import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const CreateQuote = z.object({
	content: z.string(),
})

export default resolver.pipe(resolver.zod(CreateQuote), resolver.authorize(), async (input) => {

	const quote = await db.quote.create({ data: input })

	return quote
})
