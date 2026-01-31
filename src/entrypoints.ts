/**
 * ERC-4337 EntryPoint contract addresses
 *
 * These are the canonical EntryPoint deployments used by the Belt bundler.
 * All three versions are supported on PulseChain.
 */

import type { Address } from "./types"

// ─── EntryPoint Version Type ───────────────────────────────────────
export type EntryPointVersion = "0.7" | "0.8" | "0.9"

// ─── Individual EntryPoint Addresses ───────────────────────────────
export const ENTRY_POINT_V07: Address =
  "0x0000000071727De22E5E9d8BAf0edAc6f37da032"
export const ENTRY_POINT_V08: Address =
  "0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108"
export const ENTRY_POINT_V09: Address =
  "0x433709009B8330FDa32311DF1C2AFA402eD8D009"

// ─── Structured EntryPoint Map ─────────────────────────────────────
export const ENTRYPOINTS = {
  v07: {
    version: "0.7" as const,
    address: ENTRY_POINT_V07,
    label: "ERC-4337 v0.7 (Stable)",
  },
  v08: {
    version: "0.8" as const,
    address: ENTRY_POINT_V08,
    label: "ERC-4337 v0.8 (Enhanced)",
  },
  v09: {
    version: "0.9" as const,
    address: ENTRY_POINT_V09,
    label: "ERC-4337 v0.9 + EIP-7702",
  },
} as const

// ─── Lookup Maps ───────────────────────────────────────────────────

/** EntryPoint address → version */
export const ENTRY_POINT_BY_ADDRESS: Record<string, EntryPointVersion> = {
  [ENTRY_POINT_V07]: "0.7",
  [ENTRY_POINT_V08]: "0.8",
  [ENTRY_POINT_V09]: "0.9",
}

/** Ponder contract name → version (for indexer compatibility) */
export const ENTRY_POINT_VERSIONS: Record<string, EntryPointVersion> = {
  EntryPointV07: "0.7",
  EntryPointV08: "0.8",
  EntryPointV09: "0.9",
}

// ─── Helpers ───────────────────────────────────────────────────────

/** Returns the EntryPoint version for a given contract address */
export function getEntryPointVersion(
  address: string,
): EntryPointVersion | undefined {
  const lower = address.toLowerCase()
  for (const [addr, version] of Object.entries(ENTRY_POINT_BY_ADDRESS)) {
    if (addr.toLowerCase() === lower) return version
  }
  return undefined
}

/** All supported EntryPoint addresses */
export const ALL_ENTRY_POINTS: readonly Address[] = [
  ENTRY_POINT_V07,
  ENTRY_POINT_V08,
  ENTRY_POINT_V09,
] as const
