import {marked} from "marked";
import Image from "next/image";

const ExperienceCard = ({ exp, content }) => {
  return (
    <div className="flex justify-center">
      <div className="block m-3 p-6 rounded-lg shadow-lg bg-white w-100">
        <div className="d-flex gap-2 mb-2">
        <div className="col-2 d-flex justify-center">
         {exp.frontmatter.logo &&  <Image src={exp.frontmatter.logo} width="100%" height="100%" alt="" className="img h-auto sm:max-h-12 object-contain"/>}
        </div>
        <div className="col-10">
        <p className="text-gray-700 text-xl font-semibold m-0 align-middle">
          {exp.frontmatter.jobTitle}
        </p>
        <p className="text-gray-700 text-base m-0 align-middle">
          @ {exp.frontmatter.company} - {exp.frontmatter.location}
        </p>
        <p className="text-gray-500 text-sm m-0 align-middle">
          {exp.frontmatter.startDate} - {exp.frontmatter.endDate ? exp.frontmatter.endDate : 'present'}
        </p>
        </div>
        </div>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>



  )

}


export default ExperienceCard;