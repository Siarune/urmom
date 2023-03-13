import { BlitzPage } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import styles from "styles/index.module.sass"

const Home: BlitzPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>UR MOM</title>
				<meta name="UR MOM" content="This is what happens when I take jokes seriously." />
				<link rel="icon" type="image/ico" href="/favicon.ico" />
			</Head>

			<div className={styles.urmom}>
				<div className={styles.textEffect}>
					<h1 className={styles.neon} data-text="UR MOM">
						UR MOM
					</h1>

					<div className={styles.gradient}></div>
					<div className={styles.spotlight}></div>
				</div>
			</div>

			<div className={styles.texty}>
				<h1>Heppy Borthday Emi!!!!!!!!!!!!!</h1>
				<h2>
					I love you so so much and I hope you like this silly little website.
					<br />I know you were joking about this, but I thought it was too funny not to.
				</h2>
				<br />
				<h2>Ngl I&apos; ll probably keep this up forever and add onto it every year.</h2>

				<br />
				<br/>

				<h1>For anyone confused</h1>

				<h2>
					If you couldn&apos; t already tell, I&apos; m a computer science student. And
					like all good (software) engineers, I take challenges way too seriously.
					<br /> <br />
					So when Emi joked about a website called urmom6969, I spent the next month
					thinking about how to make it real.
				</h2>
				<h4>And then I still waited until the last week to finish it.</h4>
				<h1>Anyways</h1>
				<h2>Again, happy birthday. You make me so happy and ig this is how I show it.</h2>

				<h1>For your viewing pleasure, here are <Link href="quotes/"><a>some weird quotes from Emily</a></Link> (usually before passing out)</h1>

			</div>
		</div>
	)
}

export default Home
