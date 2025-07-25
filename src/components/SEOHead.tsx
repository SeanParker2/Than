import Head from 'next/head';
import { SEOConfig, defaultSEO } from '../utils/seo';

interface SEOHeadProps {
  config?: Partial<SEOConfig>;
  structuredData?: object[];
}

export default function SEOHead({ config = {}, structuredData = [] }: SEOHeadProps) {
  const seoConfig = { ...defaultSEO, ...config };
  
  return (
    <Head>
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      {seoConfig.keywords && <meta name="keywords" content={seoConfig.keywords} />}
      
      {/* Open Graph 标签 */}
      <meta property="og:title" content={seoConfig.title} />
      <meta property="og:description" content={seoConfig.description} />
      <meta property="og:type" content={seoConfig.ogType || 'website'} />
      {seoConfig.canonical && <meta property="og:url" content={seoConfig.canonical} />}
      {seoConfig.ogImage && <meta property="og:image" content={seoConfig.ogImage} />}
      <meta property="og:site_name" content="Than Studio" />
      
      {/* Twitter Card 标签 */}
      <meta name="twitter:card" content={seoConfig.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={seoConfig.title} />
      <meta name="twitter:description" content={seoConfig.description} />
      {seoConfig.ogImage && <meta name="twitter:image" content={seoConfig.ogImage} />}
      
      {/* 规范链接 */}
      {seoConfig.canonical && <link rel="canonical" href={seoConfig.canonical} />}
      
      {/* 结构化数据 */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}
        />
      ))}
    </Head>
  );
}