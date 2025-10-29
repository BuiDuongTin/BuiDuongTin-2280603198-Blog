import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '@/lib/blog-data'
import CodeBlock from '@/components/CodeBlock'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

// Helper function to parse content with code blocks
function parseContent(content: string): Array<{ type: 'text' | 'code'; content: string; language: string }> {
  const parts: Array<{ type: 'text' | 'code'; content: string; language: string }> = []
  let currentText = ''
  let inCodeBlock = false
  let codeContent = ''
  let codeLanguage = 'text'
  
  const lines = content.split('\n')
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    if (line.trim().startsWith('```')) {
      if (!inCodeBlock) {
        // Starting code block
        if (currentText.trim()) {
          parts.push({ type: 'text', content: currentText, language: '' })
          currentText = ''
        }
        inCodeBlock = true
        codeLanguage = line.trim().substring(3).trim() || 'text'
        codeContent = ''
      } else {
        // Ending code block
        parts.push({ type: 'code', content: codeContent.trim(), language: codeLanguage })
        codeContent = ''
        codeLanguage = 'text'
        inCodeBlock = false
      }
    } else {
      if (inCodeBlock) {
        codeContent += line + '\n'
      } else {
        currentText += line + '\n'
      }
    }
  }
  
  if (currentText.trim()) {
    parts.push({ type: 'text', content: currentText, language: '' })
  }
  
  return parts
}

// Helper function to render text content
function renderTextContent(text: string) {
  const paragraphs = text.split('\n').filter(p => p.trim())
  
  return paragraphs.map((paragraph, index) => {
    // Handle headings (##)
    if (paragraph.trim().startsWith('## ')) {
      const headingText = paragraph.replace(/^##\s+/, '')
      return (
        <h2 key={index} className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
          <span className="gradient-text">{headingText}</span>
        </h2>
      )
    }
    
    // Handle subheadings (###)
    if (paragraph.trim().startsWith('### ')) {
      const headingText = paragraph.replace(/^###\s+/, '')
      return (
        <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-3">
          <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
          {headingText}
        </h3>
      )
    }
    
    // Handle list items
    if (paragraph.trim().match(/^[-*]\s+/)) {
      const listText = paragraph.replace(/^[-*]\s+/, '')
      
      // Handle bold text in list items with **
      if (listText.includes('**')) {
        const parts = listText.split('**')
        return (
          <div key={index} className="mb-3 ml-6 text-slate-200 text-lg flex items-start gap-3">
            <span className="text-cyan-400 mt-1">•</span>
            <span>
              {parts.map((part, i) => 
                i % 2 === 1 ? (
                  <strong key={i} className="text-white font-bold">
                    {part}
                  </strong>
                ) : part
              )}
            </span>
          </div>
        )
      }
      
      return (
        <div key={index} className="mb-3 ml-6 text-slate-200 text-lg flex items-start gap-3">
          <span className="text-cyan-400 mt-1">•</span>
          <span>{listText}</span>
        </div>
      )
    }
    
    // Handle inline code with backticks
    if (paragraph.includes('`') && !paragraph.includes('```')) {
      const parts = paragraph.split('`')
      return (
        <p key={index} className="mb-6 text-lg leading-relaxed text-slate-300">
          {parts.map((part, i) => 
            i % 2 === 1 ? (
              <code key={i} className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-sm font-mono">
                {part}
              </code>
            ) : part
          )}
        </p>
      )
    }
    
    // Handle bold text with **
    if (paragraph.includes('**')) {
      const parts = paragraph.split('**')
      return (
        <p key={index} className="mb-6 text-lg leading-relaxed text-slate-300">
          {parts.map((part, i) => 
            i % 2 === 1 ? (
              <strong key={i} className="text-white font-bold">
                {part}
              </strong>
            ) : part
          )}
        </p>
      )
    }
    
    // Regular paragraphs
    if (paragraph.trim()) {
      return (
        <p key={index} className="mb-6 text-lg leading-relaxed text-slate-300">
          {paragraph}
        </p>
      )
    }
    
    return null
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = getBlogPost(id)
  const allPosts = getBlogPosts()

  if (!post) {
    notFound()
  }

  // Get previous and next posts
  const currentIndex = allPosts.findIndex(p => p.id === post.id)
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  
  // Get related posts (same category, excluding current)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2)

  // Deterministic view count based on post ID
  const getViewCount = (postId: string) => {
    const hash = postId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return 100 + (hash % 400)
  }
  
  // Parse content
  const contentParts = parseContent(post.content)

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Header with Gradient */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-all hover:-translate-x-1"
          >
            <span>←</span> Quay lại Blog
          </Link>

          {/* Post Header */}
          <article className="animate-fade-in max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="gradient-text">{post.title}</span>
            </h1>

            {/* Meta bar with icons */}
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
              <span className="flex items-center gap-2 text-slate-400">
                📅 {new Date(post.date).toLocaleDateString('vi-VN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                👤 Bùi Dương Tín
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                📊 {getViewCount(post.id)} lượt xem
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 glass text-cyan-400 text-sm rounded-full font-medium backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                >
                  🏷️ {tag}
                </span>
              ))}
            </div>

            {/* Excerpt with gradient border */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
              <p className="text-xl text-slate-300 pl-6 py-2 italic">
                {post.excerpt}
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Share buttons */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-800">
          <span className="text-slate-400 text-sm font-medium">Chia sẻ:</span>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            📘 Facebook
          </button>
          <button className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white text-sm rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30">
            🐦 Twitter
          </button>
          <button className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white text-sm rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            💼 LinkedIn
          </button>
        </div>

        {/* Post Content with improved typography */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="leading-relaxed text-slate-300 space-y-6">
            {contentParts.map((part, index) => {
              if (part.type === 'code') {
                return (
                  <CodeBlock 
                    key={index} 
                    code={part.content} 
                    language={part.language} 
                  />
                )
              } else {
                return (
                  <div key={index}>
                    {renderTextContent(part.content)}
                  </div>
                )
              }
            })}
          </div>
        </div>

        {/* Gradient separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-12"></div>

        {/* Author Section */}
        <div className="my-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
            Về tác giả
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full blur-lg opacity-50"></div>
              <img
                src="/BuiDuongTin-2280603198-Blog/images/chandung.jpg"
                alt="Bùi Dương Tín"
                className="relative w-24 h-24 rounded-full object-cover object-top border-4 border-cyan-400"
              />
            </div>
            
            {/* Author info */}
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">Bùi Dương Tín</h4>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Sinh viên Khoa học Máy tính, đam mê lập trình mạng và phát triển ứng dụng. 
                Chuyên về Java, JavaScript và các công nghệ web hiện đại. 
                Thích chia sẻ kiến thức và học hỏi từ cộng đồng.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/BuiDuongTin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-all hover:scale-105 flex items-center gap-2"
                >
                  <span>💻</span> GitHub
                </a>
                <Link 
                  href="/profile" 
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm rounded-lg transition-all hover:scale-105 flex items-center gap-2"
                >
                  <span>👤</span> Xem Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-12"></div>
            
            <div className="my-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
                Bài viết liên quan
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border-t-4 border-cyan-400 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-cyan-400 text-xs mb-2 font-medium uppercase">
                        <span>{relatedPost.category}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>📅 {new Date(relatedPost.date).toLocaleDateString('vi-VN')}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Gradient separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-12"></div>

        {/* Navigation Cards - Previous/Next with enhanced design */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevPost && (
            <Link
              href={`/blog/${prevPost.id}`}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-cyan-400 text-sm mb-3 font-medium">
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  Bài trước
                </div>
                <div className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {prevPost.title}
                </div>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.id}`}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 text-right overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-end gap-2 text-cyan-400 text-sm mb-3 font-medium">
                  Bài sau
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <div className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {nextPost.title}
                </div>
              </div>
            </Link>
          )}
        </div>
        
        {/* Back to Blog List Button */}
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <span>📚</span> Quay lại danh sách bài viết
          </Link>
        </div>
      </div>
    </div>
  )
}
