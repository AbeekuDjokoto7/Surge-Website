"use client"

import { useEffect, useState } from "react"
import { boardMembers, memberImageUrl, type BoardMember } from "@/lib/board"

export function BoardGrid() {
  const [active, setActive] = useState<BoardMember | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (active) {
      document.body.classList.add("overflow-hidden")
      const timeout = window.setTimeout(() => setVisible(true), 10)
      return () => window.clearTimeout(timeout)
    }
    document.body.classList.remove("overflow-hidden")
  }, [active])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  function open(member: BoardMember) {
    setActive(member)
  }

  function close() {
    setVisible(false)
    window.setTimeout(() => setActive(null), 300)
  }

  return (
    <div className="bg-white">
      <section className="relative bg-midnight-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-midnight-900 to-midnight-800 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-h1 md:text-[48px] md:leading-[1.1] font-bold text-white mb-6">
            Our Board and Management
          </h1>
          <p className="text-body-lg md:text-[20px] text-coolgray-200 max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings decades of international experience,
            integrity, and innovation to every decision. Together, we&apos;re
            building a future of accessible, reliable financial solutions.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {boardMembers.map((member) => {
            const image = memberImageUrl(member)
            return (
              <div key={member.name} className="group cursor-pointer">
                <div
                  className="relative overflow-hidden rounded-3xl bg-coolgray-50 aspect-3/4 mb-6 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2"
                  onClick={() => open(member)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="absolute h-full w-full object-cover transition-all duration-700"
                    src={image}
                    alt={member.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-midnight-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-bold flex items-center gap-2">
                      Read Profile
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-[24px] font-bold text-midnight-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-coolgray-600 font-medium">{member.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${active ? "" : "hidden"}`}
      >
        <div
          className={`absolute inset-0 bg-midnight-900/90 backdrop-blur-sm transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        ></div>
        <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
          <div
            className={`modal-panel relative transform overflow-hidden rounded-4xl bg-white text-left shadow-2xl transition-all duration-300 w-full max-w-4xl ${
              visible
                ? "opacity-100 translate-y-0 sm:scale-100"
                : "opacity-0 translate-y-4 sm:scale-95"
            }`}
          >
            <button
              type="button"
              className="absolute right-6 top-6 z-10 text-coolgray-400 hover:text-midnight-900 bg-coolgray-100 hover:bg-coolgray-200 rounded-full p-2 transition-all"
              onClick={close}
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {active ? (
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={memberImageUrl(active)}
                      alt={active.name}
                      className="w-full h-auto rounded-xl shadow-lg object-cover aspect-3/4"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold text-midnight-900 mb-2">
                      {active.name}
                    </h2>
                    <p className="text-xl text-coolgray-600 mb-6 font-medium">
                      {active.title}
                    </p>
                    <div className="prose prose-slate max-w-none text-coolgray-700 leading-relaxed overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar text-justify">
                      {active.fullBio.split("\n\n").map((paragraph) => (
                        <p key={paragraph.slice(0, 24)} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
