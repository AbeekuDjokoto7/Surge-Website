import Link from "next/link"
import { ApplyChrome } from "@/components/apply/ApplyChrome"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Application Submitted | Surge",
  description: "Your Surge application details have been received.",
  path: "/product_applications/success",
  robots: "noindex,nofollow",
})

export default function ApplySuccessPage() {
  return (
    <ApplyChrome illustrationAlt="Success illustration">
      <div className="flex flex-col items-center text-center max-w-xl mx-auto gap-10">
        <div className="relative">
          <div className="w-20 h-20">
            <svg
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Submission successful"
              className="w-full h-full"
            >
              <defs>
                <linearGradient
                  id="successGradient"
                  x1="0"
                  y1="40"
                  x2="80"
                  y2="40"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#F8AD03" />
                  <stop offset="100%" stopColor="#E74011" />
                </linearGradient>
              </defs>
              <circle
                cx="40"
                cy="40"
                r="32"
                fill="url(#successGradient)"
                stroke="#FEE3D6"
                strokeWidth="16"
              />
              <path
                d="M28 40.5 L36.5 49 52 31"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Application submitted successfully</span>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="font-polaris font-bold text-2xl md:text-[24px] leading-snug text-secondary-800">
            Submission Successful!
          </h1>
          <p className="font-polaris font-medium text-base leading-relaxed text-secondary-900/60">
            Thank you for your interest. We&apos;ve received your details, and
            our team will contact you shortly to help you get started.
          </p>
        </div>
        <div className="w-full max-w-full">
          <Link
            href="/"
            className="btn btn-lg btn-primary w-full rounded-full py-3"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </ApplyChrome>
  )
}
