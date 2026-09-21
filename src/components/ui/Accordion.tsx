"use client"

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"

type AccordionContextValue = {
  openIndex: number | null
  toggle: (index: number) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

export function Accordion({
  children,
  defaultOpenIndex = null,
  className,
}: {
  children: ReactNode
  defaultOpenIndex?: number | null
  className?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <AccordionContext.Provider value={{ openIndex, toggle }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function useAccordionItem(index: number) {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error("useAccordionItem must be used within Accordion")
  }
  return {
    open: context.openIndex === index,
    toggle: () => context.toggle(index),
  }
}
