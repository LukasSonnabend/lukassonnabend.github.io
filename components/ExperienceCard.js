
import ExportedImage from "next-image-export-optimizer";
import { FaBitbucket, FaGitlab, FaVuejs, FaJava, FaReact, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiRubyonrails } from 'react-icons/si';

const ExperienceCard = ({ exp, content }) => {
  const techIcon = (technology, index) => {
    switch (technology) {
      case "Ruby on Rails":
        return <SiRubyonrails key={index} className="h-full w-8" />
      case "Vue":
        return <FaVuejs key={index}className="h-full w-8" />
      case "JavaScript":
        return <SiJavascript key={index}className="h-full w-8" />
      case "Docker":
        return <FaDocker key={index}className="h-full w-8" />
      case "React":
        return <FaReact key={index}className="h-full w-8" />
      case "Java":
        return <FaJava key={index}className="h-full w-8" />
      case "Gitlab":
        return <FaGitlab key={index}className="h-full w-8" />
      case "Bitbucket":
        return <FaBitbucket key={index} className="h-full w-8" />
    }
  }

  return (
      <div className="p-6 rounded-lg shadow-lg dark:bg-slate-800 bg-white w-100">
        <div className="flex gap-2 mb-2">
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
            <p className="inline text-sm">Technology used:</p>
            <div className="flex gap-5 h-10">
              {exp.frontmatter.technologies && exp.frontmatter.technologies.map((technology, index) => {
                return techIcon(technology, index)
                })}
            </div>
          </div>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
  )

}


export default ExperienceCard;
