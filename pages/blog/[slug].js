import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {marked} from "marked";
import Head from "next/head";
import Layout from "/components/Layout";
import Navbar from "/components/Navbar";
import ExportedImage from "next-image-export-optimizer";



export default function Post({
  frontmatter: { thumbnail, title, published, teaser },
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
        <h1 className="text-center">{title}</h1>
        <div className="flex justify-center">
        <div className="w-8/12">
          <ExportedImage src={thumbnail} width="100%" height="100%" layout="responsive" className="rounded-lg object-fill" alt=""/>
        </div>
        </div>
        <p>{published}</p>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
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
  const markdown = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  const { data: frontmatter, content } = matter(markdown);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}