import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/config";
import { jsonLd, websiteStructuredData } from "@/lib/structured-data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `豆包去水印工具 - 免费下载无水印原图｜${siteConfig.name}`,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "豆包去水印",
    "豆包图片去水印",
    "豆包AI图片去水印",
    "豆包无水印原图",
    "豆包图片下载",
    "豆包生成图片下载",
    "watermarklift",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: { "zh-CN": "/" },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: siteConfig.name,
    title: `豆包去水印工具 - 免费下载无水印原图｜${siteConfig.name}`,
    description: siteConfig.description,
    images: [{ url: "/og-card.png", width: 1200, height: 630, alt: `${siteConfig.name} 豆包去水印工具` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `豆包去水印工具 - 免费下载无水印原图｜${siteConfig.name}`,
    description: siteConfig.description,
    images: ["/og-card.png"],
  },
  robots: siteConfig.isPublicUrlConfigured
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">跳到主要内容</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteStructuredData) }}
        />
      </body>
    </html>
  );
}
