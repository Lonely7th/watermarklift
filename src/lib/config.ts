const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "";
const defaultSiteUrl = "https://watermarklift.cn";

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME?.trim() || "WatermarkLift",
  description:
    "WatermarkLift 是免费的在线豆包去水印工具。粘贴豆包公开分享链接，即可提取并下载无水印高清原图，无需上传图片。",
  url: configuredUrl || defaultSiteUrl,
  isPublicUrlConfigured: true,
  apiUrl:
    process.env.NEXT_PUBLIC_API_URL?.trim() ||
    "https://seekservice-9gkeeztlfcb2a6d4-1301441002.ap-shanghai.app.tcloudbase.com/pic-mark",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "queketalk@126.com",
  repository: "https://github.com/Lonely7th/watermarklift",
  upstreamRepository: "https://github.com/ihmily/doubao-nomark",
} as const;

export const navigation = [
  { href: "/guide/", label: "使用指南" },
  { href: "/faq/", label: "常见问题" },
  { href: "/about/", label: "关于" },
] as const;
