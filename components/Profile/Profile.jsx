import style from './Profile.module.scss'
import { profile, institutions } from '../../infoJSON/infoJSON'


export default function Profile() {

    return (
        <div className={style.profile}>
            <div className={style.infoProfile}>
                <img src={`/profile/${profile.imgProfile}`}/>
                <span>Año de Nacimiento {profile.yearOfBirth}</span>
                <span>Nacionalidad {profile.nacionality}</span>
                <span></span>
            </div>
            <div className={style.institutions}>
                <h1>Formación Académica</h1>
                <ul>
                    {
                    institutions && institutions.map((institution) =>{
                        return(
                            <li>
                                <h5>{institution.institution}</h5>
                                <span>{institution.career}</span>
                                <span>{institution.year}</span>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}