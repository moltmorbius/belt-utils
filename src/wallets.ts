/**
 * Operational wallet addresses
 *
 * Key Belt infrastructure wallets: executors, utility, factories,
 * and other known addresses used in operations.
 */

import type { Hex } from "viem"

// ─── Executor Wallets ──────────────────────────────────────────────
export const EXECUTOR_1 =
  "0x1071CE6fCc1a042208CCb60d5d417c2bA9C8e750" as Hex
export const EXECUTOR_2 =
  "0x668E2e474F7C602e86d256A85a2890a0EAdf205f" as Hex

// ─── Utility Wallet ────────────────────────────────────────────────
export const UTILITY_WALLET =
  "0x1BbC4b7cb2eB49480c200eAE411750572e6f30D9" as Hex

// ─── Deployer / Donation Address ───────────────────────────────────
export const DEPLOYER_ADDRESS =
  "0x4BdBA0C71C8A5904B2dAe0A425382523Ab8C2495" as Hex
export const DONATION_ADDRESS = DEPLOYER_ADDRESS

// ─── SimpleAccountFactory Addresses ────────────────────────────────
export const SIMPLE_ACCOUNT_FACTORY_V07 =
  "0xC03f10876B6f9B2c6927EA8b2ac9552c6bb2Ce68" as Hex
export const SIMPLE_ACCOUNT_FACTORY_V08 =
  "0x13E9eD32155810FDbD067d4522c492d6f68E5944" as Hex
export const SIMPLE_ACCOUNT_FACTORY_V09 =
  "0xAd07BBb7BeA77e323c838481f668D22864E9F66E" as Hex

// ─── Account Implementation Addresses ──────────────────────────────
export const ACCOUNT_IMPL_V08 =
  "0x28426D752372d68D34340BD94390950Dce3c9eC3" as Hex
export const ACCOUNT_IMPL_V09 =
  "0xCC5C9B932f18d8dD08EE2FFFef52B09583e247c0" as Hex

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
export const ZERO_ADDRESS =
  "0x0000000000000000000000000000000000000000" as Hex

export const BURN_ADDRESSES = {
  ADDR_1: "0x0000000000000000000000000000000000000001" as Hex,
  ADDR_2: "0x0000000000000000000000000000000000000002" as Hex,
  ADDR_3: "0x0000000000000000000000000000000000000003" as Hex,
  DEAD: "0x000000000000000000000000000000000000dEaD" as Hex,
} as const
