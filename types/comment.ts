export type CommentType = "comment" | "question" | "review"

export type UIComment = {
  id: string
  author: string
  content: string
  type: CommentType
  likes: number
  date: string
  replies: UIComment[]
}
