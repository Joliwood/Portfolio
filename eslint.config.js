import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended,
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
    ignores: ["node_modules/", ".next/", "dist/", "**/*.{ts,tsx}"],
  },
];
