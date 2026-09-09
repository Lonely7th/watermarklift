import type { Metadata } from "next";

import { ContentPage } from "@/components/content/content-page";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "关于项目",
  description: "了解 watermarklift 豆包去水印工具的非营利定位、原图提取原理、开源代码与维护原则。",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="关于项目"
      title="开源、透明的豆包去水印工具"
      description="watermarklift 通过提取公开分享页中的无水印原图地址，为用户提供免费、清晰的使用体验。"
      updated="2026-09-09"
    >
      <section>
        <h2>项目定位</h2>
        <p>
          {siteConfig.name} 是独立、非营利的教育与技术研究项目。网站不出售解析结果、不提供会员服务，也不代表豆包官方。
        </p>
      </section>

      <section>
        <h2>豆包去水印的技术原理</h2>
        <p>
          用户提交豆包公开分享链接后，解析服务读取分享页数据，寻找其中已有的无水印高清原图地址。图片不会经过 AI 重绘、像素修复、裁剪或二次压缩。
        </p>
        <p>由于依赖第三方公开页面结构，平台升级可能导致解析暂时失效。</p>
      </section>

      <section>
        <h2>本站已经开源</h2>
        <p>
          watermarklift 的前端源代码公开在
          <a href={siteConfig.repository} target="_blank" rel="noreferrer"> GitHub 仓库</a>，欢迎查看实现、报告问题和参与改进。
        </p>
        <p>
          解析思路基于上游开源项目
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
