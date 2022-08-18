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
import { SiJavascript, SiRubyonrails, SiRuby,SiJest } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const TechLine = ({technologies, className}: {technologies: string[], className: string}) => {
  const techIcon = (technology: string, index: number) => {
    switch (technology) {
      case "Ruby":
        return <SiRuby key={index} />;
      case "Ruby on Rails":
        return <SiRubyonrails key={index} className="h-full w-8" />;
      case "Vue":
        return <FaVuejs key={index} className="h-full w-8" />;
      case "JavaScript":
        return <SiJavascript key={index} className="h-full w-8" />;
      case "Docker":
        return <FaDocker key={index} className="h-full w-8" />;
      case "React":
        return <FaReact key={index} className="h-full w-8" />;
      case "Java":
        return <FaJava key={index} className="h-full w-8" />;
      case "Gitlab":
        return <FaGitlab key={index} className="h-full w-8" />;
      case "Bitbucket":
        return <FaBitbucket key={index} className="h-full w-8" />;
      case "Node":
        return <FaNodeJs key={index} className="h-full w-8" />;
      case "Jest":
        return <SiJest key={index} className="h-full w-8" />;
      case "Next.js":
        return <TbBrandNextjs key={index} className="h-full w-8" />;
      case "Android Studio":
        return <FaAndroid key={index} className="h-full w-8" />;

    }
  };



  return (
    <>
      <p className="text-sm">Technology used:</p>
      <div className={className ? "flex gap-5 h-10 " + className : "flex gap-5 h-10"}>
        {technologies.map((technology, index) => {
          return techIcon(technology, index);
        })}
      </div>
    </>
  );
};

export default TechLine;
