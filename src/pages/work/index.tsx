import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Work() {
  const router = useRouter();
  const basePath = process.env.NODE_ENV === 'production' ? '/ThanLab' : '';
  const [activeFilter, setActiveFilter] = useState('全部作品');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredWork, setHoveredWork] = useState<string | number | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // 与详情页保持一致的完整作品数据
  const featuredWorks = [
    { 
      id: 1, 
      title: '识区 - 智能阅读应用设计', 
      category: 'UI/UX设计', 
      color: 'from-blue-500 to-cyan-500', 
      description: '基于AI技术的智能阅读应用，通过智能推荐和个性化阅读体验，提升用户阅读效率', 
      image: `${basePath}/images/home_work_1.png`, 
      client: '识区科技', 
      year: '2023',
      services: ['UI设计', 'UX研究', '交互设计', '用户体验优化'],
      tags: ['AI', '阅读', '智能推荐', '移动应用']
    },
    { 
      id: 2, 
      title: '番茄作家助手 - 创作工具应用设计', 
      category: 'UI/UX设计', 
      color: 'from-orange-500 to-red-500', 
      description: '专业写作工具应用，为创作者提供高效的写作环境和创作辅助功能', 
      image: `${basePath}/images/home_work_2.png`, 
      client: '番茄科技', 
      year: '2023',
      services: ['产品设计', 'UI设计', '功能规划', '用户体验设计'],
      tags: ['写作工具', '创作', '效率', '移动应用']
    },
    { 
      id: 3, 
      title: '字节内测系列 - 创新产品设计', 
      category: '产品设计', 
      color: 'from-green-500 to-teal-500', 
      description: '字节跳动内测产品的创新设计探索，涵盖多个前沿产品的设计实践', 
      image: `${basePath}/images/home_work_3.png`, 
      client: '字节跳动', 
      year: '2023',
      services: ['产品策略', '创新设计', '用户研究', '原型设计'],
      tags: ['创新', '内测', '产品设计', '前沿技术']
    },
    { 
      id: 4, 
      title: '珠海城市形象 - 宣传品设计', 
      category: '品牌设计', 
      color: 'from-pink-500 to-rose-500', 
      description: '珠海城市形象标识与宣传品设计，融入港珠澳大桥、渔女等珠海元素', 
      image: `${basePath}/images/home_work_4.png`, 
      client: '珠海市政府', 
      year: '2019',
      services: ['城市品牌设计', '视觉识别系统', '宣传物料设计', '文化传承'],
      tags: ['城市形象', '文化传承', '地标元素', '政府项目']
    },
    { 
      id: 5, 
      title: '深圳万象城 - 商业地产宣传设计', 
      category: '品牌设计', 
      color: 'from-indigo-500 to-blue-500', 
      description: '深圳万象城商业地产品牌形象与宣传物料设计，打造高端商业地标形象', 
      image: `${basePath}/images/home_work_5.png`, 
      client: '华润置地', 
      year: '2022',
      services: ['商业地产品牌设计', '宣传物料设计', '空间导视设计', '营销推广设计'],
      tags: ['商业地产', '高端品牌', '购物中心', '空间设计']
    },
    { 
      id: 6, 
      title: '坪山大剧院 - 文化建筑宣传设计', 
      category: '品牌设计', 
      color: 'from-purple-500 to-pink-500', 
      description: '坪山大剧院文化建筑品牌形象与宣传设计，传达现代文化艺术魅力', 
      image: `${basePath}/images/home_work_6.png`, 
      client: '坪山区政府', 
      year: '2023',
      services: ['文化品牌设计', '建筑形象设计', '宣传物料设计', '文化传播'],
      tags: ['文化建筑', '艺术空间', '现代设计', '文化传播']
    }
  ];

  // 扩展作品集合
  const additionalWorks: typeof featuredWorks = [];

  const allWorks = [...featuredWorks, ...additionalWorks];
  
  const filters = [
    { name: '全部作品', count: allWorks.length, color: 'from-gray-600 to-gray-800' },
    { name: '品牌设计', count: allWorks.filter(w => w.category === '品牌设计').length, color: 'from-blue-500 to-cyan-500' },
    { name: '包装设计', count: allWorks.filter(w => w.category === '包装设计').length, color: 'from-orange-500 to-red-500' },
    { name: 'UI/UX', count: allWorks.filter(w => w.category === 'UI/UX').length, color: 'from-green-500 to-teal-500' },
    { name: '空间设计', count: allWorks.filter(w => w.category === '空间设计').length, color: 'from-purple-500 to-pink-500' },
    { name: '艺术创作', count: allWorks.filter(w => w.category === '艺术创作').length, color: 'from-pink-500 to-rose-500' }
  ];

  const filteredWorks = activeFilter === '全部作品' 
    ? allWorks 
    : allWorks.filter(item => item.category === activeFilter);

  return (
    <>
      <Head>
        <title>作品展示 - Than Studio | 品牌设计·UI/UX设计·产品设计作品集</title>
        <meta name="description" content="探索Than Studio的创意作品集，包含品牌设计、UI/UX设计、产品设计等多个领域的优秀案例。每一个项目都展现了设计的无限可能，体现专业的设计水准和创新思维。" />
        <meta name="keywords" content="Than Studio,作品集,品牌设计,UI设计,UX设计,产品设计,创意设计,设计案例,深圳设计" />
        <meta property="og:title" content="作品展示 - Than Studio" />
        <meta property="og:description" content="探索Than Studio的创意作品集，包含品牌设计、UI/UX设计、产品设计等多个领域的优秀案例。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seanparker2.github.io/Than/work/" />
        <meta property="og:image" content="https://seanparker2.github.io/Than/images/home_work_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="作品展示 - Than Studio" />
        <meta name="twitter:description" content="探索Than Studio的创意作品集，包含品牌设计、UI/UX设计、产品设计等多个领域的优秀案例。" />
        <meta name="twitter:image" content="https://seanparker2.github.io/Than/images/home_work_1.png" />
        <link rel="canonical" href="https://seanparker2.github.io/Than/work/" />
        
        {/* 结构化数据 - 作品集页面 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Than Studio 作品集",
              "description": "Than Studio专业设计工作室的创意作品集合",
              "url": "https://seanparker2.github.io/Than/work/",
              "mainEntity": {
                "@type": "ItemList",
                "numberOfItems": featuredWorks.length,
                "itemListElement": featuredWorks.map((work, index) => ({
                  "@type": "CreativeWork",
                  "position": index + 1,
                  "name": work.title,
                  "description": work.description,
                  "image": `https://seanparker2.github.io/Than${work.image}`,
                  "creator": {
                    "@type": "Organization",
                    "name": "Than Studio"
                  },
                  "dateCreated": work.year
                }))
              }
            })
          }}
        />
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient-shift 3s ease infinite;
          }
        `}</style>
      </Head>
      
      {/* 动态鼠标跟随光标 */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: hoveredWork ? 'scale(3)' : 'scale(1)'
        }}
      />
      
      <div className="min-h-screen bg-white text-gray-900 overflow-hidden" ref={containerRef}>
        {/* 英雄区域 - 全屏沉浸式体验 */}
        <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
          {/* 动态背景粒子系统 */}
          <div className="absolute inset-0">
            {Array.from({ length: 80 }).map((_, i) => {
              const size = Math.random() * 4 + 1;
              const opacity = Math.random() * 0.3 + 0.1;
              const speed = Math.random() * 8 + 4;
              return (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full animate-float"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity,
                    animationDelay: `${Math.random() * 6}s`,
                    animationDuration: `${speed}s`
                  }}
                />
              );
            })}
          </div>
          
          {/* 几何装饰元素 - 增强版 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-40 h-40 border border-blue-500/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 border border-purple-500/15 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-cyan-400/60 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-yellow-400/60 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-green-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* 主标题区域 - 重新设计 */}
          <div className="relative text-center z-10 px-6 w-full max-w-6xl mx-auto">
            {/* 多层背景光晕效果 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[600px] bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div 
              className={`relative z-10 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
              {/* 主标题 */}
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-extralight mb-12 tracking-[0.2em] leading-none text-gray-800">
                {"WORKS".split('').map((letter, index) => (
                  <span 
                    key={index}
                    className="inline-block hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-1000 hover:scale-125 hover:-translate-y-6 cursor-default relative"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      transform: scrollY ? `translateY(${scrollY * 0.02}px) rotate(${Math.sin(scrollY * 0.008 + index) * 2}deg) scale(${1 + Math.sin(scrollY * 0.003 + index) * 0.03})` : 'none',
                      textShadow: '0 0 40px rgba(59, 130, 246, 0.2), 0 0 80px rgba(139, 92, 246, 0.1)'
                    }}
                  >
                    {letter}
                    {/* 字母光晕效果 */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
                  </span>
                ))}
              </h1>
              
              {/* 副标题区域 - 重新设计 */}
              <div className="space-y-8 mb-16">
                <div className="relative">
                  <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent font-medium animate-gradient">
                      创意无界，设计有道
                    </span>
                  </p>
                  {/* 装饰线条 */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
                
                <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                  每一个项目都是对美学与功能的深度探索，展现设计的无限可能
                </p>
                
                {/* 统计数据预览 */}
                <div className="flex justify-center items-center gap-8 md:gap-12 mt-12">
                  <div className="text-center group cursor-default">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                      {allWorks.length}+
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">精选作品</div>
                  </div>
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                  <div className="text-center group cursor-default">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                      6
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">设计领域</div>
                  </div>
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                  <div className="text-center group cursor-default">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                      100%
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">客户满意</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 作品筛选器 - 现代化设计 */}
        <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] opacity-50"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            {/* 筛选器标题 */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">探索</span>
                <span className="text-gray-600 ml-2">我们的作品</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                从品牌设计到数字体验，每个类别都展现了我们对创意的独特理解
              </p>
            </div>
            
            {/* 筛选器 - 重新设计 */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20">
              {filters.map((filter, index) => (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`group relative px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all duration-700 hover:scale-105 backdrop-blur-sm ${
                    activeFilter === filter.name
                      ? 'bg-gradient-to-r ' + filter.color + ' text-white shadow-2xl border border-gray-200'
                      : 'bg-white/60 border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800 hover:bg-white/80 shadow-sm'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="relative z-10 font-medium text-sm md:text-base flex items-center gap-2">
                    {filter.name}
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      activeFilter === filter.name 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-600'
                    }`}>
                      {filter.count}
                    </span>
                  </span>
                  
                  {/* 悬浮效果 */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${filter.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* 激活状态的光晕 */}
                  {activeFilter === filter.name && (
                    <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${filter.color} blur-lg opacity-15 animate-pulse`}></div>
                  )}
                  
                  {/* 底部指示器 */}
                  {activeFilter === filter.name && (
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r ${filter.color} rounded-full`}></div>
                  )}
                </button>
              ))}
            </div>
            
            {/* 当前筛选结果提示 */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 text-sm">
                  显示 <span className="text-gray-800 font-medium">{filteredWorks.length}</span> 个
                  <span className="text-blue-600 mx-1">{activeFilter}</span>
                  作品
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* 作品展示区域 - 创新瀑布流布局 */}
        <section className="relative py-32 bg-gradient-to-b from-gray-100 via-white to-gray-50 overflow-hidden">
          {/* 动态背景网格 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          </div>
          
          {/* 浮动装饰元素 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
            <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-cyan-400/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            {/* 作品展示 - 创新布局 */}
            <div className="max-w-7xl mx-auto">
              {/* 大型特色作品 */}
              {filteredWorks.length > 0 && (
                <div className="mb-20">
                  <Link href={`/work/${filteredWorks[0].id}`}>
                    <div 
                      className={`group relative transform transition-all duration-1000 hover:scale-[1.02] cursor-pointer ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
                      }`}
                      onMouseEnter={() => setHoveredWork(filteredWorks[0].id)}
                      onMouseLeave={() => setHoveredWork(null)}
                    >
                      <div className="relative bg-gradient-to-br from-white/80 to-gray-50/90 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-gray-200/60 hover:border-gray-300/80 transition-all duration-700 shadow-lg hover:shadow-xl">
                        <div className="grid lg:grid-cols-2 gap-0">
                          {/* 图片区域 */}
                          <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                            <img
                              src={filteredWorks[0].image}
                              alt={filteredWorks[0].title}
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                const svgContent = `
                                  <svg width="800" height="500" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                      <linearGradient id="featuredGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.9" />
                                        <stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:0.8" />
                                        <stop offset="100%" style="stop-color:#EC4899;stop-opacity:0.9" />
                                      </linearGradient>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#featuredGrad)"/>
                                    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="36" fill="white" text-anchor="middle" dy=".3em">Featured Project</text>
                                  </svg>
                                `;
                                target.src = `data:image/svg+xml;base64,${btoa(svgContent)}`;
                              }}
                            />
                            
                            {/* 动态光效 */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${filteredWorks[0].color} opacity-0 group-hover:opacity-30 transition-all duration-700`} />
                            
                            {/* 分类标签 */}
                            <div className="absolute top-6 left-6">
                              <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${filteredWorks[0].color} text-white shadow-2xl backdrop-blur-sm`}>
                                {filteredWorks[0].category}
                              </span>
                            </div>
                          </div>
                          
                          {/* 内容区域 */}
                          <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="mb-6">
                              <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">特色项目</div>
                              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-700">
                                {filteredWorks[0].title}
                              </h2>
                              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {filteredWorks[0].description}
                              </p>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="space-y-2">
                                <div className="text-xs text-gray-400 uppercase tracking-wider">客户</div>
                                <div className="text-lg text-gray-800 font-semibold">{filteredWorks[0].client}</div>
                                <div className="text-sm text-gray-500">{filteredWorks[0].year}</div>
                              </div>
                              
                              <div className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                <span className="relative z-10 flex items-center gap-2">
                                  查看项目
                                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-30 transition-opacity duration-500 rounded-full blur-xl" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
              
              {/* 瀑布流网格 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredWorks.slice(1).map((work, index) => {
                  const actualIndex = index + 1;
                  const isLarge = actualIndex % 7 === 0 || actualIndex % 11 === 0;
                  const isMedium = actualIndex % 5 === 0;
                  
                  return (
                    <div
                      key={work.id}
                      className={`group relative transform transition-all duration-700 hover:scale-105 hover:z-10 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                      } ${
                        isLarge ? 'md:col-span-2 lg:col-span-2' : isMedium ? 'md:col-span-1 lg:col-span-2' : ''
                      }`}
                      style={{
                        animationDelay: `${actualIndex * 0.1}s`,
                        transform: scrollY ? `translateY(${scrollY * 0.02}px) rotate(${Math.sin(scrollY * 0.005 + actualIndex) * 0.3}deg)` : 'none'
                      }}
                      onMouseEnter={() => setHoveredWork(work.id)}
                      onMouseLeave={() => setHoveredWork(null)}
                    >
                      <Link href={`/work/${work.id}`}>
                        <div className="relative bg-gradient-to-br from-white/70 to-gray-50/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 hover:border-gray-300/70 transition-all duration-500 hover:shadow-xl shadow-sm cursor-pointer">
                          {/* 图片容器 */}
                          <div className={`relative overflow-hidden ${
                            isLarge ? 'aspect-[16/9]' : isMedium ? 'aspect-[4/5]' : 'aspect-[4/3]'
                          }`}>
                            <img
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                const svgContent = `
                                  <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                      <linearGradient id="grad${work.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.8" />
                                        <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0.8" />
                                      </linearGradient>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#grad${work.id})"/>
                                    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" dy=".3em">Project Image</text>
                                  </svg>
                                `;
                                target.src = `data:image/svg+xml;base64,${btoa(svgContent)}`;
                              }}
                            />
                            
                            {/* 悬浮遮罩 */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            
                            {/* 动态光效 */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />
                            
                            {/* 分类标签 */}
                            <div className="absolute top-3 left-3">
                              <span className={`px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${work.color} text-white shadow-lg backdrop-blur-sm`}>
                                {work.category}
                              </span>
                            </div>
                            
                            {/* 悬浮内容 */}
                            <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                              <h3 className="text-white font-bold text-lg mb-2">
                                {work.title}
                              </h3>
                              <p className="text-gray-200 text-sm mb-3 line-clamp-2">
                                {work.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="text-xs text-gray-300">
                                  <div>{work.client}</div>
                                  <div className="text-gray-400">{work.year}</div>
                                </div>
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              
              {/* 加载更多区域 */}
              <div className="text-center mt-20">
                <button className="group relative px-12 py-4 bg-gradient-to-r from-white to-gray-50 rounded-full text-gray-700 font-semibold hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-transparent shadow-sm">
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5 animate-spin group-hover:animate-none transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    探索更多作品
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-xl" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}