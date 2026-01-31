/**
 * Operational wallet addresses
 *
 * Key Belt infrastructure wallets: executors, utility, factories,
 * and other known addresses used in operations.
 */

import type { Hex } from "./types"

// ─── Executor Wallets ──────────────────────────────────────────────
export const EXECUTOR_1: Hex =
  "0x1071CE6fCc1a042208CCb60d5d417c2bA9C8e750"
export const EXECUTOR_2: Hex =
  "0x668E2e474F7C602e86d256A85a2890a0EAdf205f"

// ─── Utility Wallet ────────────────────────────────────────────────
export const UTILITY_WALLET: Hex =
  "0x1BbC4b7cb2eB49480c200eAE411750572e6f30D9"

// ─── Deployer / Donation Address ───────────────────────────────────
export const DEPLOYER_ADDRESS: Hex =
  "0x4BdBA0C71C8A5904B2dAe0A425382523Ab8C2495"
export const DONATION_ADDRESS = DEPLOYER_ADDRESS

// ─── SimpleAccountFactory Addresses ────────────────────────────────
export const SIMPLE_ACCOUNT_FACTORY_V07: Hex =
  "0xC03f10876B6f9B2c6927EA8b2ac9552c6bb2Ce68"
export const SIMPLE_ACCOUNT_FACTORY_V08: Hex =
  "0x13E9eD32155810FDbD067d4522c492d6f68E5944"
export const SIMPLE_ACCOUNT_FACTORY_V09: Hex =
  "0xAd07BBb7BeA77e323c838481f668D22864E9F66E"

// ─── Account Implementation Addresses ──────────────────────────────
export const ACCOUNT_IMPL_V08: Hex =
  "0x28426D752372d68D34340BD94390950Dce3c9eC3"
export const ACCOUNT_IMPL_V09: Hex =
  "0xCC5C9B932f18d8dD08EE2FFFef52B09583e247c0"

// ─── Lookup Sets (lowercase, for fast comparison) ──────────────────

/** All Belt executor and utility wallets */
export const BELT_EXECUTORS = new Set(
  [EXECUTOR_1, EXECUTOR_2, UTILITY_WALLET].map((a) => a.toLowerCase()),
)

/** All Belt SimpleAccountFactory addresses */
export const BELT_FACTORIES = new Set(
  [
    SIMPLE_ACCOUNT_FACTORY_V07,
    SIMPLE_ACCOUNT_FACTORY_V08,
    SIMPLE_ACCOUNT_FACTORY_V09,
  ].map((a) => a.toLowerCase()),
)

/** All Belt account implementation addresses */
export const BELT_IMPLEMENTATIONS = new Set(
  [ACCOUNT_IMPL_V08, ACCOUNT_IMPL_V09].map((a) => a.toLowerCase()),
)

// ─── Helpers ───────────────────────────────────────────────────────

/** Returns true if the given address is a known Belt executor or utility wallet */
export function isBeltExecutor(address: string): boolean {
  return BELT_EXECUTORS.has(address.toLowerCase())
}

/** Returns true if the given address is a known Belt factory */
export function isBeltFactory(address: string): boolean {
  return BELT_FACTORIES.has(address.toLowerCase())
}

/** Returns true if the given address is a known Belt account implementation */
export function isBeltImplementation(address: string): boolean {
  return BELT_IMPLEMENTATIONS.has(address.toLowerCase())
}

// ─── Well-Known Addresses ──────────────────────────────────────────
export const ZERO_ADDRESS: Hex =
  "0x0000000000000000000000000000000000000000"

export const BURN_ADDRESSES = {
  ADDR_1: "0x0000000000000000000000000000000000000001" as Hex,
  ADDR_2: "0x0000000000000000000000000000000000000002" as Hex,
  ADDR_3: "0x0000000000000000000000000000000000000003" as Hex,
  DEAD: "0x000000000000000000000000000000000000dEaD" as Hex,
} as const
