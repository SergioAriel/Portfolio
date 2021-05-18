import { proyects } from '../../infoJSON/infoJSON.js'
import styles from './indexProyect.module.scss'
import { useRouter } from 'next/router'

export default function Proyect (props) {
  const router = useRouter();
  if(router.isFallback) return "Loading..."
  return (
      <div className={styles.proyectID}>
        <iframe src={props.url}/>
      </div>
  )
}


export function getStaticPaths(){
  return {
    paths: [],
    fallback: true
  }
}

export function getStaticProps(context){
  const { params} = context
  const { id } = params
  if(!proyects[id]){
    res.writeHead(301, { Location: "/"}).end()
  }
  return {props: proyects[id]}
}
