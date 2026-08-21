import Link from 'next/link'
import { ArrowRight, EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { FadeIn } from '@/components/animations'
import { siteConfig } from '@/lib/constants'

export default function CTASection() {
  return (
    <section style={{
      padding: '120px 24px',
      backgroundColor: 'var(--bg-surface)',
      borderTop: '1px solid var(--bg-border)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <FadeIn>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '24px',
            backgroundColor: 'rgba(0,229,255,0.08)',
            border: '1px solid rgba(0,229,255,0.2)',
            borderRadius: '100px',
            padding: '6px 16px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--signal-green)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Open to Opportunities
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-2px',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}>
            Let&apos;s build something that matters.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '48px',
            maxWidth: '540px',
            margin: '0 auto 48px',
          }}>
            Looking for a System Integration Engineer who can own hardware-to-software delivery end-to-end? Let&apos;s talk.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, var(--accent-cyan), #0066CC)',
                color: '#080B12',
                padding: '16px 32px',
                borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              Start a Conversation <ArrowRight size={16} weight="bold" />
            </Link>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(0,229,255,0.3)',
                color: 'var(--accent-cyan)',
                padding: '16px 32px',
                borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              <LinkedinLogo size={16} /> LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
