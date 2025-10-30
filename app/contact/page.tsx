import Link from 'next/link'

const EMAIL = 'tinbui.koks@gmail.com'

export default function ContactPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="gradient-text">Liên hệ</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <div className="mt-6">
              <p className="text-xl md:text-2xl text-slate-300 font-medium">
                Hãy liên lạc với mình nếu bạn có bất kỳ câu hỏi nào!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-3xl">✉️</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text">Email</h3>
              <a
                href={`mailto:${EMAIL}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
              >
                {EMAIL}
              </a>
              <p className="text-slate-400 text-sm">
                Gửi email cho mình bất cứ lúc nào!
              </p>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text">GitHub</h3>
              <a
                href="https://github.com/BuiDuongTin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
              >
                @BuiDuongTin
              </a>
              <p className="text-slate-400 text-sm">
                Xem các dự án của mình trên GitHub
              </p>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
            Các kênh liên lạc khác
            <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📘</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Facebook</h4>
                <p className="text-sm text-slate-400">Kết nối qua Facebook</p>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Gmail</h4>
                <p className="text-sm text-slate-400">Gửi email trực tiếp</p>
              </div>
            </a>
          </div>
        </div>

        {/* Message Section */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
          <div className="text-center space-y-6">
            <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full">
              <span className="text-5xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold">
              Cảm ơn bạn đã ghé thăm!
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Mình luôn sẵn lòng trả lời câu hỏi, trao đổi về lập trình hoặc thảo luận về các dự án. 
              Đừng ngần ngại liên hệ với mình qua email hoặc các kênh mạng xã hội!
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/blog"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                📖 Xem Blog
              </Link>
              <Link
                href="/profile"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold rounded-lg border-2 border-cyan-400/50 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
              >
                👤 Về tôi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
