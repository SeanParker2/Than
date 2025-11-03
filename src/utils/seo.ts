// SEO配置和工具函数

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const defaultSEO: SEOConfig = {
  title: 'Than Studio - 品牌 | 视觉 | 空间创意设计',
  description: 'Than Studio 是一家创造变革性品牌的创意工作室。我们提供从品牌形象、视觉设计到空间创意的全方位服务，推动企业和世界前进。',
  keywords: 'Than Studio, 品牌设计, 视觉设计, 空间创意, 创意工作室, 品牌形象设计',
  canonical: 'https://seanparker2.github.io/Than/',
  ogImage: 'https://seanparker2.github.io/Than/images/home_hero_banner.png',
  ogType: 'website',
  twitterCard: 'summary_large_image'
};

export const pageSEO = {
  home: {
    title: 'Than Studio - 品牌 | 视觉 | 空间创意设计',
    description: 'Than Studio 是一家创造变革性品牌的创意工作室。我们提供从品牌形象、视觉设计到空间创意的全方位服务，推动企业和世界前进。',
    keywords: 'Than Studio, 品牌设计, 视觉设计, 空间创意, 创意工作室, 品牌形象设计',
    canonical: 'https://seanparker2.github.io/Than/',
    ogImage: 'https://seanparker2.github.io/Than/images/home_hero_banner.png'
  },
  work: {
    title: '作品集 | Than Studio',
    description: '浏览 Than Studio 的精选作品（Selected Work），包括品牌设计、数字营销、视觉传达、产品包装和空间导视等定制化方案。',
    keywords: 'Than Studio, 作品集, 精选作品, 品牌设计, 数字营销, 视觉传达, 产品包装, 空间导视',
    canonical: 'https://seanparker2.github.io/Than/work/',
    ogImage: 'https://seanparker2.github.io/Than/images/home_work_1.png'
  },
  story: {
    title: '关于我们 | Than Studio',
    description: '了解 Than Studio 的故事、初心和团队。我们致力于通过卓越的创意设计为客户创造价值。',
    keywords: 'Than Studio, 关于我们, 故事, 初心, 团队, 创意设计',
    canonical: 'https://seanparker2.github.io/Than/story/',
    ogImage: 'https://seanparker2.github.io/Than/images/story-2.png'
  },
  contact: {
    title: '联系我们 | Than Studio',
    description: '联系 Than Studio，获取专业的设计服务。我们期待与您共同创造变革性的品牌。',
    keywords: 'Than Studio, 联系我们, 设计服务, 变革性品牌',
    canonical: 'https://seanparker2.github.io/Than/contact/',
    ogImage: 'https://seanparker2.github.io/Than/images/contact_banner.png'
  },
  store: {
    title: '设计商店 - Than Studio | 创意设计产品与服务',
    description: '探索Than Studio的设计商店，发现独特的创意设计产品和专业设计服务。',
    keywords: 'Than Studio, 设计商店, 创意产品, 设计服务, 品牌设计, UI设计, UX设计, 产品设计',
    canonical: 'https://seanparker2.github.io/Than/store/',
    ogImage: 'https://seanparker2.github.io/Than/images/store.png'
  }
};

// 生成结构化数据
export const generateOrganizationSchema = () => ({
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
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Than Studio",
  "description": "专业设计工作室，提供品牌设计、UI/UX设计、产品设计等服务",
  "url": "https://seanparker2.github.io/Than/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://seanparker2.github.io/Than/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const generateBreadcrumbSchema = () => ({
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
});

// 工具函数：合并SEO配置
export const mergeSEO = (pageSEO: Partial<SEOConfig>): SEOConfig => {
  return { ...defaultSEO, ...pageSEO };
};

// 工具函数：生成完整的页面标题
export const generatePageTitle = (pageTitle: string, siteName: string = 'Than Studio'): string => {
  return pageTitle.includes(siteName) ? pageTitle : `${pageTitle} - ${siteName}`;
};