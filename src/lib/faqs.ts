export type FaqAnswer = string | string[]
export type FaqItem = [string, FaqAnswer]

export const generalFaqs: FaqItem[] = [
  [
    "What services does Surge offer?",
    "Surge provides customer-focused financial solutions including savings and deposit products, credit advances and other products designed to meet your needs.",
  ],
  [
    "Who can apply for Surge's services?",
    "Our services are open to all salaried workers and individuals who meet our eligibility and requirement criteria.",
  ],
  [
    "Is my money safe with Surge?",
    "Yes. Surge is licensed and regulated by the Bank of Ghana. We adhere to regulatory standards and employ secure systems and technology to safety of your money and information.",
  ],
  [
    "How do I get started?",
    "Getting started is easy. Reach out to our customer care team through our dedicated lines for assistance or conveniently apply online via our website. The process is simple and customer friendly.",
  ],
  [
    "What happens when I am unable to repay my loan on time?",
    "If you are unable to repay on time, we encourage you to contact us immediately. Late repayment may attract penalties or affect your credit history.",
  ],
  [
    "Who is the Bank of Ghana?",
    "The Bank of Ghana serves as the country's central bank. It oversees and regulates all banks and financial institutions, including Surge Microfinance Ltd.",
  ],
  [
    "What happens if I am unable to complete the identity verification during the loan application process?",
    "Identity verification is a mandatory step for your loan application. If you are unable to complete it, your application will not progress. You can, however, restart the process at any time once you have the required documents and a successful identity verification.",
  ],
  [
    "Is a microfinance safe?",
    "Yes, Customers can trust a licensed microfinance institution because it operates under regulations and its operations are customer-centric, providing personalized solutions to meet your needs.",
  ],
  [
    "How long does it take to get a loan?",
    "Loan processing time depends on completing verification and documentation. Once requirements are met, loans are disbursed within 48 hours.",
  ],
  [
    "Do I need collateral to apply for a loan?",
    "Collateral requirements depend on the specific loan product. While some loans may require collateral, others do not. All requirements will be clearly explained during the application process.",
  ],
  [
    "What do I need to open a savings account with Surge?",
    "To open a savings account, you will require a valid Ghana Card and a completed account opening form. Additional requirements may apply depending on the chosen product.",
  ],
]

export const loanFaqs: Record<string, FaqItem[]> = {
  "Pension-Backed Loan": [
    [
      "What is a Pension-Backed Loan?",
      "A Pension-Backed Loan allows you to use your Provident Fund or tier 3 contributions as collateral to access a loan facility with Surge.",
    ],
    [
      "Who can apply?",
      "Any employee with an active Provident Fund or Pension account with a recognized Trustee can apply.",
    ],
    [
      "How much can I borrow?",
      "The loan amount is determined based on the balance in your Tier 3 pension account. Customers can borrow up to 80% of their vested pension contributions or an equivalent of GHS 20,000.00, subject to loan assessment.",
    ],
    [
      "What documents do I need?",
      [
        "NIA verification",
        "Proof of employment and contribution statement from your Trustee",
        "Completed loan application form",
      ],
    ],
    [
      "How long does approval take?",
      "Once your Trustee endorses your application, disbursement is typically completed within 48 hours.",
    ],
    [
      "How do I repay?",
      "Repayments are deducted directly from your salary or through your Trustee arrangements.",
    ],
  ],
  "Controller Loan": [
    [
      "What is a Controller Loan?",
      "The Controller Loan is a salary-backed loan for government workers, with repayments deducted at source through the Controller & Accountant-General's Department (CAGD).",
    ],
    ["Who qualifies?", "All permanent government workers paid via the CAGD payroll system."],
    [
      "What documents are required?",
      [
        "NIA verification",
        "3 months Recent payslip",
        "Staff ID card",
        "Completed application form",
      ],
    ],
    [
      "What are the repayment terms?",
      "Repayments are deducted monthly from your salary through CAGD.",
    ],
    ["How long does it take to access the loan?", "48 hours"],
  ],
  "Police Loan": [
    [
      "What is a Police Loan?",
      "The Police Loan is a specialized loan product designed for personnel of the Ghana Police Service, tailored to their salary and service conditions.",
    ],
    [
      "Who qualifies?",
      "Only serving officers of the Ghana Police Service with a valid Staff ID and payroll records.",
    ],
    ["What is the maximum loan amount?", "GHS 20,000"],
    [
      "What are the requirements?",
      [
        "NIA verification",
        "Police Staff ID",
        "Recent payslip",
        "Completed application form",
      ],
    ],
    [
      "How is repayment done?",
      "Monthly deductions are made directly from your salary via the Police payroll system.",
    ],
  ],
}

export const depositFaqs: Record<string, FaqItem[]> = {
  "Savings Deposit": [
    [
      "Do you offer savings products?",
      "Yes. We offer Savings Deposit accounts that allow you to grow your money securely over time.",
    ],
    [
      "How do I open a savings account?",
      "Start by contacting our team or initiating an inquiry online; we'll guide you through the process.",
    ],
    ["Are my funds secure?", "Yes, we follow industry standards for safeguarding customer funds."],
  ],
  "Fixed Deposit": [
    [
      "What is a Fixed Deposit?",
      "A fixed-term investment product offering higher returns for locking funds over an agreed period.",
    ],
    [
      "Can I withdraw my fixed deposit early?",
      "Early withdrawal may reduce earned interest or incur penalties based on terms.",
    ],
    ["When is interest paid?", "Interest is paid at maturity or as per the agreed schedule."],
  ],
}
