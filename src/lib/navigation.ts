import { loanProducts, savingsProducts } from "./products"

export type NavItem = {
  key: string
  name: string
  description: string
  icon: string
  href: string
}

export const navProducts = {
  loans: loanProducts.map((product) => ({
    key: product.key,
    name: product.name,
    description: product.navDescription,
    icon: product.icon,
    href: product.href,
  })),
  savings: savingsProducts.map((product) => ({
    key: product.key,
    name: product.name,
    description: product.navDescription,
    icon: product.icon,
    href: product.href,
  })),
}

export const navCompany: NavItem[] = [
  {
    key: "about",
    name: "About us",
    description: "Get to know who we are and what drives us.",
    icon: "user-group",
    href: "/about",
  },
  {
    key: "board_and_management",
    name: "Board and Management",
    description: "Meet the leaders steering Surge forward.",
    icon: "cube-transparent",
    href: "/board-and-management",
  },
  {
    key: "contact",
    name: "Contact us",
    description: "Reach us anytime for support or info.",
    icon: "phone",
    href: "/contact",
  },
]

export const navResources: NavItem[] = [
  {
    key: "blog",
    name: "Blog",
    description: "Stories, tips, and updates from Surge",
    icon: "newspaper",
    href: "/posts",
  },
  {
    key: "faqs",
    name: "FAQs",
    description: "Quick answers to the most common questions.",
    icon: "question-mark-circle",
    href: "/faqs",
  },
]
