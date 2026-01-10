// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Send, Sparkles } from "lucide-react"
// import type { CommentType } from "@/lib/types"

// interface CommentFormProps {
//   onSubmit: (comment: { author: string; content: string; type: CommentType }) => void
// }

// export function CommentForm({ onSubmit }: CommentFormProps) {
//   const [author, setAuthor] = useState("")
//   const [content, setContent] = useState("")
//   const [type, setType] = useState<CommentType>("Pytanie")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (author.trim() && content.trim()) {
//       onSubmit({ author, content, type })
//       setAuthor("")
//       setContent("")
//       setType("Pytanie")
//     }
//   }

//   return (
//     <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-card/95 mb-6 sm:mb-8 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
//       <CardContent className="p-4 sm:p-6">
//         <div className="flex items-center gap-2 mb-4 sm:mb-5">
//           <Sparkles className="h-5 w-5 text-accent" />
//           <h4 className="font-bold text-base sm:text-lg text-foreground">{"Dodaj swój komentarz"}</h4>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
//           <div>
//             <Input
//               placeholder="Twój pseudonim"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//               className="bg-background border-border focus:border-primary/50 transition-colors h-10 sm:h-11 text-sm sm:text-base"
//             />
//           </div>

//           <div>
//             <Select value={type} onValueChange={(value) => setType(value as CommentType)}>
//               <SelectTrigger className="bg-background border-border focus:border-primary/50 h-10 sm:h-11 text-sm sm:text-base">
//                 <SelectValue placeholder="Typ komentarza" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Wygrana">{"Wygrana"}</SelectItem>
//                 <SelectItem value="Przegrana">{"Przegrana"}</SelectItem>
//                 <SelectItem value="Strategia">{"Strategia"}</SelectItem>
//                 <SelectItem value="Pytanie">{"Pytanie"}</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <Textarea
//               placeholder="Podziel się swoją opinią, doświadczeniem lub zadaj pytanie..."
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               rows={4}
//               className="bg-background border-border focus:border-primary/50 resize-none transition-colors text-sm sm:text-base"
//             />
//           </div>

//           <Button
//             type="submit"
//             className="w-full gap-2 bg-gradient-to-r from-primary to-success hover:from-success hover:to-primary shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02] font-semibold h-10 sm:h-11 text-sm sm:text-base"
//           >
//             <Send className="h-4 w-4" />
//             {"Opublikuj komentarz"}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }



"use client"

import { useState } from "react"
import { addComment } from "@/lib/actions"
import { Send, User, MessageSquare, Shield, Sparkles } from "lucide-react"

export function CommentForm() {
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("Anonimowy Gracz")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [characterCount, setCharacterCount] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim() || isSubmitting || content.length < 10) return

    setIsSubmitting(true)
    
    try {
      await addComment({
        author: author.trim() || "Anonimowy Gracz",
        content: content.trim(),
      })
      
      setContent("")
      setCharacterCount(0)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setContent(value)
    setCharacterCount(value.length)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Заголовок */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#d67413]/20 to-[#b3590d]/10 flex items-center justify-center">
          <MessageSquare className="h-5 w-5 text-[#d67413]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Podziel się Doświadczeniem</h3>
          <p className="text-sm text-gray-400">Twoja opinia pomaga innym graczom</p>
        </div>
      </div>

      {/* Поле автора */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
          <User className="h-4 w-4" />
          Pseudonim (opcjonalnie)
        </label>
        <div className="relative">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d67413]/50 focus:ring-2 focus:ring-[#d67413]/20 transition-all"
            placeholder="Wprowadź swój pseudonim..."
            maxLength={30}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
            {author.length}/30
          </div>
        </div>
      </div>

      {/* Поле комментария */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Twój komentarz *
        </label>
        <div className="relative">
          <textarea
            value={content}
            onChange={handleContentChange}
            required
            className="w-full min-h-[150px] bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d67413]/50 focus:ring-2 focus:ring-[#d67413]/20 transition-all resize-none"
            placeholder="Napisz swoją opinię o grze, podziel się wygranymi, strategiami lub zapytaj innych graczy..."
            rows={5}
            maxLength={1000}
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <span className={`text-xs ${characterCount < 10 ? 'text-red-400' : characterCount > 800 ? 'text-amber-400' : 'text-gray-500'}`}>
              {characterCount}/1000
            </span>
            {characterCount >= 10 && characterCount < 1000 && (
              <Sparkles className="h-3 w-3 text-[#d67413]" />
            )}
          </div>
        </div>
      </div>

      {/* Требования */}


      {/* Кнопка отправки */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="text-xs text-gray-500">
          Komentarze są moderowane w ciągu 24h
        </div>
        <button
          type="submit"
          disabled={isSubmitting || content.length < 10}
          className="group relative flex items-center gap-3 bg-gradient-to-r from-[#d67413] to-[#b3590d] hover:from-[#e68a29] hover:to-[#d67413] text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_25px_rgba(214,116,19,0.4)] disabled:hover:shadow-none overflow-hidden"
        >
          {/* Эффект свечения */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 group-disabled:hidden"></div>
          
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Publikowanie...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Opublikuj komentarz
            </>
          )}
        </button>
      </div>
    </form>
  )
}