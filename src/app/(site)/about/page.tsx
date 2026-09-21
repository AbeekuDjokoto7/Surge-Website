import { ContactCta } from "@/components/ui/ContactCta"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "About Surge | Microfinance Built for Speed & Accessibility",
  description:
    "Learn about Surge, a Ghanaian deposit-taking microfinance institution delivering ≤48h loan disbursement, secure deposits, and digital identity verification for salaried workers.",
  path: "/about",
  ogType: "article",
  imageAlt: "Surge Microfinance Brand Logo",
})

export default function AboutPage() {
  return (
    <>
      <section id="hero">
        <section className="mx-auto px-6 md:px-18 lg:px-30 pt-12 md:pt-16 pb-8 md:pb-12">
          <div className="text-center">
            <div className="max-w-144.5 mx-auto mb-8 md:mb-9">
              <h1 className="text-h1 md:text-5xl font-bold text-coolgray-900 mb-4">
                Your{" "}
                <span className="brand-text-italic">
                  <span className="brand-text">Trusted</span>
                </span>{" "}
                Partner in Finance
              </h1>
            </div>
            <div className="max-w-201 mx-auto">
              <p className="text-body-lg text-coolgray-800 leading-relaxed">
                Surge is more than a financial institution, we&apos;re your
                everyday partner in progress. Whether you&apos;re planning,
                saving, or needing a little push to get through the month,
                we&apos;re here to help you move forward, fast, smart, and
                stress-free.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto px-6 md:px-18 mb-16 md:mb-24">
          <div className="rounded-[20px] md:rounded-4xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/people-office-work-day.png"
              alt="Office workers collaborating"
              className="w-full h-59.75 md:h-216 object-cover"
            />
          </div>
        </section>
      </section>

      <section className="mx-auto px-4 md:px-18 mb-16 md:mb-24 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-8 items-center max-w-full">
          <div className="flex flex-col gap-6 w-full lg:w-auto lg:flex-1">
            <div className="bg-coolgray-50 rounded-[20px] md:rounded-4xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="w-20 h-17.5 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/pen.svg" alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center gap-1 bg-linear-to-r from-gold-900 to-orange-900 bg-clip-text text-transparent text-sm font-bold px-3 py-1 rounded-full w-fit">
                    Our Vision
                  </div>
                  <h2 className="text-xl md:text-[28px] font-bold text-coolgray-900 leading-tight">
                    Financial Freedom for All.
                  </h2>
                  <div className="max-w-121.5">
                    <p className="text-sm md:text-body-lg text-coolgray-700 leading-relaxed">
                      We believe access to trusted financial tools can change
                      lives — and we&apos;re committed to making that freedom
                      possible for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-coolgray-50 rounded-[20px] md:rounded-4xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="w-20 h-17.5 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mission.svg" alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center gap-1 bg-linear-to-r from-gold-900 to-orange-900 bg-clip-text text-transparent text-sm font-bold px-3 py-1 rounded-full w-fit">
                    Our Mission
                  </div>
                  <h2 className="text-xl md:text-[28px] font-bold text-coolgray-900 leading-tight">
                    Relevant financial solutions distributed broadly and
                    efficiently through technology and partnerships.
                  </h2>
                  <div className="max-w-121.5">
                    <p className="text-sm md:text-body-lg text-coolgray-700 leading-relaxed">
                      Through tech and collaboration, we&apos;re bridging the
                      gap between the formal and informal sectors, giving more
                      people access to the tools they need to thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-auto lg:flex-1 self-stretch rounded-[20px] md:rounded-4xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about-image.png"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 md:px-18 mb-16 md:mb-24 overflow-x-hidden">
        <ContactCta
          title="Have questions?"
          body="We're just a message away and always happy to help!"
        />
      </section>
    </>
  )
}
