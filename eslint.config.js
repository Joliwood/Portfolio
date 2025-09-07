import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import next from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "@next/next": next,
      import: importPlugin,
    },
    rules: {
      "no-console": "off",
      "no-underscore-dangle": "off",
      "arrow-body-style": "off",

      // TypeScript rules
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { fixStyle: "inline-type-imports" },
      ],

      // Import rules
      "import/prefer-default-export": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "always-and-inside-groups",
        },
      ],

      // Next.js rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      "@next/next": next,
      import: importPlugin,
    },
    rules: {
      "no-console": "off",
      "no-underscore-dangle": "off",
      "arrow-body-style": "off",

      // Import rules
      "import/prefer-default-export": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "always-and-inside-groups",
        },
      ],

      // Next.js rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
    },
  },
  {
    ignores: ["node_modules/", ".next/", "dist/"],
  },
];
