import style from './skills.module.scss'

export default function Skill({ skill, handleCode, id}) {

    return (
        <div className={style.containerSkills}>
            <img src={`/skills/${skill.img}`} alt={skill.title} onClick={()=> handleCode ? handleCode(id) : null} />
        </div>
    )
}