"use client";

import { useCallback, useState } from "react";

import { ImageCard } from "@/components/parser/image-card";
import { ImagePreview } from "@/components/parser/image-preview";
import { CheckIcon } from "@/components/ui/icons";
import type { ParsedImage } from "@/types/parser";

interface ResultGridProps {
  images: ParsedImage[];
  onMessage: (message: string, tone?: "error" | "success") => void;
}

export function ResultGrid({ images, onMessage }: ResultGridProps) {
  const [preview, setPreview] = useState<ParsedImage | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);

  return (
    <section className="results-section" aria-labelledby="results-title">
      <div className="results-heading">
        <div>
          <span className="success-badge"><CheckIcon /> 去水印完成</span>
          <h2 id="results-title">找到 {images.length} 张无水印高清原图</h2>
        </div>
        <p>点击图片可放大预览，下载会直接连接素材源站。</p>
      </div>

      <div className="image-grid">
        {images.map((image, index) => (
          <ImageCard
            key={`${image.url}-${index}`}
            image={image}
            index={index}
            onPreview={setPreview}
            onMessage={onMessage}
          />
        ))}
      </div>

      <ImagePreview image={preview} onClose={closePreview} />
    </section>
  );
}
