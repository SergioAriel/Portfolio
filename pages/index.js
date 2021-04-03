import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from './index.module.scss'
import Layout from '../components/Layout.jsx'
import Proyects from '../components/Proyects/Proyects.jsx'
import Skill from '../components/skills/skills.jsx'
import { skills, proyects } from '../infoJSON/infoJSON'
import CodeBlock from '../components/codeBlock/codeBlock'



export default function Home() {
  const [codeBlock, setCodeBlock] = useState(0)
  const [codeBlockShow, setCodeBlockShow] = useState(false)

  const handleCode = (id) => {
    if (id !== codeBlock) {
      setCodeBlockShow(true)
      setCodeBlock(id)
    } else {
      setCodeBlockShow(!codeBlockShow)
    }
  }


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <section>

        </section>
        <section className={styles.section & styles.transition}>
          <div className={codeBlockShow ? styles.skillsCodeBlock : styles.skills}>
          {
            skills.map((skill, index) =>
            {
              return (
                skill.text ? 
                <Skill key={index} skill={skill} handleCode={handleCode} id={index} codeBlock={codeBlock} />
                :
                <Skill key={index} skill={skill} id={index} codeBlock={codeBlock} />
              )
            }
            )
          }
          </div>
          {
            codeBlockShow && typeof codeBlock === "number" && skills[codeBlock].text && 
            <div className={styles.divCodeBlock}>
              <CodeBlock text={skills[codeBlock].text} />
            </div>}
        </section>
        <section className={styles.section}>
          {
            proyects && proyects.slice(0, 6).map((proyect, index) =>
              <div>
                <Proyects key={index} proyect={proyect} />
              </div>
            )
          }
          <div className={styles.linkAllProyects}>
            <Link href="/Proyects">
              <a className="btn">Ver todo</a>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}
