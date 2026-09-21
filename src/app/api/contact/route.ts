import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"
import { site } from "@/lib/site"

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const firstName = String(body.first_name ?? "").trim()
  const lastName = String(body.last_name ?? "").trim()
  const email = String(body.email ?? "").trim()
  const message = String(body.message ?? "").trim()

  if (!email || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 422 },
    )
  }

  await sendEmail({
    to: site.supportEmail,
    subject: `New Contact Form Submission from ${firstName} ${lastName}`.trim(),
    replyTo: email,
    text: [
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n"),
    html: `
      <p><strong>First name:</strong> ${firstName}</p>
      <p><strong>Last name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
