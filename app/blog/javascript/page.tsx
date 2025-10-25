import Link from 'next/link'
import { getBlogPostsByCategory } from '@/lib/blog-data'

export default function JavaScriptBlogPage() {
  const posts = getBlogPostsByCategory('javascript')

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
          💻 JavaScript Programming
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Các bài viết về JavaScript và Web Development
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex justify-center mb-8 gap-4">
        <Link
          href="/blog"
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Tất cả
        </Link>
        <Link
          href="/blog/java"
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ☕ Java
        </Link>
        <Link
          href="/blog/javascript"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          💻 JavaScript ({posts.length})
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-t-4 border-blue-500"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💻</span>
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Đọc thêm →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
