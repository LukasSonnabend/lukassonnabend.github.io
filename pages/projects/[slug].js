import { useEffect } from "react";
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
import Slider from "/components/Slider";


export default function Project({
  frontmatter: { swiper_slides, thumbnail, title, published, teaser, demo, technologies, github },
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content={teaser} />
      </Head>
      <Navbar />
      <Layout>
        <div className="flex justify-center">
          <ExportedImage src={thumbnail} width="300" height="300" layout="fixed" className="rounded-lg object-contain" alt=""/>
        </div>
        <div className="flex justify-center gap-x-10 mt-3">
        { demo && <Link href={demo} passHref>
          <a target="_blank" className="inline-block px-8 py-2.5 bg-yellow-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">
          Go to demo
          </a>
        </Link> }
        <Link href={github} passHref>
        <a target="_blank" className="inline-block px-8 py-2.5 bg-yellow-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">
          Github
        </a>
        </Link>
        </div>
        <div className="dark:bg-slate-800 flex flex-col justify-center mb-8">
        {
          swiper_slides != null ? (
            <>
              <div className={'self-center p-4 slug w-full lg:w-7/12 mx-4 lg:mx-0'} dangerouslySetInnerHTML={{ __html: marked(content[0]) }}></div>
              <Slider slides={swiper_slides} />
              <div className={'self-center p-4 slug w-full lg:w-7/12 mx-4 lg:mx-0'} dangerouslySetInnerHTML={{ __html: marked(content[1]) }}></div>
            </>
          ) : (<div className={'self-center p-4 slug w-full lg:w-7/12 mx-4 lg:mx-0'} dangerouslySetInnerHTML={{ __html: marked(content) }}></div>)

          }

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
  let { data: frontmatter, content } = matter(markdown);

  if (content.includes("{{carousel}}")) {
    content = content.split("{{carousel}}")
  }

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
