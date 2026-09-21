export type PostStatus = "published" | "draft" | "archived"

export type Post = {
  id: number
  title: string
  body: string
  body_text: string
  status: PostStatus
  published_at: string | null
  category_id: number
  category: { id: number; name: string }
  user_id: number
  cover_image_url: string | null
  created_at: string
  updated_at: string
}

const categories = [
  { id: 1, name: "Tips" },
  { id: 2, name: "Savings" },
  { id: 3, name: "Loans" },
]

const posts: Post[] = [
  {
    id: 1,
    title: "How salaried workers in Ghana can access funds in 48 hours",
    body: "Getting a loan should not mean long queues or piles of paperwork.\n\nSurge is built for salaried workers who need funds quickly, with Ghana Card verification and a fully digital process. Once your documents and identity checks are complete, disbursement typically happens within 48 hours.\n\nIf you are paid through payroll, a pension scheme, or a partner employer, there is likely a product designed around how you already get paid.",
    body_text:
      "Getting a loan should not mean long queues or piles of paperwork. Surge is built for salaried workers who need funds quickly, with Ghana Card verification and a fully digital process. Once your documents and identity checks are complete, disbursement typically happens within 48 hours.",
    status: "published",
    published_at: "2026-09-20T08:00:00.000Z",
    category_id: 3,
    category: categories[2],
    user_id: 1,
    cover_image_url: null,
    created_at: "2026-09-20T08:00:00.000Z",
    updated_at: "2026-09-20T08:00:00.000Z",
  },
  {
    id: 2,
    title: "A simple way to start saving with Surge",
    body: "A savings deposit is a straightforward way to put money aside and earn interest over time.\n\nThe Surge Savings Deposit is designed for disciplined saving, competitive returns, and convenient access to your funds. You will need a valid Ghana Card and a completed account opening form to get started.\n\nOur team can walk you through the rest — online or over the phone.",
    body_text:
      "A savings deposit is a straightforward way to put money aside and earn interest over time. The Surge Savings Deposit is designed for disciplined saving, competitive returns, and convenient access to your funds.",
    status: "published",
    published_at: "2026-08-12T08:00:00.000Z",
    category_id: 2,
    category: categories[1],
    user_id: 1,
    cover_image_url: null,
    created_at: "2026-08-12T08:00:00.000Z",
    updated_at: "2026-08-12T08:00:00.000Z",
  },
  {
    id: 3,
    title: "What to know before opening a fixed deposit",
    body: "A fixed deposit lets you invest surplus funds for a set period in exchange for competitive returns.\n\nSurge Fixed Deposit tenures are 91, 182, or 365 days, with a minimum of GHS 1,000 and a maximum of GHS 50,000 per account. You must be 18 or older, a Ghana resident with valid identification, and able to meet the minimum deposit.\n\nEarly withdrawal may reduce earned interest or incur penalties based on the agreed terms.",
    body_text:
      "A fixed deposit lets you invest surplus funds for a set period in exchange for competitive returns. Surge Fixed Deposit tenures are 91, 182, or 365 days, with a minimum of GHS 1,000 and a maximum of GHS 50,000 per account.",
    status: "published",
    published_at: "2026-07-02T08:00:00.000Z",
    category_id: 1,
    category: categories[0],
    user_id: 1,
    cover_image_url: null,
    created_at: "2026-07-02T08:00:00.000Z",
    updated_at: "2026-07-02T08:00:00.000Z",
  },
  {
    id: 4,
    title: "Why identity verification matters for your loan application",
    body: "Identity verification is a mandatory step for your loan application.\n\nIf you are unable to complete it, your application will not progress. You can restart the process at any time once you have the required documents and a successful identity verification.\n\nHave your Ghana Card ready, and complete the selfie check in a well-lit space.",
    body_text:
      "Identity verification is a mandatory step for your loan application. If you are unable to complete it, your application will not progress. You can restart the process at any time once you have the required documents and a successful identity verification.",
    status: "published",
    published_at: "2026-06-18T08:00:00.000Z",
    category_id: 3,
    category: categories[2],
    user_id: 1,
    cover_image_url: null,
    created_at: "2026-06-18T08:00:00.000Z",
    updated_at: "2026-06-18T08:00:00.000Z",
  },
]

function publishedPosts() {
  return posts
    .filter((post) => post.status === "published")
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
}

export function getPublishedPosts() {
  const all = publishedPosts()
  return {
    featured: all[0] ?? null,
    posts: all.slice(1),
  }
}

export function getPublishedPost(id: number) {
  return publishedPosts().find((post) => post.id === id) ?? null
}

export function getRelatedPosts(post: Post, limit = 2) {
  const others = publishedPosts().filter((item) => item.id !== post.id)
  const sameCategory = others.filter(
    (item) => item.category_id === post.category_id,
  )
  const related = [...sameCategory]
  if (related.length < limit) {
    const fillers = others.filter(
      (item) => !related.some((existing) => existing.id === item.id),
    )
    related.push(...fillers)
  }
  return related.slice(0, limit)
}

export function formatPostDate(date: string | null) {
  if (!date) return ""
  const parsed = new Date(date)
  const month = parsed.toLocaleDateString("en-US", { month: "long" })
  const day = String(parsed.getDate()).padStart(2, "0")
  return `${month} ${day}, ${parsed.getFullYear()}`
}

export function truncateText(text: string, length: number) {
  if (text.length <= length) return text
  return `${text.slice(0, length).trimEnd()}...`
}

export function postBgColor(index: number) {
  const colors = ["bg-[#FDD0BE]", "bg-[#FEF0B5]", "bg-[#E2E2E4]"]
  return colors[index % colors.length]
}

export function postPlaceholderImage(index: number) {
  const images = [
    "/blog/coins.png",
    "/blog/savings.png",
    "/blog/protected-storage.png",
  ]
  return images[index % images.length]
}
