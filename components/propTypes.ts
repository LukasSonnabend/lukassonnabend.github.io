export type ExperienceMD = {
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

export type ProjectMD = {
  frontmatter: {
    title: string;
    subheading: string;
    teaser: string;
    published: string;
    thumbnail: string;
    technology: string[];
    github: string;
    demo: string;
  },
  slug: string;
  content?: string;
}

export type PostMD = {
  frontmatter: {
    title: string;
    subheading: string;
    teaser: string;
    published: string;
    thumbnail: string;
  },
  slug: string;
  content?: string;
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
  yearStarted: number;
  yearGraduated?: number;
  location: string;
  url: string;
}
