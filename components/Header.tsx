import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm border-b-2 border-blue-400">
      <div className="container mx-auto px-4 py-5">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              BĐT
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight group-hover:text-yellow-300 transition-colors duration-300">
                Bùi Dương Tín
              </span>
              <span className="text-sm text-blue-100 font-medium">
                Blog Lập Trình Mạng
              </span>
            </div>
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 hover:text-yellow-300 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
              >
                <span className="text-xl">🏠</span>
                <span>Trang chủ</span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 hover:text-yellow-300 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
              >
                <span className="text-xl">📝</span>
                <span>Blog</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
