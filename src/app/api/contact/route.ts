import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // If RESEND_API_KEY is set, use Resend — otherwise just log (dev mode)
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.log('[Contact Form]', { name, email, company, message })
      return NextResponse.json({ ok: true })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@rivai.my.id>',
        to: ['rifaimanudin@gmail.com'],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}${company ? ` — ${company}` : ''}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #FF6B00;">New Portfolio Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <hr style="border-color: #1E2736; margin: 24px 0;" />
            <p style="white-space: pre-line;">${message}</p>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[Resend error]', err)
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
