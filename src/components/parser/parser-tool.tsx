"use client";

import { FormEvent, useCallback, useRef, useState, useSyncExternalStore } from "react";

import { ResultsDialog } from "@/components/parser/results-dialog";
import {
  ArrowRightIcon,
  CheckIcon,
  ClipboardIcon,
  CloseIcon,
  HelpCircleIcon,
  ImageIcon,
  LockIcon,
  WarningIcon,
} from "@/components/ui/icons";
import { parseImages, ParserApiError } from "@/lib/api";
import { parseDoubaoShareUrl } from "@/lib/validation";
import type { ParsedImage } from "@/types/parser";

type Notice = { message: string; tone: "error" | "success" } | null;

function subscribeToHydration() {
  return () => undefined;
}

export function ParserTool() {
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const [input, setInput] = useState("");
  const [images, setImages] = useState<ParsedImage[]>([]);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);
  const noticeTimer = useRef<number | null>(null);
  const closeResults = useCallback(() => setResultsOpen(false), []);

  function showNotice(message: string, tone: "error" | "success" = "success") {
    setNotice({ message, tone });
    if (noticeTimer.current) window.clearTimeout(noticeTimer.current);
    noticeTimer.current = window.setTimeout(() => setNotice(null), 4_000);
  }

  async function handlePaste() {
    try {
      const value = await navigator.clipboard.readText();
      if (!value) throw new Error("empty");
      setInput(value);
      setNotice(null);
    } catch {
      showNotice("无法读取剪贴板，请手动粘贴链接", "error");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);

    let shareUrl: string;
    try {
      shareUrl = parseDoubaoShareUrl(input);
    } catch (error) {
      showNotice(error instanceof Error ? error.message : "链接格式不正确", "error");
      return;
    }

    setLoading(true);
    setImages([]);
    setResultsOpen(false);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 30_000);

    try {
      const result = await parseImages(shareUrl, { signal: controller.signal });
      setImages(result.images);
      setResultsOpen(true);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        showNotice("解析等待时间过长，请稍后重试", "error");
      } else if (error instanceof ParserApiError) {
        showNotice(error.message, "error");
      } else {
        showNotice("解析失败，请稍后重试", "error");
      }
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  }

  return (
    <section id="parser" className="parser-shell" aria-labelledby="parser-title">
      <div className="parser-card">
        <div className="parser-card-heading">
          <div className="parser-heading-row">
            <span className="eyebrow"><ImageIcon /> 豆包去水印</span>
            <a className="parser-guide-entry" href="/guide/#how-to-get-link">
              <HelpCircleIcon />
              <span>如何获取链接</span>
              <ArrowRightIcon />
            </a>
          </div>
          <h2 id="parser-title">在线提取无水印原图</h2>
          <p>粘贴公开的豆包对话分享链接，立即开始。</p>
        </div>

        <form onSubmit={handleSubmit} noValidate data-ready={isHydrated}>
          <label htmlFor="share-url" className="sr-only">豆包分享链接</label>
          <div className={`url-control${notice?.tone === "error" ? " has-error" : ""}`}>
            <input
              id="share-url"
              name="url"
              type="url"
              inputMode="url"
              autoComplete="url"
              spellCheck={false}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="https://www.doubao.com/thread/..."
              aria-describedby="input-help"
            />
            {input ? (
              <button
                type="button"
                className="input-icon-button"
                onClick={() => {
                  setInput("");
                  setImages([]);
                  setResultsOpen(false);
                  setNotice(null);
                }}
              >
                <span className="sr-only">清空链接</span>
                <CloseIcon />
              </button>
            ) : (
              <button type="button" className="paste-button" onClick={handlePaste}>
                <ClipboardIcon /> 粘贴
              </button>
            )}
          </div>

          <div className="parser-form-bottom">
            <p id="input-help"><LockIcon /> 链接仅用于本次解析请求</p>
            <button
              type="submit"
              className="primary-button"
              disabled={!isHydrated || loading || !input.trim()}
            >
              {loading ? (
                <><span className="button-spinner" /> 正在解析</>
              ) : (
                <>开始去水印 <ArrowRightIcon /></>
              )}
            </button>
          </div>
        </form>

        {notice ? (
          <div className={`notice ${notice.tone}`} role={notice.tone === "error" ? "alert" : "status"}>
            {notice.tone === "error" ? <WarningIcon /> : <CheckIcon />}
            <span>{notice.message}</span>
          </div>
        ) : null}

        {loading ? (
          <div className="loading-panel" aria-live="polite">
            <div className="loading-orbit"><ImageIcon /></div>
            <div>
              <strong>正在提取豆包无水印原图</strong>
              <span>通常只需要几秒钟，请不要关闭页面。</span>
            </div>
          </div>
        ) : null}

        {images.length > 0 && !resultsOpen ? (
          <div className="results-reopen" role="status">
            <span><CheckIcon /> 已找到 {images.length} 张无水印原图</span>
            <button type="button" onClick={() => setResultsOpen(true)}>查看成果</button>
          </div>
        ) : null}
      </div>

      {images.length > 0 && resultsOpen ? (
        <ResultsDialog
          images={images}
          onClose={closeResults}
        />
      ) : null}
    </section>
  );
}
