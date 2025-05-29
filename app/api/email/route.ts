import { NotionMagicLinkEmail } from '@/emails/notion-magic-link'
import { Resend } from 'resend'
import { render } from '@react-email/render'
import { env } from '@/env.mjs'

export const runtime = 'nodejs'

export async function POST() {
  if (!env.RESEND_TOKEN) {
    return Response.json({ error: 'RESEND_TOKEN not configured' }, { status: 500 })
  }
  const resend = new Resend(env.RESEND_TOKEN)
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      html: render(NotionMagicLinkEmail({ loginCode: 'John' })),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
