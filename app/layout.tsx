import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bùi Dương Tín - Blog Lập Trình Mạng',
  description: 'Blog cá nhân chia sẻ kiến thức về lập trình Java, JavaScript và lập trình mạng',
  keywords: ['lập trình Java', 'JavaScript', 'lập trình mạng', 'blog lập trình', 'HUTECH'],
  authors: [{ name: 'Bùi Dương Tín' }],
  openGraph: {
    title: 'Bùi Dương Tín - Blog Lập Trình Mạng',
    description: 'Blog cá nhân chia sẻ kiến thức về lập trình Java, JavaScript và lập trình mạng',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
