import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    plugins: { js, react: pluginReact },
    languageOptions: { globals: globals.browser },
    rules: pluginReact.configs.recommended.rules, // usa las reglas directamente
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"]
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"]
  },
]);
