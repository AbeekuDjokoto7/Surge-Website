import type { MetadataRoute } from "next"
import { products } from "@/lib/products"
import { getPublishedPosts } from "@/lib/posts"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const { featured, posts } = getPublishedPosts()
  const blogPosts = [featured, ...posts].filter(Boolean)

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/faqs"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/contact"), changeFrequency: "monthly", priority: 0.8 },
    {
      url: absoluteUrl("/board-and-management"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/legal/privacy-policy"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    { url: absoluteUrl("/posts"), changeFrequency: "weekly", priority: 0.7 },
  ]

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: absoluteUrl(product.href),
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  const postRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/posts/${post!.id}`),
    lastModified: post!.updated_at,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...postRoutes]
}
