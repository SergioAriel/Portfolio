import { SpeedInsights } from "@vercel/speed-insights/next"
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <SpeedInsights />
    </Layout>

  )
}

export default MyApp
