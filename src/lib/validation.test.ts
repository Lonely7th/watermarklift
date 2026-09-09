import { describe, expect, it } from "vitest";

import { extractFirstUrl, isSafeMediaUrl, parseDoubaoShareUrl } from "@/lib/validation";

describe("parseDoubaoShareUrl", () => {
  it("accepts a valid Doubao thread URL", () => {
    expect(parseDoubaoShareUrl("https://www.doubao.com/thread/xQrbQo3QfVPaWFf2L")).toBe(
      "https://www.doubao.com/thread/xQrbQo3QfVPaWFf2L",
    );
  });

  it("extracts a URL from shared text", () => {
    expect(
      parseDoubaoShareUrl(
        "复制这段内容 https://www.doubao.com/thread/xQrbQo3QfVPaWFf2L 然后打开",
      ),
    ).toContain("/thread/xQrbQo3QfVPaWFf2L");
  });

  it("rejects unsupported hosts and paths", () => {
    expect(() => parseDoubaoShareUrl("https://example.com/thread/abc")).toThrow(
      "目前仅支持豆包",
    );
    expect(() => parseDoubaoShareUrl("https://www.doubao.com/chat/abc")).toThrow(
      "/thread/",
    );
  });
});

describe("URL helpers", () => {
  it("extracts the first URL", () => {
    expect(extractFirstUrl("说明：https://www.doubao.com/thread/abc。谢谢")).toBe(
      "https://www.doubao.com/thread/abc",
    );
  });

  it("only accepts HTTPS byteimg media URLs", () => {
    expect(isSafeMediaUrl("https://p3-flow-imagex-sign.byteimg.com/a.png")).toBe(true);
    expect(isSafeMediaUrl("http://p3-flow-imagex-sign.byteimg.com/a.png")).toBe(false);
    expect(isSafeMediaUrl("https://byteimg.com.example.com/a.png")).toBe(false);
  });
});
