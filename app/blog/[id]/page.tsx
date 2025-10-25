import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '@/lib/blog-data'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-10 transition-all hover:gap-3 font-semibold text-lg group"
      >
        <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
        <span>Quay lại Blog</span>
      </Link>

      {/* Post Header */}
      <article className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 mb-12 animate-fade-in border-t-4" style={{
        borderTopColor: post.category === 'java' ? '#f59e0b' : '#3b82f6'
      }}>
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">
              {post.category === 'java' ? '☕' : '💻'}
            </span>
            <div>
              <span className="text-base text-gray-500 block mb-1 font-medium">
                {new Date(post.date).toLocaleDateString('vi-VN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                post.category === 'java' 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {post.category === 'java' ? '☕ Java' : '💻 JavaScript'}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 italic leading-relaxed border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-5 py-2 text-sm rounded-full font-semibold shadow-md hover:scale-105 transition-transform ${
                  post.category === 'java'
                    ? 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-2 border-orange-200'
                    : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-2 border-blue-200'
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="my-10 border-gray-300" />

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <div
            className="text-gray-700 leading-relaxed"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {post.content.split('\n').map((paragraph, index) => {
              // Handle code blocks
              if (paragraph.trim().startsWith('```')) {
                const isStart = paragraph.includes('```') && !paragraph.endsWith('```')
                if (isStart) {
                  return null // Skip opening tag, handled separately
                }
                return null
              }
              
              // Handle bold text with **
              if (paragraph.includes('**')) {
                const parts = paragraph.split('**')
                return (
                  <p key={index} className="mb-4">
                    {parts.map((part, i) => 
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </p>
                )
              }

              // Handle list items
              if (paragraph.trim().match(/^\d+\./)) {
                return (
                  <p key={index} className="mb-2 ml-4 font-semibold text-gray-800">
                    {paragraph}
                  </p>
                )
              }

              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                )
              }

              return <br key={index} />
            })}
          </div>
        </div>

        {/* Reading time and share */}
        <div className="mt-10 pt-8 border-t-2 border-gray-200 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-2xl">📖</span>
            <span className="font-semibold">Cảm ơn bạn đã đọc!</span>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg">
              👍 Hữu ích
            </button>
            <button className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold shadow-md">
              🔖 Lưu
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/blog"
          className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl group-hover:-translate-x-2 transition-transform">←</span>
            <span className="text-xl font-bold">Tất cả bài viết</span>
          </div>
          <p className="text-blue-100">Khám phá thêm nhiều bài viết khác</p>
        </Link>
        <Link
          href={post.category === 'java' ? '/blog/java' : '/blog/javascript'}
          className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
        >
          <div className="flex items-center gap-3 mb-2 justify-end">
            <span className="text-xl font-bold">Bài viết {post.category === 'java' ? 'Java' : 'JavaScript'}</span>
            <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
          </div>
          <p className="text-purple-100 text-right">Xem thêm về {post.category === 'java' ? 'Java' : 'JavaScript'}</p>
        </Link>
      </div>

      {/* Comments Section (placeholder) */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl p-12 text-center border-2 border-gray-200">
        <div className="text-6xl mb-4">💬</div>
        <p className="text-2xl font-bold text-gray-700 mb-2">Khu vực thảo luận</p>
        <p className="text-gray-500">Tính năng bình luận sẽ được cập nhật trong thời gian tới</p>
      </div>
    </div>
  )
}
