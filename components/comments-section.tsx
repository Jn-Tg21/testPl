import { prisma } from "@/lib/prisma"
import { CommentList } from "@/components/comment-list"
import { CommentForm } from "@/components/comment-form"
import { mapComment } from "@/lib/mapComment"
import Script from "next/script"


export default async function CommentsSection() {
  const rawComments = await prisma.comment.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      replies: { orderBy: { createdAt: "asc" } },
    },
  })

  const comments = rawComments.map(mapComment)

  return (
    <section id="komentarze" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Dyskusja graczy
        </h2>

        <CommentList comments={comments} />

        <CommentForm />

        {/* SEO schema */}
        <Script
          id="comments-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DiscussionForumPosting",
              commentCount: comments.length,
              comment: comments.map(c => ({
                "@type": "Comment",
                author: c.author,
                text: c.content,
                dateCreated: c.date,
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
