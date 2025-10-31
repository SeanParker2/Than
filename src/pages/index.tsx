import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const basePath = router.basePath || '';
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 作品数据定义
  const workData = [
    { 
      id: 1, 
      title: '识区 - 智能阅读应用设计', 
      category: 'UI/UX设计', 
      description: '基于AI技术的智能阅读应用，通过智能推荐和个性化阅读体验，提升用户阅读效率', 
      image: 'home_work_1.png'
    },
    { 
      id: 2, 
      title: '番茄作家助手 - 创作工具应用设计', 
      category: 'UI/UX设计', 
      description: '专业写作工具应用，为创作者提供高效的写作环境和创作辅助功能', 
      image: 'home_work_2.png'
    },
    { 
      id: 3, 
      title: '字节内测系列 - 创新产品设计', 
      category: '产品设计', 
      description: '字节跳动内测产品的创新设计探索，涵盖多个前沿产品的设计实践', 
      image: 'home_work_3.png'
    },
    { 
      id: 4, 
      title: '珠海城市形象 - 宣传品设计', 
      category: '品牌设计', 
      description: '珠海城市形象标识与宣传品设计，融入港珠澳大桥、渔女等珠海元素', 
      image: 'home_work_4.png'
    },
    { 
      id: 5, 
      title: '深圳万象城 - 商业地产宣传设计', 
      category: '品牌设计', 
      description: '深圳万象城商业地产项目的品牌形象与宣传物料设计', 
      image: 'home_work_5.png'
    },
    { 
      id: 6, 
      title: '创新科技产品 - 界面设计', 
      category: 'UI/UX设计', 
      description: '前沿科技产品的用户界面设计，注重用户体验与视觉美感的平衡', 
      image: 'home_work_6.png'
    }
  ];
  
  return (
    <>
      <Head>
        <title>Than Studio - 专业设计工作室 | 品牌设计·UI/UX设计·产品设计</title>
        <meta name="description" content="Than Studio是一家专业的设计工作室，专注于品牌形象设计、UI/UX设计、产品设计等领域。我们致力于为客户提供创新、专业的设计解决方案，追求永恒的设计价值。" />
        <meta name="keywords" content="Than Studio,设计工作室,品牌设计,UI设计,UX设计,产品设计,视觉设计,深圳设计公司,创意设计" />
        <meta property="og:title" content="Than Studio - 专业设计工作室" />
        <meta property="og:description" content="专注于品牌形象设计、UI/UX设计、产品设计的专业工作室，追求永恒的设计价值。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seanparker2.github.io/Than/" />
        <meta property="og:image" content="https://seanparker2.github.io/Than/images/home_hero_banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Than Studio - 专业设计工作室" />
        <meta name="twitter:description" content="专注于品牌形象设计、UI/UX设计、产品设计的专业工作室，追求永恒的设计价值。" />
        <meta name="twitter:image" content="https://seanparker2.github.io/Than/images/home_hero_banner.png" />
        <link rel="canonical" href="https://seanparker2.github.io/Than/" />
        
        {/* 结构化数据 - 网站首页 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </Head>
      {/* Hero Banner - 日系简约风格 */}
      <section className="relative w-full min-h-screen flex items-center py-20" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="h1-title text-5xl sm:text-6xl lg:text-7xl font-light mb-12 text-gray-800 leading-tight">
              Than Studio
            </h1>
            <div className="mb-16">
              <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed mb-8">
                专业设计工作室
              </p>
              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl">
                专注于品牌形象、空间设计和视觉创意<br />
                追求永恒的设计价值
              </p>
            </div>
            <Link href="/work" className="inline-block text-gray-800 font-light text-lg border-b border-gray-300 hover:border-gray-800 transition-colors duration-300 pb-1">
              查看作品
            </Link>
          </div>
        </div>
      </section>

      {/* 关于 Than Studio - 日系简约设计 */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="h1-title text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-gray-800 leading-tight">
            Than Studio
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            专注于创造独特而有意义的设计体验，将创意与功能完美融合
          </p>
        </div>
      </section>

      {/* 关于Than Studio */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container mx-auto px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-light mb-6 text-gray-800">
              关于Than Studio
            </h2>
          </div>
          
          {/* 服务卡片 */}
          <div className="three-column-icons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="#333" viewBox="0 0 24 24" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                ),
                title: '品牌形象',
                description: '我们提供从品牌策略到视觉识别 (VI) 的完整服务，帮助客户建立独特、清晰且有力的品牌形象。'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="#333" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="m12 19 7-7 3 3-7 7-3-3z"/>
                    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                    <path d="m2 2 7.586 7.586"/>
                    <circle cx="11" cy="11" r="2"/>
                  </svg>
                ),
                title: '视觉设计',
                description: '我们专注于高品质的视觉传达。无论是线上界面 (UI/UX) 还是线下物料，我们都致力于通过卓越的设计提升品牌价值。'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="#333" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                ),
                title: '空间创意',
                description: '我们将品牌理念延伸至物理空间。通过展览、零售或办公环境的创意设计，我们为用户打造沉浸式的品牌体验。'
              }
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gray-100 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* 装饰性文字 */}
          <div className="text-center mt-16">
            <p className="text-sm text-gray-400 font-light tracking-widest uppercase">
              Design • Create • Inspire
            </p>
          </div>
        </div>
      </section>

      {/* 精选作品 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-light mb-6 text-gray-800">
              精选作品
            </h2>
            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                探索我们的创意作品集，每个项目都承载着独特的故事与创新思维
              </p>
            </div>
          </div>
          
          {/* 作品网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {workData.slice(0, 6).map((work, index) => (
              <div key={work.id} className="group">
                <Link href={`/work/${work.id}`} className="block">
                  <div className="transition-all duration-300 hover:opacity-80">
                    {/* 图片区域 */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <Image
                        src={`${basePath}/images/${work.image}`}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    {/* 内容区域 */}
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {work.category}
                      </div>
                      <h3 className="text-lg font-light text-gray-800 leading-relaxed">
                        {work.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* 查看更多按钮 */}
          <div className="text-center mt-12">
            <Link href="/work" className="inline-block text-gray-800 font-light text-lg border-b border-gray-300 hover:border-gray-800 transition-colors duration-300 pb-1">
              查看更多作品
            </Link>
          </div>
        </div>
      </section>

      {/* 最新动态 - 日系简约设计 */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container mx-auto px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-light mb-6 text-gray-800">
              最新动态
            </h2>
            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                关注我们的最新动态
              </p>
            </div>
          </div>
          
          {/* 动态网格 */}
          <div className="three-column-icons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                id: 1,
                title: '2025设计趋势发布',
                description: '探索未来设计的无限可能，从极简主义到沉浸式体验',
                date: '2025年7月15日',
                category: '趋势洞察'
              },
              {
                id: 2,
                title: '设计理念的深度解读',
                description: '深入探讨"少即是多"的设计哲学，如何在简约中传达丰富的情感',
                date: '2025年3月8日',
                category: '设计理念'
              },
              {
                id: 3,
                title: '可持续设计的未来趋势',
                description: '环保意识与设计美学的完美融合，探索如何在创造美好视觉体验的同时承担环境责任',
                date: '2025年1月1日',
                category: '趋势分析'
              }
            ].map((news, index) => (
              <div key={news.id} className="group">
                <Link href={`/news/${news.id}`} className="block">
                  <div className="transition-all duration-300 hover:opacity-80">
                    {/* 图片区域 */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${basePath}/images/news_${news.id}.png)`,
                        }}
                      ></div>
                    </div>
                    
                    {/* 内容区域 */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                          {news.category}
                        </div>
                        <div className="text-xs text-gray-500">
                          {news.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-light text-gray-800 leading-relaxed">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {news.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队成员 - 日系简约设计 */}
      <section className="py-16" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-light mb-4 text-gray-800">
              团队成员
            </h2>
            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                汇聚创意精英，用专业与热情创造非凡设计
              </p>
            </div>
          </div>
          
          {/* 团队网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                name: '小A', 
                role: '创意总监', 
                image: 'home_teammate_1.png',
                description: '拥有15年设计经验，专注于品牌视觉系统设计。擅长从品牌战略出发，构建完整的视觉识别体系。',
                skills: ['品牌策略', '视觉系统', '创意指导'],
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                name: '小B', 
                role: 'UI/UX设计师', 
                image: 'home_teammate_2.png',
                description: '专注用户体验设计，致力于创造直观易用的数字产品界面。深谙用户心理，善于将复杂功能转化为简洁优雅的交互体验。',
                skills: ['用户研究', '交互设计', '原型制作'],
                color: 'from-purple-500 to-pink-500'
              },
              { 
                name: '小C', 
                role: '项目经理', 
                image: 'home_teammate_3.png',
                description: '项目管理专家，确保每个项目的高质量完美交付。具备敏锐的沟通协调能力，善于平衡创意与商业需求。',
                skills: ['项目管理', '团队协调', '质量控制'],
                color: 'from-green-500 to-teal-500'
              },
              { 
                name: '小D', 
                role: '视觉设计师', 
                image: 'home_teammate_4.png',
                description: '视觉传达专家，擅长将抽象的创意理念转化为具象的视觉语言。精通多种设计风格，能够根据不同品牌特性创造独特表达。',
                skills: ['视觉设计', '插画创作', '品牌应用'],
                color: 'from-orange-500 to-red-500'
              }
            ].map((member, index) => (
              <div key={index} className="group">
                {/* 头像 */}
                <div className="relative w-32 h-32 mb-4">
                  <div 
                    className="w-full h-full bg-cover bg-center rounded-full transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${basePath}/images/${member.image})`,
                    }}
                  ></div>
                </div>
                
                {/* 基本信息 */}
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* 加入我们 */}
          <div className="mt-12">
            <h3 className="text-2xl font-light text-gray-800 mb-4">加入我们的团队</h3>
            <p className="text-gray-600 mb-6 max-w-2xl leading-relaxed">
              我们正在寻找有才华的设计师加入我们的创意团队
            </p>
            <Link href="/careers" className="inline-block text-gray-800 font-light text-lg border-b border-gray-300 hover:border-gray-800 transition-colors duration-300 pb-1">
              查看职位
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}