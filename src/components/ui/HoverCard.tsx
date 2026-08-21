'use client'

import { useRef } from 'react'

interface HoverCardProps {
  children: React.ReactNode
  style?: React.CSSProperties
  hoverStyle?: React.CSSProperties
  className?: string
}

export function HoverCard({ children, style = {}, hoverStyle = {}, className }: HoverCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseEnter={() => {
        if (ref.current) Object.assign(ref.current.style, hoverStyle)
      }}
      onMouseLeave={() => {
        if (ref.current) {
          Object.keys(hoverStyle).forEach((key) => {
            ;(ref.current!.style as unknown as Record<string, string>)[key] = (style as Record<string, string>)[key] ?? ''
          })
        }
      }}
    >
      {children}
    </div>
  )
}
