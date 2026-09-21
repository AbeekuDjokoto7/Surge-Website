"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { ApplyChrome } from "./ApplyChrome"
import { products } from "@/lib/products"

const inputClass =
  "block w-full rounded-lg border border-secondary-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-700 focus:border-accent-700 p-3 text-sm"

export function ApplyForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setSubmitting(true)
    try {
      const response = await fetch("/api/product-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: data.get("first_name"),
          last_name: data.get("last_name"),
          phone: data.get("phone"),
          email: data.get("email"),
          product: data.get("product"),
        }),
      })
      const payload = await response.json()
      if (!response.ok) {
        router.push(
          `/product_applications/new?alert=${encodeURIComponent(payload.error || "Please fill in all required fields.")}`,
        )
        return
      }
      router.push("/product_applications/success")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <ApplyChrome>
      <h1 className="font-polaris font-bold text-[36px] leading-[1.277] text-[#2E2E30] mb-3">
        Let&apos;s Get You Started
      </h1>
      <p className="font-polaris font-medium text-base leading-normal text-secondary-700 mb-8 max-w-xl">
        Interested in one of our products? Fill in your details and a member of
        our team will reach out to guide you through the next steps.
      </p>
      <form className="w-full space-y-6" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              First name
            </label>
            <input
              name="first_name"
              required
              placeholder="Enter first name"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Last name
            </label>
            <input
              name="last_name"
              required
              placeholder="Enter last name"
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter number"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter email"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Choose product
          </label>
          <div className="relative">
            <select
              name="product"
              className="appearance-none block w-full rounded-lg border border-secondary-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-700 focus:border-accent-700 p-3 text-sm bg-white pr-10"
              defaultValue=""
            >
              <option value="">Select</option>
              {products.map((product) => (
                <option key={product.key} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="pt-2">
          <button
            type="submit"
            className="btn btn-lg btn-primary w-full rounded-full py-3"
            disabled={submitting}
          >
            Submit application
          </button>
        </div>
      </form>
    </ApplyChrome>
  )
}
