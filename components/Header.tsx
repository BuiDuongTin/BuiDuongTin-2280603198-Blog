import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold hover:text-cyan-400 transition-all duration-300 group"
          >
            <span className="gradient-text">Bùi Dương Tín</span>
            <span className="text-slate-400 ml-2 text-sm md:text-base">- Blog cá nhân</span>
          </Link>
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <Link
                href="/blog"
                className="relative font-medium text-slate-200 hover:text-cyan-400 transition-colors duration-300 group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="relative font-medium text-slate-200 hover:text-cyan-400 transition-colors duration-300 group"
              >
                Về tôi
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="relative font-medium text-slate-200 hover:text-cyan-400 transition-colors duration-300 group"
              >
                Liên hệ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
