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
        <title>{title}</title>
        <meta name="description" content={teaser} />
      </Head>
      <Navbar />
      <Layout>
        <div className="flex justify-center">
          <ExportedImage src={thumbnail} width="300" height="300" layout="fixed" className="rounded-lg object-fill" alt=""/>
        </div>
        <div className="flex justify-center gap-x-10 mt-3">
        <a class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href={demo} target="_blank">
          Go to demo
        </a>
        <a class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href={github} target="_blank">
          Github
        </a>
        </div>
        <div className="flex justify-center mb-8">
        <div className={styles.slug + ' w-7/12'} dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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