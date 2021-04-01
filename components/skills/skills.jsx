import { skills } from '../../infoJSON/infoJSON'
import style from './skills.module.scss'

export default function Skills() {
    return (
        <>
            {
                skills && skills.map((skill, index) => {
                    return (
                        <div key={index} className={style.containerSkills}>
                            <img src={`/skills/${skill.img}`} alt={skill.title}/>
                        </div>
                    )
                }
                )
            }
        </>
    )
}