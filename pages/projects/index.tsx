import Layout from '../../components/Layout.jsx'
import Projects from '../../components/Projects'
import { projects } from '../../info/index.js'

export default function RouteProyects() {
  return (
      <div className="">
        {
          projects && projects.map((project, index) =>
            <div
              key={index}
            >
              <Projects key={index} proyect={project} id={index} />
            </div>
          )
        }
      </div>
  )
}
