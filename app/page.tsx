import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog-data'

export default function Home() {
  const posts = getBlogPosts().slice(0, 3) // Get 3 latest posts

  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section - 2 Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-xl text-cyan-400 font-semibold animate-slide-in">
              👋 Xin chào, mình là
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="gradient-text">
                Bùi Dương Tín
              </span>
            </h1>
            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Sinh viên năm 4 – Chuyên ngành Công nghệ Phần mềm, HUTECH. Mình xây dựng blog này để chia sẻ kiến thức về Java, JavaScript và các bài tập lập trình mạng máy tính.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 animate-slide-up">
              {[
                { name: 'Java', icon: '☕' },
                { name: 'JavaScript', icon: '⚡' },
                { name: 'Web', icon: '🌐' },
                { name: 'OOP', icon: '🎯' },
                { name: 'Networking', icon: '📡' }
              ].map((tag) => (
                <Link
                  key={tag.name}
                  href={`/blog?tag=${encodeURIComponent(tag.name)}`}
                  className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-medium hover:bg-slate-700 transition-all hover:scale-105 border-2 border-transparent hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <span className="mr-1">{tag.icon}</span>
                  {tag.name}
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/blog"
                className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                <span className="inline-flex items-center gap-2">
                  📖 Xem Blog
                </span>
              </Link>
              <a
                href="https://github.com/BuiDuongTin"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold rounded-lg border-2 border-cyan-400/50 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
              >
                <span className="inline-flex items-center gap-2">
                  💻 GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-50 animate-pulse-glow bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
              {/* Profile circle */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center text-7xl md:text-9xl font-extrabold shadow-2xl border-4 border-transparent bg-clip-padding bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600"
                   style={{
                     boxShadow: '0 0 60px rgba(34, 211, 238, 0.6), 0 0 100px rgba(192, 132, 252, 0.4)'
                   }}>
                BĐT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 inline-block">
            Bài viết mới
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 stagger-children">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 border-t-4 border-transparent hover:border-cyan-400 overflow-hidden h-full flex flex-col"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-lg"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    📅 {new Date(post.date).toLocaleDateString('vi-VN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    🕒 5 phút đọc
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  <Link href={`/blog/${post.id}`} className="text-cyan-400">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full group-hover:bg-slate-600 transition-colors hover:bg-cyan-500/20 hover:text-cyan-400"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 border-2 border-slate-700 hover:border-cyan-400/50"
          >
            Xem tất cả bài viết 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
