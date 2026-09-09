export default function NotFound() {
  return (
    <main className="content-page">
      <header className="content-hero">
        <span className="eyebrow">404</span>
        <h1>这个页面不存在。</h1>
        <p>链接可能已经改变，或者页面从未存在。</p>
        <a href="/" className="hero-action">返回首页</a>
      </header>
    </main>
  );
}
