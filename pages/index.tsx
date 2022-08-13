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
import { ExperienceMD, ProjectMD } from "../components/propTypes";
import Section from "../components/Section";
import ExperienceCard from "../components/ExperienceCard";

import { marked } from "marked";

export default function Index({
  posts,
  experience,
}: {
  posts: ProjectMD[];
  experience: ExperienceMD[];
}) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="This is the home page" />
      </Head>
      <div className="dark:bg-slate-800 bg-white text-slate-900 dark:text-white">
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
        {posts.map((post: any, index) => (
          <>
            <PostCard key={index} post={post} />
          </>
        ))}
      </Section>
      </div>
    </>
  );
}

export async function getStaticProps() {
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
      content,
    };
  });

  return {
    props: {
      posts: posts.sort(sortOrder),
      experience: experience.sort(experienceOrder),
    },
  };
}
