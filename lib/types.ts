export type CommentType = "Wygrana" | "Przegrana" | "Strategia" | "Pytanie"

export interface Reply {
  id: string
  author: string
  content: string
  date: string
  likes: number
}

export interface Comment {
  id: string
  author: string
  content: string
  type: CommentType
  date: string
  likes: number
  replies: Reply[]
}
