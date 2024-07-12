import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  plugins: [
    sveltekit(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**", // only transpile our source code
      extensions: [".js", ".ts", ".jsx", ".tsx", ".svelte"],
    }),
    replace({
      'import { walk } from "estree-walker";': "",
      delimiters: ["", ""],
    }),
  ],
});
