import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.scss'
import Layout from '../components/Layout.jsx'
import Proyects from '../components/Proyects/Proyects.jsx'
import Skills from '../components/skills/skills.jsx'


export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <section>

        </section>
        <section className={styles.section}>
            <Proyects maxShow={4} />
          <div className={styles.linkAllProyects}>
            <Link href="/Proyects">
              <a className="btn">Ver todo</a>
            </Link>
          </div>
        </section>
        <section className={styles.section}>
          <Skills />
        </section>
      </Layout>
    </>
  )
}
