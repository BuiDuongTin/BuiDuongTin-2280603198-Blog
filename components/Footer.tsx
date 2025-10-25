export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-20 border-t-4 border-blue-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                BĐT
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bùi Dương Tín</h3>
                <p className="text-sm text-blue-300">Software Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Blog cá nhân chia sẻ kiến thức về lập trình Java, JavaScript và lập trình mạng. 
              Mục tiêu trở thành Software Engineer chuyên nghiệp.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span className="text-blue-400">🔗</span>
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Blog
                </a>
              </li>
              <li>
                <a href="/blog/java" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Java Posts
                </a>
              </li>
              <li>
                <a href="/blog/javascript" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  JavaScript Posts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span className="text-blue-400">📧</span>
              Liên hệ
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all duration-300 group p-2 rounded-lg hover:bg-blue-950"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">🌐</span>
                <span>Facebook</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-all duration-300 group p-2 rounded-lg hover:bg-purple-950"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">💻</span>
                <span>GitHub</span>
              </a>
              <a
                href="mailto:tinbui.koks@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-all duration-300 group p-2 rounded-lg hover:bg-red-950"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
                <span>tinbui.koks@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Bùi Dương Tín - Blog Lập Trình Mạng. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Sinh viên năm 4 - Công nghệ Phần mềm | Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)
          </p>
          <div className="mt-4 flex justify-center gap-2 text-xs text-gray-600">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse-subtle">❤️</span>
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
