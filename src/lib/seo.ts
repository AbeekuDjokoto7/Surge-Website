import type { Metadata } from "next"
import type { Post } from "./posts"
import { site, socialProfiles } from "./site"

const defaultOgImage = "/og-image.png"

type BuildMetadataInput = {
  title?: string
  description?: string
  path?: string
  ogType?: "website" | "article"
  image?: string
  imageAlt?: string
  keywords?: string
  robots?: Metadata["robots"]
  publishedTime?: string
  modifiedTime?: string
}

export function absoluteUrl(path = "/") {
  const origin = site.origin.replace(/\/$/, "")
  if (path.startsWith("http")) return path
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`
}

function ogImageFields(image: string, imageAlt: string) {
  const url = absoluteUrl(image)
  if (image === defaultOgImage) {
    return { url, alt: imageAlt, width: 1200, height: 630 }
  }
  return { url, alt: imageAlt }
}

export function buildMetadata({
  title,
  description = site.defaultDescription,
  path = "/",
  ogType = "website",
  image = defaultOgImage,
  imageAlt = site.name,
  keywords = site.defaultKeywords.join(", "),
  robots = "index,follow",
  publishedTime,
  modifiedTime,
}: BuildMetadataInput = {}): Metadata {
  const fullTitle = title ?? site.name
  const url = absoluteUrl(path)
  const ogImage = ogImageFields(image, imageAlt)

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    applicationName: site.name,
    robots,
    alternates: { canonical: url },
    category: "finance",
    other: {
      slogan: site.slogan,
    },
    openGraph: {
      siteName: site.name,
      title: fullTitle,
      description,
      type: ogType,
      locale: "en_GH",
      url,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  }
}

export function jsonLd() {
  const logo = absoluteUrl("/android-chrome-512x512.png")

  return [
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: site.name,
      legalName: "Surge Microfinance Limited",
      url: absoluteUrl("/"),
      logo,
      image: absoluteUrl(defaultOgImage),
      description: site.defaultDescription,
      slogan: site.slogan,
      email: site.supportEmail,
      telephone: site.contactNumber,
      serviceType: ["Salary-backed Loans", "Deposit Accounts"],
      areaServed: { "@type": "Country", name: "Ghana" },
      audience: { "@type": "Audience", audienceType: "Salaried Workers" },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
        addressLocality: "Accra",
        addressRegion: "Greater Accra",
        addressCountry: "GH",
      },
      openingHours: "Mo-Fr 08:00-17:00",
      sameAs: socialProfiles,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.contactNumber,
        email: site.supportEmail,
        contactType: "customer support",
        areaServed: "GH",
        availableLanguage: ["en"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: absoluteUrl("/"),
      description: site.defaultDescription,
      inLanguage: "en-GH",
      publisher: {
        "@type": "Organization",
        name: site.name,
        logo: { "@type": "ImageObject", url: logo },
      },
    },
  ]
}

export function articleJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.body_text,
    datePublished: post.published_at ?? post.created_at,
    dateModified: post.updated_at,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/android-chrome-512x512.png"),
      },
    },
    image: absoluteUrl(post.cover_image_url || "/og-image.png"),
    mainEntityOfPage: absoluteUrl(`/posts/${post.id}`),
  }
}

export function faqJsonLd(items: Array<[string, string | string[]]>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: Array.isArray(answer) ? answer.join(" ") : answer,
      },
    })),
  }
}
