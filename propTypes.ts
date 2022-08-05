import { type } from "os";

export interface ExperienceMD {
  frontformatter: {
    company: string;
    location: string;
    jobTitle: string;
    technologies: string[];
    startDate: string;
    endDate: string;
    logo: string;
  },
  content: string;
}

export interface ProjectMD {
  frontformatter: {
    title: string;
    teaser: string;
    published: string;
    thumbnail: string;
  },
  content: string;
}
