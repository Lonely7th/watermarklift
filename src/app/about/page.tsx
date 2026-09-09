import type { Metadata } from "next";

import { ContentPage } from "@/components/content/content-page";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "关于项目",
  description: "了解本项目的非营利定位、技术原理、开源来源与维护原则。",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="关于项目"
      title="一个透明的教育项目"
      description="帮助用户理解公开分享页面中的素材数据，同时提供简洁、克制的使用体验。"
      updated="2026-09-09"
    >
      <section>
        <h2>项目定位</h2>
        <p>
          {siteConfig.name} 是独立、非营利的教育与技术研究项目。网站不出售解析结果、不提供会员服务，也不代表豆包官方。
        </p>
      </section>

      <section>
        <h2>技术原理</h2>
        <p>
          用户提交公开分享链接后，解析服务读取分享页内嵌的结构化数据，寻找其中已有的高清原图地址。图片不会经过 AI 重绘、像素修复、裁剪或二次压缩。
        </p>
        <p>由于依赖第三方公开页面结构，平台升级可能导致解析暂时失效。</p>
      </section>

      <section>
        <h2>开源来源</h2>
        <p>
          本项目的解析思路基于开源项目
          <a href={siteConfig.upstreamRepository} target="_blank" rel="noreferrer"> ihmily/doubao-nomark</a>，原项目采用 MIT License。发布和再分发时应保留其版权声明及许可证文本。
        </p>
      </section>

      <section>
        <h2>维护原则</h2>
        <ul>
          <li>准确描述能力，不把素材地址提取宣传成 AI 修图。</li>
          <li>不主动索引、聚合或公开用户提交的分享内容。</li>
          <li>优先保护用户隐私，并尽量减少服务端数据留存。</li>
          <li>收到有效权利通知后及时核查和处理。</li>
        </ul>
      </section>
    </ContentPage>
  );
}
