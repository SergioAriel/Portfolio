import Link from "next/link"
import styles from './Footer.module.scss'

export default function Navbar() {

    const year = new Date();
    return (
        <div className={styles.container}>
            <span>Creado con NEXTJS</span>
            <span>{year.getFullYear()}</span>
        </div>
    )
}