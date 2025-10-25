import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog-data'

export default function BlogPage() {
  const posts = getBlogPosts()
  
  // Get all unique tags from posts with counts
  const tagCounts = posts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {} as Record<string, number>)
  
  const allTags = Object.keys(tagCounts).sort()

  // Get category icons
  const getCategoryIcon = (post: any) => {
    if (post.category === 'java') return '☕'
    if (post.category === 'javascript') return '⚡'
    return '📝'
  }

  // Deterministic stats based on post ID
  const getPostStats = (postId: string) => {
    const hash = postId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return {
      views: 100 + (hash % 400),
      likes: 10 + (hash % 50),
      comments: 2 + (hash % 20)
    }
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-12 border border-slate-700">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.15) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="gradient-text">Blog</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Nhật ký học tập và chia sẻ thực hành: <span className="text-cyan-400 font-semibold">Java</span> • <span className="text-cyan-400 font-semibold">JavaScript</span> • <span className="text-cyan-400 font-semibold">Lập trình mạng</span>
            </p>
          </div>
        </div>

        {/* Filter Tags Section */}
        <div className="mb-12 animate-slide-up">
          <div className="flex flex-wrap gap-3 justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                className="group relative px-6 py-3 glass text-slate-300 hover:text-white rounded-lg text-sm font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {tag}
                  <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-bold">
                    {tagCounts[tag]}
                  </span>
                </span>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group relative bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Top gradient border */}
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
              
              {/* Thumbnail placeholder with gradient */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {getCategoryIcon(post)}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-xs font-bold text-cyan-400 backdrop-blur-md">
                  {post.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-sm flex items-center gap-1">
                    📅 {new Date(post.date).toLocaleDateString('vi-VN', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    🕒 5 phút
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors min-h-[3.5rem]">
                  <Link href={`/blog/${post.id}`} className="text-cyan-400">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-300 mb-4 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>

                {/* Gradient separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4"></div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full group-hover:bg-slate-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-3 py-1 bg-slate-700 text-slate-400 text-xs rounded-full">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Stats (deterministic based on post ID) */}
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">👁️ {getPostStats(post.id).views}</span>
                  <span className="flex items-center gap-1">❤️ {getPostStats(post.id).likes}</span>
                  <span className="flex items-center gap-1">💬 {getPostStats(post.id).comments}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
