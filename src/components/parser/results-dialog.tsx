"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ResultGrid } from "@/components/parser/result-grid";
import { ToolRecommendations } from "@/components/recommendations/tool-recommendations";
import { CheckIcon, CloseIcon, WarningIcon } from "@/components/ui/icons";
import type { ParsedImage } from "@/types/parser";

interface ResultsDialogProps {
  images: ParsedImage[];
  onClose: () => void;
}

type DialogNotice = { message: string; tone: "error" | "success" } | null;

export function ResultsDialog({ images, onClose }: ResultsDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const noticeTimer = useRef<number | null>(null);
  const [notice, setNotice] = useState<DialogNotice>(null);

  const showMessage = useCallback(
    (message: string, tone: "error" | "success" = "success") => {
      setNotice({ message, tone });
      if (noticeTimer.current) window.clearTimeout(noticeTimer.current);
      noticeTimer.current = window.setTimeout(() => setNotice(null), 3_500);
    },
    [],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (document.querySelector('[aria-label="原图预览"]')) return;
      onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      if (noticeTimer.current) window.clearTimeout(noticeTimer.current);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="results-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="results-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="results-dialog-title"
      >
        <h2 id="results-dialog-title" className="sr-only">豆包去水印成果</h2>
        <button
          ref={closeButtonRef}
          type="button"
          className="icon-button results-dialog-close"
          onClick={onClose}
        >
          <span className="sr-only">关闭成果弹窗</span>
          <CloseIcon />
        </button>

        <div className="results-dialog-content">
          <div className="results-dialog-images">
            <ResultGrid images={images} onMessage={showMessage} />
          </div>
          <div className="results-dialog-tools">
            <ToolRecommendations />
          </div>
        </div>

        {notice ? (
          <div
            className={`results-toast ${notice.tone}`}
            role={notice.tone === "error" ? "alert" : "status"}
          >
            {notice.tone === "error" ? <WarningIcon /> : <CheckIcon />}
            <span>{notice.message}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
