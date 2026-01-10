// export type CommentType = "comment" | "question" | "review"

// export type UIComment = {
//   id: string
//   author: string
//   content: string
//   type: CommentType
//   likes: number
//   date: string
//   replies: UIComment[]
// }



export type UIComment = {
  id: string
  author: string
  content: string
  type: "comment" | "reply" | "review"
  likes: number
  date: string
  replies: UIComment[]
}