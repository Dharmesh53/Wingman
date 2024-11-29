import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tailwindcss from "eslint-plugin-tailwindcss";
import globals from "globals";

export default [
  // JavaScript and general settings
  js.configs.recommended,
  {
    ignores: ["dist"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      tailwindcss,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "tailwindcss/classnames-order": "error",
      "tailwindcss/no-custom-classname": "off",
      "react/jsx-key": "off",
    },
    settings: {
      tailwindcss: {
        callees: ["cn"],
        config: "tailwind.config.ts",
      },
    },
  },
];
