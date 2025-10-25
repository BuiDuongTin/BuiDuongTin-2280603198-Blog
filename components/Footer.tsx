export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 mt-16 border-t border-slate-700">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-slate-900"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 gradient-text">Về tôi</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Sinh viên năm 4 – Chuyên ngành Công nghệ Phần mềm, HUTECH. 
              Chia sẻ kiến thức về lập trình Java, JavaScript và lập trình mạng.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 gradient-text">Liên kết</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  📚 Blog
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  👤 Về tôi
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  🏆 Thành tích
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 gradient-text">Kết nối</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all hover:translate-x-1 group"
              >
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  📘
                </span>
                Facebook
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all hover:translate-x-1 group"
              >
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  💻
                </span>
                GitHub
              </a>
              <a
                href="mailto:tinbui.koks@gmail.com"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all hover:translate-x-1 group"
              >
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  ✉️
                </span>
                Gmail
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-white font-medium mb-2">
            © 2025 Bùi Dương Tín. Mọi quyền được bảo lưu.
          </p>
          <p className="text-slate-500 text-sm">
            Made with 💙 using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
