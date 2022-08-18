import Link from "next/link";
import TechLine from "./tech-line";
import ExportedImage from "next-image-export-optimizer";
import { ProjectMD } from "../components/propTypes";

export default function PostCard({ post }: { post: ProjectMD }) {
  return (
    <div className="dark:bg-slate-800 flex flex-col sm:flex-row rounded-lg shadow-md">
      <div className="sm:w-5/12 mr-2 post-card-image flex mb-1 sm:mb-0">
      <Link href={`/projects/${post.slug}`}>
        <ExportedImage
          layout="intrinsic"
          width="100%"
          height="100%"
          className="object-cover w-full h-full cursor-pointer"
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title}
        />
      </Link>
      </div>
      <div className="text-center sm:text-left sm:w-9/12 mx-12 md:mx-0">
        <Link href={`/projects/${post.slug}`}>
          <h3 className="text-2xl font-extrabold cursor-pointer">{post.frontmatter.title}</h3>
        </Link>
        {post.frontmatter.subheading && <h4>{post.frontmatter.subheading}</h4>}
        <p>{post.frontmatter.teaser}</p>
        {post.frontmatter.technology && <TechLine className="justify-center sm:justify-start" technologies={post.frontmatter.technology} />}
        <p className="text-gray-500 text-sm m-0 align-middle">{post.frontmatter.published}</p>
        <Link href={`/projects/${post.slug}`}>
          <a className="text-blue-500">Read more</a>
        </Link>
      </div>
    </div>
  );
}
