import React from "react"
import Link from "next/link"
import { styles } from "../styles/tabby.module.sass"

const Layout = ({ children }) => {
    return (
        <>
            {/* <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/page-two">
                    <a>Page 2</a>
                </Link>
            </nav> */}
            <div>{children}</div>
        </>
    )
}

export default Layout