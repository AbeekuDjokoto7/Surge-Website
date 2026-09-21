import { Suspense } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Flash } from "@/components/ui/Flash"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="mb-10 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <Suspense fallback={null}>
            <Flash />
          </Suspense>
        </div>
        {children}
      </main>
      <Footer />
    </>
  )
}
