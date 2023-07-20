import { defineConfig } from 'radipan/config';

export default defineConfig({
  appEntry: 'src/App.ts', // Path to app entry point
  preflight: true, // Whether to use css reset
  recipeShaking: true, // Whether to trim unused recipe variants
  theme: {
    // Useful for theme customization
    extend: {},
  },
  jsxFramework: 'solid',
  outdir: '@design-system', // The output directory in /node_modules
});
