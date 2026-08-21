import type { Metadata } from 'next'
import { stackItems, domains } from '@/data/stack'
import { FadeIn } from '@/components/animations'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Stack — ${siteConfig.name}`,
  description: 'Technical stack spanning RFID hardware, Laravel backend, Linux server infrastructure, and IoT integration.',
}

const tierConfig = {
  production: { label: 'Daily Driver', color: 'var(--signal-green)', dot: 'var(--signal-green)' },
  proficient:  { label: 'Proficient',   color: 'var(--accent-orange)',  dot: 'var(--accent-orange)' },
  familiar:    { label: 'Familiar',     color: 'var(--text-muted)',   dot: 'var(--text-muted)' },
}

export default function StackPage() {
  return (
    <div style={{ minHeight: '100dvh', backgroundColor: 'var(--bg-void)', paddingTop: '64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 120px' }}>

        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: '80px', maxWidth: '640px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Technical Stack
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '20px' }}>
              Tools I actually ship with.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              From Impinj RFID readers to Nginx configs to Laravel ERP — a full-stack breadth grounded in real production experience.
            </p>
          </div>
        </FadeIn>

        {/* Legend */}
        <FadeIn delay={0.1}>
          <div style={{ display: 'flex', gap: '32px', marginBottom: '64px', padding: '20px 24px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--bg-border)', borderRadius: 'var(--radius-lg)', flexWrap: 'wrap' }}>
            {Object.entries(tierConfig).map(([tier, cfg]) => (
              <div key={tier} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cfg.dot }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)' }}>{cfg.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Domains */}
        {domains.map((domain, di) => {
          const items = stackItems.filter(s => s.domain === domain.key)
          return (
            <FadeIn key={domain.key} delay={di * 0.06}>
              <div style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {domain.label}
                  </h2>
                  <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--bg-border)' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                  {items.map((item) => {
                    const cfg = tierConfig[item.tier]
                    return (
                      <div key={item.name} style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--bg-border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '20px 24px',
                        display: 'flex', alignItems: 'flex-start', gap: '14px',
                        transition: 'border-color 200ms',
                      }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cfg.dot, flexShrink: 0, marginTop: '6px' }} />
                        <div>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: item.tier === 'production' ? 600 : 400, color: item.tier === 'production' ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: item.note ? '6px' : '0' }}>
                            {item.name}
                          </p>
                          {item.note && (
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                              {item.note}
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </div>
  )
}
