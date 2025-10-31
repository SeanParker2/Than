import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        {/* 基础 Meta 标签 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Than Design" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Than Design Studio" />
        <meta name="generator" content="Next.js" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Than Design" />
        
        {/* DNS 预取和预连接 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        
        {/* Favicon 和图标 */}
        <link rel="icon" href={`${process.env.NODE_ENV === 'production' ? '/Than' : ''}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${process.env.NODE_ENV === 'production' ? '/Than' : ''}/favicon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.NODE_ENV === 'production' ? '/Than' : ''}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NODE_ENV === 'production' ? '/Than' : ''}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NODE_ENV === 'production' ? '/Than' : ''}/favicon-16x16.png`} />
        <link rel="manifest" href={`${process.env.NODE_ENV === 'production' ? '/Than' : ''}/site.webmanifest`} />
        <link rel="mask-icon" href={`${process.env.NODE_ENV === 'production' ? '/Than' : ''}/safari-pinned-tab.svg`} color="#000000" />
        
        {/* 结构化数据 - 组织信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Than Studio",
              "alternateName": "Than Design Studio",
              "description": "专业设计工作室，提供品牌设计、UI/UX设计、产品设计等服务",
              "url": "https://seanparker2.github.io/Than/",
              "logo": "https://seanparker2.github.io/Than/logo/logo.png",
              "image": "https://seanparker2.github.io/Than/images/home_hero_banner.png",
              "foundingDate": "2019",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+86-180-9898-6553",
                "contactType": "customer service",
                "email": "unsaturated2025@gmail.com",
                "availableLanguage": ["Chinese", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "深圳市",
                "addressRegion": "广东省",
                "addressCountry": "CN"
              },
              "areaServed": {
                "@type": "Country",
                "name": "China"
              },
              "knowsAbout": [
                "品牌设计",
                "UI设计",
                "UX设计",
                "产品设计",
                "视觉设计",
                "空间设计"
              ],
              "sameAs": [
                "https://seanparker2.github.io/Than/"
              ]
            })
          }}
        />
        
        {/* 面包屑导航结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "首页",
                  "item": "https://seanparker2.github.io/Than/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "作品展示",
                  "item": "https://seanparker2.github.io/Than/work/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "关于我们",
                  "item": "https://seanparker2.github.io/Than/story/"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "联系我们",
                  "item": "https://seanparker2.github.io/Than/contact/"
                }
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}