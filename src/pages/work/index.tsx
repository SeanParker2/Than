import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Work() {
  const router = useRouter();
  const basePath = process.env.NODE_ENV === 'production' ? '/Than' : '';
  const [activeFilter, setActiveFilter] = useState('全部作品');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      
      <div className="min-h-screen bg-white text-gray-900 overflow-hidden" ref={containerRef}>
        {/* 英雄区域 - 日系简约设计 */}
        <section className="relative w-full h-screen overflow-hidden flex items-center py-20" style={{ backgroundColor: '#F9F9F9' }}>
          
          {/* 主标题区域 - 左对齐设计 */}
          <div className="container mx-auto px-8 lg:px-12 relative z-10">
            <div 
              className={`relative z-10 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
              {/* 主标题 - 日系简约风格 */}
              <h1 className="h1-title text-7xl md:text-9xl lg:text-[10rem] font-light mb-8 leading-none text-gray-700" style={{
                fontFamily: '"PingFang SC", "Noto Sans SC", "Hiragino Sans GB", sans-serif',
                fontWeight: 100,
                letterSpacing: '3px'
              }}>
                WORKS
              </h1>
              
              {/* 副标题区域 - 简洁版 */}
              <div className="space-y-6 mb-16 max-w-4xl">
                <div className="relative">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed" style={{ color: '#666666' }}>
                    创意无界，设计有道
                  </p>
                </div>
                
                <p className="text-lg md:text-xl max-w-3xl leading-relaxed" style={{ color: '#999999' }}>
                  每一个项目都是对美学与功能的深度探索，展现设计的无限可能
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* 作品筛选器 - 日系简约设计 */}
        <section className="relative py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#F9F9F9' }}>
          <div className="container mx-auto px-8 lg:px-12 relative z-10">
            {/* 筛选器标题 */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#333333' }}>
                探索我们的作品
              </h2>
              <p className="max-w-2xl leading-relaxed" style={{ color: '#666666' }}>
                从品牌设计到数字体验，每个类别都展现了我们对创意的独特理解
              </p>
            </div>
            
            {/* 筛选器 - 优化设计 */}
            <div className="works-filter-container flex md:flex-wrap md:justify-center gap-2 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`works-filter-tab relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeFilter === filter.name
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            
            {/* 当前筛选结果提示 - 简化版 */}
            <div className="text-center mb-8">
              <span className="text-sm text-gray-500">
                显示 <span className="text-gray-900 font-medium">{filteredWorks.length}</span> 个
                <span className="text-gray-900 font-medium mx-1">{activeFilter}</span>
                作品
              </span>
            </div>
          </div>
        </section>
        
        {/* 作品展示区域 - 日系简约布局 */}
        <section className="relative py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#F9F9F9' }}>
          
          <div className="container mx-auto px-6 relative z-10">
            {/* 作品展示 - 统一网格布局 */}
            <div className="max-w-7xl mx-auto">
              {/* 统一的网格布局 - 日系简约设计 */}
              <div className="works-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredWorks.map((work, index) => {
                  return (
                    <div
                      key={work.id}
                      className={`group relative transition-all duration-300 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                      }`}
                    >
                      <Link href={`/work/${work.id}`}>
                        <div className="relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer">
                          {/* 图片容器 */}
                          <div className="relative overflow-hidden aspect-[4/3]">
                            <img
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                const svgContent = `
                                  <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="100%" height="100%" fill="#F5F5F5"/>
                                    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#999" text-anchor="middle" dy=".3em">Project Image</text>
                                  </svg>
                                `;
                                target.src = `data:image/svg+xml;base64,${btoa(svgContent)}`;
                              }}
                            />
                          </div>
                          
                          {/* 简洁的内容区域 */}
                          <div className="p-4">
                            <h3 className="font-medium text-lg mb-2" style={{ color: '#333333' }}>
                              {work.title}
                            </h3>
                            <p className="text-sm mb-3 line-clamp-2" style={{ color: '#666666' }}>
                              {work.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="text-xs" style={{ color: '#999999' }}>
                                <div>{work.client}</div>
                                <div>{work.year}</div>
                              </div>
                              <div className="text-xs" style={{ color: '#A0BCC8' }}>
                                {work.category}
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
              <div className="text-center mt-12">
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