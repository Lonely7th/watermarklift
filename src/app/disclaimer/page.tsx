import type { Metadata } from "next";

import { ContentPage } from "@/components/content/content-page";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "免责声明",
  description: "关于 WatermarkLift 免费开源豆包去水印工具的非官方性质、知识产权、使用责任和服务可用性说明。",
  alternates: { canonical: "/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <ContentPage
      eyebrow="免责声明"
      title="请负责任地使用本工具"
      description="使用本网站即表示你已阅读、理解并同意以下说明。"
      updated="2026-09-09"
    >
      <section>
        <h2>一、非官方声明</h2>
        <p>
          本网站是独立、非营利的教育与技术研究项目，与豆包、北京春田知韵科技有限公司及其关联主体不存在隶属、授权、合作、代理或背书关系。“豆包”等名称仅用于说明工具兼容的链接来源。
        </p>
      </section>

      <section>
        <h2>二、服务性质</h2>
        <p>
          本网站所称“豆包去水印”，是指从用户主动提交的公开分享页面中读取已有的无水印原图地址，不对带水印图片进行人工智能重绘、像素修改或涂抹。网站不保证解析结果的准确性、完整性、持续性和可用性。
        </p>
      </section>

      <section>
        <h2>三、知识产权与授权</h2>
        <p>
          用户应确保自己对提交、下载、复制、传播或进一步使用的内容拥有合法权利或已取得充分授权。任何下载能力均不构成对内容权属、许可范围或商业使用权的确认。
        </p>
        <p>用户不得利用本网站侵犯著作权、商标权、肖像权、隐私权或其他合法权益。</p>
      </section>

      <section>
        <h2>四、用户责任</h2>
        <p>
          用户应自行遵守相关平台协议和适用法律法规，并对自己的使用行为及其后果承担责任。若第三方平台限制自动读取、下载或其他访问方式，用户应遵守相关限制。
        </p>
      </section>

      <section>
        <h2>五、服务中断与变更</h2>
        <p>
          第三方页面结构、接口、签名规则或访问策略随时可能变化。本网站可能在不另行通知的情况下暂停、修改或终止部分功能，也不对因此产生的损失承担保证责任。
        </p>
      </section>

      <section>
        <h2>六、权利通知</h2>
        {siteConfig.contactEmail ? (
          <p>
            如认为本网站相关功能或内容侵犯你的合法权益，请发送权利证明、目标链接和联系方式至
            <a href={`mailto:${siteConfig.contactEmail}`}> {siteConfig.contactEmail}</a>。我们将在核实后采取合理措施。
          </p>
        ) : (
          <p>
            权利投诉邮箱尚未配置。如需提交权利通知，可暂时通过
            <a href={`${siteConfig.repository}/issues`} target="_blank" rel="noreferrer"> GitHub Issues</a> 联系维护者；涉及隐私材料时，请先索取非公开提交方式。
          </p>
        )}
      </section>

      <aside className="prose-note">
        <strong>重要提示</strong>
        <p>“非营利”或“教育用途”不会自动免除使用者和运营者依法应承担的责任。本页面不是法律意见。</p>
      </aside>
    </ContentPage>
  );
}
