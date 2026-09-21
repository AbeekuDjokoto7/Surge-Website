import Link from "next/link"
import type { Post } from "@/lib/posts"
import {
  formatPostDate,
  postBgColor,
  postPlaceholderImage,
  truncateText,
} from "@/lib/posts"

export function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <article className="group">
      <div className="flex flex-col gap-5">
        {post.cover_image_url ? (
          <div className="w-full h-75 rounded-4xl overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.cover_image_url}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div
            className={`w-full h-75 rounded-4xl relative ${postBgColor(index)}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={postPlaceholderImage(index)}
                alt="Article illustration"
                className="max-w-[60%] max-h-[60%] object-contain"
              />
            </div>
          </div>
        )}
        <div className="flex items-center gap-4">
          <span className="font-polaris font-medium text-sm leading-[1.428] text-orange-900">
            {post.category.name}
          </span>
          <span className="font-polaris font-medium text-sm leading-[1.428] text-secondary-800 opacity-40">
            {formatPostDate(post.published_at)}
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-polaris font-bold text-xl leading-[1.4] text-secondary-600 group-hover:text-orange-600 transition-colors">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="font-polaris font-medium text-base leading-normal text-secondary-600 opacity-60">
          {truncateText(post.body_text, 120)}
        </p>
      </div>
    </article>
  )
}
