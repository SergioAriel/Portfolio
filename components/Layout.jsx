import Head from 'next/head'
import { Navbar } from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <main className="w-full mt-6 gap-1 dark:bg-gray-800 bg-gray-200 flex flex-col items-center">
                <Navbar/>
                {children}
            </main>
        </>
    )
}