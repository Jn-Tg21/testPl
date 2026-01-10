"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function addComment(data: { author: string; content: string }) {
  try {
    await prisma.comment.create({
      data: {
        author: data.author,
        content: data.content,
      },
    })
    revalidatePath("/")
  } catch (error) {
    console.error("Failed to add comment:", error)
  }
}

export async function addReply(data: {
  author: string;
  content: string;
  commentId: string;
}) {
  try {
    await prisma.reply.create({
      data: {
        author: data.author,
        content: data.content,
        commentId: data.commentId,
      },
    })
    revalidatePath("/")
  } catch (error) {
    console.error("Failed to add reply:", error)
  }
}

export async function likeComment(commentId: string) {
  try {
    await prisma.comment.update({
      where: { id: commentId },
      data: { likes: { increment: 1 } },
    })
    revalidatePath("/")
  } catch (error) {
    console.error("Failed to like comment:", error)
  }
}

export async function likeReply(replyId: string) {
  try {
    await prisma.reply.update({
      where: { id: replyId },
      data: { likes: { increment: 1 } },
    })
    revalidatePath("/")
  } catch (error) {
    console.error("Failed to like reply:", error)
  }
}