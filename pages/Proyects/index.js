import Layout from '../../components/Layout.jsx'
import Proyects from '../../components/Proyects/Proyects.jsx'
import { proyects } from '../../infoJSON/infoJSON.js'
import styles from './indexProyect.module.scss'

export default function RouteProyects() {
  return (
    <Layout>
      <div className={styles.proyectContainer}>
        {
          proyects && proyects.map((proyect, index) =>
            <div>
              <Proyects key={index} proyect={proyect} id={index} />
            </div>
          )
        }
      </div>
    </Layout>
  )
}
