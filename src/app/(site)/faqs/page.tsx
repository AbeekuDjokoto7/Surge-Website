import { FaqsContent } from "@/components/faqs/FaqsContent"
import { generalFaqs } from "@/lib/faqs"
import { buildMetadata, faqJsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Surge FAQs | Loans, Deposits & Account Support",
  description:
    "Answers to common questions about Surge salary-backed loans, deposit products, eligibility, repayments, onboarding and digital verification in Ghana.",
  path: "/faqs",
  imageAlt: "Surge FAQ",
})

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(generalFaqs)) }}
      />
      <FaqsContent />
    </>
  )
}
