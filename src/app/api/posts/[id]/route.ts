import { NextResponse } from "next/server"
import { getPublishedPost, getRelatedPosts } from "@/lib/posts"

type Props = {
  params: Promise<{ id: string }>
}

export async function GET(_request: Request, { params }: Props) {
  const { id } = await params
  const numericId = Number(id)
  if (Number.isNaN(numericId)) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }
  const post = getPublishedPost(numericId)
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }
  return NextResponse.json({
    post,
    related: getRelatedPosts(post),
  })
}
