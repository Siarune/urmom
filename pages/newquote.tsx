import { BlitzPage } from "@blitzjs/next"
import Submission from "app/core/components/Submission"
import styles from "styles/quotes.module.sass"

const NewQuote: BlitzPage = () => {
	return(
		<main className={styles.main}>
			<Submission />
		</main>
	)
}

export default NewQuote
