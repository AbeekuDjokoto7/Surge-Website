export const site = {
  name: "Surge",
  slogan: "Taking your Further…",
  supportEmail: "info@surge.africa",
  contactNumber: "0531007179",
  address: "No. 4 Rangoon Lane, Cantonments, Accra",
  hours: "Monday - Friday 8am to 5pm",
  themeColor: "#F8AD03",
  defaultDescription:
    "Surge is a licensed deposit-taking microfinance institution providing fast (≤48h) salary-backed loans and secure deposit solutions for salaried workers in Ghana. Digital onboarding with Ghana Card + selfie verification, remote convenience, and upcoming mobile & web apps help customers access funds quickly and manage finances seamlessly. Taking your Further…",
  defaultKeywords: [
    "microfinance",
    "Ghana",
    "fast loans",
    "salary loan",
    "deposit taking",
    "digital onboarding",
    "GhanaCard",
    "identity verification",
    "48-hour disbursement",
    "financial services",
    "Surge",
  ],
  social: {
    facebook: "https://www.facebook.com/share/1ChCz4dPZP/",
    instagram:
      "https://www.instagram.com/surgeafrica?igsh=MTljNzgyM21uaTFtYQ==",
    linkedin: "https://www.linkedin.com/company/surge-mfi",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3970.961379045496!2d-0.18379632501471932!3d5.572728594407858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzQnMjEuOCJOIDDCsDEwJzUyLjQiVw!5e0!3m2!1sen!2sgh!4v1761552507370!5m2!1sen!2sgh",
  origin: process.env.NEXT_PUBLIC_SITE_URL ?? "https://surge.africa",
  getStartedUrl: "https://atlas.surge.africa/auth/signup",
}

export const socialProfiles = [
  site.social.facebook,
  site.social.instagram,
  site.social.linkedin,
]
