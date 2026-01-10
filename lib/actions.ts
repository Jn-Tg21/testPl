"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function addComment(data: {
  author: string
  content: string
  type?: string
}) {
  await prisma.comment.create({
    data,
  })

  revalidatePath("/") // или путь страницы
}
