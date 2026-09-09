import type { Metadata } from "next";

import { ContentPage } from "@/components/content/content-page";
import { faqItems } from "@/content/faq";
import { jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "常见问题",
  description: "关于豆包高清原图提取、分享链接、隐私、版权和常见解析失败原因的说明。",
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
      title="清楚、直接的答案"
      description="了解工具的工作方式、支持范围、数据处理方式和使用边界。"
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
