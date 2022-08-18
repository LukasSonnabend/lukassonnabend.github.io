
import ExportedImage from "next-image-export-optimizer";
import TechLine from "./tech-line.tsx";

const ExperienceCard = ({ exp, content }) => {

  return (
      <div className="p-6 rounded-lg shadow-lg dark:bg-slate-800 bg-white w-100">
        <div className="flex gap-2 mb-4">
          <div className="">
            {exp.frontmatter.logo && <ExportedImage src={exp.frontmatter.logo} width="100%" height="100%" alt="" className="img h-auto sm:max-h-12 object-contain" />}
          </div>
          <div className="">
            <p className="text-gray-700 dark:text-white text-xl font-semibold m-0 align-middle">
              {exp.frontmatter.jobTitle}
            </p>
            <p className="text-gray-700 dark:text-white text-base m-0 align-middle">
              @ {exp.frontmatter.company} - {exp.frontmatter.location}
            </p>
            <p className="text-gray-500 text-sm m-0 align-middle">
              {exp.frontmatter.startDate} - {exp.frontmatter.endDate ? exp.frontmatter.endDate : 'present'}
            </p>
            <div className="h-10">
              {exp.frontmatter.technologies && <TechLine technologies={exp.frontmatter.technologies} />}
            </div>
          </div>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
  )

}


export default ExperienceCard;
