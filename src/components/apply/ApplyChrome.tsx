"use client"

import Link from "next/link"
import { useEffect, useState, type ReactNode } from "react"
import { HeroIcon } from "@/components/ui/HeroIcon"

export function ApplyChrome({
  children,
  illustrationAlt = "Application illustration",
}: {
  children: ReactNode
  illustrationAlt?: string
}) {
  const [backHref, setBackHref] = useState("/")

  useEffect(() => {
    if (
      !document.referrer ||
      document.referrer.includes("/product_applications/new")
    ) {
      return
    }
    try {
      const url = new URL(document.referrer)
      if (url.origin === window.location.origin) {
        setBackHref(`${url.pathname}${url.search}`)
      }
    } catch {
      setBackHref("/")
    }
  }, [])

  return (
    <section className="relative bg-white w-full flex flex-col md:flex-row md:h-screen">
      <div className="w-full md:w-2/3 p-6 md:p-12 pt-6 md:pt-12 flex flex-col overflow-auto">
        <div className="mb-4 md:mb-6 space-y-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/surge-logo.png"
              alt="Surge Logo"
              className="h-8 md:h-12 w-auto"
            />
          </div>
          <div>
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-secondary-600 hover:text-secondary-900"
            >
              <HeroIcon name="arrow-left" variant="solid" className="w-4 h-4" />
              <span className="text-sm font-medium">Go back</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">{children}</div>
      </div>
      <div className="hidden md:block md:w-1/3 md:h-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/forms-illustration.png"
          alt={illustrationAlt}
          className="h-full w-full object-cover block"
        />
      </div>
    </section>
  )
}
