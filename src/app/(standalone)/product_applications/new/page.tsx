import { ApplyForm } from "@/components/apply/ApplyForm"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Apply | Surge",
  description:
    "Share your details and a Surge advisor will help you start a loan or deposit application.",
  path: "/product_applications/new",
})

export default function ApplyPage() {
  return <ApplyForm />
}
