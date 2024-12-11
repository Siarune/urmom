import { A } from "@solidjs/router"

export default function Home() {
	return (
		<main class="flex flex-col w-full min-h-screen max-h-fit bg-black justify-center items-center content-center">
			<div>
				<h1
					id="urmom"
					class="color-transparent text-4em sm:text-10em text-center bg-clip-text"
					data-text="UR MOM"
					style={`
						-webkit-text-stroke-color: transparent !important;
						-webkit-text-stroke-width: .05em;
						background-image: linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f)
            `}
				>
					UR MOM
				</h1>
			</div>

			<div class="color-white w95vw sm:w70vw mb2rem text-2xl">
				<h1 class="text-center">Heppy Borthday Emi!!!!!!!!!!!!!</h1>
				<h2>
					I love you so so much and I hope you like this silly little
					website.
					<br />I know you were joking about this, but I thought it
					was too funny not to.
				</h2>
				<br />
				<h2>
					Ngl I&apos; ll probably keep this up forever and add onto it
					every year.
				</h2>

				<br />
				<br />

				<h1>For anyone confused</h1>

				<h2>
					If you couldn&apos; t already tell, I&apos; m a computer
					science student. And like all good (software) engineers, I
					take challenges way too seriously.
					<br /> <br />
					So when Emi joked about a website called urmom6969, I spent
					the next month thinking about how to make it real.
				</h2>
				<h4>
					And then I still waited until the last week to finish it.
				</h4>
				<h1>Anyways</h1>
				<h2>
					Again, happy birthday. You make me so happy and ig this is
					how I show it.
				</h2>

				<h1>
					For your viewing pleasure, here are{" "}
					<A
						href="quotes"
						class="decoration-underline"
					>
						some weird quotes from Emily
					</A>{" "}
					(usually before passing out)
				</h1>
			</div>
		</main>
	)
}
