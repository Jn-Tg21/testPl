import { Comment, Reply } from "@prisma/client"
import { UIComment } from "@/types/comment"

export function mapComment(comment: Comment & { replies: Reply[] }): UIComment {
  return {
    id: comment.id,
    author: comment.author,
    content: comment.content,
    type: (comment.type ?? "comment") as UIComment["type"],
    likes: comment.likes,
    date: comment.createdAt.toISOString(),
    replies: comment.replies.map(reply => ({
      id: reply.id,
      author: reply.author,
      content: reply.content,
      type: "comment",
      likes: reply.likes,
      date: reply.createdAt.toISOString(),
      replies: [],
    })),
  }
}
