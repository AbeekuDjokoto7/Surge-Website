import type { ComponentType, SVGProps } from "react"
import {
  BanknotesIcon,
  BriefcaseIcon,
  ChartBarSquareIcon,
  ChevronDownIcon,
  CircleStackIcon,
  CubeTransparentIcon,
  NewspaperIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  ReceiptPercentIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"

const outlineIcons: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  banknotes: BanknotesIcon,
  briefcase: BriefcaseIcon,
  "shield-check": ShieldCheckIcon,
  "receipt-percent": ReceiptPercentIcon,
  "circle-stack": CircleStackIcon,
  "chart-bar-square": ChartBarSquareIcon,
  "user-group": UserGroupIcon,
  "cube-transparent": CubeTransparentIcon,
  phone: PhoneIcon,
  newspaper: NewspaperIcon,
  "question-mark-circle": QuestionMarkCircleIcon,
  "chevron-down": ChevronDownIcon,
}

const solidIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "arrow-left": ArrowLeftIcon,
}

type HeroIconProps = {
  name: string
  variant?: "outline" | "solid"
  className?: string
}

export function HeroIcon({
  name,
  variant = "outline",
  className = "w-6 h-6",
}: HeroIconProps) {
  const Icon = variant === "solid" ? solidIcons[name] : outlineIcons[name]
  if (!Icon) return null
  return <Icon className={className} aria-hidden="true" />
}

export function ChevronIcon({
  className = "w-6 h-6",
  rotated = false,
}: {
  className?: string
  rotated?: boolean
}) {
  return (
    <svg
      className={`${className} transition-transform`}
      style={{ transform: rotated ? "rotate(180deg)" : undefined }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
