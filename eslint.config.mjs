import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    // The site is deployed as plain static files, so internal links deliberately
    // use full-page navigation instead of depending on Next.js RSC routing.
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "coverage/**", "next-env.d.ts"]),
]);
