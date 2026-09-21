import { NextResponse } from "next/server"
import { getPublishedPosts } from "@/lib/posts"

export async function GET() {
  return NextResponse.json(getPublishedPosts())
}
