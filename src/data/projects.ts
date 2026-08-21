// src/data/projects.ts
import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'g-service',
    title: 'G-Service',
    subtitle: 'After-Sales & RMA Management System',
    impact: 'Replaced manual Excel workflow across the entire technical division. Still active as the operational backbone.',
    description:
      'G-Service is a Laravel-based internal system built to replace fragmented Excel workflows in the after-sales and RMA division. It automates warranty management, repair tracking, and commercial document generation — from quotations to delivery notes and purchase orders.',
    tags: ['Laravel', 'Infrastructure'],
    tech: [
      { name: 'Laravel' },
      { name: 'MySQL' },
      { name: 'REST API' },
      { name: 'PHP' },
    ],
    status: 'live',
    client: 'PT Wahana Datarindo Sempurna',
    period: '2024',
    featured: true,
    challenge:
      'The technical division was managing all after-sales operations through disconnected Excel spreadsheets — warranty validation, repair routing, vendor coordination, and document generation were all manual and error-prone.',
    approach:
      'Built a centralized Laravel application with role-based access, automated warranty status validation against delivery order data, and a document generation pipeline that produces Quotations, Billing, POs, and Delivery Notes from a single source of truth.',
    outcome:
      'Achieved enterprise-wide adoption across the full technical division. The system fully replaced all Excel workflows and remains the active operational backbone of the after-sales process today.',
  },
  {
    slug: 'shipguard',
    title: 'ShipGuard',
    subtitle: 'Hybrid Maritime Tracking Solution',
    impact: 'BLE + RFID hybrid architecture for people and asset tracking. Enterprise-approved, advanced to execution phase.',
    description:
      'ShipGuard is an integrated hybrid tracking solution architected for PT Asian Bulk Logistics, combining BLE for people tracking and RFID for asset tracking. The system includes custom workflow matching logic to validate personnel and asset movements aboard vessels.',
    tags: ['RFID', 'IoT', 'Architecture', 'BLE'],
    tech: [
      { name: 'BLE' },
      { name: 'UHF RFID' },
      { name: 'Laravel' },
      { name: 'IoT Middleware' },
    ],
    status: 'proposal',
    client: 'PT Asian Bulk Logistics (ABL)',
    period: '2025',
    featured: true,
    challenge:
      'PT Asian Bulk Logistics needed a reliable system to track both personnel and physical assets across maritime vessels — an environment with challenging RF conditions and strict safety requirements.',
    approach:
      'Designed a hybrid architecture using BLE beacons for personnel proximity detection and UHF RFID readers for asset identification. Developed the ShipGuard matching logic that cross-references personnel entry/exit events against asset manifest data.',
    outcome:
      'Technical proposal secured full client approval. The project advanced to the execution and field survey phase, with site assessments scheduled for hardware deployment.',
  },
  {
    slug: 'uhf-sdk',
    title: 'UHF RFID Web SDK',
    subtitle: 'Custom RFID SDK with Web Interface for Pre-sales',
    impact: 'Became the operational standard for the pre-sales team. Enabled hospital asset tracking demos.',
    description:
      'A custom UHF RFID Software Development Kit featuring a dedicated web interface for client demonstrations. Built to bridge the gap between raw RFID hardware output and meaningful business context visualization.',
    tags: ['RFID', 'IoT', 'Architecture'],
    tech: [
      { name: 'UHF RFID' },
      { name: 'JavaScript' },
      { name: 'REST API' },
      { name: 'PHP' },
    ],
    status: 'deployed',
    client: 'PT Global Trend Asia',
    period: '2025',
    featured: false,
    challenge:
      'The pre-sales team needed a way to demonstrate RFID capabilities to enterprise clients without requiring a full production deployment. Existing tools were technical and not client-friendly.',
    approach:
      'Engineered a modular SDK that abstracts RFID reader communication and exposes a clean web interface. The interface visualizes tag reads in real-time and supports scenario-based demos including inventory management and hospital asset tracking.',
    outcome:
      'The SDK became the operational standard for the pre-sales team. Directly contributed to enterprise client acquisition including PT Adis Dimension Footwear (Nike manufacturer), Bali United, and Sociolla.',
  },
  {
    slug: 'kaffah-erp',
    title: 'Kaffah School ERP',
    subtitle: 'Centralized School Management + IoT Smart Canteen',
    impact: 'Full ERP covering 4 school branches — admission to graduation, with RFID-powered cashless canteen.',
    description:
      'A comprehensive school management ERP built from the ground up for Kaffah Islamic School. Covers multi-role portals for students, parents, and teachers — including PPDB admission, attendance, e-report cards, learning platforms, and an IoT smart canteen powered by RFID/NFC.',
    tags: ['Laravel', 'IoT', 'Infrastructure', 'NFC'],
    tech: [
      { name: 'Laravel' },
      { name: 'MySQL' },
      { name: 'RFID/NFC' },
      { name: 'QRIS' },
      { name: 'Linux Server' },
    ],
    status: 'in-progress',
    client: 'Kaffah Islamic School',
    period: '2026 – Present',
    featured: true,
    challenge:
      'Managing 4 school branches with disconnected systems for admissions, attendance, finance, and canteen operations. No unified platform, no parent visibility, and fully manual financial reconciliation.',
    approach:
      'Architected a centralized multi-tenant Laravel ERP with role-based access for students, parents, teachers, and admins. Integrated QRIS/VA payment gateways for automated SPP billing. Deployed RFID/NFC hardware for cashless canteen transactions tied directly to student digital balances.',
    outcome:
      'Executed full server infrastructure lifecycle solo across 4 branches — from sizing and topology design to hardware deployment. System achieved 100% operational coverage across all branches.',
  },
]

export const getFeaturedProjects = () => projects.filter((p) => p.featured)
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
