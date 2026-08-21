'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  label: string
  color: string
}

interface Edge {
  from: number
  to: number
}

const NODES: Node[] = [
  { x: 0.15, y: 0.2,  label: 'RFID Reader',   color: '#00E5FF' },
  { x: 0.15, y: 0.5,  label: 'BLE Beacon',    color: '#00E5FF' },
  { x: 0.15, y: 0.8,  label: 'NFC Tag',       color: '#00B8CC' },
  { x: 0.45, y: 0.35, label: 'Middleware',     color: '#00FF88' },
  { x: 0.45, y: 0.65, label: 'API Gateway',   color: '#00FF88' },
  { x: 0.75, y: 0.2,  label: 'WMS / ERP',     color: '#00E5FF' },
  { x: 0.75, y: 0.5,  label: 'Laravel App',   color: '#00E5FF' },
  { x: 0.75, y: 0.8,  label: 'Database',      color: '#00B8CC' },
]

const EDGES: Edge[] = [
  { from: 0, to: 3 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 4 },
  { from: 3, to: 5 },
  { from: 3, to: 6 },
  { from: 4, to: 6 },
  { from: 4, to: 7 },
  { from: 6, to: 7 },
]

export default function NodeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = (ts: number) => {
      const dt = (ts - timeRef.current) / 1000
      timeRef.current = ts
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      // Animated particle progress along edges
      const particleT = (ts / 2000) % 1

      // Draw edges
      EDGES.forEach(({ from, to }) => {
        const a = NODES[from]
        const b = NODES[to]
        const x1 = a.x * W, y1 = a.y * H
        const x2 = b.x * W, y2 = b.y * H

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = 'rgba(0,229,255,0.12)'
        ctx.lineWidth = 1
        ctx.stroke()

        // Particle dot
        const offset = (from * 0.3 + particleT) % 1
        const px = x1 + (x2 - x1) * offset
        const py = y1 + (y2 - y1) * offset
        ctx.beginPath()
        ctx.arc(px, py, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,229,255,0.6)'
        ctx.fill()
      })

      // Draw nodes
      NODES.forEach((node, i) => {
        const x = node.x * W
        const y = node.y * H + Math.sin(ts / 1800 + i * 0.9) * 4

        // Glow
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 18)
        grad.addColorStop(0, 'rgba(0,229,255,0.18)')
        grad.addColorStop(1, 'rgba(0,229,255,0)')
        ctx.beginPath()
        ctx.arc(x, y, 18, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Node circle
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        // Label
        ctx.font = '10px "JetBrains Mono", monospace'
        ctx.fillStyle = 'rgba(139,151,176,0.8)'
        ctx.textAlign = 'center'
        ctx.fillText(node.label, x, y + 18)
      })

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )
}
