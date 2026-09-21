import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"
import { site } from "@/lib/site"

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const firstName = String(body.first_name ?? "").trim()
  const lastName = String(body.last_name ?? "").trim()
  const phone = String(body.phone ?? "").trim()
  const email = String(body.email ?? "").trim()
  const product = String(body.product ?? "").trim()

  if (!email || !firstName) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 422 },
    )
  }

  await sendEmail({
    to: site.supportEmail,
    subject: `New Product Application: ${product || "Unspecified"} from ${firstName} ${lastName}`.trim(),
    replyTo: email,
    text: [
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Product: ${product}`,
    ].join("\n"),
    html: `
      <p><strong>First name:</strong> ${firstName}</p>
      <p><strong>Last name:</strong> ${lastName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Product:</strong> ${product}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
