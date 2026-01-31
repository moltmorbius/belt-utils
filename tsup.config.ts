import { defineConfig } from "tsup"

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/entrypoints.ts",
    "src/paymasters.ts",
    "src/tokens.ts",
    "src/chains.ts",
    "src/wallets.ts",
    "src/abis.ts",
  ],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  external: ["viem"],
})
