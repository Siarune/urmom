import { A } from "solid-start"
import styles from "./index.module.sass"

export default function Home() {
	return (
		<main class={styles.main}>
			<div class={styles.urmom}>
					<h1 class={styles.neon} data-text="UR MOM">
						UR MOM
					</h1>
			</div>

			<div class={styles.texty}>
				<h1>Heppy Borthday Emi!!!!!!!!!!!!!</h1>
				<h2>
					I love you so so much and I hope you like this silly little website.
					<br />I know you were joking about this, but I thought it was too funny not to.
				</h2>
				<br />
				<h2>Ngl I&apos; ll probably keep this up forever and add onto it every year.</h2>

				<br />
				<br />

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

				<h1>For your viewing pleasure, here are <A href="quotes">some weird quotes from Emily</A> (usually
					before passing out)</h1>

			</div>
		</main>
	)
}
