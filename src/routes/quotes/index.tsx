import { action, cache, createAsync } from "@solidjs/router"
import { desc, eq } from "drizzle-orm"
import { Suspense } from "solid-js"
import db, { quotes } from "~/db"

const getQuotes = cache(async () => {
	"use server";

	return db
		.select({
			id: quotes.id,
			content: quotes.content
		})
		.from(quotes)
		.where(eq(quotes.public, true))
		.orderBy(desc(quotes.id))
		.limit(500)

}, "quotes")

const createQuote = action(async ( formData: FormData ) => {
	"use server";

	await new Promise(( resolve, reject ) => {
		db
			.insert(quotes)
			.values({
				//@ts-ignore
				content: formData.get("content")?.toString()
			})
			.then(resolve)
		reject()
	})
})

export const route = {
	load: () => getQuotes()
}

export default function Quotes() {
	const Quotes = createAsync(() => getQuotes())

	return (<main class="min-h-100vh max-h-fit flex flex-col items-center bg-black color-white">

		<form action={createQuote} method="post" class="m5">
			<input required type="text" name="content" class="color-black text-2xl" />
			<input type="submit" value="Send it!" class="p3 hover:cursor-pointer" />
		</form>
		<ul class="text-1.5rem mb0 w90vw sm:w50vw">
			<Suspense fallback={<></>}>
				{Quotes() && Quotes()!.map(( quote ) =>
					<li class="list-none pb6">{quote.content}</li>
				)}
			</Suspense>
		</ul>
	</main>)
}
