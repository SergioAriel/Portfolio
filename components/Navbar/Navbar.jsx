import Link from "next/link"
import styles from './Navbar.module.scss'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Link href="/">
                <a className={styles.title}>Portfolio Sergio Ariel Solis</a>
            </Link>

            <ul className={styles.contacts}>
                <li>
                    <Link href="https://linkedin.com/in/sergio-solis-260509b5">
                        <a>
                            <img src='/social-icons/linkedin.png' />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/SergioAriel">
                        <a>
                            <img src='/social-icons/github.png' />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}