import Layout from '../../components/Layout.jsx'
import Proyects from '../../components/Proyects/Proyects.jsx'
import { proyects } from '../../infoJSON/infoJSON.js'

export default function About() {
  return (
    <Layout>
      <Proyects proyect={proyects[0]}/>
    </Layout>
  )
}
