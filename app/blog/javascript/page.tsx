import Link from 'next/link'
import { getBlogPostsByCategory } from '@/lib/blog-data'

export default function JavaScriptBlogPage() {
  const posts = getBlogPostsByCategory('javascript')

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 animate-fade-in">
        <div className="text-7xl mb-6">💻</div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          JavaScript Programming
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
          Khám phá thế giới JavaScript, DOM, Async/Await và Web Development hiện đại
        </p>
        <div className="mt-6 inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold border-2 border-yellow-200">
          <span className="text-2xl">📚</span>
          <span>{posts.length} bài viết JavaScript</span>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex justify-center mb-12 gap-6 flex-wrap">
        <Link
          href="/blog"
          className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-bold text-lg hover:scale-105 border-2 border-gray-200"
        >
          Tất cả
        </Link>
        <Link
          href="/blog/java"
          className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl font-bold text-lg hover:scale-105 border-2 border-gray-200"
        >
          <span className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <span>Java</span>
          </span>
        </Link>
        <Link
          href="/blog/javascript"
          className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl shadow-2xl shadow-yellow-500/50 transition-all duration-300 font-bold text-lg scale-105 border-2 border-yellow-400"
        >
          <span className="flex items-center gap-2">
            <span className="text-2xl">💻</span>
            <span>JavaScript</span>
            <span className="bg-white text-yellow-600 px-3 py-1 rounded-full text-sm font-bold">{posts.length}</span>
          </span>
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden border-t-4 border-blue-500 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">💻</span>
                <span className="text-sm text-gray-500 bg-blue-100 px-4 py-2 rounded-full font-semibold">
                  {new Date(post.date).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-base">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm rounded-full font-semibold border border-blue-200 hover:scale-105 transition-transform"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-all group-hover:gap-4 text-lg"
              >
                <span>Đọc thêm</span>
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Back to all posts */}
      <div className="mt-20 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300"
        >
          <span className="text-2xl">←</span>
          <span>Xem tất cả bài viết</span>
        </Link>
      </div>
    </div>
  )
}
