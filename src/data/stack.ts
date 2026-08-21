// src/data/stack.ts
import { StackItem } from '@/types/stack'

export const stackItems: StackItem[] = [
  // Hardware & Devices
  { name: 'Impinj RFID', tier: 'production', domain: 'hardware', note: 'Fixed UHF readers for enterprise RFID deployments' },
  { name: 'Chainway', tier: 'production', domain: 'hardware', note: 'Handheld RFID/barcode devices for field operations' },
  { name: 'Zebra', tier: 'production', domain: 'hardware', note: 'Industrial printers and scanners, RMA lifecycle management' },
  { name: 'Honeywell', tier: 'production', domain: 'hardware', note: 'Mobility & scanning devices, certified technical accreditation' },
  { name: 'BLE Beacons', tier: 'proficient', domain: 'hardware', note: 'People tracking in hybrid IoT architectures' },
  { name: 'NFC/RFID Tags', tier: 'proficient', domain: 'hardware', note: 'Cashless canteen and asset tagging' },

  // Backend & Web
  { name: 'Laravel / PHP', tier: 'production', domain: 'backend', note: 'Primary stack for internal systems and ERP development' },
  { name: 'MySQL / PostgreSQL', tier: 'production', domain: 'backend', note: 'Relational DB design, optimization, and migration' },
  { name: 'REST API', tier: 'production', domain: 'backend', note: 'API design, integration, and middleware routing' },
  { name: 'Python', tier: 'proficient', domain: 'backend', note: 'Scripting, automation, and data processing' },
  { name: 'JavaScript', tier: 'proficient', domain: 'backend', note: 'Web interface development for SDK demos' },

  // Infrastructure
  { name: 'Linux Debian', tier: 'production', domain: 'infrastructure', note: 'Primary server OS — sizing, setup, and administration' },
  { name: 'Nginx', tier: 'production', domain: 'infrastructure', note: 'Reverse proxy, SSL, and multi-site configuration' },
  { name: 'Docker', tier: 'proficient', domain: 'infrastructure', note: 'Containerization for service isolation' },
  { name: 'Server Architecture', tier: 'production', domain: 'infrastructure', note: 'Solo end-to-end infra deployment across 4 branches' },

  // Integration & IoT
  { name: 'UHF RFID Integration', tier: 'production', domain: 'integration', note: 'Full stack RFID from hardware to application layer' },
  { name: 'IoT Middleware', tier: 'production', domain: 'integration', note: 'Event bus design for device-to-system data flow' },
  { name: 'WMS Architecture', tier: 'proficient', domain: 'integration', note: 'Warehouse management system integration design' },
  { name: 'Payment Gateway', tier: 'proficient', domain: 'integration', note: 'QRIS/VA integration via Midtrans for automated billing' },

  // Security
  { name: 'Fortinet NSE 1-3', tier: 'proficient', domain: 'security', note: 'Network security fundamentals and perimeter defense' },
  { name: 'Hack The Box', tier: 'familiar', domain: 'security', note: 'Penetration testing fundamentals and Linux hardening' },
  { name: 'Network Security', tier: 'proficient', domain: 'security', note: 'TCP/IP, firewall config, and secure deployment' },
]

export const getStackByDomain = (domain: StackItem['domain']) =>
  stackItems.filter((s) => s.domain === domain)

export const domains: { key: StackItem['domain']; label: string; emoji: string }[] = [
  { key: 'hardware', label: 'Hardware & Devices', emoji: '⬡' },
  { key: 'backend', label: 'Backend & Web', emoji: '⬡' },
  { key: 'infrastructure', label: 'Infrastructure', emoji: '⬡' },
  { key: 'integration', label: 'Integration & IoT', emoji: '⬡' },
  { key: 'security', label: 'Security', emoji: '⬡' },
]
