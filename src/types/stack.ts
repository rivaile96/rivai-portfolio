// src/types/stack.ts

export type StackTier = 'production' | 'proficient' | 'familiar'

export type StackDomain =
  | 'hardware'
  | 'backend'
  | 'infrastructure'
  | 'integration'
  | 'security'

export interface StackItem {
  name: string
  tier: StackTier
  domain: StackDomain
  note?: string
}
