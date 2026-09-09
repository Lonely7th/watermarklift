import type { ReactNode } from "react";

interface ContentPageProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  updated?: string;
}

export function ContentPage({ eyebrow, title, description, children, updated }: ContentPageProps) {
  return (
    <main className="content-page">
      <header className="content-hero">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {updated ? <time dateTime={updated}>更新日期：{updated}</time> : null}
      </header>
      <article className="prose-card">{children}</article>
    </main>
  );
}
