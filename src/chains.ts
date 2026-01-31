/**
 * Chain configuration
 *
 * Plain chain definitions with Belt-specific extensions
 * (e.g., correct PulseChain explorer URLs).
 * No viem dependency — consumers can cast to viem Chain if needed.
 */

import type { Hex } from "./types"

// ─── Explorer URLs ─────────────────────────────────────────────────
/**
 * PulseChain block explorer base URL.
 * ALWAYS use the IPFS-hosted scanner — the main domain is unreliable.
 */
export const PULSECHAIN_EXPLORER = "https://ipfs.scan.pulsechain.com"

// ─── PulseChain Chain Definition ───────────────────────────────────
export const pulsechain = {
  id: 369,
  name: "PulseChain",
  nativeCurrency: {
    name: "Pulse",
    symbol: "PLS",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.pulsechain.com"],
      webSocket: ["wss://ws.pulsechain.com"],
    },
  },
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
export const PULSEX_ROUTER: Hex =
  "0x98bf93ebf5c380C0e6Ae8e192A7e2AE08edAcc02"
