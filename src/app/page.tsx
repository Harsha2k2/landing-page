import Link from "next/link";

const posts = [
  {
    slug: "getting-started",
    title: "Getting Started with Trinck",
    excerpt: "Learn how to build and deploy apps in minutes using Trinck's vibe coding platform.",
    date: "2024-01-15",
  },
  {
    slug: "building-apis",
    title: "Building REST APIs",
    excerpt: "A practical guide to creating production-ready REST APIs with Next.js.",
    date: "2024-01-10",
  },
  {
    slug: "deploying-apps",
    title: "One-Click Deployments",
    excerpt: "How to deploy your applications to Vercel with a single click.",
    date: "2024-01-05",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">My Blog</h1>
        <p className="mt-2 text-gray-600">Thoughts on code, design, and building products.</p>
      </header>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug}>
            <time className="text-sm text-gray-400">{post.date}</time>
            <h2 className="mt-1 text-xl font-semibold text-gray-900 hover:text-indigo-600">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
