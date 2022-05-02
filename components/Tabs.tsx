import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import styles from "../styles/tabby.module.sass"

const Tabs = ({ router }: {router:any} ) => {

    const {
        query: { t }
    } = router

    const isTabOne = t === "1" || t == null
    const isTabTwo = t === "2"

    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabHead}>
                <div className={styles.tab} data-selected={isTabOne}>
                    <Link href={{ pathname: "/", query: { t: "1" } }}>
                        <a>A Little Anouncement</a>
                    </Link>
                </div>
                <div className={styles.tab} data-selected={isTabTwo}>
                    <Link href={{ pathname: "/", query: { t: "2" } }}>
                        <a>For Everyone Consfused</a>
                    </Link>
                </div>
            </div>
            <div className={styles.tabBody}>
                {isTabOne && <Dedication />}
                {isTabTwo && <Explanation />}
            </div>
        </div>
    )
}

const Dedication = () => {
    return (
        <div className={styles.texty}>
            <h1>
                Heppy Borthday Emi!!!!!!!!!!!!!
            </h1>
            <h2>
                I love you so so much and I hope you like this silly little website.
                <br />
                I know you were joking about this, but I thought it was too funny not to.
            </h2>
            <br />
            <h2>
                Ngl I&apos; ll probably keep this up forever and add onto it every year.
            </h2>
        </div>
    )
}

const Explanation = () => {
    return (
        <div className={styles.texty}>
            <h2>If you couldn&apos; t already tell, I&apos; m a computer science student.
                And like all good (software) engineers, I take challenges way too seriously.
                <br/> <br/>
                So when Emi joked about a website called urmom6969, I spent the next month thinking about how to make it real.
            </h2>
            <h4>And then I still waited until the last week to finish it.</h4>
            <h1>Anyways</h1>
            <h2>Again, happy birthday. You make me so happy and ig this is how I show it.</h2>
        </div>
    )
}

export default withRouter(Tabs)