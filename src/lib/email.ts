type SendEmailInput = {
  to: string
  subject: string
  html: string
  text?: string
  replyTo?: string
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: SendEmailInput) {
  const token = process.env.POSTMARK_SERVER_TOKEN
  const from = process.env.POSTMARK_FROM_EMAIL || "info@surge.africa"

  if (token) {
    const response = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": token,
      },
      body: JSON.stringify({
        From: from,
        To: to,
        Subject: subject,
        HtmlBody: html,
        TextBody: text,
        ReplyTo: replyTo,
        MessageStream: "outbound",
      }),
    })

    if (!response.ok) {
      throw new Error(`Postmark error: ${await response.text()}`)
    }
    return
  }

  console.info("[email:dev]", { to, subject, text, replyTo, html })
}
