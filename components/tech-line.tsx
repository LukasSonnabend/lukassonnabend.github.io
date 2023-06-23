import {
  FaBitbucket,
  FaGitlab,
  FaVuejs,
  FaJava,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaAndroid
} from "react-icons/fa";
import { SiJavascript, SiRubyonrails, SiRuby, SiJest, SiTypescript, SiTailwindcss,SiSubversion, SiIbm, SiSelenium} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Tooltip  from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";


const TechLine = ({technologies, className}: {technologies: string[], className: string}) => {
  const techIcon = (technology: string, index: number) => {
    switch (technology) {
      case "Ruby":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><SiRuby key={index} className="h-full w-8"  /></Tooltip>;
      case "Ruby on Rails":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><SiRubyonrails key={index} className="h-full w-8" /></Tooltip>;
      case "Vue":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><FaVuejs key={index} className="h-full w-8" /></Tooltip>;
      case "JavaScript":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><SiJavascript key={index} className="h-full w-8" /></Tooltip>;
      case "Docker":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><FaDocker key={index} className="h-full w-8" /></Tooltip>;
      case "React":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><FaReact key={index} className="h-full w-8" /></Tooltip>;
      case "Java":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><FaJava key={index} className="h-full w-8" /></Tooltip>;
      case "Gitlab":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><FaGitlab key={index} className="h-full w-8" /></Tooltip>;
      case "Bitbucket":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><FaBitbucket key={index} className="h-full w-8" /></Tooltip>;
      case "Node":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><FaNodeJs key={index} className="h-full w-8" /></Tooltip>;
      case "Jest":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><SiJest key={index} className="h-full w-8" /></Tooltip>;
      case "Next.js":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><TbBrandNextjs key={index} className="h-full w-8" /></Tooltip>;
      case "Android Studio":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><FaAndroid key={index} className="h-full w-8" /></Tooltip>;
      case "TypeScript":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><SiTypescript key={index} className="h-full w-8" /></Tooltip>;
      case "TailwindCSS":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><SiTailwindcss key={index} className="h-full w-8" /></Tooltip>;
      case "DB2":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><SiIbm key={index} className="h-full w-8" /></Tooltip>;
      case "SVN":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><SiSubversion key="index" className="h-full w-8" /></Tooltip>;
      case "Selenium":
        return <Tooltip placement="top" trigger={['hover']} overlay={<span>{technology}</span>}><SiSelenium className="h-full w-8" /></Tooltip>;
    }
  };



  return (
    <>
      <p className="text-sm">Technology used:</p>
      <div className={className ? "flex gap-5 h-10 " + className : "flex gap-5 h-10"}>
        {technologies.map((technology, index) => {
            return techIcon(technology, index)
        })}
      </div>
    </>
  );
};

export default TechLine;
