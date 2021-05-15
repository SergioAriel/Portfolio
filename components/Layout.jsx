import Head from 'next/head'
import Navbar from "./Navbar/Navbar.jsx"
import Footer from './Footer/Footer.jsx'
import style from './Layout.module.scss'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={style.containter}>

                <main >
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    )
}