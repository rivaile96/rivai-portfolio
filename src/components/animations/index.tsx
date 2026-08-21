'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

interface CountUpProps {
  value: string
  duration?: number
}

export function CountUp({ value, duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')
  const numericValue = parseInt(value, 10)
  const isNumeric = !isNaN(numericValue)

  useEffect(() => {
    if (!inView || !isNumeric) {
      setDisplay(value)
      return
    }
    const start = 0
    const end = numericValue
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(String(Math.round(start + (end - start) * eased)))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, numericValue, isNumeric, value, duration])

  return <span ref={ref}>{isNumeric ? display : value}</span>
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  style?: React.CSSProperties
}

export function FadeIn({ children, delay = 0, direction = 'up', className, style }: FadeInProps) {
  const offset = 24
  const initial: Record<string, number> = { opacity: 0 }
  if (direction === 'up') initial.y = offset
  if (direction === 'down') initial.y = -offset
  if (direction === 'left') initial.x = offset
  if (direction === 'right') initial.x = -offset

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

interface StaggerChildrenProps {
  children: React.ReactNode
  stagger?: number
  className?: string
  style?: React.CSSProperties
}

export function StaggerChildren({ children, stagger = 0.08, className, style }: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
