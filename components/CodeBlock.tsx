'use client'

import { useState } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import java from 'react-syntax-highlighter/dist/cjs/languages/hljs/java'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'

// Register languages
SyntaxHighlighter.registerLanguage('java', java)
SyntaxHighlighter.registerLanguage('javascript', javascript)

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      // Fallback for browsers that don't support clipboard API
      console.warn('Failed to copy to clipboard:', error)
      // Could show an error toast here if needed
    }
  }

  return (
    <div className="relative my-6 group">
      {/* Language badge */}
      <div className="absolute top-0 left-0 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-tl-lg rounded-br-lg z-10">
        {language}
      </div>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium rounded-md transition-all duration-200 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <span>✓</span>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <span>📋</span>
            <span>Copy</span>
          </>
        )}
      </button>

      {/* Code block with gradient border */}
      <div className="relative rounded-lg overflow-hidden">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg" style={{ padding: '2px' }}>
          <div className="bg-slate-900 rounded-lg h-full"></div>
        </div>
        
        {/* Code content */}
        <div className="relative">
          <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              borderRadius: '0.5rem',
            }}
            showLineNumbers={false}
            wrapLines={true}
            wrapLongLines={true}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
