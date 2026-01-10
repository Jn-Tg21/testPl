"use client"

import { UIComment } from "@/types/comment"
import { useState } from "react"
import { likeComment, likeReply } from "@/lib/actions"
import { ReplyForm } from "./reply-form"
import { Heart, MessageSquare, ChevronDown, ChevronUp, Crown, Trophy, Star, MoreVertical, User, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type CommentListProps = {
  comments: UIComment[]
}

export function CommentList({ comments }: CommentListProps) {
  const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set())

  const toggleComment = (commentId: string) => {
    const newExpanded = new Set(expandedComments)
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId)
    } else {
      newExpanded.add(commentId)
    }
    setExpandedComments(newExpanded)
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem 
          key={comment.id} 
          comment={comment} 
          level={0} 
          isExpanded={expandedComments.has(comment.id)}
          onToggle={() => toggleComment(comment.id)}
        />
      ))}
    </div>
  )
}

function CommentItem({ 
  comment, 
  level = 0,
  isExpanded = false,
  onToggle
}: { 
  comment: UIComment; 
  level: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [isReplying, setIsReplying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showAllReplies, setShowAllReplies] = useState(false)
  
  const handleLike = async () => {
    setIsLiked(!isLiked)
    if (comment.type === "reply") {
      await likeReply(comment.id)
    } else {
      await likeComment(comment.id)
    }
  }

  const marginLeft = level * 32
  const isTopLevel = level === 0
  const hasReplies = comment.replies && comment.replies.length > 0
  const displayReplies = showAllReplies ? comment.replies : comment.replies.slice(0, 2)

  // Определение типа пользователя по имени
  const getUserType = (author: string) => {
    if (author.includes("VIP") || author.includes("Pro")) return "vip"
    if (author.includes("Admin") || author.includes("Mod")) return "admin"
    return "regular"
  }

  const userType = getUserType(comment.author)

  return (
    <div 
      className={`relative group ${isTopLevel ? 'bg-gradient-to-br from-[#1d2036]/60 to-[#171a29]/60' : 'bg-[#1d2036]/40'} backdrop-blur-sm border ${isTopLevel ? 'border-white/10' : 'border-[#d67413]/20'} rounded-xl p-5 transition-all duration-300 hover:border-[#d67413]/40`}
      style={{ marginLeft: `${marginLeft}px` }}
    >
      {/* Верхний левый угол */}
      {isTopLevel && (
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d67413]/30 rounded-tl-xl"></div>
      )}

      {/* Заголовок комментария */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3">
          {/* Аватар пользователя */}
          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${userType === 'vip' ? 'bg-gradient-to-br from-[#d67413] to-[#b3590d]' : userType === 'admin' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-white/10'}`}>
            {userType === 'vip' ? (
              <Crown className="h-5 w-5 text-white" />
            ) : userType === 'admin' ? (
              <Star className="h-5 w-5 text-white" />
            ) : (
              <User className="h-5 w-5 text-gray-300" />
            )}
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`font-bold ${userType === 'vip' ? 'text-[#d67413]' : userType === 'admin' ? 'text-blue-400' : 'text-white'}`}>
                {comment.author}
              </span>
              {userType === 'vip' && (
                <Badge className="bg-gradient-to-r from-[#d67413]/20 to-[#b3590d]/10 text-[#d67413] border-[#d67413]/30 text-xs px-2 py-0.5">
                  VIP
                </Badge>
              )}
              {userType === 'admin' && (
                <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 text-blue-400 border-blue-500/30 text-xs px-2 py-0.5">
                  MOD
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-3 w-3 text-gray-500" />
              <span className="text-gray-400">
                {new Date(comment.date).toLocaleDateString("pl-PL", {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
              {comment.likes > 0 && (
                <div className="flex items-center gap-1">
                  <div className="h-1 w-1 rounded-full bg-gray-600"></div>
                  <Heart className="h-3 w-3 text-red-400" />
                  <span className="text-gray-400">{comment.likes}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Кнопка разворачивания */}
        {hasReplies && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="h-8 w-8 p-0 text-gray-400 hover:text-[#d67413] hover:bg-[#d67413]/10"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
      
      {/* Контент комментария */}
      <p className="text-gray-200 mb-4 leading-relaxed whitespace-pre-wrap">
        {comment.content}
      </p>
      
      {/* Действия */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 ${isLiked ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-white/5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 border border-transparent'}`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-400' : ''}`} />
            <span className="text-sm font-medium">
              {isLiked ? 'Polubione' : 'Polub'}
            </span>
            {comment.likes > 0 && (
              <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded">
                {comment.likes + (isLiked ? 1 : 0)}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setIsReplying(!isReplying)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-[#d67413] hover:bg-[#d67413]/10 hover:border-[#d67413]/20 border border-transparent transition-all duration-300"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Odpowiedz</span>
          </button>
        </div>
        
        {/* Индикатор ответов */}
        {hasReplies && (
          <Badge variant="outline" className="border-[#d67413]/30 text-[#d67413] text-xs">
            {comment.replies.length} odpowiedzi
          </Badge>
        )}
      </div>

      {/* Форма ответа */}
      {isReplying && (
        <div className="mt-4 pl-10 border-l-2 border-[#d67413]/30">
          <ReplyForm 
            commentId={comment.id} 
            onSuccess={() => setIsReplying(false)}
          />
        </div>
      )}

      {/* Ответы (если развернуты) */}
      {isExpanded && hasReplies && (
        <div className="mt-4 space-y-3">
          {displayReplies.map((reply) => (
            <CommentItem 
              key={reply.id} 
              comment={reply} 
              level={level + 1}
              isExpanded={false}
              onToggle={() => {}}
            />
          ))}
          
          {/* Кнопка показать все/скрыть */}
          {comment.replies.length > 2 && (
            <div className="text-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAllReplies(!showAllReplies)}
                className="text-[#d67413] hover:text-[#e68a29] hover:bg-[#d67413]/10"
              >
                {showAllReplies ? (
                  <>
                    <ChevronUp className="h-3 w-3 mr-1" />
                    Pokaż mniej
                  </>
                ) : (
                  <>
                    Pokaż wszystkie odpowiedzi ({comment.replies.length})
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Нижний правый угол */}
      {isTopLevel && (
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d67413]/30 rounded-br-xl"></div>
      )}
    </div>
  )
}