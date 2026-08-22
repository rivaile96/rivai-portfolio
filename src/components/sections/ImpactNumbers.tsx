import { achievements } from '@/data/achievements'
import { FadeIn, CountUp, StaggerChildren, StaggerItem } from '@/components/animations'

export default function ImpactNumbers() {
  return (
    <section style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: '1px solid var(--bg-border)',
      borderBottom: '1px solid var(--bg-border)',
      padding: '64px 24px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            Impact by the numbers
          </p>
        </FadeIn>

        <StaggerChildren style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
        }} className="impact-grid">
          {achievements.map((item, i) => (
            <StaggerItem key={item.label}>
              <div style={{
                padding: '32px 24px',
                borderRight: i < achievements.length - 1 ? '1px solid var(--bg-border)' : 'none',
                textAlign: 'center',
              }} className={`impact-item ${i < achievements.length - 1 ? 'has-border' : ''}`}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(48px, 5vw, 72px)',
                  fontWeight: 700,
                  color: 'var(--accent-orange)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}>
                  <CountUp value={item.value} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                }}>
                  {item.label}
                </div>
                {item.sublabel && (
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.03em',
                  }}>
                    {item.sublabel}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .impact-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .impact-item.has-border { border-right: 1px solid var(--bg-border); border-bottom: 1px solid var(--bg-border); }
          .impact-item:nth-child(2) { border-right: none !important; }
          .impact-item:nth-child(3) { border-bottom: none !important; }
        }
        @media (max-width: 480px) {
          .impact-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .impact-item { padding: 20px 12px !important; }
          .impact-item.has-border { border-right: 1px solid var(--bg-border); border-bottom: 1px solid var(--bg-border); }
          .impact-item:nth-child(2n) { border-right: none !important; }
        }
      `}</style>
    </section>
  )
}
