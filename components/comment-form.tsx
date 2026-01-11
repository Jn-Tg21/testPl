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



// "use client"

// import { useState } from "react"
// import { addComment } from "@/lib/actions"
// import { Send, User, MessageSquare, Shield, Sparkles } from "lucide-react"

// export function CommentForm() {
//   const [content, setContent] = useState("")
//   const [author, setAuthor] = useState("Anonimowy Gracz")
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [characterCount, setCharacterCount] = useState(0)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!content.trim() || isSubmitting || content.length < 10) return

//     setIsSubmitting(true)
    
//     try {
//       await addComment({
//         author: author.trim() || "Anonimowy Gracz",
//         content: content.trim(),
//       })
      
//       setContent("")
//       setCharacterCount(0)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const value = e.target.value
//     setContent(value)
//     setCharacterCount(value.length)
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* Заголовок */}
//       <div className="flex items-center gap-3">
//         <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#d67413]/20 to-[#b3590d]/10 flex items-center justify-center">
//           <MessageSquare className="h-5 w-5 text-[#d67413]" />
//         </div>
//         <div>
//           <h3 className="text-xl font-bold text-white">Podziel się Doświadczeniem</h3>
//           <p className="text-sm text-gray-400">Twoja opinia pomaga innym graczom</p>
//         </div>
//       </div>

//       {/* Поле автора */}
//       <div className="space-y-2">
//         <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
//           <User className="h-4 w-4" />
//           Pseudonim (opcjonalnie)
//         </label>
//         <div className="relative">
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d67413]/50 focus:ring-2 focus:ring-[#d67413]/20 transition-all"
//             placeholder="Wprowadź swój pseudonim..."
//             maxLength={30}
//           />
//           <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
//             {author.length}/30
//           </div>
//         </div>
//       </div>

//       {/* Поле комментария */}
//       <div className="space-y-2">
//         <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
//           <MessageSquare className="h-4 w-4" />
//           Twój komentarz *
//         </label>
//         <div className="relative">
//           <textarea
//             value={content}
//             onChange={handleContentChange}
//             required
//             className="w-full min-h-[150px] bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d67413]/50 focus:ring-2 focus:ring-[#d67413]/20 transition-all resize-none"
//             placeholder="Napisz swoją opinię o grze, podziel się wygranymi, strategiami lub zapytaj innych graczy..."
//             rows={5}
//             maxLength={1000}
//           />
//           <div className="absolute bottom-3 right-3 flex items-center gap-2">
//             <span className={`text-xs ${characterCount < 10 ? 'text-red-400' : characterCount > 800 ? 'text-amber-400' : 'text-gray-500'}`}>
//               {characterCount}/1000
//             </span>
//             {characterCount >= 10 && characterCount < 1000 && (
//               <Sparkles className="h-3 w-3 text-[#d67413]" />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Требования */}


//       {/* Кнопка отправки */}
//       <div className="flex items-center justify-between pt-4 border-t border-white/10">
//         <div className="text-xs text-gray-500">
//           Komentarze są moderowane w ciągu 24h
//         </div>
//         <button
//           type="submit"
//           disabled={isSubmitting || content.length < 10}
//           className="group relative flex items-center gap-3 bg-gradient-to-r from-[#d67413] to-[#b3590d] hover:from-[#e68a29] hover:to-[#d67413] text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_25px_rgba(214,116,19,0.4)] disabled:hover:shadow-none overflow-hidden"
//         >
//           {/* Эффект свечения */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 group-disabled:hidden"></div>
          
//           {isSubmitting ? (
//             <>
//               <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//               Publikowanie...
//             </>
//           ) : (
//             <>
//               <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               Opublikuj komentarz
//             </>
//           )}
//         </button>
//       </div>
//     </form>
//   )
// }











"use client"

import { useState, useEffect } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import CharacterCount from "@tiptap/extension-character-count"
import { addComment } from "@/lib/actions"
import { 
  Send, User, MessageSquare, Shield, Sparkles, 
  Bold, Italic, Link as LinkIcon, List, ListOrdered,
  Heading2, Heading3, Quote, Code, 
  RotateCcw, RotateCw, Minus, Pilcrow
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function CommentForm() {
  const [author, setAuthor] = useState("Anonimowy Gracz")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [characterCount, setCharacterCount] = useState(0)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-[#d67413] underline hover:text-[#e68a29] transition-colors",
          rel: "noopener noreferrer",
          target: "_blank",
        },
        validate: href => /^https?:\/\//.test(href),
      }),
      Placeholder.configure({
        placeholder: 'Napisz swoją opinię o grze, podziel się wygranymi, strategiami lub zapytaj innych graczy...',
      }),
      CharacterCount.configure({
        limit: 2000,
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "min-h-[180px] p-4 focus:outline-none prose prose-invert max-w-none",
      },
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setCharacterCount(editor.storage.characterCount.characters())
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editor || isSubmitting || characterCount < 10) return

    const content = editor.getHTML()
    const textContent = editor.getText()
    
    if (!textContent.trim()) return

    setIsSubmitting(true)
    
    try {
      await addComment({
        author: author.trim() || "Anonimowy Gracz",
        content: content,
        textContent: textContent,
      })
      
      editor.commands.clearContent()
      setCharacterCount(0)
    } catch (error) {
      console.error("Error adding comment:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const addLink = () => {
    if (!editor) return
    
    const url = window.prompt('Wprowadź URL:')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  // Горячие клавиши
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!editor) return
      
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey) {
        switch(e.key.toLowerCase()) {
          case 'b':
            e.preventDefault()
            editor.chain().focus().toggleBold().run()
            break
          case 'i':
            e.preventDefault()
            editor.chain().focus().toggleItalic().run()
            break
          case 'z':
            if (e.ctrlKey && e.shiftKey) {
              e.preventDefault()
              editor.chain().focus().redo().run()
            } else {
              e.preventDefault()
              editor.chain().focus().undo().run()
            }
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [editor])

  if (!editor) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-10 bg-white/5 rounded-xl"></div>
        <div className="h-[180px] bg-white/5 rounded-xl"></div>
      </div>
    )
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

      {/* Редактор */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Twój komentarz *
        </label>

        {/* Панель инструментов */}
        <div className="flex flex-wrap items-center gap-1 p-3 bg-white/5 border border-white/10 rounded-xl">
          {/* Отмена/Повтор */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="h-8 px-2 disabled:opacity-30"
            title="Cofnij (Ctrl+Z)"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="h-8 px-2 disabled:opacity-30"
            title="Ponów (Ctrl+Shift+Z)"
          >
            <RotateCw className="h-4 w-4" />
          </Button>
          
          <div className="h-6 w-px bg-white/20 mx-1"></div>
          
          {/* Заголовки */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`h-8 px-2 ${editor.isActive('heading', { level: 2 }) ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Nagłówek 2"
          >
            <Heading2 className="h-4 w-4" />
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`h-8 px-2 ${editor.isActive('heading', { level: 3 }) ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Nagłówek 3"
          >
            <Heading3 className="h-4 w-4" />
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`h-8 px-2 ${editor.isActive('paragraph') ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Akapit"
          >
            <Pilcrow className="h-4 w-4" />
          </Button>
          
          <div className="h-6 w-px bg-white/20 mx-1"></div>
          
          {/* Стили текста */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`h-8 px-2 ${editor.isActive('bold') ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Pogrubienie (Ctrl+B)"
          >
            <Bold className="h-4 w-4" />
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`h-8 px-2 ${editor.isActive('italic') ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Kursywa (Ctrl+I)"
          >
            <Italic className="h-4 w-4" />
          </Button>
          
          <div className="h-6 w-px bg-white/20 mx-1"></div>
          
          {/* Списки */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`h-8 px-2 ${editor.isActive('bulletList') ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Lista wypunktowana"
          >
            <List className="h-4 w-4" />
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`h-8 px-2 ${editor.isActive('orderedList') ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Lista numerowana"
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
          
          <div className="h-6 w-px bg-white/20 mx-1"></div>
          
          {/* Дополнительные элементы */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`h-8 px-2 ${editor.isActive('blockquote') ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Cytat"
          >
            <Quote className="h-4 w-4" />
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`h-8 px-2 ${editor.isActive('code') ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Kod"
          >
            <Code className="h-4 w-4" />
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="h-8 px-2"
            title="Linia pozioma"
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <div className="h-6 w-px bg-white/20 mx-1"></div>
          
          {/* Ссылка */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={addLink}
            className={`h-8 px-2 ${editor.isActive('link') ? 'bg-[#d67413]/20 text-[#d67413]' : ''}`}
            title="Dodaj link"
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
          
          {/* Удалить ссылку */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().unsetLink().run()}
            disabled={!editor.isActive('link')}
            className="h-8 px-2 disabled:opacity-30"
            title="Usuń link"
          >
            <LinkIcon className="h-4 w-4 rotate-45" />
          </Button>
        </div>

        {/* Поле редактора */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-[#d67413]/50 focus-within:ring-2 focus-within:ring-[#d67413]/20 transition-all">
          <EditorContent editor={editor} />
          
          {/* Нижняя панель */}
          <div className="px-4 py-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className={`text-xs ${characterCount < 10 ? 'text-red-400' : characterCount > 1800 ? 'text-amber-400' : 'text-gray-500'}`}>
                  {characterCount}/2000
                </span>
                {characterCount >= 10 && characterCount < 1800 && (
                  <Sparkles className="h-3 w-3 text-[#d67413]" />
                )}
              </div>
              
              <div className="hidden sm:flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Bold className="h-3 w-3" /> Ctrl+B
                </span>
                <span className="flex items-center gap-1">
                  <Italic className="h-3 w-3" /> Ctrl+I
                </span>
                <span className="flex items-center gap-1">
                  <LinkIcon className="h-3 w-3" /> Link
                </span>
              </div>
            </div>
            
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                editor.commands.clearContent()
                setCharacterCount(0)
              }}
              className="text-xs text-gray-400 hover:text-white"
            >
              Wyczyść wszystko
            </Button>
          </div>
        </div>
      </div>

      {/* Требования */}
      <div className="p-4 rounded-lg bg-gradient-to-r from-[#1d2036] to-[#171a29]/60 border border-white/10">
        <div className="flex items-start gap-3">
          <Shield className="h-5 w-5 text-[#d67413] flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-sm">Zasady publikacji</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#d67413]/50 mt-1"></div>
                <span>Komentarz musi mieć minimum <strong>10 znaków</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#d67413]/50 mt-1"></div>
                <span>Zakaz reklam, spamu i treści NSFW</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#d67413]/50 mt-1"></div>
                <span>Linki są automatycznie otwierane w nowej karcie</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Кнопка отправки */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="text-xs text-gray-500">
          Komentarze są moderowane w ciągu 24h
        </div>
        <button
          type="submit"
          disabled={isSubmitting || characterCount < 10}
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