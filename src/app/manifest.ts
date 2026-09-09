import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f7",
    theme_color: "#f5f5f7",
    lang: "zh-CN",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
