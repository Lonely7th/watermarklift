import { siteConfig } from "@/lib/config";

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "zh-CN",
  description: siteConfig.description,
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
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CNY",
  },
};

export function jsonLd(value: object): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
