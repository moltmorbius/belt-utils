# @belt/utils

Shared infrastructure constants for the [Belt](https://belt.city) ERC-4337 bundler ecosystem.

**Zero dependencies.** Just plain TypeScript string constants and objects. Consuming repos can cast to viem types on their side.

**Single source of truth** for addresses, chains, tokens, and ABIs used across:
- `belt` — the bundler itself
- `belt-tests` — integration test suite
- `belt-landing` — landing page / wallet UI
- `belt-indexer` — Ponder-based indexer

## Install

```bash
npm install @belt/utils
# or
pnpm add @belt/utils
```

## Usage

### Import everything

```ts
import {
  ENTRY_POINT_V07,
  PAYMASTER_V08,
  USDC,
  pulsechain,
  BUNDLER_URL,
  ERC20_ABI,
} from "@belt/utils"
```

### Import specific modules (tree-shakeable)

```ts
import { ENTRYPOINTS, getEntryPointVersion } from "@belt/utils/entrypoints"
import { PAYMASTERS, isBeltPaymaster } from "@belt/utils/paymasters"
import { TOKENS, USDC } from "@belt/utils/tokens"
import { pulsechain, explorerTxUrl } from "@belt/utils/chains"
import { BELT_EXECUTORS, isBeltFactory } from "@belt/utils/wallets"
import { ERC20_ABI, ROUTER_ABI } from "@belt/utils/abis"
```

### Using with viem

Addresses use the `Address` type (`` `0x${string}` ``) which is compatible with viem's `Hex`:

```ts
import { parseAbi } from "viem"
import type { Hex } from "viem"
import { ENTRY_POINT_V07, ERC20_ABI } from "@belt/utils"

// Addresses are already typed as `0x${string}` — direct viem compatibility
const ep: Hex = ENTRY_POINT_V07  // ✅ works

// Parse ABIs on the consuming side
const erc20Abi = parseAbi(ERC20_ABI)
```

## What's Inside

### EntryPoints (`entrypoints`)
All three ERC-4337 EntryPoint versions deployed on PulseChain:
- **v0.7** — `0x0000000071727De22E5E9d8BAf0edAc6f37da032` (Stable)
- **v0.8** — `0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108` (Enhanced)
- **v0.9** — `0x433709009B8330FDa32311DF1C2AFA402eD8D009` (EIP-7702)

### Paymasters (`paymasters`)
Belt paymaster contracts, one per EntryPoint version:
- **v0.7** — `0xA2c244b3e57d2C5809CA21A3a6228Ab4f75b3B67`
- **v0.8** — `0xe711362b8F3D5934bcB21572F6b662D3E96FB429`
- **v0.9** — `0x82AD51F8D936e07b9DDeb377F9c369a0827b4244`

### Tokens (`tokens`)
Token addresses on PulseChain: USDC, WPLS, and the worthless forked USDC.

### Chains (`chains`)
PulseChain config with corrected block explorer URL (`https://ipfs.scan.pulsechain.com`), bundler URL, and DEX router address. Includes helper functions for explorer links.

### Wallets (`wallets`)
Operational addresses: executors, utility wallet, deployer, SimpleAccountFactory per version, account implementations. Includes lookup Sets and helper functions.

### ABIs (`abis`)
Human-readable ABI string arrays: ERC-20, ERC-721, SimpleAccount execute, PulseX router. Pass to `parseAbi()` on the consuming side.

## TypeScript

All addresses use the `Address` type (`` `0x${string}` ``) — compatible with viem's `Hex` without importing it. Full type declarations included for both ESM and CJS.

## License

MIT
