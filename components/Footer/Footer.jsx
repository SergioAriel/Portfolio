import Link from "next/link"
import styles from './Footer.module.scss'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <span>Sergio Ariel Solis Portfolio</span>
            <span>2021</span>
        </div>
    )
}