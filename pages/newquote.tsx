import { BlitzPage } from "@blitzjs/next"
import db from "db"

const NewQuote: BlitzPage = () => {
	return(
		<>
		<input type="text" placeholder="New Quote">

		</input>
		<button onClick={async () => {
			await db.quote.create({
				data: {
					content: "New Quote"
				}
			})
		}}></button>
		</>
	)
}

export default NewQuote
