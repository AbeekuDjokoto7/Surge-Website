export type ProductType = "loan" | "saving"

export type Product = {
  key: string
  name: string
  description: string
  navDescription: string
  icon: string
  slug: string
  href: string
  image: string
  type: ProductType
  seoTitle: string
  metaDescription: string
  ogImage: string
  ogImageAlt: string
  heroTitle: string
  heroDescription: string
  heroCtaText: string
  heroImage: string
  heroImageAlt: string
  eligibilityCriteria?: string[]
  requirements?: string[]
  repaymentMethods?: string[]
  facilityFeatures?: string[]
  faqImage: string
  faqImageAlt: string
}

export const products: Product[] = [
  {
    key: "pension_backed_loan",
    name: "Pension-Backed Loan",
    description: "Borrow against your pension savings with flexible repayment.",
    navDescription: "Turn your pension savings into quick, flexible cash",
    icon: "banknotes",
    slug: "pension-backed-loan",
    href: "/products/pension-backed-loan",
    image: "/products/pension_backed_loan/pension-backed-loan-hero.jpg",
    type: "loan",
    seoTitle:
      "Pension-Backed Loan | Leverage Your Pension or Provident Fund Contributions | Surge",
    metaDescription:
      "Pension-Backed Loan secured against approved Provident Fund or Tier 3 contributions. Competitive financing for active contributors with structured security.",
    ogImage: "/products/pension_backed_loan/pension-backed-loan-hero.jpg",
    ogImageAlt: "Pension-Backed Loan - illustration",
    heroTitle: "Pension-Backed Loan",
    heroDescription:
      "A pension-backed loan is a credit facility that allows you to use your pension or provident fund contributions as collateral to access a loan.",
    heroCtaText: "Apply now",
    heroImage: "/products/pension_backed_loan/pension-backed-loan-hero.jpg",
    heroImageAlt: "Pension-backed loan illustration",
    eligibilityCriteria: [
      "Must be a contributor to an approved Provident Fund scheme.",
      "Employer and Trustee must endorse the use of the pension as vested funds.",
      "Applicant must be in active service and have made consistent contributions to cover the loan facility.",
    ],
    requirements: [
      "Duly completed loan application form",
      "Pension statement from the Trustee",
      "Recent payslips (last 3 months) or bank statement",
      "ID verification/Copy of Ghana Card (ID)",
      "A recent passport size picture",
    ],
    repaymentMethods: ["Standing Order", "Direct Bank Transfer", "Mobile Money"],
    faqImage: "/products/pension_backed_loan/pension-backed-loan-faqs.jpg",
    faqImageAlt: "Thoughtful African American businessman using laptop",
  },
  {
    key: "controller_loan",
    name: "Controller Assisted Loan",
    description:
      "Easy loans for employees paid through the Controller & Accountant General's Department.",
    navDescription:
      "Special financing for Controller & Accountant General's Department staff.",
    icon: "briefcase",
    slug: "controller-loan",
    href: "/products/controller-loan",
    image: "/products/controller_loan/controller-loan-hero.jpg",
    type: "loan",
    seoTitle: "Controller Loan | CAGD Source Deduction Financing | Surge",
    metaDescription:
      "Controller Loan for employees paid via the Controller & Accountant General's Department. Source deductions, streamlined documentation, fast decisions.",
    ogImage:
      "/products/controller_loan/serious-black-corporate-worker-formal-suit-spectacles-signing-lucrative-contract.png",
    ogImageAlt: "Controller Loan - professional signing document",
    heroTitle: "Controller Loan",
    heroDescription:
      "Targeted at employees paid through the Controller and Accountant General's Department (CAGD), these loans are deducted directly from source.",
    heroCtaText: "Apply Now",
    heroImage:
      "/products/controller_loan/serious-black-corporate-worker-formal-suit-spectacles-signing-lucrative-contract.png",
    heroImageAlt: "Controller loan illustration",
    eligibilityCriteria: [
      "Must be a confirmed staff of a government institution paid through CAGD.",
      "Must have affordability to cover the monthly repayments.",
    ],
    requirements: [
      "Duly completed application form",
      "CAGD mandate number and PIN",
      "Recent payslips (last 3 months)",
      "A recent passport size picture",
    ],
    repaymentMethods: [
      "Source Deduction from Controller and Accountant Generals' Department",
    ],
    faqImage: "/products/controller_loan/controller-loan-faqs.jpg",
    faqImageAlt:
      "A team of business people collaborating and planning on a financial strategy",
  },
  {
    key: "gh_police_loan",
    name: "Ghana Police Assisted Loan",
    description:
      "Secure and accessible loans made just for Ghana Police Service members",
    navDescription:
      "Tailored loan solutions for members of the Ghana Police Service.",
    icon: "shield-check",
    slug: "gh-police-loan",
    href: "/products/gh-police-loan",
    image: "/products/gh_police_loan/gh-police-loan-hero.jpg",
    type: "loan",
    seoTitle:
      "Ghana Police Assisted Loan | Tailored Financing for Service Members | Surge",
    metaDescription:
      "Ghana Police Loan with tailored terms for active and retired officers. Secure salary or pension deductions and flexible repayment options.",
    ogImage: "/products/gh_police_loan/male-police-officer-smiling.png",
    ogImageAlt: "Ghana Police Loan - smiling officer",
    heroTitle: "Ghana Police Loan",
    heroDescription:
      "Specialised product tailored for members of the Ghana Police Service. Repayments are made at source via the Ghana Police payroll department.",
    heroCtaText: "Apply Now",
    heroImage: "/products/gh_police_loan/male-police-officer-smiling.png",
    heroImageAlt: "Ghana Police loan illustration",
    eligibilityCriteria: [
      "Must be a verified member of the Ghana Police Service.",
      "Ghana Police Pre-approval",
    ],
    requirements: [
      "Duly completed application form",
      "Last 3 months' payslips",
      "ID verification / Copy of Ghana Card",
      "Staff ID or Police ID",
      "A recent passport size picture",
    ],
    repaymentMethods: ["Source Deduction from Ghana Police Service"],
    faqImage: "/products/gh_police_loan/gh-police-loan-faqs.png",
    faqImageAlt: "Ghana Police loan features illustration",
  },
  {
    key: "payroll_loan",
    name: "Employer Assisted Loan",
    description:
      "Quick financing for employees of partner companies with salary deductions at source.",
    navDescription: "Borrow against your monthly payroll with simple repayment.",
    icon: "receipt-percent",
    slug: "payroll-loan",
    href: "/products/payroll-loan",
    image: "/products/payroll_loan/payroll-loan-hero.jpg",
    type: "loan",
    seoTitle: "Payroll Loans | Source-Deduction Partner Financing | Surge",
    metaDescription:
      "Payroll Loan for employees of partner institutions in Ghana with salary deduction at source. Fast approvals and structured repayments.",
    ogImage: "/products/payroll_loan/smiley-woman-desk.png",
    ogImageAlt: "Employer Assisted Loan - smiling woman at desk",
    heroTitle: "Employer Assisted Loans",
    heroDescription:
      "This loan is offered to employees of partner institutions where Surge has an existing MoU for salary deduction at source.",
    heroCtaText: "Apply now",
    heroImage: "/products/payroll_loan/smiley-woman-desk.png",
    heroImageAlt: "Employer assisted loan illustration",
    eligibilityCriteria: [
      "Applicant must be a staff of an institution with a payroll deduction agreement with Surge.",
      "Must have affordability to cover the monthly repayments.",
    ],
    requirements: [
      "Duly completed application form",
      "Most recent payslips",
      "ID verification / Copy of Ghana Card.",
      "A recent passport size picture.",
    ],
    repaymentMethods: [
      "Source Deduction from HR payroll",
      "Mobile Money (In the case of early settlement)",
      "Direct Bank Transfer (In the case of early settlement)",
    ],
    faqImage: "/products/payroll_loan/payroll-loan-faqs.png",
    faqImageAlt: "Payroll loan features illustration",
  },
  {
    key: "savings_deposit",
    name: "Surge Savings Deposit",
    description:
      "Savings deposit is typically held in a savings account earning interest over time",
    navDescription: "Save safely and watch your money grow over time.",
    icon: "circle-stack",
    slug: "savings-deposit",
    href: "/products/savings-deposit",
    image: "/products/savings_deposit/savings-deposit-hero.jpg",
    type: "saving",
    seoTitle: "Surge Savings Deposit Account | Secure Flexible Savings | Surge",
    metaDescription:
      "Open a Surge Savings Deposit Account for disciplined growth, competitive interest, transparent terms and flexible access to your funds.",
    ogImage: "/products/savings_deposit/savings-deposit-hero.jpg",
    ogImageAlt: "Surge Savings Deposit - saving money illustration",
    heroTitle: "Surge Savings Deposit",
    heroDescription:
      "The Surge Savings Deposit is a safe and reliable savings account designed to encourage disciplined savings while providing customers with competitive returns and convenient access to their funds.",
    heroCtaText: "Apply Now",
    heroImage: "/products/savings_deposit/savings-deposit-hero.jpg",
    heroImageAlt: "Illustration of saving money",
    facilityFeatures: [
      "Competitive interest rates on savings balances.",
      "Flexible deposit and withdrawal options",
      "Free COT",
    ],
    faqImage: "/products/savings_deposit/savings-deposit-faqs.jpg",
    faqImageAlt: "Savings features illustration",
  },
  {
    key: "fixed_deposit",
    name: "Fixed Deposit",
    description:
      "Secure, term-based investments to grow your surplus funds with guaranteed returns.",
    navDescription: "Grow your money with secure, high-interest fixed deposits.",
    icon: "chart-bar-square",
    slug: "fixed-deposit",
    href: "/products/fixed-deposit",
    image: "/products/fixed_deposit/fixed-deposit-hero.jpg",
    type: "saving",
    seoTitle: "Fixed Deposit Investment | Competitive Term Returns | Surge",
    metaDescription:
      "Invest surplus funds with Surge Fixed Deposit. Choose 91, 182 or 365 day tenures. Competitive returns and transparent terms for Ghanaian investors.",
    ogImage: "/products/fixed_deposit/fixed-deposit-hero.jpg",
    ogImageAlt: "Fixed Deposit - investment illustration",
    heroTitle: "Fixed Deposit",
    heroDescription:
      "The Fixed Deposit is a term-based investment product that allows customers to invest surplus funds into fixed deposit accounts with Surge Microfinance Ltd.",
    heroCtaText: "Apply now",
    heroImage: "/products/fixed_deposit/fixed-deposit-hero.jpg",
    heroImageAlt: "Fixed deposit illustration",
    facilityFeatures: [
      "Investment Amount\nMinimum: GHS 1,000; Maximum: GHS 50,000 per account.",
      "Tenure Options\n91 days, 182 days, 365 days.",
    ],
    eligibilityCriteria: [
      "Must be aged 18 years or older",
      "Must be a Ghana resident with valid identification",
      "Must be able to meet minimum deposit requirements",
      "Must comply with anti-money laundering requirements",
    ],
    faqImage: "/products/fixed_deposit/fixed-deposit-faqs.jpg",
    faqImageAlt: "Fixed deposit features illustration",
  },
]

export const loanProducts = products.filter((product) => product.type === "loan")
export const savingsProducts = products.filter(
  (product) => product.type === "saving",
)

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
