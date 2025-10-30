import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Story() {
  const router = useRouter();
  const basePath = router.basePath || '';
  const [activeTab, setActiveTab] = useState('关于我们');
  const [isVisible, setIsVisible] = useState(false);
  
  const tabs = ['关于我们', '发展历程', '核心优势', '团队文化'];

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <>
      <Head>
        <title>关于我们 - Than Studio | 专业设计工作室的故事与发展历程</title>
        <meta name="description" content="了解Than Studio的发展历程、团队文化和核心优势。我们是一家专注于品牌设计、UI/UX设计、产品设计的专业工作室，致力于为客户创造独特而有意义的设计体验。" />
        <meta name="keywords" content="Than Studio, 关于我们, 设计工作室, 发展历程, 团队文化, 品牌设计, UI设计, UX设计, 产品设计, 深圳设计公司" />
        
        {/* Open Graph 标签 */}
        <meta property="og:title" content="关于我们 - Than Studio | 专业设计工作室的故事与发展历程" />
        <meta property="og:description" content="了解Than Studio的发展历程、团队文化和核心优势。我们是一家专注于品牌设计、UI/UX设计、产品设计的专业工作室，致力于为客户创造独特而有意义的设计体验。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seanparker2.github.io/Than/story/" />
        <meta property="og:image" content="https://seanparker2.github.io/Than/images/story-2.png" />
        <meta property="og:site_name" content="Than Studio" />
        
        {/* Twitter Card 标签 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="关于我们 - Than Studio | 专业设计工作室的故事与发展历程" />
        <meta name="twitter:description" content="了解Than Studio的发展历程、团队文化和核心优势。我们是一家专注于品牌设计、UI/UX设计、产品设计的专业工作室，致力于为客户创造独特而有意义的设计体验。" />
        <meta name="twitter:image" content="https://seanparker2.github.io/Than/images/story-2.png" />
        
        {/* 规范链接 */}
        <link rel="canonical" href="https://seanparker2.github.io/Than/story/" />
        
        {/* 结构化数据 - 关于页面 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "关于我们 - Than Studio",
              "description": "了解Than Studio的发展历程、团队文化和核心优势",
              "url": "https://seanparker2.github.io/Than/story/",
              "mainEntity": {
                "@type": "Organization",
                "name": "Than Studio",
                "alternateName": "Than Design Studio",
                "description": "专业设计工作室，提供品牌设计、UI/UX设计、产品设计等服务",
                "url": "https://seanparker2.github.io/Than/",
                "logo": "https://seanparker2.github.io/Than/logo/logo.png",
                "image": "https://seanparker2.github.io/Than/images/story-2.png",
                "foundingDate": "2019",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "深圳市",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "深圳市",
                    "addressRegion": "广东省",
                    "addressCountry": "CN"
                  }
                },
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "10+"
                },
                "knowsAbout": [
                  "品牌设计",
                  "UI设计",
                  "UX设计",
                  "产品设计",
                  "视觉设计",
                  "空间设计"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "设计服务",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "品牌设计",
                        "description": "专业的品牌形象设计服务"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "UI/UX设计",
                        "description": "用户界面和用户体验设计"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "产品设计",
                        "description": "创新的产品设计解决方案"
                      }
                    }
                  ]
                }
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen" style={{ backgroundColor: '#F9F9F9' }}>
      {/* 英雄区域 - 日系简约设计 */}
      <section className="relative pt-40 pb-40 bg-white overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-light mb-20 leading-none text-gray-700" style={{
              fontFamily: '"PingFang SC", "Noto Sans SC", "Hiragino Sans GB", sans-serif',
              fontWeight: 100,
              letterSpacing: '3px'
            }}>
              STORY
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              从创意的火花到设计的实现，Than Studio 始终致力于为客户创造独特而有意义的设计体验
            </p>
          </div>
          
          {/* 核心价值观 - 日系简约设计 */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-16 mt-32 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-8 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-4" style={{ color: '#333333' }}>创新思维</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">突破传统界限，探索设计的无限可能</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-8 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-4" style={{ color: '#333333' }}>用心服务</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">以客户需求为中心，提供贴心专业的服务</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-8 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-4" style={{ color: '#333333' }}>高效执行</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">快速响应，精准执行，确保项目完美交付</p>
            </div>
          </div>
        </div>
      </section>

      {/* 导航栏 - 日系简约设计 */}
      <section className="sticky top-0 z-20 bg-white border-b border-gray-100" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container mx-auto px-6">
          <div className="flex justify-center py-8">
            <div className="flex gap-8">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`relative px-2 py-1 text-lg font-light transition-all duration-300 ${
                    activeTab === tab
                      ? 'border-b-2'
                      : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    color: activeTab === tab ? '#A0BCC8' : '#333333',
                    borderBottomColor: activeTab === tab ? '#A0BCC8' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                     if (activeTab !== tab) {
                       (e.target as HTMLButtonElement).style.color = '#A0BCC8';
                     }
                   }}
                   onMouseLeave={(e) => {
                     if (activeTab !== tab) {
                       (e.target as HTMLButtonElement).style.color = '#333333';
                     }
                   }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们 - 调整为自适应布局和等比例图片 */}
      <section 
        className={`py-32 ${activeTab !== '关于我们' ? 'hidden' : ''}`}
        id="关于我们"
        style={{ backgroundColor: '#F9F9F9' }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className={`space-y-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-light mb-6 text-gray-800 leading-relaxed" style={{ letterSpacing: '2px' }}>
                    关于 Than Studio
                  </h2>
                  <div className="w-20 h-1 bg-gray-300 mb-8"></div>
                </div>
                
                <div className="space-y-8">
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    Than Studio 最早成立于2025年，是一家位于深圳的设计工作室。我们专注于品牌形象、空间设计、产品设计和视觉设计等领域，为客户提供全方位的设计解决方案。
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    我们的设计理念源于对中华传统美学的理解和现代设计语言的融合，追求简约而不简单的设计表达，注重细节和用户体验。
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    Than Studio 团队由来自不同文化背景的设计师组成，这使我们能够从多元视角思考问题，为客户创造独特而有价值的设计作品。
                  </p>
                </div>
                
                {/* 特色亮点 */}
                <div className="grid grid-cols-2 gap-8 pt-12 border-t border-gray-300">
                  <div className="text-center">
                    <div className="text-3xl font-light mb-3" style={{ color: '#A0BCC8' }}>9+</div>
                    <div className="text-gray-600 font-light text-sm">年专业经验</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light mb-3" style={{ color: '#A0BCC8' }}>10+</div>
                    <div className="text-gray-600 font-light text-sm">成功案例</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative">
                  <div 
                    className="w-full aspect-[4/3] overflow-hidden"
                    style={{
                      background: `url(${basePath}/images/story-2.png)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(20%)'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 - 日系简约设计 */}
      <section 
        className={`py-32 ${activeTab !== '发展历程' ? 'hidden' : ''}`}
        id="发展历程"
        style={{ backgroundColor: '#F9F9F9' }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h2 className="text-4xl font-light text-gray-800 mb-8" style={{ letterSpacing: '2px' }}>
                发展历程
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                从初创到成长，每一步都见证着我们的专业与创新
              </p>
              <div className="w-20 h-1 bg-gray-300 mx-auto mt-8"></div>
            </div>
            
            {/* 日系简约时间线 */}
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-300"></div>
              
              <div className="space-y-20">
                {[
                  { year: '2019', title: '工作室成立', desc: '在深圳成立Than Studio，开启设计之旅' },
                  { year: '2020', title: '团队扩张', desc: '团队成员增至10人，业务快速发展' },
                  { year: '2021', title: '业务拓展', desc: '开始国际项目合作，服务全球客户' },
                  { year: '2022', title: '获得认可', desc: '荣获多项设计大奖，行业地位确立' },
                  { year: '2023', title: '持续创新', desc: '探索新设计领域，引领行业发展' }
                ].map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {/* 时间点 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10" style={{ backgroundColor: '#A0BCC8' }}></div>
                    
                    {/* 内容卡片 */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-white p-8 border border-gray-200">
                        <div className="text-2xl font-light mb-3" style={{ color: '#A0BCC8' }}>
                          {item.year}
                        </div>
                        <h3 className="text-xl font-light text-gray-800 mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势 - 调整为自适应栅格 */}
      <section 
        className={`py-10 sm:py-16 md:py-20 ${activeTab !== '核心优势' ? 'hidden' : ''}`}
        id="核心优势"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">核心优势</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 md:mb-6 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">创新思维</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">我们不断探索新的设计方法和理念，为客户带来前沿的设计解决方案，让品牌在竞争中脱颖而出。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 md:mb-6 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">专业团队</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">我们拥有一支经验丰富、专业素养高的设计团队，每位成员都在各自领域拥有深厚的专业知识和丰富的项目经验。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="mb-4 md:mb-6 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8L2 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 15H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">用户体验</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">我们始终将用户体验放在首位，通过深入的用户研究和测试，确保我们的设计不仅美观，而且实用、易用。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队文化 - 日系简约设计 */}
      <section 
        className={`py-32 ${activeTab !== '团队文化' ? 'hidden' : ''}`}
        id="团队文化"
        style={{ backgroundColor: '#F9F9F9' }}
      >
        <div className="container mx-auto px-6">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl font-light text-gray-800 mb-8" style={{ letterSpacing: '2px' }}>
              团队文化
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              我们的文化价值观塑造着我们的工作方式和设计理念
            </p>
            <div className="w-20 h-1 bg-gray-300 mx-auto mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {[
              { title: '创新思维', desc: '勇于探索新的设计可能性，突破传统界限' },
              { title: '用户至上', desc: '始终以用户需求为中心，创造有价值的体验' },
              { title: '团队协作', desc: '相信集体智慧，通过协作实现更大价值' },
              { title: '持续学习', desc: '保持好奇心，不断学习和成长' }
            ].map((item, index) => (
              <div key={index} className={`bg-white p-8 border border-gray-200 transform transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="w-8 h-8 mb-6 flex items-center justify-center" style={{ backgroundColor: '#A0BCC8' }}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-light text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="aspect-square overflow-hidden">
               <div 
                 className="w-full h-full bg-cover bg-center"
                 style={{
                   backgroundImage: `url(${basePath}/images/story-3.png)`,
                   filter: 'grayscale(30%)'
                 }}
               ></div>
             </div>
             <div className="aspect-square overflow-hidden">
               <div 
                 className="w-full h-full bg-cover bg-center"
                 style={{
                   backgroundImage: `url(${basePath}/images/story-4.png)`,
                   filter: 'grayscale(30%)'
                 }}
               ></div>
             </div>
             <div className="aspect-square overflow-hidden">
               <div 
                 className="w-full h-full bg-cover bg-center"
                 style={{
                   backgroundImage: `url(${basePath}/images/story-5.png)`,
                   filter: 'grayscale(30%)'
                 }}
               ></div>
             </div>
             <div className="aspect-square overflow-hidden">
               <div 
                 className="w-full h-full bg-cover bg-center"
                 style={{
                   backgroundImage: `url(${basePath}/images/story-6.png)`,
                   filter: 'grayscale(30%)'
                 }}
               ></div>
             </div>
           </div>
        </div>
      </section>
      </div>
    </>
  );
}