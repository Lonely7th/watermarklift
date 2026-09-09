import type { Metadata } from "next";

import { ContentPage } from "@/components/content/content-page";

export const metadata: Metadata = {
  title: "使用指南",
  description: "如何创建豆包公开分享链接，并使用原图提取工具预览和下载高清图片。",
  alternates: { canonical: "/guide/" },
};

export default function GuidePage() {
  return (
    <ContentPage
      eyebrow="使用指南"
      title="从分享链接获取高清原图"
      description="准备一个有效的豆包公开分享链接，整个过程通常只需要十几秒。"
      updated="2026-09-09"
    >
      <section>
        <h2>第一步：创建公开分享链接</h2>
        <p>
          打开包含目标图片的豆包对话，选择分享功能并复制链接。有效链接通常以
          <code>https://www.doubao.com/thread/</code> 开头。
        </p>
        <p>请不要提交私人页面地址、登录后的浏览器地址或与图片无关的网页链接。</p>
      </section>

      <section>
        <h2>第二步：粘贴并解析</h2>
        <p>
          返回<a href="/#parser">首页解析区域</a>，粘贴完整分享链接并点击“提取原图”。工具会读取公开页面数据，但不会上传页面中的图片文件。
        </p>
      </section>

      <section>
        <h2>第三步：预览和下载</h2>
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
    </ContentPage>
  );
}
