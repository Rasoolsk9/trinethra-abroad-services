import { test, expect } from "@playwright/test";

const LEAD_UNIVERSITY_SLUG = "university-of-east-anglia";

test.beforeEach(async ({ page }) => {
  await page.route("**/api/lead", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });
});

test("home loads with primary hero and destination section", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#home")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Start Your MBBS Abroad Journey Today" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Study MBBS in Top Countries" })).toBeVisible();
});

test("country page loads for a destination route", async ({ page }) => {
  await page.goto("/mbbs-in-uk");
  await expect(page.getByRole("heading", { name: "Study in UK", exact: true })).toBeVisible();
});

test("university lead form submits and navigates to details", async ({ page }) => {
  await page.goto(`/university/${LEAD_UNIVERSITY_SLUG}/apply`);

  await expect(
    page.getByRole("heading", { name: new RegExp("Fill this form", "i") }),
  ).toBeVisible();

  await page.getByLabel("Full Name *", { exact: true }).fill("E2E Smoke User");
  await page.getByLabel("Phone Number *", { exact: true }).fill("+91 9876543210");
  await page.getByLabel("Email Address *", { exact: true }).fill("e2e-smoke@example.com");
  await page.getByLabel("City", { exact: true }).fill("Delhi");

  await page.getByRole("combobox").click();
  await page.getByRole("option", { name: "UK" }).click();

  await page.getByRole("button", { name: "Continue to university details" }).click();

  await expect(page.getByText("Thank you!")).toBeVisible({ timeout: 20_000 });
  await expect(page).toHaveURL(new RegExp(`/university/${LEAD_UNIVERSITY_SLUG}$`), {
    timeout: 15_000,
  });
});
