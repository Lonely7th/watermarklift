"use client";

import { ExternalLinkIcon } from "@/components/ui/icons";

const recommendedTools = [
  {
    name: "讯飞智作",
    category: "AI 音视频创作",
    description: "文字转语音、虚拟数字人和音视频内容创作平台。",
    href: "https://www.xfzhizuo.cn/",
    logo: "https://openstorage.xfyousheng.com/asset/asset/20250105/0d0db524-243e-4f97-bf15-2eef4b58e1e3.png",
    mark: "讯",
    tone: "blue",
  },
  {
    name: "朱雀 AI 检测",
    category: "AI 内容检测",
    description: "检测文本、图片和视频是否可能由 AI 生成。",
    href: "https://matrix.tencent.com/ai-detect/",
    logo: "https://ai-bot.cn/wp-content/uploads/2025/02/matrix-tencent-logo.png",
    mark: "雀",
    tone: "violet",
  },
  {
    name: "鲸鱼 AI 助手",
    category: "AI 文档导出",
    description: "将 DeepSeek、豆包 对话导出为 Word、Excel 和 PDF 等格式文档。",
    href: "https://m.aiwhaler.com/",
    logo: "https://m.aiwhaler.com/images/logo-main.png",
    mark: "鲸",
    tone: "cyan",
  },
  {
    name: "即梦 AI",
    category: "AI 图片与视频",
    description: "提供图片、视频、音乐和数字人等 AI 创作能力。",
    href: "https://jimeng.jianying.com/",
    logo: "https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/common/images/dreamina-v1.ico",
    mark: "梦",
    tone: "pink",
  },
  {
    name: "AiPPT",
    category: "AI 演示文稿",
    description: "通过一句话或文档快速生成并排版演示文稿。",
    href: "https://www.aippt.cn/?utm_type=Navweb&utm_source=ai-bot&utm_page=aippt&utm_plan=ppt&utm_unit=AIPPT&utm_keyword=50608",
    logo: "https://www.aippt.cn/favicon.ico",
    mark: "P",
    tone: "orange",
  },
  {
    name: "LiblibAI",
    category: "AI 图像创作",
    description: "集图片生成、模型分享和在线训练于一体的 AI 创作平台。",
    href: "https://www.liblib.art/",
    logo: "https://ai-bot.cn/wp-content/uploads/2025/10/liblib.art-logo.png",
    mark: "L",
    tone: "green",
  },
] as const;

export function ToolRecommendations() {
  return (
    <aside className="tool-recommendations" aria-labelledby="tools-title">
      <div className="recommendations-heading">
        <div>
          <span className="eyebrow">工具推荐</span>
          <h2 id="tools-title">好用的 AI 工具</h2>
        </div>
        <p>以下为第三方网站，访问和使用前请查看其服务条款与隐私政策。</p>
      </div>

      <div className="recommendations-grid">
        {recommendedTools.map((tool) => (
          <a
            className="recommendation-card"
            href={tool.href}
            key={tool.name}
            target="_blank"
            rel="noopener noreferrer external"
            aria-label={`访问 ${tool.name}（在新窗口打开）`}
          >
            <span className={`recommendation-mark ${tool.tone}`} aria-hidden="true">
              <span className="recommendation-logo-fallback">{tool.mark}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tool.logo}
                alt=""
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </span>
            <span className="recommendation-category">{tool.category}</span>
            <strong>{tool.name}</strong>
            <span className="recommendation-description">{tool.description}</span>
            <span className="recommendation-link">了解工具 <ExternalLinkIcon /></span>
          </a>
        ))}
      </div>
    </aside>
  );
}
