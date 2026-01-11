"use client"

import { useEffect, useState } from 'react'

export function CommentContent({ html }: { html: string }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="text-gray-200 mb-4 leading-relaxed whitespace-pre-wrap">
        {html.replace(/<[^>]*>/g, '')}
      </div>
    )
  }

  return (
    <div 
      className="prose prose-invert max-w-none text-gray-200 leading-relaxed"
      dangerouslySetInnerHTML={{ 
        __html: html
          .replace(/<script/gi, '&lt;script')
          .replace(/<\/script>/gi, '&lt;/script&gt;')
          .replace(/on\w+="[^"]*"/g, '')
          .replace(/javascript:/gi, '')
      }}
    />
  )
}