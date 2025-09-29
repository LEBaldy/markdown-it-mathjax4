import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
    },
    format: ["esm", "cjs"],
    outDir: "dist",
    target: "es2024",
    platform: "browser",
    dts: true,
    exports: true,
  },
]);
