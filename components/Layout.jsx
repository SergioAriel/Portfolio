import Link from "next/link"
import Navbar from "./Navbar/Navbar.jsx"
import style from './Layout.module.scss'

export default function Layout({ children }) {
    return (
        <div className={style.containter}>
            <main >
                <Navbar />
                {children}
            </main>
        </div>
    )
}