# Than Studio SEO 优化文档

## 概述

本文档记录了 Than Studio 网站的 SEO 优化实施情况，包括技术实现、配置说明和维护指南。

## 已实施的 SEO 优化

### 1. 基础 SEO 配置

#### Meta 标签优化
- ✅ 所有页面都配置了唯一的 `title` 标签
- ✅ 所有页面都有描述性的 `meta description`
- ✅ 添加了相关的 `keywords` 标签
- ✅ 设置了规范链接 `canonical URL`

#### Open Graph 标签
- ✅ 配置了 `og:title`、`og:description`、`og:image`
- ✅ 设置了 `og:type` 和 `og:url`
- ✅ 添加了 `og:site_name`

#### Twitter Card 标签
- ✅ 配置了 `twitter:card`、`twitter:title`、`twitter:description`
- ✅ 设置了 `twitter:image`

### 2. 结构化数据 (Schema.org)

#### 组织信息 (Organization)
```json
{
  "@type": "Organization",
  "name": "Than Studio",
  "description": "专业设计工作室",
  "url": "https://seanparker2.github.io/Than/",
  "logo": "https://seanparker2.github.io/Than/logo/than-studio-logo.svg",
  "contactPoint": {...},
  "address": {...}
}
```

#### 网站信息 (WebSite)
- ✅ 配置了网站搜索功能的结构化数据
- ✅ 添加了网站基本信息

#### 面包屑导航 (BreadcrumbList)
- ✅ 为主要页面配置了面包屑导航结构化数据

#### 页面特定结构化数据
- ✅ **作品页面**: `CollectionPage` 类型，包含作品列表
- ✅ **商店页面**: `Store` 类型，包含产品目录
- ✅ **关于页面**: `AboutPage` 类型，包含组织详细信息
- ✅ **联系页面**: `ContactPage` 类型，包含联系信息

### 3. 网站地图和爬虫配置

#### Sitemap.xml
- ✅ 自动生成的 XML 网站地图
- ✅ 包含所有主要页面
- ✅ 配置了更新频率和优先级
- ✅ 添加了图片网站地图扩展

#### Robots.txt
- ✅ 配置了爬虫访问规则
- ✅ 指定了网站地图位置
- ✅ 设置了不同搜索引擎的爬取延迟
- ✅ 允许访问重要资源目录

### 4. 技术 SEO

#### URL 结构
- ✅ 使用语义化的 URL 结构
- ✅ 统一了 URL 格式（修正了 ThanLab -> Than）

#### 图片优化
- ✅ 创建了 `OptimizedImage` 组件
- ✅ 配置了图片懒加载
- ✅ 添加了适当的 `alt` 属性

#### 性能优化
- ✅ 实施了代码分割
- ✅ 配置了资源预加载
- ✅ 优化了图片加载策略

## 文件结构

```
src/
├── components/
│   ├── SEOHead.tsx          # SEO 头部组件
│   └── OptimizedImage.tsx   # 优化的图片组件
├── utils/
│   └── seo.ts              # SEO 配置和工具函数
├── pages/
│   ├── _document.tsx       # 全局 HTML 文档配置
│   ├── index.tsx           # 首页 SEO 配置
│   ├── work/index.tsx      # 作品页面 SEO 配置
│   ├── story/index.tsx     # 关于页面 SEO 配置
│   ├── contact/index.tsx   # 联系页面 SEO 配置
│   └── store/index.tsx     # 商店页面 SEO 配置
public/
├── sitemap.xml             # 网站地图
├── robots.txt              # 爬虫配置
scripts/
└── generate-sitemap.js     # 网站地图生成脚本
```

## 使用指南

### 1. SEO 组件使用

```tsx
import SEOHead from '../components/SEOHead';
import { pageSEO, generateOrganizationSchema } from '../utils/seo';

export default function MyPage() {
  return (
    <>
      <SEOHead 
        config={pageSEO.work}
        structuredData={[generateOrganizationSchema()]}
      />
      {/* 页面内容 */}
    </>
  );
}
```

### 2. 网站地图更新

```bash
# 手动生成网站地图
npm run generate-sitemap

# 检查 SEO 配置
npm run seo-check

# 构建时自动生成（已配置 prebuild 脚本）
npm run build
```

### 3. 添加新页面的 SEO 配置

1. 在 `src/utils/seo.ts` 中添加页面配置
2. 在页面组件中使用 `SEOHead` 组件
3. 更新 `scripts/generate-sitemap.js` 中的页面列表
4. 运行 `npm run generate-sitemap` 更新网站地图

## 监控和维护

### 1. SEO 检查清单

- [ ] 所有页面都有唯一的 title 和 description
- [ ] 图片都有适当的 alt 属性
- [ ] URL 结构保持一致
- [ ] 网站地图定期更新
- [ ] 结构化数据格式正确

### 2. 定期维护任务

- **每月**: 检查和更新网站地图
- **每季度**: 审查和优化页面 meta 标签
- **每半年**: 更新结构化数据和 Schema.org 配置

### 3. 性能监控

建议使用以下工具监控 SEO 性能：

- Google Search Console
- Google PageSpeed Insights
- Lighthouse SEO 审计
- Schema.org 验证工具

## 技术规范

### 1. Meta 标签规范

- **Title**: 50-60 字符，包含主要关键词
- **Description**: 150-160 字符，描述性和吸引性
- **Keywords**: 5-10 个相关关键词，用逗号分隔

### 2. 图片优化规范

- **Alt 属性**: 描述性文本，包含相关关键词
- **文件名**: 使用语义化命名
- **格式**: 优先使用 WebP，备选 JPEG/PNG
- **尺寸**: 根据使用场景优化尺寸

### 3. URL 规范

- 使用小写字母
- 用连字符分隔单词
- 保持简洁和语义化
- 避免特殊字符和参数

## 更新日志

### 2024-12-19
- ✅ 完成所有页面的 SEO 基础配置
- ✅ 实施结构化数据标记
- ✅ 优化网站地图和 robots.txt
- ✅ 创建 SEO 工具组件和配置文件
- ✅ 统一 URL 结构（ThanLab -> Than）
- ✅ 添加自动化 SEO 脚本

---

**注意**: 本文档会随着 SEO 优化的进展持续更新。如有问题或建议，请联系开发团队。