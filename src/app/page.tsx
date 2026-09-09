import type { Metadata } from "next";

import { ParserTool } from "@/components/parser/parser-tool";
import { ArrowRightIcon, ImageIcon, LockIcon, SparklesIcon } from "@/components/ui/icons";
import { faqItems } from "@/content/faq";
import { applicationStructuredData, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.slice(0, 4).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <span className="hero-pill"><SparklesIcon /> 免费 · 无广告 · 教育用途</span>
          <h1>找回作品<br /><span>最初的清晰。</span></h1>
          <p className="hero-lead">
            从豆包公开分享链接中提取高清原图地址。无需上传图片，不压缩画质。
          </p>
          <a href="#parser" className="hero-action">
            立即开始 <ArrowRightIcon />
          </a>
          <div className="hero-facts" aria-label="产品特点">
            <span><LockIcon /> 不上传图片文件</span>
            <span><ImageIcon /> 保留原始分辨率</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card visual-card-back" />
          <div className="visual-card visual-card-front">
            <span className="visual-sun" />
            <span className="visual-mountain one" />
            <span className="visual-mountain two" />
            <span className="visual-shine" />
          </div>
          <div className="visual-label"><span /> 2048 × 2048 原图</div>
        </div>
      </section>

      <ParserTool />

      <section className="section-shell how-section" aria-labelledby="how-title">
        <div className="section-heading centered">
          <span className="eyebrow">工作原理</span>
          <h2 id="how-title">三步，获取高清原图。</h2>
          <p>过程简单透明，图片文件不经过本站服务器。</p>
        </div>
        <ol className="steps-grid">
          <li><span>01</span><h3>创建分享链接</h3><p>在豆包对话中找到生成图片，点击分享并复制公开链接。</p></li>
          <li><span>02</span><h3>解析页面数据</h3><p>粘贴链接，工具读取公开页面中已有的原始素材信息。</p></li>
          <li><span>03</span><h3>预览并下载</h3><p>确认图片尺寸后，浏览器直接从素材源地址下载原图。</p></li>
        </ol>
      </section>

      <section className="section-shell principle-section" aria-labelledby="principle-title">
        <div className="principle-copy">
          <span className="eyebrow">准确说明</span>
          <h2 id="principle-title">不是擦除水印，<br />而是读取原图地址。</h2>
          <p>
            本工具不使用 AI 修图，也不会修改图片像素。它仅从用户主动提供的公开分享页面中，寻找平台页面数据里已有的高清原图地址。
          </p>
          <a href="/about/" className="text-link">了解技术原理 <ArrowRightIcon /></a>
        </div>
        <div className="principle-diagram" aria-label="公开分享页经过解析后得到原图地址">
          <div><span>公开分享页</span><small>doubao.com/thread/...</small></div>
          <ArrowRightIcon />
          <div className="active"><span>原图地址</span><small>image_raw · 2048px</small></div>
        </div>
      </section>

      <section className="section-shell faq-section" aria-labelledby="faq-title">
        <div className="section-heading">
          <span className="eyebrow">常见问题</span>
          <h2 id="faq-title">在开始之前。</h2>
        </div>
        <div className="faq-list">
          {faqItems.slice(0, 4).map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
        <a href="/faq/" className="secondary-button">查看全部问题 <ArrowRightIcon /></a>
      </section>

      <section className="section-shell disclaimer-callout">
        <div>
          <span className="eyebrow">负责任地使用</span>
          <h2>只处理你有权使用的内容。</h2>
          <p>本站为独立的非营利教育项目，不代表豆包官方。使用前请确认你拥有相关内容或已获得明确授权。</p>
        </div>
        <a href="/disclaimer/" className="dark-button">阅读免责声明 <ArrowRightIcon /></a>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(applicationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqStructuredData) }}
      />
    </main>
  );
}
