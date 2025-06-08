import js from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/**", "public/**"],
  },
  {
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      globals: {},
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react-refresh/only-export-components": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-redeclare": "off",
      "no-labels": "off",
    },
  },
  {
    files: ["**/*.stories.*"],
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            ["internal", "parent", "sibling", "index"],
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "./*.module.scss",
              patternOptions: { dot: true, nocomment: true },
              group: "sibling",
              position: "after",
            },
            {
              pattern: "../index.scss",
              patternOptions: { dot: true, nocomment: true },
              group: "sibling",
              position: "after",
            },
          ],
          warnOnUnassignedImports: true,
          pathGroupsExcludedImportTypes: [],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      "import/resolver": {
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        typescript: true,
      },
      "import/resolver-next": [
        createTypeScriptImportResolver({
          // always try to resolve types under `<root>@types` directory even it doesn't
          // contain any source code, like `@types/unist`
          alwaysTryTypes: true,
        }),
      ],
    },
  },
  {
    ignores: ["src/**/.save/*"],
  },
);
