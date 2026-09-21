import { ContactPage } from "@/components/contact/ContactPage"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact Surge | Speak With Our Microfinance Support Team",
  description:
    "Contact Surge for fast support on loans, deposits, onboarding or repayments. Email, call or message us. Located in East Legon, Accra. Monday - Friday 8am - 5pm.",
  path: "/contact",
  ogType: "website",
  imageAlt: "Surge Support",
})

export default function Page() {
  return <ContactPage />
}
