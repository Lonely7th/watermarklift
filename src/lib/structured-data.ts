import { siteConfig } from "@/lib/config";

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "zh-CN",
  description: siteConfig.description,
  alternateName: ["WatermarkLift 豆包去水印", "豆包去水印工具"],
  sameAs: [siteConfig.repository],
};

export const applicationStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: siteConfig.name,
  url: siteConfig.url,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript and a modern web browser",
  description: siteConfig.description,
  isAccessibleForFree: true,
  inLanguage: "zh-CN",
  featureList: [
    "从豆包公开分享链接提取无水印原图",
    "查看原图分辨率",
    "在线预览并下载高清原图",
    "无需上传图片文件",
  ],
  sameAs: [siteConfig.repository],
  keywords: "豆包去水印, 豆包图片去水印, 豆包无水印原图, 豆包图片下载",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CNY",
  },
};

export function jsonLd(value: object): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
