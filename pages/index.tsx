
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Profile from '../components/Profile'
import Project from '../components/Projects'
import Skill from '../components/skills'
import { skills, projects, institutions } from '../info'
import { Contact } from '@/components/Contact'
import SocialNetworks from '@/components/SocialNetworks'
import Link from 'next/link'



export default function Home() {

  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row w-10/12 py-4 gap-4 ">
      <div
        className='order-1 lg:order-none flex h-max lg:w-3/12 w-full flex-col gap-4'
      >
        <Profile />
        <SocialNetworks />
      </div>

      <div
        className='order-3 lg:order-none w-full flex flex-col gap-4 justify-center '
      >
        <Contact />

        <div
          id='projects'
          className='relative border dark:bg-slate-700 bg-white border-gray-100 shadow-md lg:grid lg:grid-cols-2 flex flex-col gap-4 h-max rounded-xl w-full p-4 pt-8'

        >
          {
            projects.length > 4 &&
            <div className="absolute top-1 right-4">
              <Link href="/projects"
              className="text-xs font-bold"
              >
                Más proyectos
              </Link>
            </div>
          }
            {
              projects && projects.slice(0, 4).map((project, index) =>
                <Project key={index} project={project} id={index} />
              )
            }
        </div>

        <div
          id="formation"
          className="border dark:bg-slate-700  bg-white border-gray-100 shadow-md flex flex-col h-max rounded-xl w-full p-4 pt-8"
        >
          {
            institutions.map((institution, index) =>
              <div key={index} className=" flex flex-col ml-8 relative pb-4 last:pb-0 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black dark:before:border- before:content-[''] ">
                <ArrowRightIcon className="absolute top-1 -left-9 w-5 h-5 text-gray-500 dark:text-gray-200" />
                <p className="font-bold dark:text-gray-100">
                  {institution.institution} ({institution.year}):
                </p>
                <div
                  className='flex'
                >
                  <p className=" text-gray-500 dark:text-gray-400">
                    {institution.career} 
                  </p>

                </div>
              </div>
            )
          }
        </div>

        <div id='presentation' className="flex flex-col items-center rounded-xl border dark:bg-slate-700 bg-white border-gray-100 p-4 shadow-md gap-4 justify-center">
          <div className="flex flex-col gap-4 items-center justify-center lg:w-2/3">
            <p className="text-center font-bold">
              Hola, soy Sergio Ariel Solis
            </p>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Siempre tuve interes por la tecnología, desde muy chico, queria saber como reparar computadoras.
              Mi primer carrera fue de operador tecnico de radio y televisión.
              Luego en 2018 comencé a estudiar programación realizando cursos en UTN, y luego en soyHenry.
              En 2019 consegui mi primer trabajo como desarrollador Full Stack.
              Desde entonces he estado trabajando en diferentes proyectos, algunos open source.

            </p>
            <p className="text-center text-gray-500 dark:text-gray-400">

              En este sitio web podrás encontrar información sobre mis proyectos, mi experiencia y mis habilidades.
            </p>
          </div>
        </div>

      </div>

      <section className="order-4 w-full  lg:w-2/12 rounded-xl border dark:bg-slate-700 bg-white border-gray-100 p-2 py-4 shadow-md">
        <div className="grid grid-cols-3 items-center justify-items-center gap-3 w-full">
          {
            skills.map((skill, index) => {
              return (
                <Skill key={index} skill={skill} id={index} />
              )
            })
          }
        </div>
      </section>
    </div>
  )
}
