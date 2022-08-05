import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero.js'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Layout from '../components/Layout.js'
import Navbar from '../components/Navbar.js'
import Post from "../components/Post.js"
import Experience from "../components/Experience.js"
import { AppProps } from 'next/app';



interface ExperienceMD {
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

interface ProjectMD {
  frontmatter: {
    title: string;
    teaser: string;
    published: string;
    thumbnail: string;
  },
  slug: string;
  content?: string;
}


export default function Index({posts, experience} : {posts: ProjectMD[], experience: ExperienceMD[]}) {
  return (
  <>
  <Head>
    <title>Home</title>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="This is the home page" />

  </Head>
  <Navbar />
  <div className="container">
    <Hero />
  </div>
  <Experience experience={experience}/>
  <Layout>
    <div className="posts">
    {posts.map((post: any, index) => (
      <Post key={index} post={post} />
    ))}
    </div>
  </Layout>
  </>
  );
};


export async function getStaticProps() {
  const postFile = fs.readdirSync(path.join("posts"));
  const expFile = fs.readdirSync(path.join("experience"));
  const sortOrder = (a: any, z: any) => {
    return new Date(z.frontmatter.published).valueOf() - new Date(a.frontmatter.published).valueOf()
  }

  const experienceOrder = (a: any, z: any) => {
    return new Date(z.frontmatter.startDate).valueOf() - new Date(a.frontmatter.startDate).valueOf()
  }


  const posts = postFile.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdown = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdown);
    return {
      slug,
      frontmatter,
    };
  });

  const experience = expFile.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdown = fs.readFileSync(
      path.join("experience", filename),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(markdown);
    return {
      slug,
      frontmatter,
      content
    };
  });

  return {
    props: {
      posts: posts.sort(sortOrder),
      experience: experience.sort(experienceOrder)
    },
  };
}


