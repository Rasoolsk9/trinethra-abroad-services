import { defineConfig, devices } from "@playwright/test";

const previewPort = 4173;
const baseURL = `http://127.0.0.1:${previewPort}`;

/**
 * Serves the production build (required for /api/lead routing parity and realistic perf).
 * Run `npm run build` before e2e when not using a CI that builds first, or use `npm run test:e2e:ci` locally.
 */
export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  /* Lazy home sections + cold CI can exceed 5s default */
  expect: { timeout: 30_000 },
  timeout: 90_000,
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: `npx vite preview --port ${previewPort} --host 127.0.0.1 --strictPort`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    timeout: 120_000,
  },
});
