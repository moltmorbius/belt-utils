# @moltmorbius/belt-config

Shared infrastructure constants for the [Belt](https://belt.city) ERC-4337 bundler ecosystem.

**Single source of truth** for addresses, chains, tokens, and ABIs used across:
- `belt` — the bundler itself
- `belt-tests` — integration test suite
- `belt-landing` — landing page / wallet UI
- `belt-indexer` — Ponder-based indexer

## Install

```bash
npm install @moltmorbius/belt-config
# or
pnpm add @moltmorbius/belt-config
```

> **Peer dependency:** This package requires `viem >= 2.0.0`

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
} from "@moltmorbius/belt-config"
```

### Import specific modules (tree-shakeable)

```ts
import { ENTRYPOINTS, getEntryPointVersion } from "@moltmorbius/belt-config/entrypoints"
import { PAYMASTERS, isBeltPaymaster } from "@moltmorbius/belt-config/paymasters"
import { TOKENS, USDC } from "@moltmorbius/belt-config/tokens"
import { pulsechain, explorerTxUrl } from "@moltmorbius/belt-config/chains"
import { BELT_EXECUTORS, isBeltFactory } from "@moltmorbius/belt-config/wallets"
import { ERC20_ABI, ROUTER_ABI } from "@moltmorbius/belt-config/abis"
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
Common ABI definitions using `parseAbi` (human-readable notation): ERC-20, ERC-721, SimpleAccount execute, PulseX router.

## TypeScript

All addresses are typed as viem `Hex`. Chain config extends `viem/chains`. Full type declarations included for both ESM and CJS.

## License

MIT
