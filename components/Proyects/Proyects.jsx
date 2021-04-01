import Link from 'next/link'
import { proyects } from '../../infoJSON/infoJSON'
import style from './Proyects.module.scss'

export default function Proyects({maxShow}) {
    return (
        <>
            {
                proyects && proyects.slice(0, maxShow).map((proyect, index) => {
                    return (
                        <Link href={proyect.url} key={index}>
                            <a  className={style.proyectContainer}>
                                <h1>{proyect.title}</h1>
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
            {
                proyects.length > 6 &&
                <Link href="/Proyects">
                    <a>Ver mas...</a>
                </Link>
            }
        </>
    )
}