import Link from "next/link"
import { products } from "@/lib/products"
import { Slideshow } from "@/components/ui/Slideshow"
import { HomeFaqs } from "@/components/home/HomeFaqs"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Surge | Fast Salary-Backed Loans & Secure Deposits in Ghana",
  path: "/",
})

export default function HomePage() {
  return (
    <>
      <section className="bg-white py-12 md:py-16">
        <div className="w-full flex flex-col content-center justify-center gap-8">
          <div
            className="hidden md:block w-full max-w-168.75 mx-auto"
            id="desktop-brand-icon-text"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/desktop-hero-brand-icon-text.svg" alt="Surge" />
          </div>
          <div
            className="md:hidden w-full max-w-83.5 mx-auto px-4"
            id="mobile-brand-icon-text"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mobile-hero-brand-icon-text.svg" alt="Surge" />
          </div>
          <div id="hero-image" className="px-6 md:px-18">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-african-family.jpg"
              alt="African family"
              className="w-full h-auto rounded-[20px] md:rounded-4xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="products">
        <section className="bg-white px-6 md:px-18">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-2 rounded-full text-body font-medium mb-3">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.24348 0.0633012C8.44431 0.175263 8.54289 0.409751 8.48239 0.631576L7.15464 5.50002H12C12.1991 5.50002 12.3792 5.61814 12.4586 5.80074C12.5379 5.98335 12.5014 6.19562 12.3655 6.34118L5.36554 13.8412C5.20866 14.0093 4.95736 14.0487 4.75654 13.9367C4.55571 13.8248 4.45713 13.5903 4.51763 13.3685L5.84539 8.50002H1.00001C0.800913 8.50002 0.620788 8.38189 0.541437 8.19929C0.462087 8.01669 0.498635 7.80441 0.634483 7.65886L7.63448 0.158858C7.79137 -0.00923079 8.04266 -0.0486606 8.24348 0.0633012ZM2.15062 7.50002H6.50001C6.65585 7.50002 6.80277 7.57268 6.89736 7.69652C6.99196 7.82036 7.0234 7.98123 6.98239 8.13158L6.0146 11.6802L10.8494 6.50002H6.50001C6.34417 6.50002 6.19725 6.42736 6.10266 6.30351C6.00807 6.17967 5.97663 6.0188 6.01763 5.86846L6.98543 2.31987L2.15062 7.50002Z"
                  fill="url(#paint0_linear_1218_141)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1218_141"
                    x1="0.199999"
                    y1="7.00002"
                    x2="12.8"
                    y2="7.00002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F8AD03" />
                    <stop offset="1" stopColor="#E74011" />
                  </linearGradient>
                </defs>
              </svg>
              Our products
            </div>
            <h2 className="text-h2 md:text-[36px] font-bold text-midnight-900 mb-6">
              Financial Solutions That Work for You
            </h2>
            <p className="text-body-lg text-coolgray-700">
              Our products are designed to help you move forward, simply,
              securely, and fast.
            </p>
          </div>
        </section>

        <Slideshow className="bg-white px-6 md:px-18 pb-16">
          {products.map((product) => (
            <div
              key={product.key}
              className="shrink-0 min-w-77.75 md:min-w-92.5 snap-start"
              data-slideshow-item
            >
              <div className="relative rounded-[20px] md:rounded-3xl overflow-hidden pt-[119%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>
                <div className="absolute inset-x-0 bottom-0 h-[33%] bg-linear-to-t from-black/40 via-black/25 to-transparent backdrop-blur pointer-events-none z-20"></div>
                <div className="absolute inset-x-0 bottom-0 z-30">
                  <div className="text-white px-6 pt-6 md:px-8 md:pt-8">
                    <h3 className="text-h4 font-bold">{product.name}</h3>
                  </div>
                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <div className="text-white py-3">
                      <p className="text-body-lg">{product.description}</p>
                    </div>
                  </div>
                </div>
                <Link
                  href={product.href}
                  className="absolute top-6 right-6 btn btn-md btn-white w-15 z-40 rounded-full"
                >
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
                      d="M7 17l9.2-9.2M17 17V7H7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </Slideshow>
      </section>

      <section className="bg-yellow-50 px-6 md:px-18 py-12 md:py-20 mx-0 md:mx-18 mb-8 md:mb-20 rounded-[20px] md:rounded-[36px]">
        <div className="max-w-7xl md:max-w-302.5 mx-auto grid lg:grid-cols-2 items-center gap-10 md:gap-24">
          <div className="md:max-w-152">
            <div className="mb-4">
              <div className="inline-flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-2 rounded-full text-body font-medium mb-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 0C11.2294 0 11.4294 0.156149 11.4851 0.378732L11.6576 1.06904C11.8144 1.69604 12.304 2.1856 12.931 2.34235L13.6213 2.51493C13.8439 2.57057 14 2.77057 14 3C14 3.22943 13.8439 3.42943 13.6213 3.48507L12.931 3.65765C12.304 3.8144 11.8144 4.30396 11.6576 4.93096L11.4851 5.62127C11.4294 5.84385 11.2294 6 11 6C10.7706 6 10.5706 5.84385 10.5149 5.62127L10.3424 4.93096C10.1856 4.30396 9.69604 3.8144 9.06904 3.65765L8.37873 3.48507C8.15615 3.42943 8 3.22943 8 3C8 2.77057 8.15615 2.57057 8.37873 2.51493L9.06904 2.34235C9.69604 2.1856 10.1856 1.69604 10.3424 1.06904L10.5149 0.378732C10.5706 0.156149 10.7706 0 11 0ZM11 2.0641C10.7689 2.44741 10.4474 2.76895 10.0641 3C10.4474 3.23106 10.7689 3.55259 11 3.9359C11.2311 3.55259 11.5526 3.23106 11.9359 3C11.5526 2.76895 11.2311 2.44741 11 2.0641ZM5 2C5.22324 2 5.41943 2.14799 5.48076 2.36264L6.02289 4.2601C6.26018 5.09062 6.90938 5.73982 7.7399 5.97711L9.63736 6.51924C9.85201 6.58057 10 6.77676 10 7C10 7.22324 9.85201 7.41943 9.63736 7.48076L7.7399 8.02289C6.90938 8.26019 6.26018 8.90938 6.02289 9.7399L5.48076 11.6374C5.41943 11.852 5.22324 12 5 12C4.77676 12 4.58057 11.852 4.51924 11.6374L3.97711 9.7399C3.73982 8.90938 3.09062 8.26019 2.2601 8.02289L0.362639 7.48076C0.147989 7.41943 0 7.22324 0 7C0 6.77676 0.147989 6.58057 0.362639 6.51924L2.2601 5.97711C3.09062 5.73982 3.73982 5.09062 3.97711 4.2601L4.51924 2.36264C4.58057 2.14799 4.77676 2 5 2ZM5 4.32003L4.93863 4.53482C4.60642 5.69755 3.69755 6.60642 2.53482 6.93863L2.32003 7L2.53482 7.06137C3.69755 7.39358 4.60642 8.30245 4.93863 9.46518L5 9.67997L5.06137 9.46518C5.39358 8.30245 6.30245 7.39358 7.46518 7.06137L7.67997 7L7.46518 6.93863C6.30245 6.60642 5.39358 5.69755 5.06137 4.53482L5 4.32003ZM10 9C10.2152 9 10.4063 9.13772 10.4743 9.34189L10.7372 10.1304C10.8367 10.429 11.071 10.6633 11.3696 10.7628L12.1581 11.0257C12.3623 11.0937 12.5 11.2848 12.5 11.5C12.5 11.7152 12.3623 11.9063 12.1581 11.9743L11.3696 12.2372C11.071 12.3367 10.8367 12.571 10.7372 12.8696L10.4743 13.6581C10.4063 13.8623 10.2152 14 10 14C9.78479 14 9.59372 13.8623 9.52566 13.6581L9.26283 12.8696C9.16329 12.571 8.92898 12.3367 8.63037 12.2372L7.84189 11.9743C7.63772 11.9063 7.5 11.7152 7.5 11.5C7.5 11.2848 7.63772 11.0937 7.84189 11.0257L8.63037 10.7628C8.92898 10.6633 9.16329 10.429 9.26283 10.1304L9.52566 9.34189C9.59372 9.13772 9.78479 9 10 9ZM10 10.8902C9.84354 11.1353 9.63534 11.3435 9.39024 11.5C9.63534 11.6565 9.84354 11.8647 10 12.1098C10.1565 11.8647 10.3647 11.6565 10.6098 11.5C10.3647 11.3435 10.1565 11.1353 10 10.8902Z"
                    fill="url(#paint0_linear_1218_148)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1218_148"
                      x1="-0.35"
                      y1="7"
                      x2="14.35"
                      y2="7"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F8AD03" />
                      <stop offset="1" stopColor="#E74011" />
                    </linearGradient>
                  </defs>
                </svg>
                Why Surge?
              </div>
              <h2 className="text-[28px] lg:text-[36px] font-bold text-midnight-900">
                Built for Speed. Designed for You.
              </h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-6 h-6 text-coolgray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-midnight-900 mb-2">
                    Fast Loan Approvals
                  </h3>
                  <p className="text-body-lg text-coolgray-700">
                    Get approved in just 48 hours, no long queues or paperwork.
                    We move fast so you can keep moving too.
                  </p>
                </div>
              </div>
              <hr className="border-coolgray-200" />
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-6 h-6 text-coolgray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-midnight-900 mb-2">
                    Fully Digital Process
                  </h3>
                  <p className="text-body-lg text-coolgray-700">
                    Apply anytime, from anywhere, right from your phone. No
                    stress, no branch visits, just smart convenience.
                  </p>
                </div>
              </div>
              <hr className="border-coolgray-200" />
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-6 h-6 text-coolgray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-midnight-900 mb-2">
                    People-First Support
                  </h3>
                  <p className="text-body-lg text-coolgray-700">
                    Surge is more than a platform. We&apos;re here when you need
                    us. Friendly, human service that treats you like family.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[20px] md:rounded-4xl overflow-hidden pt-[110%] md:pt-[109%] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/why-surge-woman.jpg"
              alt="Why Surge"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-18 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="w-full md:w-1/3">
            <div className="mb-3">
              <div className="inline-flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-2 rounded-full text-body font-medium">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                FAQ
              </div>
            </div>
            <h2 className="text-h2 md:text-[36px] font-bold text-midnight-900 mb-8">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <HomeFaqs />
          </div>
        </div>
      </section>
    </>
  )
}
