import styles from "styles/tabby.module.sass"
import { GetStaticProps } from "next"
// import { getQuotes } from "lib/prisma"
// import { PrismaClient } from "@prisma/client"
// import db from "db"
import getQuotes from "app/quotes/queries/getQuotes"
import { useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"

function QuotesComp() {
	const [quotes] = useQuery(getQuotes, { where: { public: true } })

	return (
		<ul className={styles.list}>
			{quotes.quotes.map(({ id, content }) => (
				<>
					<li className={styles.listItem} key={id}>
						{content}
					</li>
					<br />
				</>
			))}
		</ul>
	)
}

export default function Quotes() {
	return (
		<div className={styles.texty}>
			<h1>Weird quotes from Emily (usually before passing out)</h1>

			<Suspense fallback={<div>Loading...</div>}>
				<QuotesComp />
			</Suspense>
		</div>
	)
}
