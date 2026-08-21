import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { projects, getProjectBySlug } from '@/data/projects'
import { FadeIn } from '@/components/animations'
import { HoverCard } from '@/components/ui/HoverCard'
import { siteConfig } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.impact,
  }
}

const statusLabel: Record<string, { label: string; color: string }> = {
  live:          { label: 'Live',        color: 'var(--signal-green)' },
  deployed:      { label: 'Deployed',    color: 'var(--accent-cyan)' },
  proposal:      { label: 'Approved',    color: 'var(--signal-amber)' },
  'in-progress': { label: 'In Progress', color: 'var(--signal-amber)' },
}

const nextCardBase: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'var(--bg-surface)',
  border: '1px solid var(--bg-border)',
  borderRadius: 'var(--radius-xl)',
  padding: '28px 32px',
  textDecoration: 'none',
  transition: 'border-color 300ms',
}

const nextCardHover: React.CSSProperties = {
  borderColor: 'rgba(0,229,255,0.25)',
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[currentIndex + 1] ?? projects[0]

  return (
    <div style={{ minHeight: '100dvh', backgroundColor: 'var(--bg-void)', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 120px' }}>

        {/* Back */}
        <FadeIn>
          <Link href="/projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: 'var(--text-muted)', fontSize: '14px', textDecoration: 'none',
            fontFamily: 'var(--font-body)', marginBottom: '48px',
          }}>
            <ArrowLeft size={14} /> All Projects
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.05}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: statusLabel[project.status]?.color }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
                  {statusLabel[project.status]?.label}
                </span>
              </div>
              <span style={{ color: 'var(--bg-border)' }}>·</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>{project.period}</span>
              {project.client && (
                <>
                  <span style={{ color: 'var(--bg-border)' }}>·</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>{project.client}</span>
                </>
              )}
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '16px' }}>
              {project.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              {project.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  color: 'var(--accent-cyan)', backgroundColor: 'rgba(0,229,255,0.08)',
                  border: '1px solid rgba(0,229,255,0.2)',
                  padding: '4px 10px', borderRadius: 'var(--radius-sm)',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Impact callout */}
        <FadeIn delay={0.1}>
          <div style={{
            backgroundColor: 'rgba(0,229,255,0.06)',
            border: '1px solid rgba(0,229,255,0.2)',
            borderLeft: '3px solid var(--accent-cyan)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px 32px',
            marginBottom: '64px',
          }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Impact
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-primary)', lineHeight: 1.65 }}>
              {project.impact}
            </p>
          </div>
        </FadeIn>

        {/* Case study sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {[
            { label: 'The Challenge', body: project.challenge },
            { label: 'My Approach',   body: project.approach },
            { label: 'The Outcome',   body: project.outcome },
          ].map((section, i) => (
            <FadeIn key={section.label} delay={0.12 + i * 0.08}>
              <div style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--bg-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px 40px',
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  {section.label}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {section.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tech stack */}
        <FadeIn delay={0.35}>
          <div style={{ marginTop: '64px', paddingTop: '48px', borderTop: '1px solid var(--bg-border)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {project.tech.map(t => (
                <span key={t.name} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px',
                  color: 'var(--text-secondary)', backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--bg-border)',
                  padding: '6px 14px', borderRadius: 'var(--radius-md)',
                }}>{t.name}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Next project */}
        <FadeIn delay={0.4}>
          <div style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid var(--bg-border)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Next Project
            </p>
            <Link href={`/projects/${next.slug}`} style={{ textDecoration: 'none' }}>
              <HoverCard style={nextCardBase} hoverStyle={nextCardHover}>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{next.title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)' }}>{next.subtitle}</p>
                </div>
                <ArrowRight size={20} color="var(--text-muted)" />
              </HoverCard>
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  )
}
