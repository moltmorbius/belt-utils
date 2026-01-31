/**
 * Common ABI definitions (human-readable string notation)
 *
 * Exported as plain string arrays. Consumers call parseAbi()
 * on their side (viem, ethers, etc.).
 *
 * @example
 * import { parseAbi } from 'viem'
 * import { ERC20_ABI } from '@belt/utils/abis'
 * const abi = parseAbi(ERC20_ABI)
 */

// ─── ERC-20 ────────────────────────────────────────────────────────
export const ERC20_ABI = [
  "function transfer(address to, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function name() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)",
] as const

// ─── ERC-721 ───────────────────────────────────────────────────────
export const ERC721_ABI = [
  "function safeTransferFrom(address from, address to, uint256 tokenId)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function balanceOf(address owner) view returns (uint256)",
] as const

// ─── SimpleAccount (execute) ───────────────────────────────────────
export const EXECUTE_ABI = [
  "function execute(address dest, uint256 value, bytes calldata func)",
] as const

// ─── Mint (common test contract) ───────────────────────────────────
export const MINT_ABI = ["function mint()"] as const

// ─── PulseX Router ─────────────────────────────────────────────────
export const ROUTER_ABI = [
  "function swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) payable returns (uint256[] amounts)",
  "function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[] amounts)",
  "function getAmountsOut(uint256 amountIn, address[] path) view returns (uint256[] amounts)",
] as const
