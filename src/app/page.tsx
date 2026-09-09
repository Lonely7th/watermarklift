import type { Metadata } from "next";

import { ParserTool } from "@/components/parser/parser-tool";
import { ArrowRightIcon, ImageIcon, LockIcon, SparklesIcon } from "@/components/ui/icons";
import { faqItems } from "@/content/faq";
import { applicationStructuredData, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "豆包去水印工具 - 免费下载无水印原图",
  description:
    "免费在线豆包去水印。粘贴豆包公开分享链接，即可提取、预览并下载高清无水印原图，无需上传图片。",
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
          <span className="hero-pill"><SparklesIcon /> 本项目免费开源，仅供学习交流使用</span>
          <h1><span>豆包去水印</span><br className="hero-title-break" />高清原图下载</h1>
          <p className="hero-lead">
            粘贴豆包公开分享链接，一键获取无水印高清原图。不是涂抹或修复水印，因此不损失图片画质。
          </p>
          <div className="hero-facts" aria-label="产品特点">
            <span><LockIcon /> 不上传图片文件</span>
            <span><ImageIcon /> 保留原图画质</span>
          </div>
        </div>
        <ParserTool />
      </section>

      <section className="section-shell how-section" aria-labelledby="how-title">
        <div className="section-heading centered">
          <span className="eyebrow">工作原理</span>
          <h2 id="how-title">豆包图片去水印，只需三步。</h2>
          <p>无需安装软件，图片文件不经过本站服务器。</p>
        </div>
        <ol className="steps-grid">
          <li><span>01</span><h3>创建分享链接</h3><p>在豆包对话中找到生成图片，点击分享并复制公开链接。</p></li>
          <li><span>02</span><h3>解析页面数据</h3><p>粘贴链接，工具读取公开页面中已有的原始素材信息。</p></li>
          <li><span>03</span><h3>下载无水印原图</h3><p>确认图片尺寸后，浏览器直接从素材源地址下载高清原图。</p></li>
        </ol>
      </section>

      <section className="section-shell principle-section" aria-labelledby="principle-title">
        <div className="principle-copy">
          <span className="eyebrow">准确说明</span>
          <h2 id="principle-title">所谓豆包去水印，<br />是直接读取无水印原图。</h2>
          <p>
            WatermarkLift 不使用 AI 修图，也不会修改图片像素。它从用户主动提供的豆包公开分享页面中，寻找平台数据里已有的无水印高清原图地址。
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
          <h2 id="faq-title">豆包去水印常见问题。</h2>
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
