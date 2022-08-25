import Link from "next/link";
import TechLine from "./tech-line";
import ExportedImage from "next-image-export-optimizer";
import { ProjectMD } from "../components/propTypes";

export default function PostCard({ post }: { post: ProjectMD }) {
  return (
    <div className="bg-white dark:bg-slate-800 flex flex-col sm:flex-row rounded-lg shadow-lg drop-shadow-md">
      <div className="sm:w-5/12 mr-2 post-card-image flex mb-1 sm:mb-0">
      <Link
          href={'/projects/[key]'}
          as = {`/projects/${post.slug}`}
        >
        <ExportedImage
          width="100%"
          height="100%"
          className="object-cover w-full h-full cursor-pointer"
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title}
          unoptimized={true}
        />
      </Link>
      </div>
      <div className="text-center sm:text-left sm:w-9/12 mx-12 md:mx-0 my-2">
      <Link
          href={'/projects/[key]'}
          as = {`/projects/${post.slug}`}
        >
          <h3 className="text-2xl mb-2 font-extrabold cursor-pointer hover:underline">{post.frontmatter.title}</h3>
        </Link>
        {post.frontmatter.subheading && <h4>{post.frontmatter.subheading}</h4>}
        <p className="mr-5 mb-2">{post.frontmatter.teaser}</p>
        {post.frontmatter.technology && <TechLine className="justify-center sm:justify-start" technologies={post.frontmatter.technology} />}
        <p className="text-gray-500 text-sm m-0 align-middle">{post.frontmatter.published}</p>
        <Link
          href={'/projects/[key]'}
          as = {`/projects/${post.slug}`}
        >
          <a className="text-blue-500 hover:underline">Read more</a>
        </Link>
      </div>
    </div>
  );
}
