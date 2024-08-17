import Projects from '../../components/Projects'
import { projects } from '../../info'

export default function RouteProyects() {

  return (

    <div
      className='relative w-10/12 mt-4 border dark:bg-slate-700 bg-white border-gray-100 shadow-md lg:grid lg:grid-cols-2 flex flex-col gap-4 h-max rounded-xl  p-4 pt-8'

    >
      {
        projects?.map((project, index) =>

          <Projects key={index} project={project} id={index} />
        )
      }
    </div>
  )
}
