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
  await expect(page.getByRole("heading", { level: 1 })).toContainText("豆包去水印");
  const parserRegion = page.getByRole("region", { name: "在线提取无水印原图" });
  await expect(parserRegion.locator("form")).toHaveAttribute("data-ready", "true");
  const submitButton = page.getByRole("button", { name: "开始去水印" });
  const buttonBox = await submitButton.boundingBox();
  const viewport = page.viewportSize();
  expect(buttonBox).not.toBeNull();
  expect(viewport).not.toBeNull();
  expect(buttonBox!.y + buttonBox!.height).toBeLessThanOrEqual(viewport!.height);
  await page
    .getByRole("textbox", { name: "豆包分享链接" })
    .fill("https://www.doubao.com/thread/example");
  await submitButton.click();
  await expect(
    page.getByRole("heading", { name: "找到 1 张无水印高清原图" }),
  ).toBeVisible();
  await expect(page.getByText("2048 × 2048", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "好用的 AI 工具" })).toBeVisible();
  await expect(page.getByRole("link", { name: /讯飞智作/ })).toHaveAttribute(
    "href",
    "https://ai-bot.cn/sites/246.html",
  );
  await expect(page.getByRole("link", { name: /AiPPT/ })).toHaveAttribute(
    "target",
    "_blank",
  );
});

test("shows a useful validation error", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const parserRegion = page.getByRole("region", { name: "在线提取无水印原图" });
  await expect(parserRegion.locator("form")).toHaveAttribute("data-ready", "true");
  await page
    .getByRole("textbox", { name: "豆包分享链接" })
    .fill("https://example.com/thread/nope");
  await page.getByRole("button", { name: "开始去水印" }).click();
  await expect(
    parserRegion.getByRole("alert"),
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
      name: "豆包图片去水印教程",
    }),
  ).toBeVisible();
});
