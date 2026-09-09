import { expect, test } from "@playwright/test";

test("renders static content and parses a valid share URL", async ({ page }) => {
  await page.route("**/pic-mark", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        success: true,
        image_count: 1,
        images: [
          {
            url: "https://p3-flow-imagex-sign.byteimg.com/test-image_raw.png",
            width: 2048,
            height: 2048,
          },
        ],
      }),
    });
  });

  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { level: 1 })).toContainText("找回作品");
  await page
    .getByRole("textbox", { name: "豆包分享链接" })
    .fill("https://www.doubao.com/thread/example");
  await page.getByRole("button", { name: "提取原图" }).click();
  await expect(page.getByRole("heading", { name: "找到 1 张高清原图" })).toBeVisible();
  await expect(page.getByText("2048 × 2048", { exact: true })).toBeVisible();
});

test("shows a useful validation error", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page
    .getByRole("textbox", { name: "豆包分享链接" })
    .fill("https://example.com/thread/nope");
  await page.getByRole("button", { name: "提取原图" }).click();
  await expect(
    page
      .getByRole("region", { name: "粘贴豆包分享链接" })
      .getByRole("alert"),
  ).toContainText("目前仅支持豆包");
});

test("navigates between statically exported content pages", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "使用指南" })
    .click();

  await expect(page).toHaveURL(/\/guide\/$/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "从分享链接获取高清原图",
    }),
  ).toBeVisible();
});
