import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import styles from "../styles/tabby.module.sass";

//Tab content components
import Dedication from "./Dedication"
import Explanation from "./Explanation";
import Quotes from "./Quotes";

const Tabs = ({ router }: { router: any }) => {
	const {
		query: { t },
	} = router;

	const isTabOne = t === "1" || t == null;
	const isTabTwo = t === "2";
	const isTabThree = t === "3";

	return (
		<div className={styles.tabContainer}>
			<div className={styles.tabHead}>
				<Link href={{ pathname: "/", query: { t: "1" } }}>
					<div className={styles.tab} data-selected={isTabOne}>
						<a>A Little Anouncement</a>
					</div>
				</Link>
				<Link href={{ pathname: "/", query: { t: "2" } }}>
					<div className={styles.tab} data-selected={isTabTwo}>
						<a>For Everyone Consfused</a>
					</div>
				</Link>
				<Link href={{ pathname: "/", query: { t: "3" } }}>
					<div className={styles.tab} data-selected={isTabThree}>
						<a>Quotes</a>
					</div>
				</Link>
			</div>
			<div className={styles.tabBody}>
				{isTabOne && <Dedication />}
				{isTabTwo && <Explanation />}
				{isTabThree && <Quotes />}
			</div>
		</div>
	);
};

export default withRouter(Tabs);
