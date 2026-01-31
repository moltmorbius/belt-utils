/**
 * @belt/utils
 *
 * Shared infrastructure constants for the Belt ERC-4337 bundler ecosystem.
 * Single source of truth for addresses, chains, tokens, and ABIs.
 *
 * Zero runtime dependencies — plain TypeScript.
 * Consumers can cast to viem types on their side.
 */

// ─── Types ─────────────────────────────────────────────────────────
export type { Hex, Address } from "./types"

// ─── EntryPoints ───────────────────────────────────────────────────
export {
  type EntryPointVersion,
  ENTRY_POINT_V07,
  ENTRY_POINT_V08,
  ENTRY_POINT_V09,
  ENTRYPOINTS,
  ENTRY_POINT_BY_ADDRESS,
  ENTRY_POINT_VERSIONS,
  ALL_ENTRY_POINTS,
  getEntryPointVersion,
} from "./entrypoints"

// ─── Paymasters ────────────────────────────────────────────────────
export {
  PAYMASTER_V07,
  PAYMASTER_V08,
  PAYMASTER_V09,
  PAYMASTERS,
  PAYMASTER_SET,
  isBeltPaymaster,
} from "./paymasters"

// ─── Tokens ────────────────────────────────────────────────────────
export {
  type TokenInfo,
  USDC,
  WPLS,
  FAKE_USDC,
  TOKENS,
} from "./tokens"

// ─── Chains ────────────────────────────────────────────────────────
export {
  pulsechain,
  PULSECHAIN_EXPLORER,
  PULSECHAIN_CHAIN_ID,
  BUNDLER_URL,
  PULSEX_ROUTER,
  explorerAddressUrl,
  explorerTxUrl,
  explorerTokenUrl,
  explorerBlockUrl,
} from "./chains"

// ─── Wallets ───────────────────────────────────────────────────────
export {
  EXECUTOR_1,
  EXECUTOR_2,
  UTILITY_WALLET,
  DEPLOYER_ADDRESS,
  DONATION_ADDRESS,
  SIMPLE_ACCOUNT_FACTORY_V07,
  SIMPLE_ACCOUNT_FACTORY_V08,
  SIMPLE_ACCOUNT_FACTORY_V09,
  ACCOUNT_IMPL_V08,
  ACCOUNT_IMPL_V09,
  BELT_EXECUTORS,
  BELT_FACTORIES,
  BELT_IMPLEMENTATIONS,
  ZERO_ADDRESS,
  BURN_ADDRESSES,
  isBeltExecutor,
  isBeltFactory,
  isBeltImplementation,
} from "./wallets"

// ─── ABIs ──────────────────────────────────────────────────────────
export {
  ERC20_ABI,
  ERC721_ABI,
  EXECUTE_ABI,
  MINT_ABI,
  ROUTER_ABI,
} from "./abis"
