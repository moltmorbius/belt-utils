/**
 * Chain configuration and overrides
 *
 * Re-exports viem chain definitions with Belt-specific extensions
 * (e.g., correct PulseChain explorer URLs).
 */

import { pulsechain as viemPulsechain } from "viem/chains"

// ─── Explorer URLs ─────────────────────────────────────────────────
/**
 * PulseChain block explorer base URL.
 * ALWAYS use the IPFS-hosted scanner — the main domain is unreliable.
 */
export const PULSECHAIN_EXPLORER = "https://ipfs.scan.pulsechain.com"

// ─── PulseChain (with corrected explorer) ──────────────────────────
export const pulsechain = {
  ...viemPulsechain,
  blockExplorers: {
    default: {
      name: "PulseScan",
      url: PULSECHAIN_EXPLORER,
      apiUrl: `${PULSECHAIN_EXPLORER}/api`,
    },
  },
} as const

// ─── Explorer URL Helpers ──────────────────────────────────────────
export function explorerAddressUrl(address: string): string {
  return `${PULSECHAIN_EXPLORER}/address/${address}`
}

export function explorerTxUrl(hash: string): string {
  return `${PULSECHAIN_EXPLORER}/tx/${hash}`
}

export function explorerTokenUrl(address: string): string {
  return `${PULSECHAIN_EXPLORER}/token/${address}`
}

export function explorerBlockUrl(block: number | string): string {
  return `${PULSECHAIN_EXPLORER}/block/${block}`
}

// ─── Chain Constants ───────────────────────────────────────────────
export const PULSECHAIN_CHAIN_ID = 369

// ─── Bundler URLs ──────────────────────────────────────────────────
export const BUNDLER_URL = "https://bundler.pulsechain.belt.city/rpc"

// ─── DEX Addresses ─────────────────────────────────────────────────
import type { Hex } from "viem"

export const PULSEX_ROUTER =
  "0x98bf93ebf5c380C0e6Ae8e192A7e2AE08edAcc02" as Hex
