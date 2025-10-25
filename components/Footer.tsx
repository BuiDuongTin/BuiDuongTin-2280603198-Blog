export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16 border-t border-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div>
            <p className="text-white font-medium mb-2">
              © 2025 Bùi Dương Tín. Mọi quyền được bảo lưu.
            </p>
            <p className="text-slate-400 text-sm">
              Sinh viên năm 4 – Chuyên ngành Công nghệ Phần mềm, HUTECH.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:tinbui.koks@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Gmail
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
