import type { Metadata } from "next";

import { ContentPage } from "@/components/content/content-page";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "隐私说明",
  description: "了解 WatermarkLift 豆包去水印工具如何处理分享链接、图片、日志和本地浏览器数据。",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="隐私说明"
      title="尽量少收集，清楚地说明"
      description="本站不要求注册账户，也不会要求你上传图片文件。"
      updated="2026-09-09"
    >
      <section>
        <h2>我们处理什么</h2>
        <p>
          当你点击“开始去水印”时，浏览器会把你输入的豆包公开分享链接发送至解析接口。接口使用该链接读取公开页面，并把找到的无水印原图地址和尺寸返回给浏览器。
        </p>
      </section>

      <section>
        <h2>图片如何传输</h2>
        <p>
          图片文件不会上传到本站。预览和下载发生在你的浏览器与第三方素材服务器之间，因此该第三方可能按照自己的隐私政策处理 IP 地址、请求时间和浏览器信息。
        </p>
      </section>

      <section>
        <h2>服务端记录</h2>
        <p>
          当前解析服务可能记录提交的公开分享链接、解析出的图片数量、请求时间及基础运行日志，用于故障排查和防止滥用。运营者应设置最短必要保存期限，并避免保存完整签名图片地址或页面原始内容。
        </p>
        <p>正式上线前，应根据实际数据库配置补充具体保存期限和删除流程。</p>
      </section>

      <section>
        <h2>浏览器本地数据</h2>
        <p>
          当前前端不会把分享链接写入 URL，也不使用广告追踪 Cookie。浏览器可能按照自身规则保留下载记录、剪贴板权限和缓存。
        </p>
      </section>

      <section>
        <h2>第三方服务</h2>
        <p>本网站依赖 CloudBase 解析接口、豆包公开分享页面及其素材 CDN。各服务对请求数据的处理受其各自隐私政策约束。</p>
      </section>

      <section>
        <h2>联系与删除请求</h2>
        {siteConfig.contactEmail ? (
          <p>
            如需查询或删除与特定分享链接相关的记录，请联系
            <a href={`mailto:${siteConfig.contactEmail}`}> {siteConfig.contactEmail}</a>。
          </p>
        ) : (
          <p>
            联系邮箱尚未配置。如需查询或删除相关记录，可暂时通过
            <a href={`${siteConfig.repository}/issues`} target="_blank" rel="noreferrer"> GitHub Issues</a> 提交请求，请勿在公开 Issue 中粘贴包含敏感信息的链接。
          </p>
        )}
      </section>
    </ContentPage>
  );
}
