import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { projects } from '@/data/projects'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations'
import { HoverCard } from '@/components/ui/HoverCard'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description: 'System integration projects spanning RFID, Laravel ERP, IoT infrastructure, and maritime tracking.',
}

const statusLabel: Record<string, { label: string; color: string }> = {
  live:          { label: 'Live',        color: 'var(--signal-green)' },
  deployed:      { label: 'Deployed',    color: 'var(--accent-orange)' },
  proposal:      { label: 'Approved',    color: 'var(--signal-amber)' },
  'in-progress': { label: 'In Progress', color: 'var(--signal-amber)' },
}

const cardBase: React.CSSProperties = {
  backgroundColor: 'var(--bg-surface)',
  border: '1px solid var(--bg-border)',
  borderRadius: 'var(--radius-xl)',
  padding: '36px 40px',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '32px',
  alignItems: 'center',
  transition: 'border-color 300ms, transform 300ms, box-shadow 300ms',
  cursor: 'pointer',
}

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(255,107,0,0.25)',
  transform: 'translateY(-2px)',
  boxShadow: 'var(--glow-orange)',
}

export default function ProjectsPage() {
  return (
    <div style={{ minHeight: '100dvh', backgroundColor: 'var(--bg-void)', paddingTop: '64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }} className="projects-page">

        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: '80px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Portfolio
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '20px' }}>
              All Projects
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px' }}>
              End-to-end work spanning hardware integration, backend systems, and server infrastructure.
            </p>
          </div>
        </FadeIn>

        {/* Project list */}
        <StaggerChildren style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }} className="project-list-card-wrap">
                <HoverCard style={cardBase} hoverStyle={cardHover}>
                  <div>
                    {/* Status + meta row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: statusLabel[project.status]?.color }} />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                          {statusLabel[project.status]?.label}
                        </span>
                      </div>
                      <span style={{ color: 'var(--bg-border)', fontSize: '12px' }}>·</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>{project.period}</span>
                      {project.client && (
                        <>
                          <span style={{ color: 'var(--bg-border)', fontSize: '12px' }}>·</span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>{project.client}</span>
                        </>
                      )}
                    </div>

                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px', marginBottom: '8px' }}>
                      {project.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px', maxWidth: '600px' }}>
                      {project.impact}
                    </p>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{
                          fontFamily: 'var(--font-mono)', fontSize: '11px',
                          color: 'var(--accent-orange)', backgroundColor: 'rgba(255,107,0,0.08)',
                          border: '1px solid rgba(255,107,0,0.2)',
                          padding: '3px 8px', borderRadius: 'var(--radius-sm)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <span className="project-arrow"><ArrowRight size={20} color="var(--text-muted)" /></span>
                </HoverCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-page { padding: 40px 16px !important; }
          .project-list-card-wrap .project-arrow { display: none; }
        }
      `}</style>
    </div>
  )
}
