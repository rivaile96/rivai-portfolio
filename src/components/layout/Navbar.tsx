'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'
import { siteConfig } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? '1px solid var(--bg-border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(8,11,18,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 300ms ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px', height: '32px',
                background: 'linear-gradient(135deg, var(--accent-cyan), #0066CC)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
                color: '#080B12',
              }}>RI</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)' }}>
                Riva Imanudin
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: pathname === item.href ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#080B12',
                background: 'linear-gradient(135deg, var(--accent-cyan), #0066CC)',
                padding: '8px 20px',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                transition: 'filter 200ms',
              }}
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-menu-btn"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-primary)', padding: '8px',
            }}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div style={{
            paddingBottom: '16px',
            borderTop: '1px solid var(--bg-border)',
            display: 'flex', flexDirection: 'column', gap: '4px',
          }} className="mobile-menu">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: '12px 8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: pathname === item.href ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                marginTop: '8px',
                padding: '12px',
                textAlign: 'center',
                fontWeight: 600,
                color: '#080B12',
                background: 'linear-gradient(135deg, var(--accent-cyan), #0066CC)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
              }}
            >
              Hire Me
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        .mobile-menu { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
