import type { NextPage } from "next";
import styles from "../styles/test.module.sass";

const Test: NextPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textEffect}>
				<h1 className={styles.neon} data-text="UR MOM">
					UR MOM
				</h1>
				<div className={styles.gradient}></div>
				<div className={styles.spotlight}></div>
			</div>
		</div>
	);
};

export default Test;
