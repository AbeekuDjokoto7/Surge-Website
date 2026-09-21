"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { loanProducts, savingsProducts } from "@/lib/products"
import { navCompany, navResources } from "@/lib/navigation"
import { site } from "@/lib/site"
import { HeroIcon, ChevronIcon } from "@/components/ui/HeroIcon"

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement
      if (
        target.closest("[data-dropdown-content]") ||
        target.closest("[data-dropdown]")
      ) {
        return
      }
      setOpenDropdown(null)
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.classList.add("overflow-hidden")
      document.body.classList.add("overflow-hidden")
    } else {
      document.documentElement.classList.remove("overflow-hidden")
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden")
      document.body.classList.remove("overflow-hidden")
    }
  }, [mobileOpen])

  function toggleDropdown(id: string) {
    setOpenDropdown((current) => (current === id ? null : id))
  }

  function closeMobile() {
    setMobileOpen(false)
    setMobileSection(null)
  }

  return (
    <header className="bg-white px-4 md:px-18 py-4 relative">
      <div className="flex items-center w-full max-w-full">
        <div className="shrink-0">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/surge-logo.png"
              alt="Surge Logo"
              className="h-8 md:h-12 w-24 md:w-32"
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center gap-12">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors"
                data-dropdown="products-dropdown"
                aria-expanded={openDropdown === "products"}
                onClick={() => toggleDropdown("products")}
              >
                <span className="text-midnight-900 font-medium">Products</span>
                <HeroIcon name="chevron-down" />
              </button>
              <div
                id="products-dropdown"
                className={`${openDropdown === "products" ? "" : "hidden"} absolute top-full left-0 z-50 w-200`}
                data-dropdown-content
              >
                <div className="bg-white shadow-lg border border-gray-200 rounded-lg py-8 px-8 mt-2">
                  <div className="flex gap-15">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-700 mb-7">
                        Loans
                      </h3>
                      <div className="space-y-7">
                        {loanProducts.map((item) => (
                          <Link
                            key={item.key}
                            href={item.href}
                            className="flex gap-6 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => {
                              setTimeout(() => setOpenDropdown(null), 0)
                            }}
                          >
                            <div className="shrink-0">
                              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                                <HeroIcon name={item.icon} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors">
                                {item.name}
                              </div>
                              <p className="text-xs font-medium text-gray-500 mt-2 leading-4">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="w-82.25">
                      <h3 className="text-base font-bold text-gray-700 mb-7">
                        Savings
                      </h3>
                      <div className="space-y-7">
                        {savingsProducts.map((item) => (
                          <Link
                            key={item.key}
                            href={item.href}
                            className="flex gap-6 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => {
                              setTimeout(() => setOpenDropdown(null), 0)
                            }}
                          >
                            <div className="shrink-0">
                              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                                <HeroIcon name={item.icon} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors">
                                {item.name}
                              </div>
                              <p className="text-xs font-medium text-gray-500 mt-2 leading-4">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors"
                data-dropdown="company-dropdown"
                aria-expanded={openDropdown === "company"}
                onClick={() => toggleDropdown("company")}
              >
                <span className="text-midnight-900 font-medium">Company</span>
                <HeroIcon name="chevron-down" />
              </button>
              <div
                id="company-dropdown"
                className={`${openDropdown === "company" ? "" : "hidden"} absolute top-full left-0 z-50 w-105`}
                data-dropdown-content
              >
                <div className="bg-white shadow-lg border border-gray-200 rounded-lg py-8 px-8 mt-2">
                  <div className="space-y-7">
                    {navCompany.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="flex gap-6 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => {
                              setTimeout(() => setOpenDropdown(null), 0)
                            }}
                      >
                        <div className="shrink-0">
                          <div className="w-12 h-12 bg-purple-50 rounded-3xl flex items-center justify-center">
                            <HeroIcon name={item.icon} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors">
                            {item.name}
                          </div>
                          <p className="text-xs font-medium text-gray-500 mt-2 leading-5">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors"
                data-dropdown="resources-dropdown"
                aria-expanded={openDropdown === "resources"}
                onClick={() => toggleDropdown("resources")}
              >
                <span className="text-midnight-900 font-medium">Resources</span>
                <HeroIcon name="chevron-down" />
              </button>
              <div
                id="resources-dropdown"
                className={`${openDropdown === "resources" ? "" : "hidden"} absolute top-full left-0 z-50 w-105`}
                data-dropdown-content
              >
                <div className="bg-white shadow-lg border border-gray-200 rounded-lg py-8 px-8 mt-2">
                  <div className="space-y-7">
                    {navResources.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="flex gap-6 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => {
                              setTimeout(() => setOpenDropdown(null), 0)
                            }}
                      >
                        <div className="shrink-0">
                          <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                            <HeroIcon name={item.icon} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors">
                            {item.name}
                          </div>
                          <p className="text-xs font-medium text-gray-500 mt-2 leading-5">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="shrink-0 flex items-center gap-4">
          <Link
            href={site.getStartedUrl}
            className="hidden md:inline-flex btn btn-md btn-primary rounded-full"
          >
            Get Started
          </Link>
          <button
            id="mobile-menu-button"
            className="md:hidden rounded-md text-midnight-900 hover:bg-coolgray-100"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className={mobileOpen ? "hidden" : "inline-block"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hamburger.svg" alt="" className="w-6 h-6" />
            </span>
            <span className={mobileOpen ? "" : "hidden"}>
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${mobileOpen ? "" : "hidden"} fixed inset-0 z-50 bg-white`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between md:px-18 px-4 py-4 border-coolgray-100">
            <Link href="/" onClick={closeMobile}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/surge-logo.png"
                alt="Surge Logo"
                className="h-8 md:h-12 w-24 md:w-32"
              />
            </Link>
            <button
              className="p-2"
              aria-label="Close menu"
              onClick={closeMobile}
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center px-4 py-6 grow overflow-y-auto w-full">
            <div className="w-full max-w-89.5">
              <div className="px-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4"
                  aria-expanded={mobileSection === "products"}
                  onClick={() =>
                    setMobileSection((current) =>
                      current === "products" ? null : "products",
                    )
                  }
                >
                  <span className="text-midnight-900 text-body-lg font-medium">
                    Products
                  </span>
                  <ChevronIcon
                    className="w-5 h-5 text-midnight-900"
                    rotated={mobileSection === "products"}
                  />
                </button>
                <div
                  className={`${mobileSection === "products" ? "" : "hidden"} pb-4 space-y-8`}
                >
                  <div className="space-y-4">
                    <h2 className="font-bold text-[16px] leading-6 text-coolgray-800">
                      Loans
                    </h2>
                    {loanProducts.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="flex gap-4 items-start px-2"
                        onClick={closeMobile}
                      >
                        <div className="w-10 h-10 bg-purple-50 rounded-full p-2 flex items-center justify-center text-midnight-900">
                          <HeroIcon name={item.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-700">
                            {item.name}
                          </div>
                          <p className="text-xs font-medium text-gray-500 leading-4 mt-1">
                            {item.navDescription}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-4 mt-4">
                    <h2 className="font-bold text-[16px] leading-6 text-coolgray-800">
                      Savings
                    </h2>
                    {savingsProducts.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="flex gap-4 items-start px-2"
                        onClick={closeMobile}
                      >
                        <div className="w-10 h-10 bg-purple-50 rounded-full p-2 flex items-center justify-center text-midnight-900">
                          <HeroIcon name={item.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-700">
                            {item.name}
                          </div>
                          <p className="text-xs font-medium text-gray-500 leading-4 mt-1">
                            {item.navDescription}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4"
                  aria-expanded={mobileSection === "company"}
                  onClick={() =>
                    setMobileSection((current) =>
                      current === "company" ? null : "company",
                    )
                  }
                >
                  <span className="text-midnight-900 text-body-lg font-medium">
                    Company
                  </span>
                  <ChevronIcon
                    className="w-5 h-5 text-midnight-900"
                    rotated={mobileSection === "company"}
                  />
                </button>
                <div
                  className={`${mobileSection === "company" ? "" : "hidden"} pb-4 space-y-4`}
                >
                  {navCompany.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="flex gap-4 items-start px-2"
                      onClick={closeMobile}
                    >
                      <div className="w-10 h-10 bg-purple-50 rounded-full p-2 flex items-center justify-center text-midnight-900">
                        <HeroIcon name={item.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-700">
                          {item.name}
                        </div>
                        <p className="text-xs font-medium text-gray-500 leading-4 mt-1">
                          {item.description.replace(
                            "Get to know",
                            "Who we are &",
                          )}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4"
                  aria-expanded={mobileSection === "resources"}
                  onClick={() =>
                    setMobileSection((current) =>
                      current === "resources" ? null : "resources",
                    )
                  }
                >
                  <span className="text-midnight-900 text-body-lg font-medium">
                    Resources
                  </span>
                  <ChevronIcon
                    className="w-5 h-5 text-midnight-900"
                    rotated={mobileSection === "resources"}
                  />
                </button>
                <div
                  className={`${mobileSection === "resources" ? "" : "hidden"} pb-4 space-y-4`}
                >
                  {navResources.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="flex gap-4 items-start px-2"
                      onClick={closeMobile}
                    >
                      <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-midnight-900">
                        <HeroIcon name={item.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-700">
                          {item.name}
                        </div>
                        <p className="text-xs font-medium text-gray-500 leading-4 mt-1">
                          {item.description.replace(
                            "Stories, tips, and updates from Surge",
                            "Stories, tips, updates.",
                          )}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          <div className="px-4 pb-6">
            <div className="w-full flex justify-center">
              <Link
                href={site.getStartedUrl}
                className="w-full max-w-89.5 btn btn-sm btn-primary rounded-full"
                onClick={closeMobile}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
