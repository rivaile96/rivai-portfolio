'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, DownloadSimple } from '@phosphor-icons/react'
import dynamic from 'next/dynamic'

const NodeGraph = dynamic(() => import('@/components/animations/NodeGraph'), { ssr: false })

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100dvh',
        backgroundColor: 'var(--bg-void)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
      }}
    >
      {/* Dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '80px', alignItems: 'center' }} className="hero-grid">

          {/* Left: Content */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--signal-green)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 6vw, 80px)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
                letterSpacing: '-2px',
                marginBottom: '16px',
              }}
            >
              Riva Imanudin
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                fontWeight: 500,
                color: 'var(--accent-cyan)',
                marginBottom: '24px',
                letterSpacing: '-0.5px',
              }}
            >
              System Integration Engineer
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '480px',
                marginBottom: '48px',
              }}
            >
              Bridging industrial hardware, software ecosystems, and intelligent automation — from RFID readers to Laravel backends to server infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <Link
                href="/projects"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), #0066CC)',
                  color: '#080B12',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'filter 200ms, transform 200ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                View My Work <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href="/cv/riva-imanudin-cv.pdf"
                download
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(0,229,255,0.35)',
                  color: 'var(--accent-cyan)',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'background 200ms, border-color 200ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,229,255,0.08)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
              >
                <DownloadSimple size={16} weight="bold" /> Download CV
              </a>
            </motion.div>

            {/* Capability pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ marginTop: '56px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}
            >
              {['RFID / IoT', 'Laravel', 'Server Infra', 'Architecture', 'AI Automation', 'Pre-sales'].map((pill, i) => (
                <span key={pill} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: i === 0 ? 'var(--accent-cyan)' : 'var(--text-muted)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  {pill}{i < 5 ? <span style={{ marginLeft: '8px', color: 'var(--bg-border)' }}>·</span> : ''}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Node Graph */}
          <div className="hero-graph" style={{ position: 'relative', height: '420px' }}>
            <NodeGraph />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-graph { display: none !important; }
        }
      `}</style>
    </section>
  )
}
