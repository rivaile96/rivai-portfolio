import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { getFeaturedProjects } from '@/data/projects'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations'
import { HoverCard } from '@/components/ui/HoverCard'

const statusLabel: Record<string, { label: string; color: string }> = {
  live:          { label: 'Live',        color: 'var(--signal-green)' },
  deployed:      { label: 'Deployed',    color: 'var(--accent-orange)' },
  proposal:      { label: 'Approved',    color: 'var(--signal-amber)' },
  'in-progress': { label: 'In Progress', color: 'var(--signal-amber)' },
}

const cardBase: React.CSSProperties = {
  height: '100%',
  backgroundColor: 'var(--bg-surface)',
  border: '1px solid var(--bg-border)',
  borderRadius: 'var(--radius-xl)',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'border-color 300ms, transform 300ms, box-shadow 300ms',
  borderLeft: '3px solid var(--accent-orange)',
  cursor: 'pointer',
}

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(255,107,0,0.4)',
  transform: 'translateY(-4px)',
  boxShadow: 'var(--glow-orange)',
}

const smallCardBase: React.CSSProperties = {
  height: '100%',
  backgroundColor: 'var(--bg-surface)',
  border: '1px solid var(--bg-border)',
  borderRadius: 'var(--radius-xl)',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'border-color 300ms, transform 300ms, box-shadow 300ms',
  cursor: 'pointer',
}

const smallCardHover: React.CSSProperties = {
  borderColor: 'rgba(255,107,0,0.25)',
  transform: 'translateY(-4px)',
  boxShadow: 'var(--glow-orange)',
}

export default function FeaturedProjects() {
  const projects = getFeaturedProjects()
  const [main, ...rest] = projects

  return (
    <section style={{ padding: '120px 24px', backgroundColor: 'var(--bg-void)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Selected Work
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-1px', lineHeight: 1.1 }}>
                Projects that ship<br />and stay shipped.
              </h2>
            </div>
            <Link href="/projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--accent-orange)', fontSize: '14px', fontWeight: 600,
              fontFamily: 'var(--font-body)', textDecoration: 'none',
              border: '1px solid rgba(255,107,0,0.3)', padding: '10px 20px',
              borderRadius: 'var(--radius-md)', transition: 'background 200ms',
            }}>
              View All <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </FadeIn>

        {/* Asymmetric grid: 1 large + 2 small */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '20px' }} className="projects-grid">

          {/* Main featured card */}
          {main && (
            <FadeIn delay={0.1} style={{ gridRow: '1 / 3' }}>
              <Link href={`/projects/${main.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <HoverCard style={cardBase} hoverStyle={cardHover}>
                  {/* Status + tags row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {main.tags.map(tag => (
                        <span key={tag} style={{
                          fontFamily: 'var(--font-mono)', fontSize: '11px',
                          color: 'var(--accent-orange)', backgroundColor: 'rgba(255,107,0,0.08)',
                          border: '1px solid rgba(255,107,0,0.2)',
                          padding: '3px 8px', borderRadius: 'var(--radius-sm)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: statusLabel[main.status]?.color }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                        {statusLabel[main.status]?.label}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px', marginBottom: '8px' }}>
                    {main.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    {main.subtitle}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, flexGrow: 1, marginBottom: '40px' }}>
                    {main.impact}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                    {main.tech.map(t => (
                      <span key={t.name} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)',
                        padding: '2px 6px',
                      }}>{t.name}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-orange)', fontSize: '14px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    View Case Study <ArrowRight size={14} weight="bold" />
                  </div>
                </HoverCard>
              </Link>
            </FadeIn>
          )}

          {/* Secondary cards */}
          <StaggerChildren style={{ display: 'contents' }}>
            {rest.map((project) => (
              <StaggerItem key={project.slug}>
                <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <HoverCard style={smallCardBase} hoverStyle={smallCardHover}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} style={{
                          fontFamily: 'var(--font-mono)', fontSize: '11px',
                          color: 'var(--accent-orange)', backgroundColor: 'rgba(255,107,0,0.08)',
                          border: '1px solid rgba(255,107,0,0.2)',
                          padding: '3px 8px', borderRadius: 'var(--radius-sm)',
                        }}>{tag}</span>
                      ))}
                      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: statusLabel[project.status]?.color }} />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                          {statusLabel[project.status]?.label}
                        </span>
                      </div>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px', marginBottom: '8px' }}>
                      {project.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                      {project.subtitle}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, flexGrow: 1, marginBottom: '24px' }}>
                      {project.impact}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-orange)', fontSize: '13px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      View Case Study <ArrowRight size={12} weight="bold" />
                    </div>
                  </HoverCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
        }
      `}</style>
    </section>
  )
}
