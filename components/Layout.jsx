import Head from 'next/head'
import { Navbar } from './Navbar'
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <main className={`w-full ${ router.pathname ==="/" && "mt-6"} min-h-screen gap-1 dark:bg-gray-800 bg-gray-200 dark:text-gray-300 flex flex-col items-center`}>
                {
                    router.pathname === '/' &&
                    <Navbar />
                }
                {children}
            </main>
        </>
    )
}