import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:scale-105 transition-transform">
            Bùi Dương Tín – Blog Lập Trình Mạng
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 transition-colors font-medium"
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-yellow-300 transition-colors font-medium"
              >
                📝 Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
