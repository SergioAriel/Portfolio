import style from './skills.module.scss'

export default function Skill({ skill, handleCode, id}) {

    return (
        <div className={style.containerSkills}>
            <img src={`/skills/${skill.img}`} title={skill.title} alt={skill.title} onClick={()=> handleCode ? handleCode(id) : null} />    
        </div>
    )
}