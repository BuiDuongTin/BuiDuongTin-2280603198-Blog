import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-fade-in">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
            BĐT
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Bùi Dương Tín
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Sinh viên năm 4 – Chuyên ngành Công nghệ Phần mềm
          </p>
          <p className="text-lg text-gray-500">
            Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Chào mừng đến với Blog của tôi! 👋
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Đây là nơi tôi chia sẻ kiến thức và kinh nghiệm học tập về lập trình,
            đặc biệt là các chủ đề liên quan đến <strong>Java</strong>, <strong>JavaScript</strong> và{' '}
            <strong>Lập trình mạng</strong>. Hy vọng những bài viết của tôi sẽ hữu ích
            cho bạn trong hành trình học tập và phát triển kỹ năng lập trình!
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          📚 Xem các bài viết →
        </Link>
      </section>

      {/* Skills Section */}
      <section className="mb-16 animate-slide-in">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Kỹ năng & Công nghệ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-500">
            <div className="text-4xl mb-4 text-center">☕</div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">Java</h3>
            <p className="text-gray-600 text-center">
              OOP, Collections, Multithreading, Java Network Programming
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-yellow-500">
            <div className="text-4xl mb-4 text-center">💻</div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">JavaScript</h3>
            <p className="text-gray-600 text-center">
              ES6+, DOM, Async/Await, Fetch API, React, Node.js
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <div className="text-4xl mb-4 text-center">🌐</div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">Lập trình mạng</h3>
            <p className="text-gray-600 text-center">
              TCP/IP, HTTP, Socket Programming, RESTful API
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Liên hệ với tôi</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            🌐 Facebook
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg"
          >
            💻 GitHub
          </a>
          <a
            href="mailto:tinbui.koks@gmail.com"
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
          >
            📧 Gmail
          </a>
        </div>
      </section>

      {/* Goals Section */}
      <section className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg shadow-lg animate-slide-in">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          🎯 Mục tiêu nghề nghiệp
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Trở thành một Software Engineer chuyên nghiệp với kiến thức vững chắc về
          phát triển phần mềm, đặc biệt trong lĩnh vực lập trình mạng và ứng dụng web.
          Tôi mong muốn được đóng góp vào các dự án công nghệ thực tế và không ngừng
          học hỏi để phát triển kỹ năng của bản thân.
        </p>
      </section>
    </div>
  )
}
