import styles from "styles/quotes.module.sass"
import getQuotes from "app/quotes/queries/getQuotes"
import { useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import { BlitzPage } from "@blitzjs/next"
import ReactMarkdown from "react-markdown"

function QuotesComp() {
	const [quotes] = useQuery(getQuotes, { where: { public: true } })
//@ts-ignore
	return (
		<ul className={styles.list}>
			{quotes.quotes.map(({ id, content }) => (
				<>
					<li className={styles.listItem} key={id}>
						<ReactMarkdown>{content}</ReactMarkdown>
					</li>
					<br />
				</>
			)).reverse()}
		</ul>
	)
}

const Quotes: BlitzPage = () => {
	return (
		<div className={styles.main}>
			<h1>Quotes from Emi</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<QuotesComp />
			</Suspense>

			{/*<Submission />*/}
		</div>
	)
}

export default Quotes
