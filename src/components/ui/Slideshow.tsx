"use client"

import { useRef, type ReactNode } from "react"

const GAP = 24

export function Slideshow({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  function slideWidth() {
    const first = containerRef.current?.querySelector<HTMLElement>(
      "[data-slideshow-item]",
    )
    return first?.offsetWidth ?? 0
  }

  function next() {
    const container = containerRef.current
    if (!container) return
    const maxScroll = container.scrollWidth - container.clientWidth
    if (container.scrollLeft < maxScroll - 1) {
      container.scrollBy({ left: slideWidth() + GAP, behavior: "smooth" })
    }
  }

  function previous() {
    const container = containerRef.current
    if (!container) return
    if (container.scrollLeft > 0) {
      container.scrollBy({ left: -(slideWidth() + GAP), behavior: "smooth" })
    }
  }

  return (
    <section className={className}>
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto md:overflow-x-hidden pb-4 snap-x snap-mandatory"
      >
        {children}
      </div>
      <div className="hidden md:flex justify-center items-center gap-4">
        <button
          type="button"
          className="w-10 h-10 md:w-15 md:h-15 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          onClick={previous}
          aria-label="Previous products"
        >
          <svg
            className="w-10 h-10 md:w-15 md:h-15"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#F4F4F6" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.0303 21.9697C29.3232 22.2626 29.3232 22.7374 29.0303 23.0303L22.8107 29.25H39C39.4142 29.25 39.75 29.5858 39.75 30C39.75 30.4142 39.4142 30.75 39 30.75H22.8107L29.0303 36.9697C29.3232 37.2626 29.3232 37.7374 29.0303 38.0303C28.7374 38.3232 28.2626 38.3232 27.9697 38.0303L20.4697 29.4697C20.1768 30.2374 20.1768 29.7626 20.4697 29.4697L27.9697 21.9697C28.2626 21.6768 28.7374 21.6768 29.0303 21.9697Z"
              fill="#5A5B5D"
            />
          </svg>
        </button>
        <button
          type="button"
          className="w-10 h-10 md:w-15 md:h-15 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          onClick={next}
          aria-label="Next products"
        >
          <svg
            className="w-10 h-10 md:w-15 md:h-15"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#F4F4F6" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.9697 38.0303C30.6768 37.7374 30.6768 37.2626 30.9697 36.9697L37.1893 30.75H21C20.5858 30.75 20.25 30.4142 20.25 30C20.25 29.5858 20.5858 29.25 21 29.25H37.1893L30.9697 23.0303C30.6768 22.7374 30.6768 22.2626 30.9697 21.9697C31.2626 21.6768 31.7374 21.6768 32.0303 21.9697L39.5303 29.4697C39.8232 29.7626 39.8232 30.2374 39.5303 30.5303L32.0303 38.0303C31.7374 38.3232 31.2626 38.3232 30.9697 38.0303Z"
              fill="#5A5B5D"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
