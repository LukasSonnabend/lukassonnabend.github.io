export type ExperienceMD {
  frontmatter: {
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


export type ProjectMD {
  frontformatter: {
    title: string;
    teaser: string;
    published: string;
    thumbnail: string;
  },
  content: string;
}

export type SectionProps = {
  className?: string;
  sectionTitle: string;
  id: string;
  children: React.ReactNode;
};

export type educationInstitution = {
  name: string;
  degree: string;
  yearStarted: string;
  yearGraduated: string | null;
  location: string;
}