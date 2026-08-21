import { FadeIn } from '@/components/animations'

export default function ArchitectureDiagram() {
  return (
    <section style={{
      padding: '120px 24px',
      backgroundColor: 'var(--bg-surface)',
      borderTop: '1px solid var(--bg-border)',
      borderBottom: '1px solid var(--bg-border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <div style={{ marginBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              System Thinking
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-1px', lineHeight: 1.1, maxWidth: '500px' }}>
              How I think about systems
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)', marginTop: '16px', maxWidth: '480px', lineHeight: 1.7 }}>
              A sample integration architecture for RFID-enabled warehouse management — from hardware layer to business application.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--bg-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            overflowX: 'auto',
          }}>
            {/* Diagram */}
            <div style={{ display: 'flex', alignItems: 'stretch', gap: '0', minWidth: '600px' }}>

              {/* Column 1: Hardware */}
              <DiagramColumn
                label="Hardware Layer"
                color="var(--accent-cyan)"
                nodes={['RFID Reader (Impinj)', 'BLE Beacon', 'NFC Tag']}
              />

              {/* Arrow */}
              <DiagramArrow />

              {/* Column 2: Middleware */}
              <DiagramColumn
                label="Integration Layer"
                color="var(--signal-green)"
                nodes={['IoT Middleware', 'Event Bus', 'REST API Gateway']}
              />

              {/* Arrow */}
              <DiagramArrow />

              {/* Column 3: Application */}
              <DiagramColumn
                label="Application Layer"
                color="var(--accent-cyan)"
                nodes={['WMS / ERP (Laravel)', 'Reporting Dashboard', 'MySQL Database']}
              />
            </div>

            {/* Legend */}
            <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--bg-border)', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { color: 'var(--accent-cyan)', label: 'Hardware & Application' },
                { color: 'var(--signal-green)', label: 'Integration / Middleware' },
              ].map(({ color, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function DiagramColumn({ label, color, nodes }: { label: string; color: string; nodes: string[] }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', textAlign: 'center' }}>
        {label}
      </p>
      {nodes.map((node) => (
        <div key={node} style={{
          backgroundColor: 'var(--bg-surface)',
          border: `1px solid ${color}33`,
          borderLeft: `2px solid ${color}`,
          borderRadius: 'var(--radius-md)',
          padding: '12px 16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--text-secondary)',
          textAlign: 'center',
        }}>
          {node}
        </div>
      ))}
    </div>
  )
}

function DiagramArrow() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 16px', marginTop: '32px', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(0,229,255,0.3)' }} />
        <div style={{
          width: 0, height: 0,
          borderTop: '4px solid transparent',
          borderBottom: '4px solid transparent',
          borderLeft: '6px solid rgba(0,229,255,0.4)',
          marginLeft: '4px',
        }} />
      </div>
    </div>
  )
}
