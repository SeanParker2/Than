import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Story() {
  const [activeTab, setActiveTab] = useState('关于我们');
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const basePath = router.basePath || '';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>我们的故事 - Than Studio | 专业设计工作室</title>
        <meta name="description" content="了解Than Studio的发展历程、团队文化和核心优势。我们是一家专注于品牌设计和数字体验的创意工作室。" />
        <meta name="keywords" content="Than Studio, 设计工作室, 品牌设计, UI设计, UX设计, 团队介绍, 公司历程" />
        <meta property="og:title" content="我们的故事 - Than Studio" />
        <meta property="og:description" content="了解Than Studio的发展历程、团队文化和核心优势" />
        <meta property="og:image" content={`${basePath}/images/story-2.png`} />
        <meta property="og:url" content="https://seanparker2.github.io/Than/story/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="我们的故事 - Than Studio" />
        <meta name="twitter:description" content="了解Than Studio的发展历程、团队文化和核心优势" />
        <meta name="twitter:image" content={`${basePath}/images/story-2.png`} />
        <link rel="canonical" href="https://seanparker2.github.io/Than/story/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "我们的故事 - Than Studio",
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
      {/* 英雄区域 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="h1-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              我们的故事
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Than Studio 致力于为客户提供卓越的设计服务，我们相信好的设计能够改变世界
            </p>
            
            {/* 核心价值观 */}
            <div className="three-column-icons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">创新驱动</h3>
                <p className="text-gray-600 text-sm">持续探索设计的边界</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">用户至上</h3>
                <p className="text-gray-600 text-sm">以用户体验为核心</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">品质保证</h3>
                <p className="text-gray-600 text-sm">追求完美的设计品质</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 导航栏 - 优化版本 */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex justify-center py-3 md:py-4">
            <div className="flex bg-gradient-to-r from-gray-50/80 to-gray-100/80 rounded-full p-1.5 space-x-1 overflow-x-auto scrollbar-hide max-w-full shadow-inner">
              {['关于我们', '发展历程', '核心优势', '团队文化'].map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium rounded-full transition-all duration-500 ease-out whitespace-nowrap min-w-0 flex-shrink-0 group ${
                    activeTab === tab
                      ? 'text-white bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl transform scale-105 tab-active'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-white/90 hover:shadow-lg hover:scale-102 active:scale-95'
                  }`}
                  style={{ 
                    minHeight: '44px',
                    touchAction: 'manipulation',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="relative z-10 px-1 transition-all duration-300 group-hover:tracking-wide">
                    {tab}
                  </span>
                  
                  {/* 活跃状态背景 */}
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-full opacity-95">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full animate-pulse"></div>
                    </div>
                  )}
                  
                  {/* 悬停效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200/0 via-gray-200/20 to-gray-200/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* 点击涟漪效果 */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-active:scale-100 transition-transform duration-200"></div>
                  </div>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* 关于我们 */}
      <section 
        className={`py-20 lg:py-28 ${activeTab !== '关于我们' ? 'hidden' : ''}`}
        id="关于我们"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="two-column-layout grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">关于 Than Studio</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Than Studio 成立于2018年，是一家专注于品牌设计和数字体验的创意工作室。我们相信设计的力量能够改变世界，通过创新的思维和专业的技能，为客户创造有价值的设计解决方案。
                </p>
                <p>
                  我们的团队由来自不同背景的设计师、开发者和策略专家组成，每个人都带着对设计的热情和对品质的追求。我们不仅仅是在创造美丽的视觉效果，更是在解决实际的商业问题。
                </p>
                <p>
                  在过去的几年里，我们已经为超过100家企业提供了设计服务，涵盖了品牌识别、网站设计、移动应用、包装设计等多个领域。我们的作品不仅获得了客户的认可，也在多个设计奖项中获得了荣誉。
                </p>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">100+</div>
                  <div className="text-sm text-gray-600">服务客户</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">200+</div>
                  <div className="text-sm text-gray-600">完成项目</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">15+</div>
                  <div className="text-sm text-gray-600">设计奖项</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">5年</div>
                  <div className="text-sm text-gray-600">行业经验</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={`${basePath}/images/story-2.png`}
                alt="Than Studio 团队"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section 
        className={`py-12 md:py-16 ${activeTab !== '发展历程' ? 'hidden' : ''}`}
        id="发展历程"
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4" style={{ letterSpacing: '2px' }}>
              发展历程
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              从初创到成长，我们的每一步都充满了对设计的热爱与坚持
            </p>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mt-6"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            
            <div className="space-y-8">
              {[
                { year: '2018', title: '工作室成立', desc: 'Than Studio 正式成立，开始我们的设计之旅' },
                { year: '2019', title: '团队扩张', desc: '团队成员增加到10人，服务能力大幅提升' },
                { year: '2020', title: '业务拓展', desc: '业务范围扩展到数字产品设计和品牌策略' },
                { year: '2021', title: '获得认可', desc: '获得多个设计奖项，建立行业声誉' },
                { year: '2022', title: '国际合作', desc: '开始与国际客户合作，拓展全球市场' },
                { year: '2023', title: '持续创新', desc: '引入AI设计工具，提升设计效率和质量' }
              ].map((item, index) => (
                <div key={index} className={`relative transform transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 border border-gray-200">
                        <div className="text-xl font-light mb-2" style={{ color: '#A0BCC8' }}>
                          {item.year}
                        </div>
                        <h3 className="text-lg font-light text-gray-800 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section 
        className={`py-12 md:py-16 ${activeTab !== '核心优势' ? 'hidden' : ''}`}
        id="核心优势"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">核心优势</h2>
          <div className="three-column-icons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-center">创新思维</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">我们不断探索新的设计方法和理念，为客户带来前沿的设计解决方案，让品牌在竞争中脱颖而出。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-center">专业团队</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">我们拥有一支经验丰富、专业素养高的设计团队，每位成员都在各自领域拥有深深的的专业知识和丰富的项目经验。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="mb-4 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8L2 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 15H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-center">用户体验</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">我们始终将用户体验放在首位，通过深入的用户研究和测试，确保我们的设计不仅美观，而且实用、易用。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队文化 */}
      <section 
        className={`py-12 md:py-16 ${activeTab !== '团队文化' ? 'hidden' : ''}`}
        id="团队文化"
        style={{ backgroundColor: '#F9F9F9' }}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4" style={{ letterSpacing: '2px' }}>
              团队文化
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              我们的文化价值观塑造着我们的工作方式和设计理念
            </p>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { title: '创新思维', desc: '勇于探索新的设计可能性，突破传统界限' },
              { title: '用户至上', desc: '始终以用户需求为中心，创造有价值的体验' },
              { title: '团队协作', desc: '相信集体智慧，通过协作实现更大价值' },
              { title: '持续学习', desc: '保持好奇心，不断学习和成长' }
            ].map((item, index) => (
              <div key={index} className={`bg-white p-6 border border-gray-200 transform transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="w-8 h-8 mb-4 flex items-center justify-center" style={{ backgroundColor: '#A0BCC8' }}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-light text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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