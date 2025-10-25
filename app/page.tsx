import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog-data'

export default function Home() {
  const posts = getBlogPosts().slice(0, 3) // Get 3 latest posts

  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section - 2 Column Layout */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Xin chào, mình là <span className="text-cyan-400">Bùi Dương Tín</span> 👋
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Sinh viên năm 4 – Chuyên ngành Công nghệ Phần mềm, HUTECH. Mình xây dựng blog này để chia sẻ kiến thức về Java, JavaScript và các bài tập lập trình mạng máy tính.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {['Java', 'JavaScript', 'Networking', 'OOP', 'Web'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/blog"
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all"
              >
                Xem Blog
              </Link>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-8xl md:text-9xl font-bold shadow-2xl shadow-cyan-500/50 border-4 border-cyan-400">
                BĐT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Bài viết mới
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

              <h3 className="text-xl font-bold mb-3 hover:text-cyan-300 transition-colors">
                <Link href={`/blog/${post.id}`} className="text-cyan-400">
                  {post.title}
                </Link>
              </h3>

              <p className="text-slate-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
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

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold rounded-lg transition-all hover:scale-105"
          >
            Xem tất cả bài viết →
          </Link>
        </div>
      </section>
    </div>
  )
}
