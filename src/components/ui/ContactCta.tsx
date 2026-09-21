import Link from "next/link"

export function ContactCta({
  title,
  body,
}: {
  title: string
  body: string
}) {
  return (
    <div className="relative rounded-[20px] md:rounded-4xl overflow-hidden h-74 md:h-104 max-w-full">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/man-smiling-with-phone.png"
          alt="Man with phone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 h-full flex items-center px-6 md:px-18">
        <div className="max-w-73">
          <h2 className="text-2xl font-bold text-white mb-6 md:mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-sm md:text-lg text-white mb-6 md:mb-8 max-w-69.5">
            {body}
          </p>
          <Link
            href="/contact"
            className="btn btn-md btn-white inline-flex items-center justify-center rounded-full"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
