import Link from "next/link";
import { ProjectMD } from "../components/propTypes";

export default function PostCard({ post }: { post: ProjectMD }) {
  return (
    <div className="dark:bg-slate-800 flex rounded-lg shadow-md">
      <div className="w-3/12 mr-2 post-card-image">
        <img
          className="object-cover h-full cursor-pointer"
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title}
        />
      </div>
      <div className="w-9/12">
        <Link href={`/projects/${post.slug}`}>
          <h3 className="text-2xl font-extrabold cursor-pointer">{post.frontmatter.title}</h3>
        </Link>
        {post.frontmatter.subheading && <h4>{post.frontmatter.subheading}</h4>}
        <p>{post.frontmatter.teaser}</p>
        <p className="text-gray-500 text-sm m-0 align-middle">{post.frontmatter.published}</p>
        <Link href={`/projects/${post.slug}`}>
          <a className="text-blue-500">Read more</a>
        </Link>
      </div>
    </div>
  );
}
