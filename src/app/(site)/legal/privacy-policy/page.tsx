import { site } from "@/lib/site"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Privacy Policy | Surge",
  description:
    "Read how Surge Microfinance Limited collects, uses, and protects your personal information.",
  path: "/legal/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#E9E8F5] rounded-b-[40px] py-12 md:py-16">
        <div className="max-w-160.75 mx-auto px-6 text-center">
          <h1 className="text-[32px] md:text-[36px] font-bold leading-tight text-midnight-900">
            Privacy Policy
          </h1>
        </div>
      </section>
      <div className="max-w-160.75 mx-auto px-6 py-12 md:py-16 space-y-10">
        <section className="space-y-4">
          <h2 className="text-[18px] font-bold leading-snug text-midnight-900">
            Privacy Statement
          </h2>
          <p className="text-body text-coolgray-700 leading-relaxed">
            At Surge Microfinance Ltd, your privacy and the protection of your
            personal information are of utmost importance to us. This Privacy
            Statement explains how we collect, use, store, and safeguard your
            information when you interact with our services, whether through our
            website, mobile application, loan platforms, or in person at our
            offices.
          </p>
        </section>
        <ol className="list-decimal list-inside space-y-10">
          <section className="space-y-4">
            <li className="text-[18px] font-bold leading-snug text-midnight-900">
              Information We Collect
            </li>
            <p className="text-body text-coolgray-700">
              We may collect the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-body text-coolgray-700">
              <li>Personal Identification Information</li>
              <li>Financial Information</li>
              <li>
                Digital Information (e.g., device details, IP address, browser
                type, location data)
              </li>
              <li>
                Loan and Transaction Records (e.g., applications, repayments,
                and account history)
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <li className="text-[18px] font-bold leading-snug text-midnight-900">
              How We Use Your Information
            </li>
            <p className="text-body text-coolgray-700">
              Your information is collected and used for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-body text-coolgray-700">
              <li>To verify your identity and comply with regulatory requirements</li>
              <li>To process loan applications and manage your account</li>
              <li>To provide secure and personalized financial services</li>
              <li>To communicate important updates, products, and services</li>
              <li>To prevent fraud, money laundering, and other financial crimes</li>
              <li>To improve our services, technology, and customer experience</li>
            </ul>
          </section>
          <section className="space-y-4">
            <li className="text-[18px] font-bold leading-snug text-midnight-900">
              Sharing of Information
            </li>
            <p className="text-body text-coolgray-700">We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-2 text-body text-coolgray-700">
              <li>
                Regulators and Authorities such as the Bank of Ghana, where
                legally required
              </li>
              <li>
                Partners, Banks, and Payment Service Providers for loan
                processing and repayment purposes
              </li>
              <li>Technology and Service Providers who support our operations</li>
              <li>
                Legal or Enforcement Agencies when necessary to comply with the
                law or protect against fraud
              </li>
            </ul>
            <p className="text-body text-coolgray-700">
              We do not sell or rent your personal data to third parties.
            </p>
          </section>
          <section className="space-y-4">
            <li className="text-[18px] font-bold leading-snug text-midnight-900">
              Data Protection and Security
            </li>
            <p className="text-body text-coolgray-700 leading-relaxed">
              We implement strong technical and organizational measures to
              protect your personal data from unauthorized access, misuse, loss,
              or disclosure. Access to your information is strictly limited to
              authorized staff and service providers who are bound by
              confidentiality obligations.
            </p>
          </section>
          <section className="space-y-4">
            <li className="text-[18px] font-bold leading-snug text-midnight-900">
              Your Rights
            </li>
            <p className="text-body text-coolgray-700">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-body text-coolgray-700">
              <li>Access and request a copy of your personal data</li>
              <li>Request corrections to inaccurate or incomplete data</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>
                Request deletion of your data, subject to regulatory retention
                requirements
              </li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
          </section>
          <section className="space-y-4">
            <li className="text-[18px] font-bold leading-snug text-midnight-900">
              Data Retention
            </li>
            <p className="text-body text-coolgray-700 leading-relaxed">
              We will retain your personal data only for as long as necessary to
              fulfil the purposes for which it was collected and to comply with
              applicable laws and regulations.
            </p>
          </section>
          <section className="space-y-4">
            <li className="text-[18px] font-bold leading-snug text-midnight-900">
              Cookies and Online Tracking
            </li>
            <p className="text-body text-coolgray-700 leading-relaxed">
              Our website may use cookies and similar technologies to enhance
              your browsing experience and analyze website traffic. You may
              control cookie settings through your browser preferences.
            </p>
          </section>
          <section className="space-y-4">
            <li className="text-[18px] font-bold leading-snug text-midnight-900">
              Updates to This Privacy Statement
            </li>
            <p className="text-body text-coolgray-700 leading-relaxed">
              We may update this Privacy Statement from time to time. Changes
              will be posted on our website with the effective date clearly
              indicated.
            </p>
          </section>
          <section className="space-y-4">
            <li className="text-[18px] font-bold leading-snug text-midnight-900">
              Contact Us
            </li>
            <p className="text-body text-coolgray-700 leading-relaxed">
              If you have any questions, concerns, or requests regarding your
              personal data, please contact us at:
            </p>
            <address className="not-italic text-body text-coolgray-700 leading-relaxed">
              Surge Microfinance Ltd
              <br />
              No. 4 Rangoon Lane, Cantoments - Accra
              <br />
              Tel:{" "}
              <a
                href={`tel:${site.contactNumber}`}
                className="hover:text-orange-600 hover:underline"
              >
                {site.contactNumber}
              </a>
              <br />
              Email:{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="hover:text-orange-600 hover:underline"
              >
                {site.supportEmail}
              </a>
            </address>
          </section>
        </ol>
      </div>
    </>
  )
}
