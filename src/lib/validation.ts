const URL_IN_TEXT = /https?:\/\/[^\s<>"'，。！？；、]+/i;

export const ALLOWED_DOUBAO_HOSTS = new Set(["doubao.com", "www.doubao.com"]);

export function extractFirstUrl(input: string): string {
  return input.match(URL_IN_TEXT)?.[0] ?? input.trim();
}

export function parseDoubaoShareUrl(input: string): string {
  const candidate = extractFirstUrl(input);

  if (!candidate) {
    throw new Error("请输入豆包对话分享链接");
  }

  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    throw new Error("没有找到有效的网址");
  }

  if (parsed.protocol !== "https:") {
    throw new Error("分享链接必须使用 HTTPS");
  }

  if (!ALLOWED_DOUBAO_HOSTS.has(parsed.hostname.toLowerCase())) {
    throw new Error("目前仅支持豆包对话分享链接");
  }

  if (!parsed.pathname.startsWith("/thread/")) {
    throw new Error("请使用包含 /thread/ 的豆包对话分享链接");
  }

  return parsed.toString();
}

export function isSafeMediaUrl(input: string): boolean {
  try {
    const parsed = new URL(input);
    const hostname = parsed.hostname.toLowerCase();
    return (
      parsed.protocol === "https:" &&
      !parsed.username &&
      !parsed.password &&
      (hostname === "byteimg.com" || hostname.endsWith(".byteimg.com"))
    );
  } catch {
    return false;
  }
}
