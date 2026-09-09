import { describe, expect, it } from "vitest";

import { normalizeParserResponse, ParserApiError } from "@/lib/api";

describe("normalizeParserResponse", () => {
  it("keeps safe image records and normalizes dimensions", () => {
    const result = normalizeParserResponse({
      success: true,
      image_count: 2,
      images: [
        {
          url: "https://p3-flow-imagex-sign.byteimg.com/image_raw.png?signature=test",
          width: "2048",
          height: 2048,
        },
        {
          url: "https://example.com/untrusted.png",
          width: 100,
          height: 100,
        },
      ],
    });

    expect(result.image_count).toBe(1);
    expect(result.images[0]).toMatchObject({ width: 2048, height: 2048 });
  });

  it("rejects malformed or empty responses", () => {
    expect(() => normalizeParserResponse({ success: true, images: [] })).toThrow(ParserApiError);
    expect(() =>
      normalizeParserResponse({ success: true, image_count: 0, images: [] }),
    ).toThrow("没有找到可用的高清原图");
  });
});
