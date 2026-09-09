import { navigation, siteConfig } from "@/lib/config";

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="/" className="brand-link" aria-label={`${siteConfig.name}首页`}>
          <BrandMark />
          <span>{siteConfig.name}</span>
        </a>

        <nav aria-label="主导航" className="main-nav">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/#parser" className="nav-action">
          豆包去水印
        </a>
      </div>
    </header>
  );
}
