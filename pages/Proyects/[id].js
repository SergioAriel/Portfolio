import Layout from '../../components/Layout.jsx'
import { proyects } from '../../infoJSON/infoJSON.js'
import styles from './indexProyect.module.scss'

const Proyect = ({proyect}) => {
  console.log("component", proyect.url)
  return (
    <Layout>
      <div className={styles.proyectID}>
        <iframe src={proyect.url}></iframe>
      </div>
    </Layout>
  )
}

Proyect.getInitialProps = (ctx) => {
  const id = ctx.query.id
  console.log(proyects[id])
  return {proyect: proyects[id]}
}

export default Proyect