import { UIComment } from "@/types/comment"

type CommentListProps = {
  comments: UIComment[]
  onLike?: (id: string) => void
  onReply?: (id: string) => void
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.author}</p>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  )
}
