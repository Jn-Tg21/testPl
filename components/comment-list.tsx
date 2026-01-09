"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageCircle } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { pl } from "date-fns/locale"
import type { Comment } from "@/lib/types"

interface CommentListProps {
  comments: Comment[]
  onLike: (commentId: string, replyId?: string) => void
  onReply: (commentId: string, reply: { author: string; content: string }) => void
}

export function CommentList({ comments, onLike, onReply }: CommentListProps) {
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyAuthor, setReplyAuthor] = useState("")
  const [replyContent, setReplyContent] = useState("")

  const handleReplySubmit = (commentId: string) => {
    if (replyAuthor.trim() && replyContent.trim()) {
      onReply(commentId, { author: replyAuthor, content: replyContent })
      setReplyAuthor("")
      setReplyContent("")
      setReplyingTo(null)
    }
  }

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Wygrana":
        return "default"
      case "Przegrana":
        return "destructive"
      case "Strategia":
        return "secondary"
      case "Pytanie":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {comments.map((comment) => (
        <Card
          key={comment.id}
          className="border-2 border-border/50 bg-gradient-to-br from-card to-card/95 hover:border-primary/30 transition-all duration-300 shadow-md"
        >
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-success text-primary-foreground font-bold text-sm sm:text-base shadow-lg">
                  {comment.author.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base text-foreground truncate">{comment.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(comment.date), { addSuffix: true, locale: pl })}
                  </p>
                </div>
              </div>
              <Badge variant={getBadgeVariant(comment.type)} className="self-start text-xs sm:text-sm">
                {comment.type}
              </Badge>
            </div>

            <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">{comment.content}</p>

            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors h-8 sm:h-9 text-xs sm:text-sm"
                onClick={() => onLike(comment.id)}
              >
                <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                {comment.likes > 0 && <span>{comment.likes}</span>}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors h-8 sm:h-9 text-xs sm:text-sm"
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              >
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                {"Odpowiedz"}
              </Button>
            </div>

            {replyingTo === comment.id && (
              <div className="mt-4 space-y-3 pl-3 sm:pl-4 border-l-2 border-primary/50">
                <Input
                  placeholder="Twój pseudonim"
                  value={replyAuthor}
                  onChange={(e) => setReplyAuthor(e.target.value)}
                  className="bg-background border-border text-sm sm:text-base h-9 sm:h-10"
                />
                <Input
                  placeholder="Twoja odpowiedź..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="bg-background border-border text-sm sm:text-base h-9 sm:h-10"
                />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleReplySubmit(comment.id)}
                    className="h-8 sm:h-9 text-xs sm:text-sm"
                  >
                    {"Wyślij"}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setReplyingTo(null)}
                    className="h-8 sm:h-9 text-xs sm:text-sm"
                  >
                    {"Anuluj"}
                  </Button>
                </div>
              </div>
            )}

            {comment.replies.length > 0 && (
              <div className="mt-4 space-y-2 sm:space-y-3 pl-3 sm:pl-4 border-l-2 border-primary/50">
                {comment.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="bg-secondary/60 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-success text-primary-foreground text-xs sm:text-sm font-bold shadow-md">
                        {reply.author.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-foreground truncate">{reply.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(reply.date), { addSuffix: true, locale: pl })}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-2">{reply.content}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-primary h-7 sm:h-8 text-xs"
                      onClick={() => onLike(comment.id, reply.id)}
                    >
                      <ThumbsUp className="h-3 w-3" />
                      {reply.likes > 0 && <span>{reply.likes}</span>}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
