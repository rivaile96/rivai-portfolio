// src/types/project.ts

export type ProjectStatus = 'live' | 'deployed' | 'proposal' | 'in-progress'

export type ProjectTag =
  | 'RFID'
  | 'Laravel'
  | 'IoT'
  | 'Architecture'
  | 'Pre-sales'
  | 'AI'
  | 'Infrastructure'
  | 'BLE'
  | 'NFC'

export interface TechItem {
  name: string
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  impact: string
  description: string
  tags: ProjectTag[]
  tech: TechItem[]
  status: ProjectStatus
  client?: string
  period: string
  featured: boolean
  thumbnail?: string
  challenge: string
  approach: string
  outcome: string
}
