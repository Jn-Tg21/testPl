import { prisma } from "@/lib/prisma"
import { CommentList } from "@/components/comment-list"
import { CommentForm } from "@/components/comment-form"
import { mapComment } from "@/lib/mapComment"
import Script from "next/script"
import { MessageSquare, Users, Star, Shield, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default async function CommentsSection() {
  const rawComments = await prisma.comment.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      replies: { orderBy: { createdAt: "asc" } },
    },
  })

  const comments = rawComments.map(mapComment)

  // Calculate stats
  const totalComments = comments.length
  const totalReplies = comments.reduce((acc, comment) => acc + comment.replies.length, 0)
  const totalInteractions = totalComments + totalReplies

  return (
    <section id="komentarze" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Заголовок и статистика */}
          <div className="text-center mb-10 sm:mb-12">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Opinie i Doświadczenia Graczy
            </h2>

          </div>

          

          {/* Информация о модерации */}
          <div className="mb-8 p-4 sm:p-6 rounded-xl bg-gradient-to-r from-[#1d2036] to-[#171a29] border border-[#d67413]/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#d67413]/20 to-[#b3590d]/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#d67413]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Moderowane Forum</h4>
                  <p className="text-xs text-gray-400">Tylko prawdziwe opinie graczy</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-500 border-green-500/30 text-xs">
                  <Star className="h-3 w-3 mr-1" />
                  Weryfikacja komentarzy
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 text-blue-500 border-blue-500/30 text-xs">
                  Zero spamu
                </Badge>
              </div>
            </div>
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Левая колонка - комментарии */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Заголовок списка */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    Najnowsze Dyskusje
                    <span className="text-sm text-gray-400 ml-2 font-normal">
                      ({comments.length} tematów)
                    </span>
                  </h3>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-[#d67413]/30 text-[#d67413] text-xs">
                      Najnowsze
                    </Badge>
                    <Badge variant="outline" className="border-gray-500/30 text-gray-400 text-xs">
                      Najpopularniejsze
                    </Badge>
                  </div>
                </div>

                {/* Список комментариев */}
                <div className="rounded-xl border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm overflow-hidden">
                  <CommentList comments={comments} />
                </div>
              </div>
            </div>

            {/* Правая колонка - форма */}
            <div className="space-y-6">
              {/* Статистика активности */}
              

              {/* Форма */}
              <div className="rounded-xl border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm overflow-hidden">
                <div className="p-6">

                  <CommentForm />
                </div>
              </div>

              {/* Правила */}
              <div className="bg-gradient-to-br from-[#1d2036] to-[#171a29] border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-4">Zasady forum</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Tylko konstruktywne dyskusje",
                    "Zakaz reklam i spamu",
                    "Respektuj innych graczy",
                    "Dziel się prawdziwymi doświadczeniami"
                  ].map((rule, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#d67413] mt-1.5"></div>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SEO schema */}
          <Script
            id="comments-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "DiscussionForumPosting",
                name: "Forum Dyskusyjne Chicken Road Casino",
                commentCount: comments.length,
                interactionStatistic: {
                  "@type": "InteractionCounter",
                  interactionType: "https://schema.org/CommentAction",
                  userInteractionCount: totalInteractions
                },
                comment: comments.map(c => ({
                  "@type": "Comment",
                  author: c.author,
                  text: c.content,
                  dateCreated: c.date,
                  interactionStatistic: {
                    "@type": "InteractionCounter",
                    interactionType: "https://schema.org/ReplyAction",
                    userInteractionCount: c.replies.length
                  }
                })),
              }),
            }}
          />
        </div>
      </div>
    </section>
  )
}