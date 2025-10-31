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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // 轮播数据
  const heroSlides = [
    {
      id: 1,
      title: '「番茄作家助手APP」品牌形象设计',
      subtitle: '今日头条旗下番茄系列针对作家的便捷写作APP',
      image: 'home_hero_banner.jpeg'
    },
    {
      id: 2,
      title: '识区智能阅读应用设计',
      subtitle: '基于AI技术的智能阅读应用界面设计',
      image: 'home_work_1.png'
    },
    {
      id: 3,
      title: '字节内测系列产品设计',
      subtitle: '字节跳动内测产品的创新设计探索',
      image: 'home_work_3.png'
    },
    {
      id: 4,
      title: '珠海城市形象宣传设计',
      subtitle: '珠海城市形象标识与宣传品设计',
      image: 'home_work_4.png'
    },
    {
      id: 5,
      title: '深圳万象城商业地产设计',
      subtitle: '深圳万象城商业地产项目的品牌形象设计',
      image: 'home_work_5.png'
    },
    {
      id: 6,
      title: '创新科技产品界面设计',
      subtitle: '前沿科技产品的用户界面设计',
      image: 'home_work_6.png'
    },
    {
      id: 7,
      title: '品牌视觉系统设计',
      subtitle: '完整的品牌视觉识别系统设计',
      image: 'home_work_2.png'
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 轮播自动播放
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);



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
      {/* Hero Banner - 全屏轮播 */}
      <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>
        {/* 轮播容器 */}
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* 背景图片 */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${basePath}/images/${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* 遮罩层 */}
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              
              {/* 内容区域 */}
              <div className="absolute bottom-16 left-16 text-white z-10 max-w-2xl">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-base md:text-lg font-light opacity-90 leading-relaxed">
                  {slide.subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 初心使然 - 新内容板块 */}
      <section className="bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-6 lg:px-8">
          {/* 两列网格布局 - 文本内容 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            {/* 左侧标题 - 占1/3 (2列) */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl sm:text-5xl font-light mb-4 text-gray-800">
                初心使然
              </h2>
              <h3 className="text-2xl sm:text-3xl font-light text-gray-600">
                Our Ambition
              </h3>
            </div>
            
            {/* 右侧段落 - 占2/3 (3列) */}
            <div className="lg:col-span-3">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                我们创造变革性的品牌，推动企业、人民和世界前进。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We create transformative brands that move businesses, people and the world forward.
              </p>
            </div>
          </div>

          {/* 视频播放器 */}
          <div className="mt-16">
            <div className="relative w-full max-w-4xl mx-auto">
              {/* 视频占位图容器 */}
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
                   onClick={() => setIsVideoModalOpen(true)}>
                {/* 占位图背景 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${basePath}/images/home_hero_banner.jpeg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                
                {/* 红色播放按钮 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-all duration-300 group-hover:scale-110">
                    <svg 
                      className="w-8 h-8 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 视频模态框 */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
             onClick={() => setIsVideoModalOpen(false)}>
          <div className="relative w-full max-w-4xl mx-4">
            {/* 关闭按钮 */}
            <button 
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsVideoModalOpen(false)}
            >
              ✕
            </button>
            
            {/* 视频容器 */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden"
                 onClick={(e) => e.stopPropagation()}>
              <video 
                className="w-full h-full"
                controls
                autoPlay
                src="video/studio.mp4"
              >
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>
      )}

      {/* 定制化方案 - 彩色网格 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-4 text-gray-800">
              定制化方案
            </h2>
            <h3 className="text-2xl sm:text-3xl font-light mb-6 text-gray-600">
              Selected Work
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
              从品牌标识设计到广告宣传，从包装设计到数字媒体，我们提供全方位的平面设计服务。我们的目标是帮助您的品牌在竞争激烈的市场中脱颖而出，让您的产品和信息以最吸引人的方式呈现给世界。
            </p>
          </div>
          
          {/* 4x2 彩色网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                number: '01',
                title: '品牌设计',
                description: '品牌战略/定位/策略/文化，Logo/标志/VI/视觉系统',
                bgColor: 'bg-black'
              },
              {
                number: '02',
                title: '数字营销/运营',
                description: '数字营销、网站建设、运营年服APP/小程序',
                bgColor: 'bg-cyan-400'
              },
              {
                number: '03',
                title: '视觉传达/平面',
                description: 'IP吉祥物、主KV、画册 广告创意&设计、品牌年服',
                bgColor: 'bg-gray-300'
              },
              {
                number: '04',
                title: '产品包装',
                description: '产品策划、产品创新、包装设计、 产品全案、产品包装体系',
                bgColor: 'bg-orange-400'
              },
              {
                number: '05',
                title: '空间&导视',
                description: '品牌战略/定位/策略/文化，Logo/标志/VI/ 视觉系统',
                bgColor: 'bg-red-500'
              },
              {
                number: '06',
                title: '影视/TVC',
                description: '短视频、宣传片、广告TVC、拍摄',
                bgColor: 'bg-purple-500'
              },
              {
                number: '07',
                title: '文创',
                description: 'IP文创产品创意开发、礼品开发',
                bgColor: 'bg-blue-500'
              },
              {
                number: '08',
                title: '工程施工',
                description: '标识/导视制作，展览展示实施， 连锁店施工，城市雕塑与景观施工',
                bgColor: 'bg-gray-600'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`${item.bgColor} text-white p-8 aspect-square flex flex-col justify-between transition-transform duration-300 hover:scale-105`}
              >
                <div>
                  <div className="text-4xl font-light mb-4 opacity-90">
                    {item.number}
                  </div>
                  <h4 className="text-xl font-medium mb-3">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            ))}
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