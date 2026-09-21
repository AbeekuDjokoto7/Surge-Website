import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { site, socialProfiles } from "@/lib/site"
import { jsonLd } from "@/lib/seo"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const polaris = localFont({
  src: [
    { path: "./fonts/Polaris-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Polaris-Book.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Polaris-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Polaris-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Polaris-Heavy.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-polaris-face",
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: "Surge | Fast Salary-Backed Loans & Secure Deposits in Ghana",
    template: "%s",
  },
  description: site.defaultDescription,
  keywords: site.defaultKeywords,
  authors: [{ name: site.name }],
  applicationName: site.name,
  robots: "index,follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  other: {
    "theme-color": site.themeColor,
    slogan: site.slogan,
  },
  openGraph: {
    siteName: site.name,
    title: "Surge | Fast Salary-Backed Loans & Secure Deposits in Ghana",
    description: site.defaultDescription,
    type: "website",
    locale: "en_GH",
    url: site.origin,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surge | Fast Salary-Backed Loans & Secure Deposits in Ghana",
    description: site.defaultDescription,
    images: ["/og-image.png"],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: site.themeColor,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${polaris.variable}`}>
      <head>
        {socialProfiles.map((profile) => (
          <link key={profile} rel="me" href={profile} />
        ))}
        {socialProfiles.map((profile) => (
          <meta key={`og-${profile}`} property="og:see_also" content={profile} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-polaris overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
