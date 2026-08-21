'use client'

import { useState } from 'react'
import { EnvelopeSimple, LinkedinLogo, GithubLogo, WhatsappLogo } from '@phosphor-icons/react'
import { siteConfig } from '@/lib/constants'
import { FadeIn } from '@/components/animations'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ minHeight: '100dvh', backgroundColor: 'var(--bg-void)', paddingTop: '64px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px 120px' }}>

        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: '80px', maxWidth: '560px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Contact
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '20px' }}>
              Let&apos;s work together.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Open to full-time roles, contract projects, and technical consulting — especially in RFID/IoT integration, Laravel development, and server infrastructure.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px', alignItems: 'start' }} className="contact-grid">

          {/* Form */}
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name + Company */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={v => setForm(f => ({ ...f, name: v }))}
                    required
                  />
                  <FormField
                    label="Company (optional)"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    value={form.company}
                    onChange={v => setForm(f => ({ ...f, company: v }))}
                  />
                </div>

                {/* Email */}
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={v => setForm(f => ({ ...f, email: v }))}
                  required
                />

                {/* Message */}
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--bg-border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '14px 16px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      color: 'var(--text-primary)',
                      resize: 'vertical',
                      outline: 'none',
                      transition: 'border-color 200ms',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,229,255,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'var(--bg-border)'}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  style={{
                    background: status === 'sent' ? 'var(--signal-green)' : 'linear-gradient(135deg, var(--accent-cyan), #0066CC)',
                    color: '#080B12',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 32px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '15px',
                    cursor: status === 'sending' ? 'wait' : status === 'sent' ? 'default' : 'pointer',
                    transition: 'filter 200ms',
                    alignSelf: 'flex-start',
                  }}
                >
                  {status === 'idle' && 'Send Message'}
                  {status === 'sending' && 'Sending...'}
                  {status === 'sent' && '✓ Message Sent'}
                  {status === 'error' && 'Try Again'}
                </button>

                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--signal-red)' }}>
                    Something went wrong. Please email directly at {siteConfig.contact.email}
                  </p>
                )}
              </div>
            </form>
          </FadeIn>

          {/* Direct contact */}
          <FadeIn delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                Direct Contact
              </p>
              {[
                {
                  icon: <EnvelopeSimple size={18} />,
                  label: 'Email',
                  value: siteConfig.contact.email,
                  href: `mailto:${siteConfig.contact.email}`,
                },
                {
                  icon: <WhatsappLogo size={18} />,
                  label: 'WhatsApp',
                  value: '+62 878 0117 7413',
                  href: `https://wa.me/${siteConfig.contact.whatsapp}`,
                },
                {
                  icon: <LinkedinLogo size={18} />,
                  label: 'LinkedIn',
                  value: 'rivaimanudin',
                  href: siteConfig.socials.linkedin,
                },
                {
                  icon: <GithubLogo size={18} />,
                  label: 'GitHub',
                  value: 'rivaile96',
                  href: siteConfig.socials.github,
                },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '16px 20px',
                  display: 'flex', alignItems: 'center', gap: '14px',
                  textDecoration: 'none',
                  transition: 'border-color 200ms',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.25)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--bg-border)'}
                >
                  <span style={{ color: 'var(--accent-cyan)' }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function FormField({ label, name, type, placeholder, value, onChange, required }: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean
}) {
  return (
    <div>
      <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--bg-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '14px 16px',
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--text-primary)',
          outline: 'none',
          transition: 'border-color 200ms',
          boxSizing: 'border-box',
        }}
        onFocus={e => e.target.style.borderColor = 'rgba(0,229,255,0.4)'}
        onBlur={e => e.target.style.borderColor = 'var(--bg-border)'}
      />
    </div>
  )
}
