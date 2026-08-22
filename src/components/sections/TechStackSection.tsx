import { stackItems, domains } from '@/data/stack'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations'

const tierDot: Record<string, string> = {
  production: 'var(--signal-green)',
  proficient: 'var(--accent-orange)',
  familiar: 'var(--text-muted)',
}

export default function TechStackSection() {
  return (
    <section style={{ padding: '120px 24px', backgroundColor: 'var(--bg-void)' }} className="tech-section">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Technical Stack
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-1px', lineHeight: 1.1 }}>
              Tools I actually ship with.
            </h2>
          </div>
        </FadeIn>

        {/* Legend */}
        <FadeIn delay={0.1}>
          <div style={{ display: 'flex', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {[
              { tier: 'production', label: 'Daily Driver' },
              { tier: 'proficient', label: 'Proficient' },
              { tier: 'familiar', label: 'Familiar' },
            ].map(({ tier, label }) => (
              <div key={tier} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: tierDot[tier] }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Domain columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }} className="stack-grid">
          {domains.map((domain, di) => {
            const items = stackItems.filter(s => s.domain === domain.key)
            return (
              <FadeIn key={domain.key} delay={di * 0.08}>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '20px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid var(--bg-border)',
                  }}>
                    {domain.label}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {items.map((item) => (
                      <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '6px', height: '6px', borderRadius: '50%',
                          backgroundColor: tierDot[item.tier],
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: item.tier === 'production' ? 'var(--text-primary)' : 'var(--text-secondary)',
                          fontWeight: item.tier === 'production' ? 500 : 400,
                        }}>
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-section { padding: 60px 16px !important; }
        }
      `}</style>
    </section>
  )
}
