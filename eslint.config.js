// eslint.config.js
import js from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import markdownPlugin from "@eslint/markdown";
import cssPlugin from "@eslint/css";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
// IMPORT THE PARSER MODULES HERE
import astroESLintParser from "astro-eslint-parser"; // <-- Add this import!

export default defineConfig([
  // 1. Global ignores - always at the top
  {
    ignores: ["dist/**", ".astro/**"],
  },

  // 2. Base JavaScript (core ESLint rules for .js, .mjs, .cjs)
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [
      js.configs.recommended, // Basic JS recommended rules
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // 3. TypeScript files (.ts, .tsx)
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,           // Include base JS rules
      ...tseslint.configs.recommended,  // Include TypeScript recommended rules
    ],
    languageOptions: {
      parser: tseslint.parser, // This is correct, it's the imported module
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // Important for typed linting
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Add any specific TS rules or overrides here
    },
  },

  // 4. Astro files (.astro) - Strict application
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroESLintParser, // <-- USE THE IMPORTED MODULE HERE!
      parserOptions: {
        parser: tseslint.parser, // This is correct, it's for scripts *within* Astro files
        extraFileExtensions: [".astro"],
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
    extends: [
      pluginAstro.configs.base,
      pluginAstro.configs.recommended,
    ],
    rules: {
      // You can override/add Astro-specific rules here
    },
  },

  // 5. React files (.jsx, .tsx)
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { react: pluginReact },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
      },
      globals: globals.browser, // Browser globals relevant for React
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...pluginReact.configs.recommended.rules, // Standard React rules
    },
  },

  // 6. Markdown files (.md)
  {
    files: ["**/*.md"],
    plugins: { markdown: markdownPlugin },
    extends: [
      markdownPlugin.configs.recommended,
    ],
    rules: {
      "no-irregular-whitespace": "off",
    },
  },

  // 7. CSS files (.css)
  {
    files: ["**/*.css"],
    plugins: { css: cssPlugin },
    extends: [
      cssPlugin.configs.recommended,
    ],
    rules: {},
  },
]);