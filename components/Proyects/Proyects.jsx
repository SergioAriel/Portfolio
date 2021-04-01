import Link from 'next/link'
import { proyects } from '../../infoJSON/infoJSON'
import style from './Proyects.module.scss'

export default function Proyects({ maxShow }) {
    return (
        <>
                {
                    proyects && proyects.slice(0, maxShow).map((proyect, index) => {
                        return (
                            <Link href={proyect.url} key={index}>
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
                    )
                }
        </>
    )
}