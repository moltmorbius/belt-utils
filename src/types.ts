/**
 * Common type aliases
 *
 * Framework-agnostic hex types. Consumers can widen these
 * with viem, ethers, or whatever they prefer.
 */

/** A hex-encoded string prefixed with 0x */
export type Hex = `0x${string}`

/** An Ethereum-style address (alias for Hex) */
export type Address = Hex
