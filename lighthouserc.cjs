/**
 * Run after `npm run build` (Vite `dist/` must exist). The preview server
 * serves the SPA for the same routes Playwright uses in e2e.
 *
 *   npm run build && npm run lighthouse:ci
 */
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: "npx vite preview --port 4173 --host 127.0.0.1 --strictPort",
      startServerReadyPattern: "Local:",
      url: ["http://127.0.0.1:4173/", "http://127.0.0.1:4173/mbbs-in-uk"],
      settings: {
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
        formFactor: "desktop",
        screenEmulation: { disabled: true },
      },
    },
    assert: {
      // Use "warn" so CPU-throttling differences between dev/CI do not fail the job;
      // check the HTML report / GitHub log for regressions toward 9.5+ overall.
      assertions: {
        "categories:performance": ["warn", { minScore: 0.72 }],
        "categories:accessibility": ["warn", { minScore: 0.92 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.92 }],
      },
    },
  },
};
