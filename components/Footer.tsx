export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Liên hệ</h3>
            <div className="space-y-2">
              <p>
                🌐 Facebook:{' '}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  facebook.com
                </a>
              </p>
              <p>
                💻 GitHub:{' '}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  github.com
                </a>
              </p>
              <p>
                📧 Gmail:{' '}
                <a
                  href="mailto:tinbui.koks@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  tinbui.koks@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © 2025 Bùi Dương Tín - Blog Lập Trình Mạng
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Sinh viên năm 4 - Công nghệ Phần mềm
            </p>
            <p className="text-sm text-gray-400">
              Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
