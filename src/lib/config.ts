const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "";

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME?.trim() || "原图提取工具",
  description:
    "从豆包公开分享链接中提取高清原图地址。非营利、非官方，仅用于教育与技术研究。",
  url: configuredUrl || "https://example.invalid",
  isPublicUrlConfigured: Boolean(configuredUrl),
  apiUrl:
    process.env.NEXT_PUBLIC_API_URL?.trim() ||
    "https://seekservice-9gkeeztlfcb2a6d4-1301441002.ap-shanghai.app.tcloudbase.com/pic-mark",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "",
  upstreamRepository: "https://github.com/ihmily/doubao-nomark",
} as const;

export const navigation = [
  { href: "/guide/", label: "使用指南" },
  { href: "/faq/", label: "常见问题" },
  { href: "/about/", label: "关于" },
] as const;
