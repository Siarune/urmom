import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.sass";
import Tabs from "../components/Tabs";

const Home: NextPage = () => {
	return (
		<main className={styles.container}>
			<Head>
				<title>UR MOM</title>
				<meta
					name="UR MOM"
					content="This is what happens when I take jokes seriously."
				/>
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

			<div className={styles.tabWrap}>
				<Tabs />
			</div>
		</main>
	);
};

export default Home;
