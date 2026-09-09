import type { Metadata } from "next";

import { ContentPage } from "@/components/content/content-page";
import { faqItems } from "@/content/faq";
import { jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "豆包去水印常见问题",
  description: "豆包去水印会不会降低画质？如何下载豆包无水印原图？查看分享链接、隐私、版权和解析失败问题的答案。",
  alternates: { canonical: "/faq/" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <ContentPage
      eyebrow="常见问题"
      title="豆包去水印常见问题"
      description="了解 watermarklift 的去水印原理、支持范围、原图画质、数据处理方式和使用边界。"
      updated="2026-09-09"
    >
      <div className="content-faq-list">
        {faqItems.map((item) => (
          <section key={item.question}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </section>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqStructuredData) }}
      />
    </ContentPage>
  );
}
