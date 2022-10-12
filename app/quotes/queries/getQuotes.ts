import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetQuotesInput
	extends Pick<Prisma.QuoteFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
	// resolver.authorize(),
	async ({ where, orderBy, skip = 0, take = 100 }: GetQuotesInput) => {
		// TODO: in multi-tenant app, you must add validation to ensure correct tenant
		const {
			items: quotes,
			hasMore,
			nextPage,
			count,
		} = await paginate({
			skip,
			take,
			count: () => db.quote.count({ where }),
			query: (paginateArgs) => db.quote.findMany({ ...paginateArgs, where, orderBy }),
		})

		return {
			quotes,
			nextPage,
			hasMore,
			count,
		}
	}
)
