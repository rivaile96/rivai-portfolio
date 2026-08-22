import Link from 'next/link'
import { siteConfig } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--bg-border)',
      backgroundColor: 'var(--bg-void)',
      padding: '48px 24px 32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px', height: '32px',
                background: 'linear-gradient(135deg, var(--accent-orange), #CC5500)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
                color: '#ffffff',
              }}>RI</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)' }}>
                Riva Imanudin
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', maxWidth: '240px' }}>
              System Integration Engineer bridging hardware, software, and intelligent automation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '16px', textTransform: 'uppercase' }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {siteConfig.nav.map((item) => (
                <Link key={item.href} href={item.href} style={{
                  color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none',
                  transition: 'color 200ms',
                }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '16px', textTransform: 'uppercase' }}>
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>
                LinkedIn
              </a>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>
                GitHub
              </a>
              <a href={`mailto:${siteConfig.contact.email}`}
                style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--bg-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
            © {year} Riva Imanudin. Built with precision.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--signal-green)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
            <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
              Available for opportunities
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-bottom { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
    </footer>
  )
}
