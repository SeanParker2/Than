import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Story() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const basePath = router.basePath || '';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>关于我们 | Than Studio</title>
        <meta name="description" content="了解 Than Studio 的故事、初心和团队。我们致力于通过卓越的创意设计为客户创造价值。" />
        <meta name="keywords" content="Than Studio, 关于我们, 故事, 初心, 团队, 创意设计" />
        <meta property="og:title" content="关于我们 | Than Studio" />
        <meta property="og:description" content="了解 Than Studio 的故事、初心和团队。我们致力于通过卓越的创意设计为客户创造价值。" />
        <meta property="og:image" content={`${basePath}/images/story-2.png`} />
        <meta property="og:url" content="https://seanparker2.github.io/Than/story/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="关于我们 | Than Studio" />
        <meta name="twitter:description" content="了解 Than Studio 的故事、初心和团队。我们致力于通过卓越的创意设计为客户创造价值。" />
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
        {/* 新的顶部内容板块 - 文字+视频 */}
        <section className="pt-8 pb-20 lg:pt-12 lg:pb-28" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container mx-auto px-6 lg:px-8">
            {/* 两列文字内容 - 左中文右英文的艺术化布局 */}
            <div className="story-intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '80px' }}>
              {/* 左侧列 - 中文内容 */}
              <div className="chinese-column">
                <h3 style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: '300', 
                  lineHeight: '1.6', 
                  color: '#333',
                  marginBottom: '0'
                }}>
                  THAN Studio是一家全球品牌咨询公司，对工作充满雄心，对世界充满乐观。我们致力于帮助客户打破常规，重新定义期望，并激发积极的变革。
                </h3>
              </div>
              
              {/* 右侧列 - 英文内容 */}
              <div className="english-column">
                <p style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '400', 
                  lineHeight: '1.7', 
                  color: '#4A4A4A',
                  marginBottom: '0'
                }}>
                  THAN Studio is a global brand consultancy that's ambitious for the work and optimistic for the world. We're here to help our clients defy convention, redefine expectations and ignite positive change.
                </p>
              </div>
            </div>

            {/* 视频播放器 */}
            <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <video
                id="story-video"
                className="w-full h-full object-cover"
                preload="metadata"
                controls={false}
                muted
                loop
              >
                <source src="video/story.mp4#t=0.1" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
              
              {/* 播放按钮覆盖层 */}
              <div 
                id="video-play-button-overlay"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 transition-opacity duration-500 cursor-pointer"
                onClick={() => {
                  const overlay = document.getElementById('video-play-button-overlay');
                  const video = document.getElementById('story-video') as HTMLVideoElement;
                  
                  if (overlay && video) {
                    // 1. 隐藏覆盖层
                    overlay.style.display = 'none';
                    // 2. 播放视频
                    video.play();
                    // 3. 显示视频自带控件，以便用户暂停
                    video.controls = true;
                  }
                }}
              >
                <div className="flex items-center space-x-6">
                  {/* 红色播放按钮 */}
                  <button 
                    className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                  >
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  
                  {/* 文字叠加 */}
                  <div className="text-white">
                    <div className="text-2xl font-bold mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                      为创意点赞
                    </div>
                    <div className="text-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                      Love for CREATIVITY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 核心理念板块 */}
        <section className="py-32 lg:py-40" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-16 lg:gap-20">
              {/* 左侧列 - 更窄，添加上边距打破对称 */}
              <div className="space-y-16" style={{ marginTop: '100px' }}>
                {/* 图片 1 - 团队 */}
                <div className="w-full">
                  <img 
                    src={`${basePath}/images/home_teammate_1.png`}
                    alt="Than Studio 团队"
                    className="w-full h-64 object-cover shadow-lg"
                    style={{ borderRadius: '16px' }}
                  />
                </div>
                
                {/* 引文 */}
                <div className="mt-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                    我们是一群敏锐的思想家和富有创造力的创造者，我们的使命是做出我们生命中最好的工作，并始终享受其中的乐趣。
                  </h2>
                </div>
                
                {/* 图片 2 - 工作空间 */}
                <div className="w-full mt-16">
                  <img 
                    src={`${basePath}/images/story-3.png`}
                    alt="Than Studio 工作空间"
                    className="w-full h-64 object-cover shadow-lg"
                    style={{ borderRadius: '16px' }}
                  />
                </div>
              </div>
              
              {/* 右侧列 */}
              <div>
                {/* 标题 */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
                  我们将品牌、文化和经验结合起来，在组织内部和外部产生影响。
                </h2>
                
                {/* 理念列表 */}
                <dl className="space-y-8">
                  <div>
                    <dt className="text-lg font-bold text-gray-800 mb-3">我们的使命</dt>
                    <dd className="text-gray-600 leading-relaxed">
                      看见问题、拆解问题，并用创造性的方式给出答案。
                    </dd>
                  </div>
                  
                  <div className="mt-6">
                    <dt className="text-lg font-bold text-gray-800 mb-3">我们的团队</dt>
                    <dd className="text-gray-600 leading-relaxed">
                      由一群对设计充满热情的天才组成。他们不仅拥有丰富的专业知识，更有看无限的创意和对美的追求。我们的设计团队来自不同的背景，但都有一个共同的目标——用设计让世界更美好。
                    </dd>
                  </div>
                  
                  <div className="mt-6">
                    <dt className="text-lg font-bold text-gray-800 mb-3">我们的服务</dt>
                    <dd className="text-gray-600 leading-relaxed">
                      从品牌标识设计到广告宣传，从包装设计到数字媒体，我们提供全方位的平面设计服务。我们的目标是帮助您的品牌在竞争激烈的市场中脱颖而出，让您的产品和信息以最吸引人的方式呈现给世界。
                    </dd>
                  </div>
                  
                  <div className="mt-6">
                    <dt className="text-lg font-bold text-gray-800 mb-3">我们的工作</dt>
                    <dd className="text-gray-600 leading-relaxed">
                      我们相信沟通是设计的灵魂。因此，我们与客户紧密合作，倾听他们的需求，理解他们的愿景，并将其转化为令人难忘的设计作品。
                    </dd>
                  </div>
                  
                  <div className="mt-6">
                    <dt className="text-lg font-bold text-gray-800 mb-3">我们的承诺</dt>
                    <dd className="text-gray-600 leading-relaxed">
                      每一次设计，我们都致力于超越客户的期望。我们不仅仅是在设计，我们是在创造未来。
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* 团队成员 + 加入我们 - 融合的人物主题板块 */}
        <section className="py-16" style={{ backgroundColor: '#FAFAFA' }}>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
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

            {/* 加入我们内容 - 融合在团队板块内 */}
            <div className="max-w-3xl mx-auto text-left" style={{ marginTop: '80px' }}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                加入我们
              </h2>
              <h3 className="text-xl text-gray-600 mb-10" style={{ marginBottom: '40px' }}>
                Join US
              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p style={{ marginBottom: '24px' }}>
                  我们不是在招人，我们是在找同频的外星人。
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  如果你讨厌模板，却偏爱解构；<br />
                  觉得"对称"无趣，却能从"偏离"中找到秩序；<br />
                  如果你不甘心只是执行任务，而是总想追问"为什么非要这样"？<br />
                  如果你擅长把复杂的问题，变成一句"这不就对了吗"！
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  那你可能正是我们一直在寻找的那一类——<br />
                  用脑子跳舞、用想法搞事的创意生命体。
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  我们不按部就班，但我们解决问题。<br />
                  我们不装腔作势，但我们做的每一件事都有逻辑、有锋芒。<br />
                  我们相信答案就在问题里，而问题，就是创意的燃料。
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  来吧，来搞事。<br />
                  这里没有层级，只有"哇这个想法可以"。<br />
                  设计、策略、艺术、技术…边界模糊，角色自由。<br />
                  一起打造有灵魂的作品，把宇宙撬一撬。
                </p>
                
                <p style={{ marginBottom: '24px' }}>
                  你，不一定完美。但要有想法。<br />
                  投点东西给我们看看 (作品集 / 想法 / 自我介绍随意)，<br />
                  邮箱见信如面：1308973470@qq.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}