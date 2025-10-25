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
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
      >
        ← Quay lại Blog
      </Link>

      {/* Post Header */}
      <article className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">
              {post.category === 'java' ? '☕' : '💻'}
            </span>
            <div>
              <span className="text-sm text-gray-500 block">
                {new Date(post.date).toLocaleDateString('vi-VN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {post.category === 'java' ? 'Java' : 'JavaScript'}
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 italic">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-2 text-sm rounded-full font-medium ${
                  post.category === 'java'
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

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
      </article>

      {/* Related Posts Navigation */}
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          ← Xem tất cả bài viết
        </Link>
        <Link
          href={post.category === 'java' ? '/blog/java' : '/blog/javascript'}
          className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          Xem thêm về {post.category === 'java' ? 'Java' : 'JavaScript'} →
        </Link>
      </div>

      {/* Comments Section (placeholder) */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center text-gray-500">
        <p className="text-lg">💬 Khu vực bình luận (Coming soon)</p>
      </div>
    </div>
  )
}
