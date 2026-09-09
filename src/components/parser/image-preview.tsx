"use client";

import { useEffect } from "react";

import { CloseIcon, ExternalLinkIcon } from "@/components/ui/icons";
import type { ParsedImage } from "@/types/parser";

interface ImagePreviewProps {
  image: ParsedImage | null;
  onClose: () => void;
}

export function ImagePreview({ image, onClose }: ImagePreviewProps) {
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="preview-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="preview-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="原图预览"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="preview-toolbar">
          <span>
            {image.width || "—"} × {image.height || "—"}
          </span>
          <div>
            <a href={image.url} target="_blank" rel="noreferrer" className="icon-button">
              <span className="sr-only">在新窗口打开</span>
              <ExternalLinkIcon />
            </a>
            <button type="button" className="icon-button" onClick={onClose} autoFocus>
              <span className="sr-only">关闭预览</span>
              <CloseIcon />
            </button>
          </div>
        </div>
        {/* The URL is validated before it enters the result state. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.url} alt="高清原图预览" referrerPolicy="no-referrer" />
      </div>
    </div>
  );
}
