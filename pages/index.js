import Link from 'next/link'
import { useState } from 'react'
import styles from './index.module.scss'
import Profile from '../components/Profile/Profile.jsx'
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
        <section className={styles.section}>
          <Profile />
        </section>
        <section className={styles.section}>
          <div className={codeBlockShow ? styles.skillsCodeBlock : styles.skills}>
            {
              skills.map((skill, index) => {
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
            <CodeBlock text={skills[codeBlock].text} />

          }
        </section>
        <section className={styles.sectionProyect}>
        {
            proyects && proyects.slice(0, 6).map((proyect, index) =>
                <Proyects key={index} proyect={proyect} id={index}/>
            )
          }
        {
          proyects.length > 6 &&
          <div className={styles.linkAllProyects}>
            <Link href="/Proyects">
              <a className="btn">Ver todo</a>
            </Link>
          </div>
        }
        </section>
    </>
  )
}
