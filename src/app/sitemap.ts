import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.isPublicUrlConfigured) return [];

  const routes = ["", "/guide/", "/faq/", "/about/", "/privacy/", "/disclaimer/"];
  return routes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-09-09"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
