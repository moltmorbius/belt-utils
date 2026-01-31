/**
 * Belt Paymaster contract addresses
 *
 * Each EntryPoint version has its own paymaster deployment.
 * Currently deployed on PulseChain (chainId 369).
 */

import type { Hex } from "./types"

// ─── Paymaster Addresses by EntryPoint Version ────────────────────
export const PAYMASTER_V07: Hex =
  "0xA2c244b3e57d2C5809CA21A3a6228Ab4f75b3B67"
export const PAYMASTER_V08: Hex =
  "0xe711362b8F3D5934bcB21572F6b662D3E96FB429"
export const PAYMASTER_V09: Hex =
  "0x82AD51F8D936e07b9DDeb377F9c369a0827b4244"

// ─── Structured Paymaster Map ──────────────────────────────────────
export const PAYMASTERS = {
  v07: {
    version: "0.7" as const,
    address: PAYMASTER_V07,
    chainId: 369,
    label: "Belt Paymaster (v0.7)",
  },
  v08: {
    version: "0.8" as const,
    address: PAYMASTER_V08,
    chainId: 369,
    label: "Belt Paymaster (v0.8)",
  },
  v09: {
    version: "0.9" as const,
    address: PAYMASTER_V09,
    chainId: 369,
    label: "Belt Paymaster (v0.9)",
  },
} as const

/** All paymaster addresses as a set (lowercase, for fast lookups) */
export const PAYMASTER_SET = new Set(
  [PAYMASTER_V07, PAYMASTER_V08, PAYMASTER_V09].map((a) => a.toLowerCase()),
)

/** Check if an address is a known Belt paymaster */
export function isBeltPaymaster(address: string): boolean {
  return PAYMASTER_SET.has(address.toLowerCase())
}
