import { desc } from "drizzle-orm"
import { For } from "solid-js"
import { useRouteData } from "solid-start"
import { Form } from "solid-start/data/Form"
import { createServerAction$, createServerData$ } from "solid-start/server/server"
import db, { quotes } from "~/db"
import styles from "~/routes/quotes/index.module.sass"

export function routeData() {
	return createServerData$(() =>
		db.select()
			.from(quotes)
			.orderBy(desc(quotes.id))
			.limit(500)
	)
}

export default function Quotes() {

	const [_, { Form }] =
		createServerAction$(async ( form: FormData ) => {
			const Content = await form.get("content") as string
			await db.insert(quotes).values({ content: Content })
			return (() => console.log("success"))
		})

	const Quotes = useRouteData<typeof routeData>()

	return (
		<main class={styles.main}>

			<Form class={styles.form}>
				<input name="content" id="content" type="text" />
				<input type="submit" value={"Send it!"} />
			</Form>

			<ul class={styles.list}>
				<For each={Quotes()}>
					{( quote ) =>
						<li>
							{quote.content}
						</li>
					}
				</For>
			</ul>
		</main>
	)
}
