import { siteConfig } from "@/lib/config";

export const dynamic = "force-static";

export function GET() {
  const contact = siteConfig.contactEmail || "上线前待补充";
  const content = `# ${siteConfig.name}

> 一个独立、非营利、非官方的教育与技术研究工具，用于从豆包公开分享页面中提取已有的高清原图地址。

## 核心说明

- 本工具不会使用 AI 擦除水印，也不会修改图片像素。
- 用户提交公开分享链接，解析服务读取页面数据并返回原图地址。
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

## 来源与联系

- 上游开源项目：${siteConfig.upstreamRepository}
- 联系方式：${contact}
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
