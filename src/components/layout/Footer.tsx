import Link from "next/link"
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react"
import { products } from "@/lib/products"
import { site } from "@/lib/site"

const linkClass = "text-coolgray-50 hover:text-white text-body"
const iconClass = "w-6 h-6 text-coolgray-100 hover:text-coolgray-200"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-midnight-900 text-white py-12 md:py-16 px-6 md:px-10 lg:px-20 mt-auto">
      <div className="max-w-324 mx-auto w-full justify-between flex flex-col gap-10 md:gap-16">
        <div className="mb-2 md:mb-0 items-start">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/surge-logo-white.png"
              alt="Surge Logo"
              className="h-10 w-27.5 md:h-12 md:w-33"
            />
          </Link>
        </div>
        <nav
          aria-label="Footer"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-13 flex-1"
        >
          <div>
            <h3 className="text-body-lg font-bold mb-6 md:mb-8">Products</h3>
            <ul className="space-y-4 md:space-y-6">
              {products.map((product) => (
                <li key={product.key}>
                  <Link href={product.href} className={linkClass}>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-body-lg font-bold mb-6 md:mb-8">Company</h3>
            <ul className="space-y-4 md:space-y-6">
              <li>
                <Link href="/about" className={linkClass}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="/board-and-management" className={linkClass}>
                  Board and Management
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-body-lg font-bold mb-6 md:mb-8">Resources</h3>
            <ul className="space-y-4 md:space-y-6">
              <li>
                <Link href="/faqs" className={linkClass}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/posts" className={linkClass}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-body-lg font-bold mb-6 md:mb-8">Legal</h3>
            <ul className="space-y-4 md:space-y-6">
              <li>
                <Link href="/legal/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 ml-0 md:ml-auto">
            <h3 className="text-body-lg font-bold mb-4 md:mb-6">Follow us</h3>
            <div className="flex items-center gap-6">
              <a
                aria-label="Facebook"
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white"
                title="Facebook"
              >
                <IconBrandFacebook className={iconClass} />
              </a>
              <a
                aria-label="LinkedIn"
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white"
                title="LinkedIn"
              >
                <IconBrandLinkedin className={iconClass} />
              </a>
              <a
                aria-label="Instagram"
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white"
                title="Instagram"
              >
                <IconBrandInstagram className={iconClass} />
              </a>
            </div>
          </div>
        </nav>
        <hr className="border-white/10 mt-10 md:mt-16" />
        <div className="text-center mt-6">
          <p className="text-coolgray-300 text-body">
            ©{year} Surge. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
