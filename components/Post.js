import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div className="post">
      <h2 className="title is-2">
      <Link href={`/blog/${post.slug}`}>
          <a>{post.frontmatter.title}</a>
        </Link>
      </h2>
      <img src={post.frontmatter.image} alt="" />
      <p className="subtitle is-4">{post.frontmatter.published}</p>
      <p className="content">{post.frontmatter.teaser}</p>
    </div>
  );
}
