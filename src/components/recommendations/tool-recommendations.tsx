import { ExternalLinkIcon } from "@/components/ui/icons";

const recommendedTools = [
  {
    name: "讯飞智作",
    category: "AI 音视频创作",
    description: "文字转语音、虚拟数字人和音视频内容创作平台。",
    href: "https://ai-bot.cn/sites/246.html",
    mark: "讯",
    tone: "blue",
  },
  {
    name: "朱雀 AI 检测",
    category: "AI 内容检测",
    description: "检测文本、图片和视频是否可能由 AI 生成。",
    href: "https://ai-bot.cn/sites/68275.html",
    mark: "雀",
    tone: "violet",
  },
  {
    name: "鲸鱼 AI 助手",
    category: "AI 文档处理",
    description: "将 AI 内容导出为 Word、Excel 和 PDF 等格式。",
    href: "https://m.aiwhaler.com/",
    mark: "鲸",
    tone: "cyan",
  },
  {
    name: "即梦 AI",
    category: "AI 图片与视频",
    description: "提供图片、视频、音乐和数字人等 AI 创作能力。",
    href: "https://ai-bot.cn/sites/17772.html",
    mark: "梦",
    tone: "pink",
  },
  {
    name: "AiPPT",
    category: "AI 演示文稿",
    description: "通过一句话或文档快速生成并排版演示文稿。",
    href: "https://www.aippt.cn/?utm_type=Navweb&utm_source=ai-bot&utm_page=aippt&utm_plan=ppt&utm_unit=AIPPT&utm_keyword=50608",
    mark: "P",
    tone: "orange",
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
              {tool.mark}
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
