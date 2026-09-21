"use client"

import { useState, type ReactNode } from "react"
import { ChevronIcon } from "./HeroIcon"

export function Collapsible({
  title,
  titleClassName,
  defaultOpen = true,
  className,
  children,
}: {
  title: ReactNode
  titleClassName?: string
  defaultOpen?: boolean
  className?: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={className}>
      <button
        type="button"
        className="w-full flex items-center justify-between mb-6 group"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className={titleClassName}>{title}</span>
        <ChevronIcon
          className="w-6 h-6 text-[#5A5B5D] transition-transform group-hover:text-[#2E2E30]"
          rotated={open}
        />
      </button>
      <div className={open ? undefined : "hidden"}>{children}</div>
    </div>
  )
}
