const fs = require('fs');
const path = require('path');

// 网站配置
const SITE_URL = 'https://seanparker2.github.io/Than';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// 页面配置
const pages = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/work/',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/story/',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/contact/',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/store/',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// 图片资源配置
const images = [
  {
    loc: `${SITE_URL}/images/home_hero_banner.png`,
    caption: 'Than Studio 首页横幅',
    title: 'Than Studio - 专业设计工作室'
  },
  {
    loc: `${SITE_URL}/images/story-2.png`,
    caption: 'Than Studio 团队照片',
    title: '关于Than Studio'
  },
  {
    loc: `${SITE_URL}/images/work_hero_banner.png`,
    caption: 'Than Studio 作品展示',
    title: '设计作品集'
  },
  {
    loc: `${SITE_URL}/logo/than-studio-logo.svg`,
    caption: 'Than Studio 标志',
    title: 'Than Studio Logo'
  }
];

// 生成sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.url === '/' ? `
${images.map(image => `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
    </image:image>`).join('\n')}` : ''}
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// 写入文件
function writeSitemap() {
  try {
    const sitemapContent = generateSitemap();
    fs.writeFileSync(OUTPUT_PATH, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', OUTPUT_PATH);
    console.log('📄 Pages included:', pages.length);
    console.log('🖼️  Images included:', images.length);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// 验证sitemap
function validateSitemap() {
  try {
    const content = fs.readFileSync(OUTPUT_PATH, 'utf8');
    
    // 基本XML格式检查
    if (!content.includes('<?xml version="1.0"')) {
      throw new Error('Missing XML declaration');
    }
    
    if (!content.includes('<urlset')) {
      throw new Error('Missing urlset element');
    }
    
    // 检查URL数量
    const urlCount = (content.match(/<url>/g) || []).length;
    if (urlCount !== pages.length) {
      throw new Error(`Expected ${pages.length} URLs, found ${urlCount}`);
    }
    
    console.log('✅ Sitemap validation passed');
    return true;
  } catch (error) {
    console.error('❌ Sitemap validation failed:', error.message);
    return false;
  }
}

// 主函数
function main() {
  console.log('🚀 Generating sitemap...');
  writeSitemap();
  
  if (validateSitemap()) {
    console.log('🎉 Sitemap generation completed successfully!');
  } else {
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  validateSitemap,
  pages,
  images
};