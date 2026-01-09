"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Sparkles } from "lucide-react"
import type { CommentType } from "@/lib/types"

interface CommentFormProps {
  onSubmit: (comment: { author: string; content: string; type: CommentType }) => void
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [type, setType] = useState<CommentType>("Pytanie")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (author.trim() && content.trim()) {
      onSubmit({ author, content, type })
      setAuthor("")
      setContent("")
      setType("Pytanie")
    }
  }

  return (
    <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-card/95 mb-6 sm:mb-8 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4 sm:mb-5">
          <Sparkles className="h-5 w-5 text-accent" />
          <h4 className="font-bold text-base sm:text-lg text-foreground">{"Dodaj swój komentarz"}</h4>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <Input
              placeholder="Twój pseudonim"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="bg-background border-border focus:border-primary/50 transition-colors h-10 sm:h-11 text-sm sm:text-base"
            />
          </div>

          <div>
            <Select value={type} onValueChange={(value) => setType(value as CommentType)}>
              <SelectTrigger className="bg-background border-border focus:border-primary/50 h-10 sm:h-11 text-sm sm:text-base">
                <SelectValue placeholder="Typ komentarza" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Wygrana">{"Wygrana"}</SelectItem>
                <SelectItem value="Przegrana">{"Przegrana"}</SelectItem>
                <SelectItem value="Strategia">{"Strategia"}</SelectItem>
                <SelectItem value="Pytanie">{"Pytanie"}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Textarea
              placeholder="Podziel się swoją opinią, doświadczeniem lub zadaj pytanie..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="bg-background border-border focus:border-primary/50 resize-none transition-colors text-sm sm:text-base"
            />
          </div>

          <Button
            type="submit"
            className="w-full gap-2 bg-gradient-to-r from-primary to-success hover:from-success hover:to-primary shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02] font-semibold h-10 sm:h-11 text-sm sm:text-base"
          >
            <Send className="h-4 w-4" />
            {"Opublikuj komentarz"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
