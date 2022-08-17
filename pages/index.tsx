import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/Layout.js";
import Navbar from "../components/Navbar.js";
import Post from "../components/Post.js";
import Experience from "../components/Experience.js";
import { AppProps } from "next/app";
import PostCard from "../components/PostCard";
import { ExperienceMD, ProjectMD, PostMD } from "../components/propTypes";
import Section from "../components/Section";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer.js"
import { marked } from "marked";

export default function Index({
  posts,
  projects,
  experience,
}: {
  projects: ProjectMD[];
  posts: PostMD[];
  experience: ExperienceMD[];
}) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="This is the home page" />
      </Head>
      <div className="text-slate-900 dark:text-white">
      <Navbar />
      <Hero />
      <Section
        sectionTitle="Experience"
        id="experience"
        className="bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-inner"
      >
        {experience.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} content={marked(exp.content)} />
        ))}
      </Section>

      <Section id="projects" sectionTitle="Projects" className="pt-4 shadow-inner">
        {projects.map((post: any, index) => (
          <>
            <PostCard key={index} post={post} />
          </>
        ))}
      </Section>
      <Footer/>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projectFile = fs.readdirSync(path.join("projects"));
  const postFile = fs.readdirSync(path.join("posts"));
  const expFile = fs.readdirSync(path.join("experience"));
  const sortOrder = (a: any, z: any) => {
    return (
      new Date(z.frontmatter.published).valueOf() -
      new Date(a.frontmatter.published).valueOf()
    );
  };

  const experienceOrder = (a: any, z: any) => {
    return (
      new Date(z.frontmatter.startDate).valueOf() -
      new Date(a.frontmatter.startDate).valueOf()
    );
  };

  const posts = postFile.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdown);
    return {
      slug,
      frontmatter,
    };
  }).filter((post) => post.frontmatter.published);

  const projects = projectFile.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdown = fs.readFileSync(path.join("projects", filename), "utf-8");
    const { data: frontmatter } = matter(markdown);
    return {
      slug,
      frontmatter,
    };
  }).filter((post) => post.frontmatter.published);

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
      content,
    };
  });

  return {
    props: {
      posts: posts.sort(sortOrder),
      experience: experience.sort(experienceOrder),
      projects: projects.sort(sortOrder)
    },
  };
}
