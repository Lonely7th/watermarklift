import { siteConfig } from "@/lib/config";
import { ExternalLinkIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <p className="footer-title">{siteConfig.name}</p>
          <p className="footer-note">非营利、非官方的教育与技术研究项目。</p>
        </div>

        <div className="footer-links" aria-label="页脚导航">
          <a href="/guide/">使用指南</a>
          <a href="/faq/">常见问题</a>
          <a href="/privacy/">隐私说明</a>
          <a href="/disclaimer/">免责声明</a>
          <a href={siteConfig.upstreamRepository} target="_blank" rel="noreferrer">
            开源仓库 <ExternalLinkIcon />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>请仅处理自己拥有或已获授权的内容</span>
      </div>
    </footer>
  );
}
