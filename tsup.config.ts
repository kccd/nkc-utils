import { defineConfig } from "tsup";

export default defineConfig([
  // Node 版本
  {
    entry: ["src/node.ts"],
    outDir: "dist/node",
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    clean: true,
    platform: "node",
    target: "node18",
    tsconfig: "tsconfig.node.build.json",
  },

  // Browser 版本
  {
    entry: ["src/browser.ts"],
    outDir: "dist/browser",
    format: ["esm"],
    dts: true,
    sourcemap: true,
    platform: "browser",
    target: "es2022",
    tsconfig: "tsconfig.browser.build.json",
  },
]);
