import type { ParsedImage } from "@/types/parser";

function inferExtension(image: ParsedImage, contentType?: string | null): string {
  if (contentType?.includes("png")) return "png";
  if (contentType?.includes("webp")) return "webp";
  if (contentType?.includes("jpeg") || contentType?.includes("jpg")) return "jpg";

  const normalized = image.format?.toLowerCase();
  if (normalized && ["png", "webp", "jpg", "jpeg"].includes(normalized)) {
    return normalized === "jpeg" ? "jpg" : normalized;
  }
  return "png";
}

export async function downloadParsedImage(
  image: ParsedImage,
  index: number,
): Promise<void> {
  const response = await fetch(image.url, {
    referrerPolicy: "no-referrer",
  });

  if (!response.ok) {
    throw new Error(`图片下载失败（HTTP ${response.status}）`);
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const extension = inferExtension(image, response.headers.get("content-type"));
  const link = document.createElement("a");

  link.href = objectUrl;
  link.download = `original-image-${String(index + 1).padStart(2, "0")}.${extension}`;
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();

  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1_000);
}

export async function copyText(value: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) throw new Error("复制失败");
}
