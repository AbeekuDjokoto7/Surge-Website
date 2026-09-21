"use client"

import { useSearchParams } from "next/navigation"

export function Flash() {
  const searchParams = useSearchParams()
  const notice = searchParams.get("notice")
  const alert = searchParams.get("alert")

  if (!notice && !alert) return null

  return (
    <>
      {notice ? (
        <div className="mt-4 p-4 rounded-lg bg-green-100 text-green-800 border border-green-200">
          {notice}
        </div>
      ) : null}
      {alert ? (
        <div className="mt-4 p-4 rounded-lg bg-red-100 text-red-800 border border-red-200">
          {alert}
        </div>
      ) : null}
    </>
  )
}
