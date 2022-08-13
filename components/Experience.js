import ExperienceCard from './ExperienceCard';
import {marked} from "marked";


const Experience = ({ experience }) => {
  return (
    <div id="experience" className="bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-inner">
      <div className="grid gap-4 grid-cols-12 justify-center p-2 lg:p-4">
        <div className="col-span-4">
          <h2 className="p-8 text-4xl 2xl:text-8xl text-white text-center font-bold">
            Experience
          </h2>
        </div>
        <div className="col-span-8 xl:col-span-6 right_side">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} content={marked(exp.content)}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience;