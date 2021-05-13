import Link from 'next/link'
import style from './Proyects.module.scss'

export default function Proyects({proyect, id}) {
    return (
        <Link href={`Proyect/${id}`}>
            <a className={style.proyectContainer}>
                <img src={`ImgProyects/${proyect.img}`} />
                <h3 className={style.title}>{proyect.title}</h3>
                <span>
                    {proyect.description}
                </span>
            </a>
        </Link>
    )
}