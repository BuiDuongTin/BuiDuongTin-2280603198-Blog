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

  // Deterministic view count based on post ID
  const getViewCount = (postId: string) => {
    const hash = postId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return 100 + (hash % 400)
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Header with Gradient */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-all hover:-translate-x-1"
          >
            <span>←</span> Quay lại Blog
          </Link>

          {/* Post Header */}
          <article className="animate-fade-in max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="gradient-text">{post.title}</span>
            </h1>

            {/* Meta bar with icons */}
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
              <span className="flex items-center gap-2 text-slate-400">
                📅 {new Date(post.date).toLocaleDateString('vi-VN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                👤 Bùi Dương Tín
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                🕒 5 phút đọc
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                📊 {getViewCount(post.id)} lượt xem
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 glass text-cyan-400 text-sm rounded-full font-medium backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                >
                  🏷️ {tag}
                </span>
              ))}
            </div>

            {/* Excerpt with gradient border */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
              <p className="text-xl text-slate-300 pl-6 py-2 italic">
                {post.excerpt}
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Share buttons */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-800">
          <span className="text-slate-400 text-sm font-medium">Chia sẻ:</span>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            📘 Facebook
          </button>
          <button className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white text-sm rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30">
            🐦 Twitter
          </button>
          <button className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white text-sm rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            💼 LinkedIn
          </button>
        </div>

        {/* Post Content with improved typography */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="leading-relaxed text-slate-300 space-y-6">
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
                  <p key={index} className="mb-6 text-lg leading-relaxed">
                    {parts.map((part, i) => 
                      i % 2 === 1 ? (
                        <strong key={i} className="text-white font-bold bg-gradient-to-r from-cyan-400/10 to-blue-400/10 px-1 rounded">
                          {part}
                        </strong>
                      ) : part
                    )}
                  </p>
                )
              }

              // Handle list items
              if (paragraph.trim().match(/^\d+\./)) {
                return (
                  <p key={index} className="mb-3 ml-6 text-slate-200 text-lg font-medium flex items-start gap-3">
                    <span className="text-cyan-400">•</span>
                    {paragraph}
                  </p>
                )
              }

              // Handle headings (if text ends with :)
              if (paragraph.trim().endsWith(':') && paragraph.trim().length < 100) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
                    {paragraph}
                  </h3>
                )
              }

              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-6 text-lg leading-relaxed text-slate-300">
                    {paragraph}
                  </p>
                )
              }

              return <div key={index} className="h-4"></div>
            })}
          </div>
        </div>

        {/* Gradient separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-12"></div>

        {/* Navigation Cards - Previous/Next with enhanced design */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevPost && (
            <Link
              href={`/blog/${prevPost.id}`}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-cyan-400 text-sm mb-3 font-medium">
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  Bài trước
                </div>
                <div className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {prevPost.title}
                </div>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.id}`}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 text-right overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-end gap-2 text-cyan-400 text-sm mb-3 font-medium">
                  Bài sau
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <div className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {nextPost.title}
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
