import type { Metadata } from "next";
import Image from "next/image";

import { ContentPage } from "@/components/content/content-page";
import { siteConfig } from "@/lib/config";
import { jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "豆包图片去水印教程",
  description: "豆包图片怎么去水印？图文演示如何点击分享、复制豆包分享链接，再使用 WatermarkLift 免费下载无水印高清原图。",
  alternates: { canonical: "/guide/" },
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "如何去除豆包生成图片的水印",
  description: "使用豆包公开分享链接提取并下载无水印高清原图。",
  totalTime: "PT1M",
  supply: [{ "@type": "HowToSupply", name: "豆包公开分享链接" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "点击豆包对话的分享按钮",
      text: "打开包含目标图片的豆包对话，在生成结果下方点击分享按钮。",
      image: `${siteConfig.url}/images/doubao-click-share-button.png`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "选择图片并复制链接",
      text: "在分享窗口中选中需要处理的图片，然后点击复制链接。",
      image: `${siteConfig.url}/images/doubao-copy-share-link.png`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "粘贴链接并开始去水印",
      text: "将完整分享链接粘贴到 WatermarkLift 首页，点击开始去水印。",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "下载无水印高清原图",
      text: "确认解析结果和图片尺寸，预览并下载无水印原图。",
    },
  ],
};

export default function GuidePage() {
  return (
    <ContentPage
      eyebrow="使用指南"
      title="豆包图片去水印教程"
      description="准备一个有效的豆包公开分享链接，免费获取无水印高清原图，整个过程通常只需要十几秒。"
      updated="2026-09-10"
    >
      <section id="how-to-get-link">
        <h2>第一步：点击豆包的分享按钮</h2>
        <p>
          打开包含目标图片的豆包对话，在图片生成结果下方找到箭头形状的“分享”按钮并点击。
        </p>
        <figure className="guide-figure">
          <Image
            src="/images/doubao-click-share-button.png"
            alt="豆包图片生成结果下方的分享按钮位置"
            width={1577}
            height={654}
            sizes="(max-width: 720px) calc(100vw - 58px), 770px"
          />
          <figcaption>在图片生成结果下方点击“分享”按钮。</figcaption>
        </figure>
      </section>

      <section>
        <h2>第二步：选择图片并复制链接</h2>
        <p>
          在分享窗口中勾选需要去水印的图片，然后点击右下角的“复制链接”。有效链接通常以
          <code>https://www.doubao.com/thread/</code> 开头。
        </p>
        <figure className="guide-figure">
          <Image
            src="/images/doubao-copy-share-link.png"
            alt="豆包分享窗口中选择图片并点击复制链接"
            width={1580}
            height={652}
            sizes="(max-width: 720px) calc(100vw - 58px), 770px"
          />
          <figcaption>勾选目标图片后，点击右下角的“复制链接”。</figcaption>
        </figure>
        <p className="guide-tip">请不要提交私人页面地址、登录后的浏览器地址或与图片无关的网页链接。</p>
      </section>

      <section>
        <h2>第三步：粘贴链接并解析</h2>
        <p>
          返回<a href="/#parser">首页豆包去水印工具</a>，粘贴完整分享链接并点击“开始去水印”。工具会读取公开页面数据，但不会上传页面中的图片文件。
        </p>
      </section>

      <section>
        <h2>第四步：下载豆包无水印原图</h2>
        <p>
          解析成功后，页面会显示图片数量、分辨率和预览。点击图片可放大查看，点击下载按钮会由浏览器直接访问素材源地址。
        </p>
      </section>

      <section>
        <h2>解析失败怎么办？</h2>
        <ul>
          <li>确认链接来自豆包，并且路径中包含 <code>/thread/</code>。</li>
          <li>在无痕窗口打开分享链接，确认不登录也能正常查看。</li>
          <li>确认分享的对话中确实包含豆包生成的图片。</li>
          <li>重新创建一次分享链接，等待片刻后再次尝试。</li>
          <li>第三方平台升级页面时，解析服务可能需要同步适配。</li>
        </ul>
      </section>

      <aside className="prose-note">
        <strong>版权提醒</strong>
        <p>能够访问或下载图片，并不等于自动取得图片的著作权或商业使用权。请仅处理你有权使用的内容。</p>
      </aside>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(howToStructuredData) }}
      />
    </ContentPage>
  );
}
