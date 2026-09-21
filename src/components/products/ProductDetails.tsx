"use client"

import type { Product } from "@/lib/products"
import { Accordion, useAccordionItem } from "@/components/ui/Accordion"
import { CheckItem } from "./CheckItem"

function Section({
  index,
  title,
  items,
  headingAs: Heading = "h2",
  largeText,
  spacingOpen,
}: {
  index: number
  title: string
  items: string[]
  headingAs?: "h2" | "h3"
  largeText?: boolean
  spacingOpen: boolean
}) {
  const { open, toggle } = useAccordionItem(index)

  return (
    <div className={open && spacingOpen ? "space-y-8" : "space-y-3"}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}
      >
        <Heading className="text-body-lg lg:text-lg font-bold text-coolgray-800">
          {title}
        </Heading>
        <svg
          className="w-6 h-6 text-coolgray-600 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      <div className={`space-y-6 ${open ? "" : "hidden"}`}>
        {items.map((item) => (
          <CheckItem key={item} item={item} large={largeText} />
        ))}
      </div>
    </div>
  )
}

export function ProductDetails({ product }: { product: Product }) {
  const sections: {
    title: string
    items: string[]
    headingAs: "h2" | "h3"
    largeText?: boolean
    spacingOpen: boolean
  }[] = []

  if (product.facilityFeatures?.length) {
    sections.push({
      title: "Facility Features",
      items: product.facilityFeatures,
      headingAs: "h2",
      spacingOpen: true,
    })
  }
  if (product.eligibilityCriteria?.length) {
    sections.push({
      title: "Eligibility Criteria",
      items: product.eligibilityCriteria,
      headingAs: "h2",
      largeText: true,
      spacingOpen: !product.facilityFeatures?.length,
    })
  }
  if (product.requirements?.length) {
    sections.push({
      title: "Requirements",
      items: product.requirements,
      headingAs: "h3",
      largeText: true,
      spacingOpen: false,
    })
  }
  if (product.repaymentMethods?.length) {
    sections.push({
      title: "Repayment",
      items: product.repaymentMethods,
      headingAs: "h3",
      largeText: true,
      spacingOpen: false,
    })
  }

  return (
    <Accordion defaultOpenIndex={sections.length ? 0 : null}>
      <div className="space-y-7">
        {sections.map((section, index) => (
          <div key={section.title}>
            <Section
              index={index}
              title={section.title}
              items={section.items}
              headingAs={section.headingAs}
              largeText={section.largeText}
              spacingOpen={section.spacingOpen}
            />
            {index < sections.length - 1 ? (
              <hr className="border-coolgray-200 mt-7" />
            ) : null}
          </div>
        ))}
      </div>
    </Accordion>
  )
}
