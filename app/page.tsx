import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20 animate-fade-in">
        <div className="mb-10">
          <div className="w-56 h-56 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 flex items-center justify-center text-white text-7xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 border-4 border-white">
            BĐT
          </div>
          <h1 className="text-6xl font-extrabold mb-5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-pulse-subtle">
            Bùi Dương Tín
          </h1>
          <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-3 rounded-full mb-3 border-2 border-blue-200">
            <p className="text-xl text-blue-800 font-semibold">
              🎓 Sinh viên năm 4 – Chuyên ngành Công nghệ Phần mềm
            </p>
          </div>
          <p className="text-lg text-gray-600 font-medium">
            📍 Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10 bg-white rounded-2xl shadow-xl p-10 border-t-4 border-blue-600">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 flex items-center justify-center gap-3">
            <span className="text-5xl">👋</span>
            Chào mừng đến với Blog của tôi!
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Đây là nơi tôi chia sẻ kiến thức và kinh nghiệm học tập về lập trình,
            đặc biệt là các chủ đề liên quan đến <strong className="text-blue-600">Java</strong>, <strong className="text-blue-600">JavaScript</strong> và{' '}
            <strong className="text-blue-600">Lập trình mạng</strong>.
          </p>
          <p className="text-lg text-gray-600 italic">
            💡 Hy vọng những bài viết của tôi sẽ hữu ích cho bạn trong hành trình học tập 
            và phát triển kỹ năng lập trình!
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 border-2 border-blue-400"
        >
          <span className="text-3xl">📚</span>
          <span>Khám phá các bài viết</span>
          <span className="text-2xl">→</span>
        </Link>
      </section>

      {/* Skills Section */}
      <section className="mb-20 animate-slide-in">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center gap-3">
          <span className="text-5xl">⚡</span>
          Kỹ năng & Công nghệ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-3 border-t-4 border-red-500 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">☕</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Java</h3>
            <div className="space-y-2">
              <p className="text-gray-700 text-center font-medium">✓ OOP Programming</p>
              <p className="text-gray-700 text-center font-medium">✓ Collections Framework</p>
              <p className="text-gray-700 text-center font-medium">✓ Multithreading</p>
              <p className="text-gray-700 text-center font-medium">✓ Network Programming</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-3 border-t-4 border-yellow-500 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">💻</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">JavaScript</h3>
            <div className="space-y-2">
              <p className="text-gray-700 text-center font-medium">✓ ES6+ Features</p>
              <p className="text-gray-700 text-center font-medium">✓ DOM Manipulation</p>
              <p className="text-gray-700 text-center font-medium">✓ Async/Await & Promises</p>
              <p className="text-gray-700 text-center font-medium">✓ React & Node.js</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-3 border-t-4 border-blue-500 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Lập trình mạng</h3>
            <div className="space-y-2">
              <p className="text-gray-700 text-center font-medium">✓ TCP/IP Protocol</p>
              <p className="text-gray-700 text-center font-medium">✓ HTTP/HTTPS</p>
              <p className="text-gray-700 text-center font-medium">✓ Socket Programming</p>
              <p className="text-gray-700 text-center font-medium">✓ RESTful API Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl shadow-2xl p-12 text-white animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="text-6xl font-bold mb-2">9+</div>
            <div className="text-xl font-semibold text-blue-100">Bài viết Blog</div>
          </div>
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="text-6xl font-bold mb-2">2</div>
            <div className="text-xl font-semibold text-blue-100">Chủ đề chính</div>
          </div>
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="text-6xl font-bold mb-2">∞</div>
            <div className="text-xl font-semibold text-blue-100">Học hỏi & Phát triển</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 flex items-center justify-center gap-3">
          <span className="text-5xl">📬</span>
          Liên hệ với tôi
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-semibold text-lg"
          >
            <span className="text-2xl">🌐</span>
            Facebook
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-semibold text-lg"
          >
            <span className="text-2xl">💻</span>
            GitHub
          </a>
          <a
            href="mailto:tinbui.koks@gmail.com"
            className="flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-semibold text-lg"
          >
            <span className="text-2xl">📧</span>
            Gmail
          </a>
        </div>
      </section>

      {/* Goals Section */}
      <section className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-12 rounded-3xl shadow-2xl animate-slide-in border-2 border-blue-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center flex items-center justify-center gap-3">
          <span className="text-5xl">🎯</span>
          Mục tiêu nghề nghiệp
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p className="flex items-start gap-3">
            <span className="text-2xl mt-1">🚀</span>
            <span>
              Trở thành một <strong>Software Engineer chuyên nghiệp</strong> với kiến thức vững chắc về
              phát triển phần mềm, đặc biệt trong lĩnh vực lập trình mạng và ứng dụng web.
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-2xl mt-1">💼</span>
            <span>
              Tham gia vào các dự án công nghệ thực tế, áp dụng kiến thức đã học để giải quyết
              các vấn đề thực tế và tạo ra giá trị cho người dùng.
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-2xl mt-1">📈</span>
            <span>
              Không ngừng học hỏi và cập nhật các công nghệ mới, phát triển kỹ năng và
              trở thành một developer có khả năng làm việc với nhiều công nghệ khác nhau.
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}
