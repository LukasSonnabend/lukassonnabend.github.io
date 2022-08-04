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

export default function Index({posts, experience}){
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
    {posts.map((post, index) => (
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
  const sortOrder = (a, z) => {
    return new Date(z.frontmatter.published) - new Date(a.frontmatter.published)
  }

  const experienceOrder = (a, z) => {
    return new Date(z.frontmatter.startDate) - new Date(a.frontmatter.startDate)
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


