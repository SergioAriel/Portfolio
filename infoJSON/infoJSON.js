export const proyects = [
    {
        title: "Activity-In-Countries",
        img: "countries.png",
        url: "https://activity-countries.netlify.app",
        description: "El trabajo consistía en crear una SPA extrayendo información de la API restcountries. En la que podíamos buscar, ordenar alfabéticamente y por densidad de población sobre los países."
    },
    {
        title: "Videogames",
        img: "videogames.png",
        description: "El trabajo consistía en crear una SPA extrayendo información de la API de RAWG de videojuegos. En la que podíamos buscar, ordenar alfabéticamente y por rating."
    }
]

export const skills = [
    {
        title: "HTML5",
        img: "HTML5.png",
        language: "HTML",
    },
    {
        title: "Javascript",
        img: "Javascript.png",
        language: "JS",
    },
    {
        title: "CSS",
        img: "CSS.png",
        language: "CSS",
    },
    {
        title: "ReactJS",
        img: "ReactJS.png",
        language: "jsx",
        text: `
        import Link from 'next/link'
        import style from './Proyects.module.scss'
        
        export default function Proyects({proyect, id}) {
            return (
                <ConditionalLink  href={'proyects/id'} condition={proyect.url}>
                    <a className={style.proyectContainer}>
                        <img src={'ImgProyects/proyect.img'} alt={proyect.title}/>
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
              : <>{children}</>;`,
    },
    {
        title: "SASS",
        img: "Sass.png",
        language: "SASS",
        text: `
        .containerSkills {
            display: flex;
            height: max-content;
            align-items: center;
            height: 7rem;
            padding: 0.5;
            margin: 0.5rem;
            transition-duration: 1s;
        
            img {
                height: 5rem;
                padding: 5px;
                border-radius: 50%;
                background-color: rgb(248, 248, 248);
                transition-duration: 1s;
                border: 1px solid gray;
        
            }
            @media screen and (min-width: 600px) {
                img{
                    height: 7rem;
                }
                img:hover {
                    margin-bottom: 1rem;
                    box-shadow: 0px 40px 8px -15px rgb(104, 104, 104);
                    cursor:pointer;
                }
            }
        }
        
        `,
    },
    {
        title: "NodeJS",
        img: "NodeJS.png",
        language: "js",
    },
    {
        title: "Redux",
        img: "Redux.png",
        language: "js",
        text: `
        import * as actionsTypes from '../actions-types/actions-types'


        const initialState = {
            countries: [],
            countryDetail: {},
            activityCreated: [],
            activities: [],
            error: {}
        }
        
        const rootReducer = (state = initialState, actions) => {
            switch (actions.type) {
                case actionsTypes.GET_COUNTRIES:
                    if (actions.payload.order) {
                        switch (actions.payload.order) {
                            case actionsTypes.ORDER_ASC:
                                const ascending = actions.payload.data.sort((a, b) => {
                                    if (a.name > b.name) {
                                        return 1;
                                    } else if (a.name < b.name) {
                                        return -1;
                                    } else {
                                        return 0;
                                    }
                                })
                                const spliceAsc = ascending.splice((actions.payload.page * 10) - 10, 10)
                                state.countries = []
                                return {
                                    ...state,
                                    countries: spliceAsc,
                                    error: {}
                                }
                            case actionsTypes.ORDER_DESC:
                                const descending = actions.payload.data.sort((a, b) => {
                                    if (a.name < b.name) {
                                        return 1;
                                    } else if (a.name > b.name) {
                                        return -1;
                                    } else {
                                        return 0;
                                    }
                                })
                                const spliceDsc = descending.splice((actions.payload.page * 10) - 10, 10)
                                state.countries = []
                                return {
                                    ...state,
                                    countries: spliceDsc,
                                    error: {}
                                }
                            case actionsTypes.ORDER_POPULATION:
                                console.log("acaaaaa")
                                const population = actions.payload.data.sort((a, b) => {
                                    const densidadA = a.population/a.area
                                    const densidadB = b.population/b.area
                                    console.log(densidadA, a.population)
                                    if (densidadA < densidadB) {
                                        return 1;
                                    }
                                    if (densidadA > densidadB) {
                                        return -1;
                                    }
                                    return 0;
                                })
                                const splicePop = population.splice((actions.payload.page * 10) - 10, 10)
                                state.countries = []
                                return {
                                    ...state,
                                    countries: splicePop,
                                    error: {}
                                }
        
                        }
                    }else if(actions.payload.filtered){
                        var filterData = []
                        if(actions.payload.filtered.filterContinent && actions.payload.filtered.filterActivity){
                            filterData = actions.payload.data.filter((country) => country.continent === actions.payload.filtered.filterContinent && country.activities.find((activity)=> activity.name === actions.payload.filtered.filterActivity))                
                        }else if(actions.payload.filtered.filterContinent){
                            filterData = actions.payload.data.filter((country) => country.continent === actions.payload.filtered.filterContinent)                
                        }else if(actions.payload.filtered.filterActivity){
                            filterData = actions.payload.data.filter((country) => country.activities.find((activity)=> activity.name === actions.payload.filtered.filterActivity))  
                        }
                        const showFilter = filterData.splice((actions.payload.page * 10) - 10, 10)
                        state.countries = []
                        return {
                            ...state,
                            countries: showFilter,
                            error: {}
                        }
                    } else {
                        return {
                            ...state,
                            countries: actions.payload,
                            error: {}
                        }
                    }
                case actionsTypes.GET_DETAIL:
                    return {
                        ...state,
                        countryDetail: actions.payload
                    }
                case actionsTypes.ERROR:
                    return {
                        ...state,
                        error: {
                            ...state.error,
                            countries: actions.payload
                        }
                    }
                case actionsTypes.POST_ACTIVITIES:
                    return {
                        ...state,
                        activityCreated: actions.payload[0]
                    }
                case actionsTypes.GET_ACTIVITY:
                    return{
                        ...state,
                        activities: actions.payload
                    }
                default: return state
            }
        }
        
        export default rootReducer`,
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
    },
    {
        title: "Postgres",
        img: "postgres.svg",
        language: "js",    
    },
    {
    title: "Sequielize",
    img: "sequelize.png",
    language: "js",
    text: `
        const { DataTypes } = require('sequelize');
        // Exportamos una funcion que define el modelo
        // Luego le injectamos la conexion a sequelize.
        module.exports = (sequelize) => {
        // defino el modelo
        sequelize.define('activity', {
            name: {
            type: DataTypes.STRING,
            allowNull: false,
            },
            difficulty: {
                type: DataTypes.INTEGER,
                validate:{
                    max: 5,
                    min: 1
                },
                allowNull: false,
        
            },
            duration: {
                type: DataTypes.STRING,
                allowNull: false,
        
            },
            season: {
                type: DataTypes.STRING,
                allowNull: false,
        
            }
        },
        {
            initialAutoIncrement: 1,
            timestamps: false
        }
        );
        };`,
    },
    {
        title: "NextJS",
        img: "nextjs.png",
        language: "js",
        text: `
        import { proyects } from '../../infoJSON/infoJSON.js'
        import styles from './indexProyect.module.scss'
        import { useRouter } from 'next/router'

        export default function Proyect (props) {
        const router = useRouter();
        if(router.isFallback) return "Loading..."
        return (
            <div className={styles.proyectID}>
                <iframe src={props.url}/>
            </div>
        )
        }


        export function getStaticPaths(){
        return {
            paths: [],
            fallback: true
        }
        }

        export function getStaticProps(context){
        const { params} = context
        const { id } = params
        if(!proyects[id]){
            res.writeHead(301, { Location: "/"}).end()
        }
        return {props: proyects[id]}
        }   
        `
    }

]

export const institutions = [
    {
        institution: "SoyHenry",
        career: "FullStack Developer",
        year: "2020 - 2021"
    },
    {
        institution: "Elearning UTN",
        career: "FullStack Developer",
        year: "2019"
    },
    {
        institution: "CIC Centro Internacional de Coctelería",
        career: "Bartender Profesional",
        year: "2015"
    },
    {
        institution: "ETER, Escuela de Comunicación",
        career: "Operación Técnica de Radio",
        year: "2014"
    },
    {
        institution: "Instituto Eymard",
        career: "Bachiller en Humanidades y Ciencias Sociales",
        year: "2011"
    },
]

export const profile =
{
    Name: "Sergio Ariel Solis",
    imgProfile: "imgProfile.jpg",
}