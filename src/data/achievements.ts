// src/data/achievements.ts

export interface Achievement {
  value: string
  label: string
  sublabel?: string
}

export const achievements: Achievement[] = [
  {
    value: '4',
    label: 'Enterprise Clients',
    sublabel: 'Nike Mfr, Bali United, Sociolla, Klotifai',
  },
  {
    value: '1',
    label: 'RFID SDK',
    sublabel: 'Adopted as pre-sales team standard',
  },
  {
    value: '4',
    label: 'Branch Infra',
    sublabel: 'Solo end-to-end server deployment',
  },
  {
    value: '1',
    label: 'ERP System',
    sublabel: 'Still active as ops backbone today',
  },
]
