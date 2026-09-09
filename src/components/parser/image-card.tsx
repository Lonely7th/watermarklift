"use client";

import { useState } from "react";

import { CheckIcon, CopyIcon, DownloadIcon, SearchIcon } from "@/components/ui/icons";
import { copyText, downloadParsedImage } from "@/lib/download";
import type { ParsedImage } from "@/types/parser";

interface ImageCardProps {
  image: ParsedImage;
  index: number;
  onPreview: (image: ParsedImage) => void;
  onMessage: (message: string, tone?: "error" | "success") => void;
}

export function ImageCard({ image, index, onPreview, onMessage }: ImageCardProps) {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleDownload() {
    setDownloading(true);
    try {
      await downloadParsedImage(image, index);
      onMessage(`第 ${index + 1} 张原图已开始下载`, "success");
    } catch {
      onMessage("下载失败，请点击预览后在新窗口保存图片", "error");
    } finally {
      setDownloading(false);
    }
  }

  async function handleCopy() {
    try {
      await copyText(image.url);
      setCopied(true);
      onMessage("原图地址已复制", "success");
      window.setTimeout(() => setCopied(false), 1_800);
    } catch {
      onMessage("复制失败，请在预览窗口中复制地址", "error");
    }
  }

  return (
    <article className="image-card">
      <button
        type="button"
        className="image-preview-button"
        onClick={() => onPreview(image)}
        aria-label={`预览第 ${index + 1} 张原图`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.url}
          alt={`豆包无水印原图 ${index + 1}`}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <span className="preview-hint"><SearchIcon /> 点击预览</span>
      </button>

      <div className="image-card-footer">
        <div>
          <strong>无水印原图 {String(index + 1).padStart(2, "0")}</strong>
          <span>{image.width || "—"} × {image.height || "—"}</span>
        </div>
        <div className="image-actions">
          <button type="button" className="icon-button" onClick={handleCopy}>
            <span className="sr-only">复制原图地址</span>
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
          <button
            type="button"
            className="icon-button primary"
            onClick={handleDownload}
            disabled={downloading}
          >
            <span className="sr-only">下载原图</span>
            {downloading ? <span className="mini-spinner" /> : <DownloadIcon />}
          </button>
        </div>
      </div>
    </article>
  );
}
