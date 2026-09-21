import Link from "next/link"
import { redirect } from "next/navigation"
import Markdown from "react-markdown"
import { PostCard } from "@/components/blog/PostCard"
import { ShareButtons } from "@/components/blog/ShareButtons"
import { HeroIcon } from "@/components/ui/HeroIcon"
import {
  formatPostDate,
  getPublishedPost,
  getPublishedPosts,
  getRelatedPosts,
} from "@/lib/posts"
import { absoluteUrl, articleJsonLd, buildMetadata } from "@/lib/seo"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const { featured, posts } = getPublishedPosts()
  return [featured, ...posts]
    .filter(Boolean)
    .map((post) => ({ id: String(post!.id) }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const numericId = Number(id)
  if (Number.isNaN(numericId)) return {}
  const post = getPublishedPost(numericId)
  if (!post) return {}
  return buildMetadata({
    title: `${post.title} | Surge`,
    description: post.body_text,
    path: `/posts/${post.id}`,
    ogType: "article",
    image: post.cover_image_url || "/og-image.png",
    imageAlt: post.title,
    publishedTime: post.published_at ?? post.created_at,
    modifiedTime: post.updated_at,
  })
}

export default async function PostShowPage({ params }: Props) {
  const { id } = await params
  const numericId = Number(id)
  if (Number.isNaN(numericId)) {
    redirect("/posts?alert=Post%20not%20found")
  }
  const post = getPublishedPost(numericId)
  if (!post) {
    redirect("/posts?alert=Post%20not%20found")
  }

  const related = getRelatedPosts(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(post)),
        }}
      />
      <main className="max-w-214.75 mx-auto px-4 sm:px-6 lg:px-8" id="blog-content">
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <Link
                href="/posts"
                className="flex items-center gap-2.5 text-[#5A5B5D] hover:text-orange-600 transition-colors"
              >
                <HeroIcon name="arrow-left" variant="solid" />
                <span className="font-polaris font-medium text-sm leading-[1.428]">
                  Back to Blog
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-polaris font-medium text-sm leading-[1.428] text-[#E74011]">
                {post.category.name}
              </span>
              <span className="font-polaris font-medium text-sm leading-[1.428] text-[#5A5B5D]">
                {formatPostDate(post.published_at)}
              </span>
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-polaris font-bold text-[24px] lg:text-[36px] leading-[1.278] text-[#2E2E30]">
              {post.title}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-10">
          <div className="flex w-10 h-10 items-center justify-center rounded-full bg-[#F4F4F6] text-secondary-700 font-polaris font-bold">
            S
          </div>
          <span className="font-polaris font-medium text-sm leading-[1.428] text-secondary-700">
            By the Surge Team
          </span>
        </div>
        <div className="mb-12">
          {post.cover_image_url ? (
            <div className="w-full h-126 rounded-4xl overflow-hidden bg-[#2F4531]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover_image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-126 rounded-4xl bg-[#2F4531] flex items-center justify-center relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog/business-growth.png"
                alt="Business growth"
                className="max-w-81.5 max-h-76.25 object-contain"
              />
            </div>
          )}
        </div>
        <div className="prose prose-lg max-w-none mb-16">
          <div className="font-polaris font-medium text-base leading-normal text-coolgray-900 opacity-80">
            <article className="prose max-w-none">
              <Markdown>{post.body}</Markdown>
            </article>
          </div>
        </div>
        <ShareButtons title={post.title} url={absoluteUrl(`/posts/${post.id}`)} />
      </main>
      {related.length > 0 ? (
        <section className="max-w-215 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-polaris font-bold text-lg lg:text-2xl leading-tight text-secondary-700 mb-12">
            Read more like this
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
            {related.map((item, index) => (
              <PostCard key={item.id} post={item} index={index} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}
