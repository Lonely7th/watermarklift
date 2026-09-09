# WatermarkLift

WatermarkLift 是一个免费、开源的在线豆包去水印工具。它调用 CloudBase 解析接口，从豆包公开分享链接中提取并下载无水印高清原图。

## 特性

- Next.js App Router + TypeScript，完整静态导出
- 响应式、深色模式和减少动态效果支持
- 分享文本自动提取及严格的豆包链接校验
- 豆包无水印原图预览、下载、复制地址和完整错误状态
- 使用指南、FAQ、关于、隐私和免责声明页面
- Metadata、Open Graph、JSON-LD、robots、sitemap 和 `llms.txt`
- 正式域名和规范链接统一为 `https://watermarklift.cn`
- Vitest 单元测试和 Playwright 端到端测试

## 本地开发

要求 Node.js 22.12 或更高版本。

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

访问 `http://localhost:3000`。

## 环境变量

```dotenv
NEXT_PUBLIC_SITE_NAME=WatermarkLift
NEXT_PUBLIC_SITE_URL=https://watermarklift.cn
NEXT_PUBLIC_CONTACT_EMAIL=contact@your-domain.example
NEXT_PUBLIC_API_URL=https://你的接口地址/pic-mark
```

站名和域名已有代码内默认值，环境变量可用于部署环境覆盖。联系邮箱上线前应填写真实可用的权利投诉地址。

## 检查和构建

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

生产构建位于 `out/`，把该目录部署到 CloudBase 静态托管或其他静态文件服务器即可。

需要在本机预览生产构建时运行：

```bash
npm start
```

## CloudBase 配置

1. 将 `out/` 设为静态托管目录。
2. 将自定义域名绑定到静态托管并启用 HTTPS。
3. 在 `/pic-mark` 云函数的 CORS 白名单中加入正式站点域名。
4. 为 HTML 配置较短缓存，为 `/_next/static/` 配置长期不可变缓存。
5. 确认正式 URL 为 `https://watermarklift.cn`，并填写真实可用的权利投诉邮箱。

## 隐私核对

当前隐私页面按照“解析服务可能记录分享链接、图片数量和请求时间”的策略编写。如果后端删除数据库记录，可同步调整 `src/app/privacy/page.tsx`；如果继续保存，应在上线前补充保存期限和删除流程。

## 开源说明

本站代码发布于 [Lonely7th/watermarklift](https://github.com/Lonely7th/watermarklift)。解析思路基于 [ihmily/doubao-nomark](https://github.com/ihmily/doubao-nomark)，第三方声明见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。
