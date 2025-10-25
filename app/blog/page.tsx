import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog-data'

export default function BlogPage() {
  const posts = getBlogPosts()
  
  // Get all unique tags from posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags))).sort()

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Blog
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nhật ký học tập và chia sẻ thực hành: Java • JavaScript • Lập trình mạng
          </p>
        </div>

        {/* Filter Tags Section */}
        <div className="mb-12 animate-fade-in">
          <div className="flex flex-wrap gap-3 justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-sm font-medium transition-all hover:scale-105 hover:border-cyan-400 border-2 border-transparent"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="mb-3">
                <span className="text-slate-400 text-sm">
                  {new Date(post.date).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-3 hover:text-cyan-300 transition-colors">
                <Link href={`/blog/${post.id}`} className="text-cyan-400">
                  {post.title}
                </Link>
              </h2>

              <p className="text-slate-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
