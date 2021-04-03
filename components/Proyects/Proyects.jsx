import Link from 'next/link'
import { proyects } from '../../infoJSON/infoJSON'
import style from './Proyects.module.scss'

export default function Proyects({proyect}) {
    return (
        <Link href={proyect.url}>
            <a className={style.proyectContainer}>
                <h1 className={style.title}>{proyect.title}</h1>
                <img src={`ImgProyects/${proyect.img}`} />
                <span>
                    {proyect.description}
                </span>
            </a>
        </Link>
    )
}