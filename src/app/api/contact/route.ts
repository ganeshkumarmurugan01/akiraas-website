import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ── Verify Cloudflare Turnstile token ────────────────────────
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY || '0x4AAAAAAEXRXkawaZW1pxXc557_aXYAafU';
  if (!secret) {
    console.warn('TURNSTILE_SECRET_KEY not set — skipping verification in dev');
    return true;
  }
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret, response: token, remoteip: ip }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, org, interests, message, tsToken, website } = body;

    // ── 1. Honeypot check — bots fill the hidden "website" field ──
    if (website && website.trim() !== '') {
      // Silently accept but don't send — bot doesn't know it was blocked
      return NextResponse.json({ success: true });
    }

    // ── 2. Basic field validation ──────────────────────────────
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // ── 3. Email format validation ─────────────────────────────
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // ── 4. Turnstile verification ──────────────────────────────
    if (!tsToken) {
      return NextResponse.json(
        { error: 'Security check failed. Please refresh and try again.' },
        { status: 400 }
      );
    }
    const ip = req.headers.get('cf-connecting-ip') || req.headers.get('x-forwarded-for') || '';
    const turnstileOk = await verifyTurnstile(tsToken, ip);
    if (!turnstileOk) {
      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 403 }
      );
    }

    // ── 5. Rate limit — basic message length sanity check ─────
    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long. Please keep it under 5000 characters.' },
        { status: 400 }
      );
    }

    // ── 6. Zoho SMTP config check ──────────────────────────────
    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_APP_PASSWORD) {
      console.error('Missing ZOHO_EMAIL or ZOHO_APP_PASSWORD');
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host:   'smtp.zoho.com',
      port:   465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    });

    const fullName     = `${firstName} ${lastName || ''}`.trim();
    const interestList = Array.isArray(interests) && interests.length > 0
      ? interests.join(', ') : 'Not specified';
    const orgDisplay   = org || 'Not provided';
    const safeMessage  = message.replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // ── 7. Admin notification email ────────────────────────────
    await transporter.sendMail({
      from:    `"Akiraas Website" <${process.env.ZOHO_EMAIL}>`,
      to:      process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${fullName} — ${interestList}`,
      html: `
<!DOCTYPE html><html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FAF8F3;font-family:Inter,system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F3;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid rgba(45,27,78,0.1);border-top:4px solid #2D1B4E;max-width:600px;width:100%;">
      <tr><td style="padding:36px 40px 24px;border-bottom:1px solid #F1EDE3;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#B8963E;">New Enquiry · Akiraas Website</p>
        <h1 style="margin:0;font-family:Georgia,serif;font-size:22px;font-weight:700;color:#2D1B4E;">Contact Form Submission</h1>
      </td></tr>
      <tr><td style="padding:28px 40px 0;">
        <table width="100%" cellpadding="0" cellspacing="0">
          ${[['Name',fullName],['Email',email],['Organisation',orgDisplay],['Interested In',interestList]]
            .map(([k,v])=>`
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #F1EDE3;width:140px;vertical-align:top;">
                <span style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#B8963E;">${k}</span>
              </td>
              <td style="padding:10px 0;border-bottom:1px solid #F1EDE3;vertical-align:top;">
                <span style="font-size:14px;color:#1A1917;">${k==='Email'?`<a href="mailto:${v}" style="color:#2D1B4E;">${v}</a>`:v}</span>
              </td>
            </tr>`).join('')}
        </table>
      </td></tr>
      <tr><td style="padding:28px 40px;">
        <p style="margin:0 0 12px;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#B8963E;">Message</p>
        <div style="background:#FAF8F3;border-left:3px solid #B8963E;padding:18px 20px;">
          <p style="margin:0;font-size:14px;color:#3D3C38;line-height:1.8;white-space:pre-wrap;">${safeMessage}</p>
        </div>
      </td></tr>
      <tr><td style="padding:0 40px 36px;">
        <a href="mailto:${email}?subject=Re: Your enquiry to Akiraas"
           style="display:inline-block;background:#2D1B4E;color:#FFFFFF;font-size:13px;font-weight:600;padding:12px 24px;text-decoration:none;border-radius:3px;">
          Reply to ${firstName} →
        </a>
      </td></tr>
      <tr><td style="padding:20px 40px;background:#F1EDE3;border-top:1px solid rgba(45,27,78,0.08);">
        <p style="margin:0;font-size:11px;color:#6B6A65;">Sent from the contact form at <strong>akiraas.com</strong>. Reply to reach ${fullName} at ${email}.</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`,
    });

    // ── 8. Confirmation email to sender ───────────────────────
    await transporter.sendMail({
      from:    `"Akiraas" <${process.env.ZOHO_EMAIL}>`,
      to:      email,
      subject: `We've received your message — Akiraas`,
      html: `
<!DOCTYPE html><html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FAF8F3;font-family:Inter,system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F3;padding:40px 20px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid rgba(45,27,78,0.1);border-top:4px solid #B8963E;max-width:560px;width:100%;">
      <tr><td style="padding:40px 40px 28px;text-align:center;border-bottom:1px solid #F1EDE3;">
        <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:26px;font-weight:700;color:#2D1B4E;">Akiraas</p>
        <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#B8963E;">Message Received</p>
      </td></tr>
      <tr><td style="padding:32px 40px;">
        <p style="margin:0 0 16px;font-size:15px;color:#3D3C38;line-height:1.8;">Hi ${firstName},</p>
        <p style="margin:0 0 16px;font-size:15px;color:#3D3C38;line-height:1.8;">Thank you for reaching out. We&rsquo;ve received your message and will get back to you within one business day.</p>
        <p style="margin:0 0 28px;font-size:15px;color:#3D3C38;line-height:1.8;">In the meantime, feel free to explore our communities at <a href="https://akiraas.com" style="color:#2D1B4E;font-weight:500;">akiraas.com</a>.</p>
        <div style="background:#FAF8F3;border-left:3px solid #B8963E;padding:16px 20px;margin-bottom:28px;">
          <p style="margin:0 0 8px;font-size:14px;color:#3D3C38;line-height:1.7;font-style:italic;">&ldquo;People don&rsquo;t just want to attend something &mdash; they want to belong to something.&rdquo;</p>
          <p style="margin:0;font-size:11px;color:#B8963E;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">&mdash; GaneshKumar Murugan, Founder</p>
        </div>
        <p style="margin:0;font-size:14px;color:#6B6A65;line-height:1.8;">Warm regards,<br><strong style="color:#2D1B4E;">The Akiraas Team</strong></p>
      </td></tr>
      <tr><td style="padding:20px 40px;background:#F1EDE3;border-top:1px solid rgba(45,27,78,0.08);">
        <p style="margin:0;font-size:11px;color:#6B6A65;">Akiraas Pte Ltd &middot; Singapore &middot; <a href="https://akiraas.com" style="color:#2D1B4E;">akiraas.com</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`,
    });

    return NextResponse.json({ success: true });

  } catch (err: unknown) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
