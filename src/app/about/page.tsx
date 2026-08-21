import type { Metadata } from 'next'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: 'System Integration Engineer with 3+ years bridging industrial hardware, Laravel backends, and server infrastructure.',
}

const timeline = [
  {
    period: '2026 – Present',
    role: 'System Integration Engineer',
    company: 'PT Global Trend Asia',
    detail: 'Designed and deployed enterprise RFID/IoT integrations. Built UHF RFID SDK adopted as pre-sales team standard. Led technical architecture for ShipGuard maritime tracking.',
  },
  {
    period: '2024',
    role: 'Full Stack Developer (Internal)',
    company: 'PT Wahana Datarindo Sempurna',
    detail: 'Built G-Service — a Laravel-based RMA and after-sales management system that replaced all Excel workflows and became the operational backbone.',
  },
  {
    period: '2026 – Present',
    role: 'Lead Developer & Infra Engineer',
    company: 'Kaffah Islamic School',
    detail: 'Architected and deployed a full school ERP covering 4 branches — from PPDB admission to IoT smart canteen. Solo end-to-end server infrastructure.',
  },
]

const certifications = [
  { name: 'Honeywell Technical Accreditation', issuer: 'Honeywell', year: '2025' },
  { name: 'Fortinet NSE 1', issuer: 'Fortinet', year: '2025' },
  { name: 'Fortinet NSE 2', issuer: 'Fortinet', year: '2025' },
  { name: 'Fortinet NSE 3', issuer: 'Fortinet', year: '2025' },
]

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100dvh', backgroundColor: 'var(--bg-void)', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px 120px' }}>

        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: '80px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              About
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '32px' }}>
              Riva Imanudin
            </h1>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--accent-cyan)', fontWeight: 500, marginBottom: '28px' }}>
              System Integration Engineer
            </p>
            <div style={{ maxWidth: '640px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '20px' }}>
                I bridge the gap between industrial hardware and enterprise software — taking a project from bare-metal RFID readers through middleware and API design to a production Laravel application running on Linux servers.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Based in South Jakarta. 3+ years in the field, with hands-on deployments across logistics, maritime, education, and retail sectors.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* What I do */}
        <FadeIn delay={0.1}>
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px', marginBottom: '32px' }}>
              What I do
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {[
                {
                  title: 'Hardware Integration',
                  desc: 'RFID/NFC/BLE device configuration, firmware coordination, and hardware-to-system data pipeline design.',
                },
                {
                  title: 'Backend Development',
                  desc: 'Laravel applications from data architecture to API layer. Built ERP, RMA, and IoT gateway systems.',
                },
                {
                  title: 'Infrastructure',
                  desc: 'Linux server setup, Nginx config, SSL, PM2, and full deployment lifecycle — solo end-to-end.',
                },
                {
                  title: 'Architecture & Pre-sales',
                  desc: 'Solution architecture for enterprise clients — from technical proposal to execution phase approval.',
                },
              ].map((item) => (
                <div key={item.title} style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>
                    {item.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={0.15}>
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px', marginBottom: '40px' }}>
              Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timeline.map((item, i) => (
                <div key={item.role} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '32px', paddingBottom: '40px', marginBottom: '40px', borderBottom: i < timeline.length - 1 ? '1px solid var(--bg-border)' : 'none' }} className="timeline-row">
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.period}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{item.role}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)', marginBottom: '12px' }}>{item.company}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Certifications */}
        <FadeIn delay={0.2}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px', marginBottom: '32px' }}>
              Certifications
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {certifications.map((cert) => (
                <div key={cert.name} style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '16px 24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: '8px',
                }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--text-primary)' }}>{cert.name}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>{cert.issuer}</p>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </div>
  )
}
