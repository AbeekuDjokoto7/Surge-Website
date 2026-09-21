import Link from "next/link"
import { PostCard } from "@/components/blog/PostCard"
import {
  formatPostDate,
  getPublishedPosts,
  truncateText,
} from "@/lib/posts"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Blog | Surge",
  description:
    "Stories, tips, and updates on loans, savings, and personal finance from Surge Microfinance.",
  path: "/posts",
})

export default function PostsPage() {
  const { featured, posts } = getPublishedPosts()

  return (
    <>
      {featured ? (
        <section className="bg-orange-100 py-8 rounded-b-[20px] md:rounded-b-[40px] overflow-hidden relative">
          <div className="w-full h-auto md:h-147.75 flex items-center px-4">
            <div className="max-w-324 mx-auto px-4 lg:px-16 w-full">
              <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
                <div className="w-full flex justify-center lg:justify-start">
                  <div
                    className={`relative rounded-4xl overflow-hidden w-full ${featured.cover_image_url ? "" : "bg-[#2F4531] p-16 flex item-center justify-center"}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        featured.cover_image_url || "/blog/business-growth.png"
                      }
                      alt={
                        featured.cover_image_url
                          ? featured.title
                          : "Featured Article"
                      }
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full space-y-8 flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-orange-900 w-fit">
                      {featured.category.name}
                    </span>
                    <span className="text-gray-600 text-sm font-medium">
                      {formatPostDate(featured.published_at)}
                    </span>
                  </div>
                  <div className="space-y-6">
                    <Link href={`/posts/${featured.id}`} className="block group">
                      <h1 className="text-2xl lg:text-4xl font-bold group-hover:text-orange-600 transition-colors text-gray-900 leading-tight">
                        {featured.title}
                      </h1>
                    </Link>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                      {truncateText(featured.body_text, 180)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
            {posts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
