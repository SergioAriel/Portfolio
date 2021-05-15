import Link from 'next/link'
import style from './Proyects.module.scss'

export default function Proyects({proyect, id}) {
    return (
        <ConditionalLink  href={`Proyects/${id}`} condition={proyect.url}>
            <a className={style.proyectContainer}>
                <img src={`ImgProyects/${proyect.img}`} alt={proyect.title}/>
                <h3 className={style.title}>{proyect.title}</h3>
                <span>
                    {proyect.description}
                </span>
            </a>
        </ConditionalLink>
    )
}

export const ConditionalLink = ({ children, href, condition }) => (!!condition && href)
      ? <Link href={href}>{children}</Link>
      : <>{children}</>;