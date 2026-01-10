"use client"

import { useState } from "react"
import { addReply } from "@/lib/actions"

type ReplyFormProps = {
  commentId: string
  onSuccess?: () => void
}

export function ReplyForm({ commentId, onSuccess }: ReplyFormProps) {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim() || isSubmitting) return

    setIsSubmitting(true)
    
    try {
      await addReply({
        author: "Anon",
        content,
        commentId,
      })
      
      setContent("")
      if (onSuccess) onSuccess()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Napisz odpowiedź..."
        required
        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows={3}
      />
      
      <div className="flex justify-end gap-2 mt-2">
        <button
          type="button"
          onClick={() => onSuccess?.()}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
        >
          Anuluj
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Wysyłanie..." : "Wyślij odpowiedź"}
        </button>
      </div>
    </form>
  )
}