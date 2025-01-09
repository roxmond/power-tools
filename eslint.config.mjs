import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    // You need to provide the `rules` object within the `extends` method
    {
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    }
  ),
];

export default eslintConfig;
