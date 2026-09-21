import Link from "next/link"
import type { Product } from "@/lib/products"
import { ProductDetails } from "./ProductDetails"
import { site } from "@/lib/site"

export function ProductTemplate({ product }: { product: Product }) {
  const ctaTitle = "Ready to get started?"
  const ctaSubtitle = "Let's get you the support you need"
  const ctaButtonText = "Start Application"
  const ctaButtonPath = site.getStartedUrl

  return (
    <div className="mx-0 md:mx-12 overflow-x-hidden">
      <section className="sm:mt-0 md:mt-12">
        <div className="relative max-w-7xl md:max-w-324 mx-auto bg-midnight-900 rounded-b-[20px] md:rounded-4xl overflow-hidden h-74.5 md:h-134.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.heroImage}
            alt={product.heroImageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative h-full flex md:block">
            <div className="h-full w-full px-6 md:px-18 py-6 md:py-0 flex items-end md:block">
              <div className="md:pt-41.25 md:w-144.5 space-y-4">
                <h1 className="text-white text-[28px] leading-[1.43] md:text-[48px] md:leading-tight font-bold">
                  {product.heroTitle}
                </h1>
                <p className="text-white/90 text-body md:text-body-lg">
                  {product.heroDescription}
                </p>
                <Link
                  href={ctaButtonPath}
                  className="btn btn-md md:btn-lg btn-white rounded-full"
                >
                  {product.heroCtaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-12">
        <div className="max-w-7xl md:max-w-324 mx-auto bg-orange-100 rounded-4xl px-6 md:px-14.75 py-8 md:py-15">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-24">
            <ProductDetails product={product} />
            {product.faqImage ? (
              <div className="relative rounded-4xl overflow-hidden h-70 md:h-87.5 lg:h-106.5 w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.faqImage}
                  alt={product.faqImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-12 mb-12 px-4 md:px-0">
        <div className="relative max-w-7xl md:max-w-324 mx-auto bg-midnight-900 text-white rounded-[20px] md:rounded-4xl overflow-hidden h-62.5 md:h-74.5 flex items-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 w-20 md:w-44">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/get-started-arrows.svg"
              alt=""
              className="pointer-events-none text-orange-500 w-full h-auto"
            />
          </div>
          <div className="py-10 md:py-16 px-6 md:px-12 flex flex-col items-center text-center gap-6 md:gap-8 relative z-10 w-full">
            <h3 className="text-[28px] leading-tight md:text-[36px] md:leading-[1.28] font-bold max-w-100">
              {ctaTitle}
            </h3>
            <p className="text-body md:text-lg text-white/90 max-w-100 leading-[1.22] text-center w-46.5 md:w-69.5">
              {ctaSubtitle}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={ctaButtonPath}
                className="btn btn-md md:btn-lg btn-primary rounded-full"
              >
                {ctaButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
