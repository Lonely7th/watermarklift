import { siteConfig } from "@/lib/config";
import { ExternalLinkIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <p className="footer-title">{siteConfig.name}</p>
          <p className="footer-note">本项目免费开源，仅供学习交流使用。</p>
        </div>

        <div className="footer-links" aria-label="页脚导航">
          <a href="/guide/">使用指南</a>
          <a href="/faq/">常见问题</a>
          <a href="/privacy/">隐私说明</a>
          <a href="/disclaimer/">免责声明</a>
          <a href={`mailto:${siteConfig.contactEmail}`}>
            联系邮箱：{siteConfig.contactEmail}
          </a>
          <a href={siteConfig.repository} target="_blank" rel="noreferrer">
            GitHub 开源 <ExternalLinkIcon />
          </a>
        </div>
      </div>
      <p className="footer-notice">
        <strong>注意：</strong>使用本服务时请遵守豆包平台的使用条款和相关法律法规
      </p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>请仅处理自己拥有或已获授权的内容</span>
      </div>
    </footer>
  );
}
