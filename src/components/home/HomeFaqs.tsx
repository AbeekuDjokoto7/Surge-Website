"use client"

import Link from "next/link"
import { Accordion, useAccordionItem } from "@/components/ui/Accordion"
import { ChevronIcon } from "@/components/ui/HeroIcon"
import { generalFaqs } from "@/lib/faqs"

function FaqRow({
  index,
  question,
  answer,
}: {
  index: number
  question: string
  answer: string
}) {
  const { open, toggle } = useAccordionItem(index)

  return (
    <div className="border-b border-coolgray-200 pb-6">
      <button
        type="button"
        className="w-full flex items-center justify-between text-left"
        onClick={toggle}
        aria-expanded={open}
      >
        <span className="text-[18px] font-medium text-midnight-900">
          {question}
        </span>
        <ChevronIcon className="w-6 h-6 text-coolgray-600" rotated={open} />
      </button>
      <div className={`${open ? "" : "hidden"} mt-4`}>
        <p className="text-body-lg text-coolgray-700">{answer}</p>
      </div>
    </div>
  )
}

export function HomeFaqs() {
  return (
    <Accordion className="space-y-8">
      {generalFaqs.map(([question, answer], index) => (
        <FaqRow
          key={question}
          index={index}
          question={question}
          answer={typeof answer === "string" ? answer : answer.join(", ")}
        />
      ))}
      <div className="flex items-center gap-2 text-orange-600 cursor-pointer">
        <Link href="/faqs" className="font-medium">
          See all FAQs
        </Link>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </Accordion>
  )
}
