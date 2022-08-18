import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {marked} from "marked";
import Head from "next/head";
import Layout from "/components/Layout";
import Navbar from "/components/Navbar";
import ExportedImage from "next-image-export-optimizer";
import styles from '../../styles/Slug.module.css'

export default function Project({
  frontmatter: { thumbnail, title, published, teaser, demo, technologies, github },
  content,
}) {
  return (
    <>
      <Head>
        <title>Lukas Sonnabend | {title}</title>
        <meta name="description" content={teaser} />
      </Head>
      <Navbar />
      <Layout>
        <div className="flex justify-center">
          <ExportedImage src={thumbnail} width="300" height="300" layout="fixed" className="rounded-lg object-contain" alt=""/>
        </div>
        <div className="flex justify-center gap-x-10 mt-3">
        { demo && <Link href={demo} target="_blank">
          <a className="inline-block px-8 py-2.5 bg-yellow-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">
          Go to demo
          </a>
        </Link> }
        <Link href={github} target="_blank">
        <a className="inline-block px-8 py-2.5 bg-yellow-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">
          Github
        </a>
        </Link>
        </div>
        <div className="flex justify-center mb-8">
        <div className={styles.slug + 'w-full md:w-7/12 mx-4 md:mx-0'} dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>

      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = fs.readFileSync(path.join("projects", slug + ".md"), "utf-8");
  const { data: frontmatter, content } = matter(markdown);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}