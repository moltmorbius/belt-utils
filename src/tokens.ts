/**
 * Token addresses by chain
 *
 * Canonical token contract addresses used across Belt infrastructure.
 * Currently PulseChain (369) only.
 */

import type { Hex } from "viem"

// ─── Token Info Type ───────────────────────────────────────────────
export interface TokenInfo {
  readonly address: Hex
  readonly decimals: number
  readonly symbol: string
  readonly label: string
}

// ─── PulseChain Token Addresses ────────────────────────────────────
export const USDC: TokenInfo = {
  address: "0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07" as Hex,
  decimals: 6,
  symbol: "USDC",
  label: "Real Bridged USDC (from Ethereum)",
}

export const WPLS: TokenInfo = {
  address: "0xA1077a294dDE1B09bB078844df40758a5D0f9a27" as Hex,
  decimals: 18,
  symbol: "WPLS",
  label: "Wrapped PLS",
}

/**
 * Forked USDC — the Ethereum USDC address exists on PulseChain
 * as a fork artifact but has no real value. Listed here to avoid confusion.
 */
export const FAKE_USDC: TokenInfo = {
  address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as Hex,
  decimals: 6,
  symbol: "USDC",
  label: "Forked USDC (worthless on PulseChain)",
}

// ─── Grouped by Chain ──────────────────────────────────────────────
export const TOKENS = {
  pulsechain: {
    USDC,
    WPLS,
    FAKE_USDC,
  },
} as const
