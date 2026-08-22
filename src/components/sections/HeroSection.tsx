'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
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

      {/* Radial glow 1 - top left */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-15%',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
        animation: 'glow-breathe 6s ease-in-out infinite',
      }} />

      {/* Radial glow 2 - bottom right */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
        animation: 'glow-breathe 8s ease-in-out infinite 2s',
      }} />

      {/* Radial glow 3 - center subtle */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '40%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,107,0,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'glow-breathe 10s ease-in-out infinite 1s',
      }} />

      {/* Animated grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,107,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.08) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
        animation: 'grid-pulse 4s ease-in-out infinite',
      }} />

      {/* Floating particles - pakai keyframe float-1 s/d float-5 bergantian */}
      {[
        { top: '15%', left: '8%',  size: 6,  dur: '12s', delay: '0s',   kf: 'float-1' },
        { top: '30%', left: '15%', size: 4,  dur: '15s', delay: '1s',   kf: 'float-2' },
        { top: '60%', left: '5%',  size: 5,  dur: '18s', delay: '2s',   kf: 'float-3' },
        { top: '75%', left: '20%', size: 6,  dur: '14s', delay: '0.5s', kf: 'float-4' },
        { top: '20%', left: '85%', size: 4,  dur: '16s', delay: '3s',   kf: 'float-5' },
        { top: '50%', left: '90%', size: 6,  dur: '13s', delay: '1.5s', kf: 'float-1' },
        { top: '80%', left: '78%', size: 4,  dur: '17s', delay: '2.5s', kf: 'float-2' },
        { top: '10%', left: '50%', size: 5,  dur: '20s', delay: '4s',   kf: 'float-3' },
        { top: '40%', left: '60%', size: 7,  dur: '11s', delay: '0.8s', kf: 'float-4' },
        { top: '65%', left: '45%', size: 4,  dur: '19s', delay: '3.5s', kf: 'float-5' },
        { top: '85%', left: '35%', size: 5,  dur: '14s', delay: '1.2s', kf: 'float-1' },
        { top: '25%', left: '72%', size: 6,  dur: '16s', delay: '2.8s', kf: 'float-2' },
        { top: '55%', left: '28%', size: 4,  dur: '13s', delay: '0.3s', kf: 'float-3' },
        { top: '90%', left: '60%', size: 5,  dur: '18s', delay: '4.5s', kf: 'float-4' },
        { top: '35%', left: '3%',  size: 7,  dur: '15s', delay: '1.8s', kf: 'float-5' },
      ].map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: p.top,
          left: p.left,
          width: `${p.size}px`,
          height: `${p.size}px`,
          borderRadius: '50%',
          backgroundColor: '#FF6B00',
          boxShadow: `0 0 ${p.size * 2}px rgba(255,107,0,0.6)`,
          pointerEvents: 'none',
          animation: `${p.kf} ${p.dur} ease-in-out infinite ${p.delay}`,
        }} />
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '80px', alignItems: 'center' }} className="hero-grid">

          {/* Left: Content */}
          <div>
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{ marginBottom: '32px', display: 'inline-block' }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(255,107,0,0.4)',
                boxShadow: '0 0 20px rgba(255,107,0,0.15)',
              }}>
                <Image
                  src="/profile.jpg"
                  alt="Riva Imanudin"
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  priority
                />
              </div>
            </motion.div>

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
                color: 'var(--accent-orange)',
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
                  background: 'linear-gradient(135deg, var(--accent-orange), #CC5500)',
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
                  border: '1px solid rgba(255,107,0,0.35)',
                  color: 'var(--accent-orange)',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'background 200ms, border-color 200ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,107,0,0.08)' }}
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
                  color: i === 0 ? 'var(--accent-orange)' : 'var(--text-muted)',
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
