import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}
