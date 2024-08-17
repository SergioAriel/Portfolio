import Image from 'next/image'

const Skill = ({ skill, handleCode, id }: any) => {

    return (
        <div className="w-10 h-10 hover:drop-shadow-skills dark:hover:drop-shadow-skills-dark">

            <Image
                alt={skill.title}
                width={200}
                height={200}
                src={`/skills/${skill.img}`} title={skill.title}
                onClick={() => handleCode ? handleCode(id) : null}
            />
        </div>
    )
}

export default Skill