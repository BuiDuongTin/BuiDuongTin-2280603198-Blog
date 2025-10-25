import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold hover:text-cyan-400 transition-colors">
            Bùi Dương Tín - Blog cá nhân
          </Link>
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <Link
                href="/blog"
                className="hover:text-cyan-400 transition-colors font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-cyan-400 transition-colors font-medium"
              >
                Về tôi
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-cyan-400 transition-colors font-medium"
              >
                Thành tích
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
