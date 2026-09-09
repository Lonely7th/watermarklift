import { z } from "zod";

import { siteConfig } from "@/lib/config";
import { isSafeMediaUrl } from "@/lib/validation";
import type { ParsedImage, ParserSuccessResponse } from "@/types/parser";

const imageSchema = z.object({
  url: z.string().url(),
  width: z.coerce.number().nonnegative().default(0),
  height: z.coerce.number().nonnegative().default(0),
  format: z.string().optional(),
});

const successSchema = z.object({
  success: z.literal(true),
  image_count: z.coerce.number().nonnegative(),
  images: z.array(imageSchema),
});

const errorSchema = z.object({
  success: z.literal(false).optional(),
  message: z.string().optional(),
});

export class ParserApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "ParserApiError";
  }
}

export function normalizeParserResponse(payload: unknown): ParserSuccessResponse {
  const parsed = successSchema.safeParse(payload);
  if (!parsed.success) {
    throw new ParserApiError("解析服务返回的数据格式不正确");
  }

  const images: ParsedImage[] = parsed.data.images.filter((image) =>
    isSafeMediaUrl(image.url),
  );

  if (images.length === 0) {
    throw new ParserApiError("分享页面中没有找到可用的高清原图");
  }

  return {
    success: true,
    image_count: images.length,
    images,
  };
}

export async function parseImages(
  url: string,
  options: { signal?: AbortSignal } = {},
): Promise<ParserSuccessResponse> {
  let response: Response;

  try {
    response = await fetch(siteConfig.apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
      signal: options.signal,
      cache: "no-store",
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }
    throw new ParserApiError("暂时无法连接解析服务，请稍后重试");
  }

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    throw new ParserApiError("解析服务返回了无法识别的内容", response.status);
  }

  if (!response.ok) {
    const parsedError = errorSchema.safeParse(payload);
    throw new ParserApiError(
      parsedError.success
        ? parsedError.data.message || "解析失败，请检查分享链接"
        : "解析失败，请检查分享链接",
      response.status,
    );
  }

  return normalizeParserResponse(payload);
}
