import { siteConfig } from "@/lib/config";

export const dynamic = "force-static";

export function GET() {
  const contact = siteConfig.contactEmail || "上线前待补充";
  const content = `# ${siteConfig.name}

> 免费、开源的在线豆包去水印工具。粘贴豆包公开分享链接，即可获取无水印高清原图。

## 核心说明

- “豆包去水印”在本站指提取分享页中已有的无水印原图，并非修改带水印图片。
- 本工具不会使用 AI 涂抹水印，也不会修改、裁剪或压缩图片像素。
- 用户提交豆包公开分享链接，解析服务读取页面数据并返回无水印原图地址。
- 图片由用户浏览器直接从第三方素材地址预览和下载。
- 请仅处理自己拥有或已经获得授权的内容。
- 本项目与豆包及其运营主体不存在隶属、授权或合作关系。

## 主要页面

- 首页：${siteConfig.url}/
- 使用指南：${siteConfig.url}/guide/
- 常见问题：${siteConfig.url}/faq/
- 关于项目：${siteConfig.url}/about/
- 隐私说明：${siteConfig.url}/privacy/
- 免责声明：${siteConfig.url}/disclaimer/

## 开源与联系

- 本站源代码：${siteConfig.repository}
- 上游开源项目：${siteConfig.upstreamRepository}
- 联系方式：${contact}
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
