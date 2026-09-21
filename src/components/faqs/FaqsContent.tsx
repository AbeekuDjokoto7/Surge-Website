"use client"

import { useState } from "react"
import { Accordion, useAccordionItem } from "@/components/ui/Accordion"
import { ChevronIcon } from "@/components/ui/HeroIcon"
import { ContactCta } from "@/components/ui/ContactCta"
import {
  depositFaqs,
  generalFaqs,
  loanFaqs,
  type FaqAnswer,
} from "@/lib/faqs"

const filters = [
  { label: "All", key: "all" },
  { label: "Loans", key: "loans" },
  { label: "Deposits", key: "deposits" },
  { label: "General", key: "general" },
] as const

function Answer({ answer }: { answer: FaqAnswer }) {
  if (Array.isArray(answer)) {
    return (
      <ul className="font-polaris font-medium text-sm md:text-base leading-relaxed text-[#5A5B5D] list-disc pl-5 space-y-1">
        {answer.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return (
    <p className="font-polaris font-medium text-sm md:text-base leading-relaxed text-[#5A5B5D]">
      {answer}
    </p>
  )
}

function FaqAccordionItem({
  index,
  question,
  answer,
}: {
  index: number
  question: string
  answer: FaqAnswer
}) {
  const { open, toggle } = useAccordionItem(index)
  return (
    <div className="border border-[#E3E3E6] rounded-2xl px-5 md:px-6 py-5">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-6 text-left"
        onClick={toggle}
        aria-expanded={open}
      >
        <span className="font-polaris font-medium text-sm md:text-base text-[#2E2E30] leading-snug">
          {question}
        </span>
        <ChevronIcon className="w-5 h-5 text-[#5A5B5D]" rotated={open} />
      </button>
      <div className={`${open ? "" : "hidden"} mt-4`}>
        <Answer answer={answer} />
      </div>
    </div>
  )
}

function ProductFaqGroup({
  title,
  items,
}: {
  title: string
  items: [string, FaqAnswer][]
}) {
  const [open, setOpen] = useState(true)
  return (
    <div className="border border-[#E3E3E6] rounded-[20px] md:rounded-[28px] p-4 md:p-6">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <h3 className="font-polaris font-semibold text-[16px] md:text-[20px] text-[#2E2E30]">
          {title}
        </h3>
        <ChevronIcon className="w-5 h-5 text-[#5A5B5D]" rotated={open} />
      </button>
      <div className={`${open ? "" : "hidden"} mt-4`}>
        <Accordion className="space-y-4">
          {items.map(([question, answer], index) => (
            <FaqAccordionItem
              key={question}
              index={index}
              question={question}
              answer={answer}
            />
          ))}
        </Accordion>
      </div>
    </div>
  )
}

function Group({
  title,
  category,
  active,
  children,
}: {
  title: string
  category: string
  active: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)
  if (active !== "all" && active !== category) return null

  return (
    <div>
      <button
        type="button"
        className="w-full flex items-center justify-between mb-6 group"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <h2 className="font-polaris font-bold text-[20px] md:text-[28px] text-[#2E2E30]">
          {title}
        </h2>
        <ChevronIcon
          className="w-6 h-6 text-[#5A5B5D] group-hover:text-[#2E2E30]"
          rotated={open}
        />
      </button>
      <div className={open ? undefined : "hidden"}>{children}</div>
    </div>
  )
}

export function FaqsContent() {
  const [active, setActive] = useState("all")

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-81.5 md:max-w-240 lg:max-w-280 px-4 md:px-8 py-12 md:py-20">
        <div className="mb-12 md:mb-20 text-center">
          <h1 className="font-polaris font-bold text-[28px] md:text-[48px] leading-[1.15] text-[#2E2E30] mb-5">
            Frequently Asked Questions
          </h1>
          <p className="font-polaris font-medium text-base md:text-lg leading-relaxed text-[#5A5B5D] max-w-2xl mx-auto">
            Got questions? We&apos;ve gathered answers to the most common things
            people ask us about our products and services.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {filters.map((filter) => {
            const isActive = active === filter.key
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActive(filter.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#FFF3E5] text-[#E85C0D] cursor-default"
                    : "bg-[#F4F4F6] text-[#5A5B5D] hover:bg-[#EEE]"
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div className="space-y-14">
          <Group title="Loans" category="loans" active={active}>
            <div className="space-y-10">
              {Object.entries(loanFaqs).map(([product, items]) => (
                <ProductFaqGroup key={product} title={product} items={items} />
              ))}
            </div>
          </Group>
          <Group title="Deposits" category="deposits" active={active}>
            <div className="space-y-10">
              {Object.entries(depositFaqs).map(([product, items]) => (
                <ProductFaqGroup key={product} title={product} items={items} />
              ))}
            </div>
          </Group>
          <Group title="General" category="general" active={active}>
            <Accordion className="space-y-4">
              {generalFaqs.map(([question, answer], index) => (
                <FaqAccordionItem
                  key={question}
                  index={index}
                  question={question}
                  answer={answer}
                />
              ))}
            </Accordion>
          </Group>
        </div>

        <div className="mt-16 md:mt-24">
          <ContactCta
            title="Still have a question?"
            body="If you can't find the answer you're looking for, we're just a message away and always happy to help!"
          />
        </div>
      </div>
    </section>
  )
}
