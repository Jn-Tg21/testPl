"use client"

import { useState } from "react"
import { CommentForm } from "@/components/comment-form"
import { CommentList } from "@/components/comment-list"
import { ActivityIndicators } from "@/components/activity-indicators"
import { Sparkles } from "lucide-react"
import type { Comment } from "@/lib/types"

const mockComments: Comment[] = [
  {
    id: "1",
    author: "Gracz123",
    content:
      "Wygrałem wczoraj 850 PLN na stawce 2 PLN! Mnożnik x425 w rundzie bonusowej. Grałem około 30 minut zanim wpadł bonus, ale warto było czekać.",
    type: "Wygrana",
    date: "2025-01-09T10:30:00",
    likes: 12,
    replies: [
      {
        id: "1-1",
        author: "Kasiunia88",
        content: "Gratulacje! Ile spinów mniej więcej przed bonusem?",
        date: "2025-01-09T11:15:00",
        likes: 3,
      },
      {
        id: "1-2",
        author: "Gracz123",
        content: "Dzięki! Szacuję że około 150-200 spinów.",
        date: "2025-01-09T11:45:00",
        likes: 2,
      },
    ],
  },
  {
    id: "2",
    author: "Marek_PL",
    content:
      "Niestety muszę ostrzec – straciłem 500 PLN w godzinę. Slot potrafi być bezlitosny. Bonusy wpadały, ale wynosiły po 20-30x, za mało żeby odbić straty.",
    type: "Przegrana",
    date: "2025-01-09T08:20:00",
    likes: 8,
    replies: [
      {
        id: "2-1",
        author: "ProGamer",
        content: "Taka jest natura slotów o wysokiej zmienności. Trzeba mieć spory bankroll.",
        date: "2025-01-09T09:00:00",
        likes: 5,
      },
    ],
  },
  {
    id: "3",
    author: "Anna_K",
    content: "Jaką strategię stosujesz? Lepiej małe stawki i długa gra czy większe stawki na krótko?",
    type: "Pytanie",
    date: "2025-01-09T07:10:00",
    likes: 15,
    replies: [
      {
        id: "3-1",
        author: "Veteran2020",
        content:
          "Osobiście wolę małe stawki 0.40-0.80 PLN i dłuższą sesję. Daje to więcej szans na złapanie dobrego bonusu.",
        date: "2025-01-09T07:45:00",
        likes: 7,
      },
      {
        id: "3-2",
        author: "SlotMaster",
        content:
          "Ja idę po 2-3 PLN, ale ustawiam sobie limit. Jak stracę 200 PLN, kończę sesję. Jak wygram 300 PLN, też kończę.",
        date: "2025-01-09T08:30:00",
        likes: 9,
      },
    ],
  },
  {
    id: "4",
    author: "TomaszG",
    content:
      "Zauważyłem, że najlepsze bonusy przychodzą między 100-300 spinem. Wcześniej i później zazwyczaj słabe mnożniki. Ktoś ma podobne obserwacje?",
    type: "Strategia",
    date: "2025-01-08T18:30:00",
    likes: 6,
    replies: [],
  },
]

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(mockComments)

  const handleAddComment = (newComment: Omit<Comment, "id" | "date" | "likes" | "replies">) => {
    const comment: Comment = {
      ...newComment,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      likes: 0,
      replies: [],
    }
    setComments([comment, ...comments])
  }

  const handleAddReply = (commentId: string, reply: { author: string; content: string }) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: `${commentId}-${comment.replies.length + 1}`,
                author: reply.author,
                content: reply.content,
                date: new Date().toISOString(),
                likes: 0,
              },
            ],
          }
        }
        return comment
      }),
    )
  }

  const handleLike = (commentId: string, replyId?: string) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId && !replyId) {
          return { ...comment, likes: comment.likes + 1 }
        }
        if (comment.id === commentId && replyId) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === replyId ? { ...reply, likes: reply.likes + 1 } : reply,
            ),
          }
        }
        return comment
      }),
    )
  }

  return (
    <section id="komentarze" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                {"Dyskusja graczy"}
              </h3>
            </div>
          </div>

          {/* <ActivityIndicators /> */}

          <CommentForm onSubmit={handleAddComment} />

          <CommentList comments={comments} onLike={handleLike} onReply={handleAddReply} />
        </div>
      </div>
    </section>
  )
}
