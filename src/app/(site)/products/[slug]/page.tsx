import { ProductTemplate } from "@/components/products/ProductTemplate"
import { getProductBySlug, products } from "@/lib/products"
import { buildMetadata } from "@/lib/seo"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return buildMetadata({
    title: product.seoTitle,
    description: product.metaDescription,
    path: product.href,
    ogType: "article",
    image: product.ogImage,
    imageAlt: product.ogImageAlt,
  })
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()
  return <ProductTemplate product={product} />
}
