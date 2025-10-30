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
      <section className="relative w-full h-screen overflow-hidden">
        {/* 背景图片 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${basePath}/images/home_hero_banner.png)`,
          }}
        >
          {/* 半透明遮罩 */}
          <div className="absolute inset-0 bg-white bg-opacity-20"></div>
        </div>
        

      </section>

      {/* 品牌简介 - 日系简约设计 */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 标题区域 */}
            <div className="text-center mb-28">
              <h2 className="text-3xl sm:text-4xl font-light mb-8 text-gray-800">
                关于 Than Studio
              </h2>
              <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
                Than Studio 是一家位于深圳的设计工作室
                <br />
                专注于品牌形象、空间设计和视觉创意
              </p>
            </div>
            
            {/* 服务卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <div className="text-center">
                <h3 className="text-xl font-light mb-6 text-gray-800">品牌设计</h3>
                <p className="text-gray-600 leading-relaxed">
                  为企业打造独特的品牌形象，从logo设计到完整的视觉识别系统
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-light mb-6 text-gray-800">空间设计</h3>
                <p className="text-gray-600 leading-relaxed">
                  创造富有美感和功能性的空间环境，提升用户体验
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-light mb-6 text-gray-800">视觉创意</h3>
                <p className="text-gray-600 leading-relaxed">
                  运用创新的视觉语言，传达品牌理念和价值观
                </p>
              </div>
            </div>
            
            {/* 底部装饰文字 */}
            <div className="text-center mt-16">
              <p className="text-sm text-gray-400 italic">
                "我们将东方美学与现代设计语言融合，为客户创造具有持久价值的设计作品"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 精选作品 - 日系简约设计 */}
      <section className="py-40 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-28">
            <h2 className="text-3xl sm:text-4xl font-light mb-8 text-gray-800">
              精选作品
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
              探索我们的创意作品集
            </p>
          </div>
          
          {/* 作品网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { id: 1, title: '识区 - 智能阅读应用设计', category: 'UI/UX设计', description: '基于AI技术的智能阅读应用' },
              { id: 2, title: '番茄作家助手 - 创作工具应用设计', category: 'UI/UX设计', description: '专业写作工具应用' },
              { id: 3, title: '字节内测系列 - 创新产品设计', category: '产品设计', description: '字节跳动内测产品的创新设计' },
              { id: 4, title: '珠海城市形象 - 宣传品设计', category: '品牌设计', description: '珠海城市形象标识与宣传品' },
              { id: 5, title: '深圳万象城 - 商业地产宣传设计', category: '品牌设计', description: '商业地产品牌形象与宣传物料' },
              { id: 6, title: '坪山大剧院 - 文化建筑宣传设计', category: '品牌设计', description: '文化建筑品牌形象与宣传' }
            ].map((work, index) => (
              <div key={work.id} className="group">
                <Link href={`/work/${work.id}`} className="block">
                  <div className="transition-all duration-300 hover:opacity-80">
                    {/* 作品图片 */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${basePath}/images/home_work_${work.id}.png)`,
                        }}
                      ></div>
                    </div>
                    
                    {/* 内容区域 */}
                    <div className="space-y-3">
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
          <div className="text-center mt-20">
            <Link href="/work" className="inline-block text-gray-800 font-light text-lg border-b border-gray-300 hover:border-gray-800 transition-colors duration-300 pb-1">
              查看更多作品
            </Link>
          </div>
        </div>
      </section>

      {/* 最新动态 - 日系简约设计 */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-28">
            <h2 className="text-3xl sm:text-4xl font-light mb-8 text-gray-800">
              最新动态
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
              关注我们的最新动态
            </p>
          </div>
          
          {/* 动态网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
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
                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${basePath}/images/news_${news.id}.png)`,
                        }}
                      ></div>
                    </div>
                    
                    {/* 内容区域 */}
                    <div className="space-y-3">
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
      <section className="py-40 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-24">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-4xl font-light mb-8 text-gray-800">
                团队成员
              </h2>
            </div>
            <p className="text-lg text-gray-600 mt-8 max-w-lg mx-auto">
              汇聚创意精英，用专业与热情创造非凡设计
            </p>
          </div>
          
          {/* 团队网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
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
              <div key={index} className="group text-center">
                {/* 头像 */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div 
                    className="w-full h-full bg-cover bg-center rounded-full transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${basePath}/images/${member.image})`,
                    }}
                  ></div>
                </div>
                
                {/* 基本信息 */}
                <div className="px-4">
                  <h4 className="text-xl font-medium text-gray-800 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 text-sm mb-4">
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
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">加入我们的团队</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                我们正在寻找有才华的设计师加入我们的创意团队
              </p>
              <Link href="/careers" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>查看职位</span>
                <div className="w-5 h-5 border border-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <span className="text-xs">→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}