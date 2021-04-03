export const proyects = [
    {
        title: "Activity-In-Countries",
        img: "countries.png",
        url: "https://activity-countries.netlify.app",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, purus id interdum rhoncus, dolor tellus venenatis tortor, ultrices rhoncus felis felis a mi. Aenean bibendum sollicitudin odio semper suscipit."
    },
    {
        title: "Activity-In-Countries",
        img: "countries.png",
        url: "https://activity-countries.netlify.app",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, purus id interdum rhoncus, dolor tellus venenatis tortor, ultrices rhoncus felis felis a mi. Aenean bibendum sollicitudin odio semper suscipit."
    },
    {
        title: "Activity-In-Countries",
        img: "countries.png",
        url: "https://activity-countries.netlify.app",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, purus id interdum rhoncus, dolor tellus venenatis tortor, ultrices rhoncus felis felis a mi. Aenean bibendum sollicitudin odio semper suscipit."
    }, {
        title: "Activity-In-Countries",
        img: "countries.png",
        url: "https://activity-countries.netlify.app",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, purus id interdum rhoncus, dolor tellus venenatis tortor, ultrices rhoncus felis felis a mi. Aenean bibendum sollicitudin odio semper suscipit."
    }, {
        title: "Activity-In-Countries",
        img: "countries.png",
        url: "https://activity-countries.netlify.app",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, purus id interdum rhoncus, dolor tellus venenatis tortor, ultrices rhoncus felis felis a mi. Aenean bibendum sollicitudin odio semper suscipit."
    },
    {
        title: "Videogames",
        img: "countries.png",
        url: "https://activity-countries.netlify.app",
    }
]

export const skills = [
    {
        title: "HTML5",
        img: "HTML5.png",
    },
    {
        title: "Javascript",
        img: "Javascript.png",
    },
    {
        title: "ReactJS",
        img: "ReactJS.png",
        language: "jsx",
        text: `
import { CodeBlock, dracula } from "react-code-blocks";
import { skills } from '../../infoJSON/infoJSON'
import style from './skills.module.scss'

export default function Skills() {
    return (
        <>
            {
                skills && skills.map((skill, index) => {
                    return (
                        <div key={index} className={style.containerSkills}>
                            <img src={/skills/...} alt={skill.title}/>
                            <CodeBlock 
                                text= {skill.text}
                                language={skill.language}
                                showLineNumbers={skill.showLineNumbers}
                                theme={dracula}
                            />

                        </div>
                    )
                }
                )
            }
        </>
    )
}`,
    },
    {
        title: "CSS",
        img: "CSS.png",
        language: "jsx",
        text: `
.containerSkills {
    display: flex;
    height: max-content;
    align-items: center;

    img {

        height: 7rem;
        width: 7rem;
        padding: 5px;
        border-radius: 50%;
        background-color: rgb(248, 248, 248);
        transition-duration: 1s;
        border: 1px solid gray;
    }

    img:hover {
        margin-bottom: 1rem;
        box-shadow: 0px 40px 8px -15px rgb(104, 104, 104);
    }
    .codeBlock{
        position: absolute;
        float: left;
        padding: 1rem;
        background-color: black;
        color: white;
        counter-increment: line;
    }
        }`,
    },
    {
        title: "NodeJS",
        img: "NodeJS.png",
        language: "jsx",
    },
    {
        title: "Redux",
        img: "Redux.png",
        language: "jsx",
        text: `
<a className={style.proyectContainer}>
<h1 className={style.title}>{proyect.title}</h1>
<img src={ImgProyects/... />
<span>
    {proyect.description}
</span>
</a>`,
    },
    {
        title: "Express",
        img: "express.png",
        language: "js",
        text: `
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require ('./countries')
const activity = require ('./activity')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries)
router.use('/activity', activity)

module.exports = router;
---------------------------------------------
const { Router } = require('express');
const router = Router();

const {activityPost, activityGet} = require('./controller/activity.controller.js')

router.post('/created', activityPost)
router.get('/', activityGet)


module.exports = router;
        `,
    }
]

export const institutions = [
    {

    },
]