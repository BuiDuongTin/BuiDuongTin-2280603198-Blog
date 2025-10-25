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
  const allPosts = getBlogPosts()

  if (!post) {
    notFound()
  }

  // Get previous and next posts
  const currentIndex = allPosts.findIndex(p => p.id === post.id)
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          ← Quay lại Blog
        </Link>

        {/* Post Header */}
        <article className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-slate-400 text-sm">
                {new Date(post.date).toLocaleDateString('vi-VN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xl text-slate-300 mb-8 italic border-l-4 border-cyan-400 pl-4">
              {post.excerpt}
            </p>
          </div>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none text-slate-300">
            <div
              className="leading-relaxed"
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
                    <p key={index} className="mb-4 text-slate-300">
                      {parts.map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                      )}
                    </p>
                  )
                }

                // Handle list items
                if (paragraph.trim().match(/^\d+\./)) {
                  return (
                    <p key={index} className="mb-2 ml-4 font-semibold text-slate-200">
                      {paragraph}
                    </p>
                  )
                }

                // Regular paragraphs
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4 text-slate-300">
                      {paragraph}
                    </p>
                  )
                }

                return <br key={index} />
              })}
            </div>
          </div>
        </article>

        {/* Navigation Posts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevPost && (
            <Link
              href={`/blog/${prevPost.id}`}
              className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all hover:scale-105"
            >
              <div className="text-slate-400 text-sm mb-2">← Bài trước</div>
              <div className="text-cyan-400 font-semibold line-clamp-2">
                {prevPost.title}
              </div>
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.id}`}
              className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all hover:scale-105 text-right"
            >
              <div className="text-slate-400 text-sm mb-2">Bài sau →</div>
              <div className="text-cyan-400 font-semibold line-clamp-2">
                {nextPost.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
