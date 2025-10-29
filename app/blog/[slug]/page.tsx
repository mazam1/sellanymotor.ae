import { blogPosts } from "../../../src/data/blogs";
import type { Metadata } from "next";
import ImageWithFallback from "../../../src/components/ImageWithFallback";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog Post | SellanyMotor" };
  return {
    title: `${post.title} | SellanyMotor`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <section className="py-16">
        <h1 className="text-2xl font-semibold">Post not found</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">The requested article does not exist.</p>
      </section>
    );
  }

  return (
    <section className="py-16">
      {post.cover && (
        <div className="relative h-14 w-14">
          <ImageWithFallback src={post.cover} alt={post.title} fill className="object-contain dark:invert" />
        </div>
      )}
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{post.title}</h1>
      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div className="mt-6 max-w-3xl text-zinc-700 dark:text-zinc-300">
        {post.content}
      </div>
    </section>
  );
}