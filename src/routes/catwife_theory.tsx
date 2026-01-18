import { action, createAsync, query } from "@solidjs/router"
import db, { cwt } from "~/db"
import { desc } from "drizzle-orm"
import { Suspense } from "solid-js"
import { SolidMarkdown } from "solid-markdown"

export default function CWT() {
	let dialogRef!: HTMLDialogElement
	const Quotes = createAsync(() => getQuotes())

	return (
		<main class="flex flex-col w-full min-h-screen max-h-fit bg-black justify-center items-center content-center">
			<dialog
				ref={dialogRef}
				class="rounded"
			>
				<form
					action={insertQuote}
					method="post"
					class="flex flex-col m2"
				>
					<input
						required
						autofocus
						type="text"
						name="content"
						class="color-black text-2xl"
					/>
					<div class="flex flex-row justify-around">
						<button
							onClick={() => dialogRef.close()}
							class=""
						>
							Cancel
						</button>
						<input
							onclick={() => dialogRef.close()}
							type="submit"
							value="Send it!"
							class="p3 hover:cursor-pointer"
						/>
					</div>
				</form>
			</dialog>

			<button
				onClick={() => dialogRef.showModal()}
				class="aspect-ratio-square flex rounded-full bg-emerald-600 color-white font-extrabold text-10 p4 m0 text-center
                pos-fixed pos-bottom-sm pos-right-sm"
			>
				<p class="pos-relative pos-bottom-xl">+</p>
			</button>

			<ul class="text-1.5rem mb0 mt6 w90vw sm:w50vw text-white">
				<Suspense fallback={<></>}>
					{Quotes() &&
						Quotes()!.map((quote) => (
							<li class="list-none pb6">
								<SolidMarkdown renderingStrategy="reconcile">
									{quote.content}
								</SolidMarkdown>
							</li>
						))}
				</Suspense>
			</ul>
		</main>
	)
}

const getQuotes = query(async () => {
	"use server"
	return db
		.select({
			content: cwt.content,
		})
		.from(cwt)
		.orderBy(desc(cwt.id))
		.limit(500)
}, "quotes")

const insertQuote = action(async (formData: FormData) => {
	"use server"
	await db
		.insert(cwt)
		.values({
			content: formData.get("content")!.toString(),
		})
		.returning()
})
