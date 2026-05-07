import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import next from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";

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
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    settings: {
      react: {
        version: "19.2.6",
      },
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

      // React rules
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Not needed with Next.js/React 17+

      // Hooks rules
      ...hooksPlugin.configs.recommended.rules,

      // JSX-A11y rules
      ...jsxA11yPlugin.configs.recommended.rules,

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
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@next/next": next,
      import: importPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
    },
    settings: {
      react: {
        version: "19.2.6",
      },
    },
    rules: {
      "no-console": "off",
      "no-underscore-dangle": "off",
      "arrow-body-style": "off",

      // React rules
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",

      // Hooks rules
      ...hooksPlugin.configs.recommended.rules,

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
      ...next.configs.recommended.rules,
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
    },
  },
  {
    ignores: ["node_modules/", ".next/", "dist/"],
  },
];

