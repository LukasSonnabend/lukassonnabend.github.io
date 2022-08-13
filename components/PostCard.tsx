import Link from "next/link";


interface ProjectMD {
  frontmatter: {
    title: string;
    subheading: string;
    teaser: string;
    published: string;
    thumbnail: string;
  },
  slug: string;
  content?: string;
}

export default function PostCard({ post }: { post: ProjectMD }) {
  return (
    <div className="flex shadow-md">
      <div className="w-3/12 post-card-image">
        <img className="object-cover h-full" src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
      </div>
      <div className="w-9/12">
        <h3 className="text-2xl font-extrabold">{post.frontmatter.title}</h3>
        {post.frontmatter.subheading && <h4>{post.frontmatter.subheading}</h4> }
        <p>{post.frontmatter.teaser}</p>
        <p>{post.frontmatter.published}</p>
        <Link href={`/projects/${post.slug}`} >
          <a className="text-blue-500">
            Read more
          </a>
        </Link>
      </div>
    </div>
  );
}