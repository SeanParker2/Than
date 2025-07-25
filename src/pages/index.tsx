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
      {/* Hero Banner - 增强视觉效果和动画 */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* 背景几何装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-pink-400/15 to-orange-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* 主背景图片 */}
        <div 
          className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-40 transition-transform duration-700 hover:scale-105"
          style={{
            background: `linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${basePath}/images/home_hero_banner.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        
        {/* 预加载关键图片 */}
        <link rel="preload" as="image" href={`${basePath}/images/home_hero_banner.png`} />
        
        {/* 内容区域 */}
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-center leading-tight drop-shadow-lg">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                追求永恒的
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                设计价值
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-center mb-8 px-4 leading-relaxed text-gray-200 drop-shadow-md">
              我们致力于创造具有持久价值的设计作品
              <br className="hidden sm:block" />
              <span className="text-blue-200">融合东方美学与现代设计理念</span>
            </p>
          </div>
        </div>
      </section>

      {/* 品牌简介 - 创意重新设计 */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 border border-gray-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-blue-200 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* 标题区域 */}
            <div className="text-center mb-16">
              <div className="inline-block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 relative">
                  <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                    关于 Than Studio
                  </span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </h2>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-8 max-w-4xl mx-auto leading-relaxed">
                Than Studio 是一家位于
                <span className="text-blue-600 font-medium">深圳</span>
                的设计工作室
                <br className="hidden sm:block" />
                专注于品牌形象、空间设计和视觉创意
              </p>
            </div>
            
            {/* 服务卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">品牌形象</h3>
                  <p className="text-gray-600 leading-relaxed">为品牌打造独特识别符号与视觉系统，建立深入人心的品牌印象</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 text-blue-500">→</div>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">空间设计</h3>
                  <p className="text-gray-600 leading-relaxed">创造富有情感与功能的空间体验，让每个角落都诉说故事</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 text-purple-500">→</div>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">视觉创意</h3>
                  <p className="text-gray-600 leading-relaxed">以创新思维打造独特视觉语言，传达品牌核心价值</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 text-orange-500">→</div>
                  </div>
                </div>
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

      {/* 精选作品 - 创意网格布局 */}
      <section className="py-20 sm:py-24 md:py-32 bg-white relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                  精选作品
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              探索我们的创意世界，每一个作品都承载着独特的设计理念
            </p>
          </div>
          
          {/* 作品网格 - 重新设计的布局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { id: 1, title: '识区 - 智能阅读应用设计', category: 'UI/UX设计', color: 'from-blue-500 to-cyan-500', description: '基于AI技术的智能阅读应用，提升用户阅读体验' },
              { id: 2, title: '番茄作家助手 - 创作工具应用设计', category: 'UI/UX设计', color: 'from-orange-500 to-red-500', description: '专业写作工具应用，助力创作者高效创作' },
              { id: 3, title: '字节内测系列 - 创新产品设计', category: '产品设计', color: 'from-green-500 to-teal-500', description: '字节跳动内测产品的创新设计探索' },
              { id: 4, title: '珠海城市形象 - 宣传品设计', category: '品牌设计', color: 'from-pink-500 to-rose-500', description: '珠海城市形象标识与宣传品设计' },
              { id: 5, title: '深圳万象城 - 商业地产宣传设计', category: '品牌设计', color: 'from-indigo-500 to-blue-500', description: '商业地产品牌形象与宣传物料设计' },
              { id: 6, title: '坪山大剧院 - 文化建筑宣传设计', category: '品牌设计', color: 'from-purple-500 to-pink-500', description: '文化建筑品牌形象与宣传设计' }
            ].map((work, index) => (
              <div key={work.id} className="group relative">
                <Link href={`/work/${work.id}`} className="block">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3">
                    {/* 作品图片 */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${basePath}/images/home_work_${work.id}.png)`,
                        }}
                      ></div>
                      
                      {/* 分类标签 */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${work.color} text-white text-xs font-medium rounded-full backdrop-blur-sm`}>
                          {work.category}
                        </span>
                      </div>
                      
                      {/* 悬浮遮罩 */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-30">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 内容区域 */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {work.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                          {work.category}
                        </span>
                        <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-800 transition-colors">
                          <span className="text-sm font-medium">查看详情</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* 查看更多按钮 */}
          <div className="text-center mt-16">
            <Link href="/work" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white font-medium rounded-full hover:from-black hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>查看更多作品</span>
              <div className="w-5 h-5 border border-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <span className="text-xs">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 最新动态 - 时间线设计 */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-30 transform translate-x-1/2"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-transparent rounded-full opacity-30 transform -translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                  最新动态
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              关注我们的最新动态，了解设计趋势与创新思维
            </p>
          </div>
          
          {/* 动态时间线 */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform md:-translate-x-1/2"></div>
              
              {[
                {
                  id: 1,
                  title: '2025设计趋势发布',
                  description: '探索未来设计的无限可能，从极简主义到沉浸式体验，我们为您解读2025年最前沿的设计趋势。',
                  date: '2025年7月15日',
                  category: '趋势洞察',
                  color: 'from-blue-500 to-cyan-500',
                  position: 'left'
                },
                {
                  id: 2,
                  title: '设计理念的深度解读',
                  description: '深入探讨"少即是多"的设计哲学，如何在简约中传达丰富的情感与功能，创造真正有意义的设计作品。',
                  date: '2025年3月8日',
                  category: '设计理念',
                  color: 'from-purple-500 to-pink-500',
                  position: 'right'
                },
                {
                  id: 3,
                  title: '可持续设计的未来趋势',
                  description: '环保意识与设计美学的完美融合，探索如何在创造美好视觉体验的同时，承担起对环境的责任。',
                  date: '2025年1月1日',
                  category: '趋势分析',
                  color: 'from-orange-500 to-red-500',
                  position: 'left'
                }
              ].map((news, index) => (
                <div key={news.id} className={`relative flex items-center mb-12 md:mb-16 ${news.position === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  {/* 时间线节点 */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-400 rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* 内容卡片 */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${news.position === 'right' ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'}`}>
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                      {/* 图片区域 */}
                      <Link href={`/news/${news.id}`} className="block">
                        <div className="relative h-48 overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{
                              backgroundImage: `url(${basePath}/images/news_${news.id}.png)`,
                            }}
                          ></div>
                          <div className={`absolute inset-0 bg-gradient-to-t ${news.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                          
                          {/* 分类标签 */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-800 rounded-full">
                              {news.category}
                            </span>
                          </div>
                        </div>
                      </Link>
                      
                      {/* 内容区域 */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-500">{news.date}</span>
                          <Link href={`/news/${news.id}`} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                            <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                        
                        <Link href={`/news/${news.id}`} className="block">
                          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                            {news.title}
                          </h3>
                        </Link>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {news.description}
                        </p>
                        
                        {/* 阅读更多 */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <Link href={`/news/${news.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            <span>阅读更多</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 团队成员 - 现代卡片设计 */}
      <section className="py-20 sm:py-24 md:py-32 bg-white relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-40 transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-100 to-orange-100 rounded-full opacity-40 transform translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
                <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                  团队成员
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              汇聚创意精英，用专业与热情创造非凡设计
            </p>
          </div>
          
          {/* 团队网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-4">
                  {/* 头像区域 */}
                  <div className="relative p-8 pb-4">
                    <div className="relative mx-auto w-32 h-32 mb-6">
                      {/* 背景装饰圆环 */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-110`}></div>
                      
                      {/* 头像 */}
                      <div 
                        className="relative w-full h-full bg-cover bg-center rounded-full border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${basePath}/images/${member.image})`,
                        }}
                      ></div>
                      
                      {/* 在线状态指示器 */}
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                    </div>
                    
                    {/* 基本信息 */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed px-2">
                        {member.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* 技能标签 */}
                  <div className="px-8 pb-8">
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${member.color} text-white`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* 悬浮效果装饰 */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
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