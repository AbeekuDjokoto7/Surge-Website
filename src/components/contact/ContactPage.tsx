"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react"
import { site } from "@/lib/site"

const inputClass =
  "w-full rounded-xl bg-[#2F295C] text-white placeholder-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/40 border-0 border-none"
const iconClass = "w-8 h-8 text-midnight-800"

export function ContactPage() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: data.get("first_name"),
          last_name: data.get("last_name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      })
      const payload = await response.json()
      if (!response.ok) {
        router.push(
          `/contact?alert=${encodeURIComponent(payload.error || "Please fill in all required fields.")}`,
        )
        return
      }
      router.push(
        `/contact?notice=${encodeURIComponent("Your message has been sent successfully. We will get back to you soon.")}`,
      )
      form.reset()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="bg-white px-6 md:px-18 py-12 md:py-20">
        <div className="max-w-7xl md:max-w-324 mx-auto grid sm:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-3">
              <h1 className="text-h2 md:text-[36px] md:leading-11.5 font-bold text-midnight-900">
                We&apos;re Here When You Need Us
              </h1>
              <p className="text-body-lg text-coolgray-700">
                We&apos;re just a message or call away. Our team is always happy
                to help! If you haven&apos;t checked, our{" "}
                <Link
                  href="/faqs"
                  className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent hover:underline"
                >
                  Frequently Asked Questions
                </Link>{" "}
                page might have the information you need.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-5">
                <a
                  aria-label="LinkedIn"
                  className="text-coolgray-600"
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin className={iconClass} />
                </a>
                <a
                  aria-label="Facebook"
                  className="text-coolgray-600"
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandFacebook className={iconClass} />
                </a>
                <a
                  aria-label="Instagram"
                  className="text-coolgray-600"
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandInstagram className={iconClass} />
                </a>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-[24px] leading-8 font-bold text-midnight-900">
                  Contact support
                </h2>
                <div className="space-y-5">
                  <div className="flex items-center gap-3 text-midnight-900">
                    <svg
                      className="w-6 h-6 text-coolgray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16v12H4z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8l8 6 8-6"
                      />
                    </svg>
                    <span className="text-body-lg text-coolgray-700">
                      {site.supportEmail}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-midnight-900">
                    <svg
                      className="w-6 h-6 text-coolgray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5A2.25 2.25 0 0021 19.5v-3.017a2.25 2.25 0 00-2.013-2.236l-3.444-.344a2.25 2.25 0 00-1.903.636l-.83.83a12.036 12.036 0 01-5.233-5.233l.83-.83a2.25 2.25 0 00.636-1.903l-.344-3.444A2.25 2.25 0 006.02 3H3.75A2.25 2.25 0 001.5 5.25v1.5z"
                      />
                    </svg>
                    <span className="text-body-lg text-coolgray-700">
                      {site.contactNumber}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-[24px] leading-8 font-bold text-midnight-900">
                  Address
                </h2>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-coolgray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.5 10.5c0 5.25-7.5 10.5-7.5 10.5S4.5 15.75 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="text-body-lg text-coolgray-700">
                    {site.address}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-[24px] leading-8 font-bold text-midnight-900">
                  Working hours
                </h2>
                <div className="text-body-lg text-coolgray-700">
                  {site.hours}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-midnight-900 rounded-[20px] md:rounded-4xl p-6 md:p-10">
              <h2 className="text-white text-[28px] leading-10 font-bold mb-6">
                Send us a message
              </h2>
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-white text-[14px] font-bold">
                      First name
                    </label>
                    <input
                      name="first_name"
                      placeholder="Enter first name"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-white text-[14px] font-bold">
                      Last name
                    </label>
                    <input
                      name="last_name"
                      placeholder="Enter last name"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-white text-[14px] font-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white text-[14px] font-bold">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Enter your message here"
                    className={inputClass}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary w-full rounded-full"
                    disabled={submitting}
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-18 pb-16">
        <div className="max-w-7xl md:max-w-324 mx-auto">
          <div className="rounded-[20px] md:rounded-4xl overflow-hidden shadow-sm">
            <iframe
              src={site.mapEmbedUrl}
              className="w-full h-112.5"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Surge office location"
            />
          </div>
        </div>
      </section>
    </>
  )
}
