import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Contact() {
  const router = useRouter();
  const basePath = router.basePath || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '产品咨询',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Head>
        <title>联系我们 - Than Studio | 专业设计工作室</title>
        <meta name="description" content="联系Than Studio专业设计团队，获取品牌设计、UI/UX设计、产品设计等服务。24小时内回复，提供一对一专业咨询服务。" />
        <meta name="keywords" content="Than Studio,设计工作室,联系我们,品牌设计,UI设计,UX设计,产品设计,深圳设计" />
        <meta property="og:title" content="联系我们 - Than Studio" />
        <meta property="og:description" content="联系Than Studio专业设计团队，获取专业设计服务和咨询。" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="联系我们 - Than Studio" />
        <meta name="twitter:description" content="联系Than Studio专业设计团队，获取专业设计服务和咨询。" />
        <link rel="canonical" href="https://thanstudio.com/contact" />
      </Head>
      <div className="min-h-screen" style={{ backgroundColor: '#F9F9F9' }}>
      {/* 英雄区域 - 优化间距 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div>
            <h1 className="h1-title text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-none text-gray-700" style={{
              fontFamily: '"PingFang SC", "Noto Sans SC", "Hiragino Sans GB", sans-serif',
              fontWeight: 100,
              letterSpacing: '2px'
            }}>
              联系我们
            </h1>
            
            {/* 副标题区域 - 简洁版 */}
            <div className="space-y-4 mb-16 max-w-4xl">
              <div className="relative">
                <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed" style={{ color: '#666666' }}>
                  联系我们，开启合作
                </p>
              </div>
              
              <p className="text-base md:text-lg max-w-3xl leading-relaxed" style={{ color: '#999999' }}>
                无论您有任何问题或合作意向，都欢迎随时与我们联系
              </p>
            </div>
          </div>
          
          {/* 联系方式卡片 - 优化间距 */}
          <div className="three-column-icons grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-2" style={{ color: '#333333' }}>电话咨询</h3>
              <p className="text-gray-600 mb-2 text-sm font-light">周一至周五 9:00-18:00</p>
              <a href="tel:+86-180-9898-6553" className="text-gray-600 font-light hover:opacity-70 transition-opacity">+86 180 9898 6553</a>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-2" style={{ color: '#333333' }}>电子邮件</h3>
              <p className="text-gray-600 mb-2 text-sm font-light">24小时内回复</p>
              <a href="mailto:unsaturated2025@gmail.com" className="text-gray-600 font-light hover:opacity-70 transition-opacity">unsaturated2025@gmail.com</a>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-2" style={{ color: '#333333' }}>工作室地址</h3>
              <p className="text-gray-600 mb-2 text-sm font-light">欢迎预约参观</p>
              <p className="text-gray-600 font-light">深圳市·宝安区</p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系表单 - 优化间距 */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#333333' }}>
                发送消息
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                告诉我们您的想法，我们将在24小时内回复您
              </p>
            </div>
            
            <div className="two-column-layout grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* 表单 */}
              <div>
                <div className="bg-white p-6 border border-gray-200 h-full">
                  <h3 className="text-xl font-light mb-6" style={{ color: '#333333' }}>发送消息</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                          姓名 *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors bg-white font-light"
                          placeholder="请输入您的姓名"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                          邮箱 *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors bg-white font-light"
                          placeholder="请输入您的邮箱"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-light text-gray-700 mb-2">
                        主题 *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors bg-white font-light"
                      >
                        <option value="产品咨询">产品咨询</option>
                        <option value="项目合作">项目合作</option>
                        <option value="加入团队">加入团队</option>
                        <option value="其他问题">其他问题</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                        消息 *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors resize-vertical bg-white font-light"
                        placeholder="请详细描述您的需求或问题"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <a
                        href={`mailto:unsaturated2025@gmail.com?subject=${encodeURIComponent(`${formData.subject} - 来自${formData.name}`)}&body=${encodeURIComponent(`姓名: ${formData.name}\n邮箱: ${formData.email}\n\n${formData.message}\n\n此邮件由Than Studio网站发送`)}`}
                        className="block w-full py-3 bg-gray-800 text-white text-center font-light transition-opacity hover:opacity-80"
                        style={{ backgroundColor: '#333333' }}
                      >
                        发送消息
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 右侧信息 - 对称设计 */}
              <div>
                <div className="bg-white p-6 border border-gray-200 h-full">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-light mb-6" style={{ color: '#333333' }}>为什么选择我们？</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base font-light mb-1" style={{ color: '#333333' }}>快速响应</h4>
                            <p className="text-gray-600 font-light leading-relaxed text-sm">我们承诺在24小时内回复您的咨询，确保项目进度不受影响。</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base font-light mb-1" style={{ color: '#333333' }}>专业团队</h4>
                            <p className="text-gray-600 font-light leading-relaxed text-sm">拥有多年经验的设计师团队，为您提供最专业的设计解决方案。</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base font-light mb-1" style={{ color: '#333333' }}>贴心服务</h4>
                            <p className="text-gray-600 font-light leading-relaxed text-sm">从项目咨询到后期维护，我们提供全程贴心的一对一服务。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-lg font-light mb-4" style={{ color: '#333333' }}>常见问题</h4>
                      <div className="space-y-3 text-sm">
                        <div className="pb-2 border-b border-gray-100">
                          <p className="font-light text-gray-700 mb-1">Q: 项目周期一般多长？</p>
                          <p className="text-gray-600 font-light">A: 根据项目复杂度，一般2-8周不等。</p>
                        </div>
                        <div className="pb-2 border-b border-gray-100">
                          <p className="font-light text-gray-700 mb-1">Q: 是否提供后期维护？</p>
                          <p className="text-gray-600 font-light">A: 是的，我们提供6个月免费维护服务。</p>
                        </div>
                        <div className="pb-2">
                          <p className="font-light text-gray-700 mb-1">Q: 如何确定项目报价？</p>
                          <p className="text-gray-600 font-light">A: 我们会根据具体需求提供详细报价方案。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 - 优化间距 */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-8" style={{ color: '#333333' }}>常见问题</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="py-4 border-b border-gray-200">
              <h3 className="text-lg font-light mb-2" style={{ color: '#333333' }}>如何预约咨询？</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">您可以通过电子邮件、电话或填写网站上的联系表单来预约咨询。我们的团队会在24小时内回复您，安排合适的咨询时间。</p>
            </div>
            
            <div className="py-4 border-b border-gray-200">
              <h3 className="text-lg font-light mb-2" style={{ color: '#333333' }}>设计项目的一般周期是多久？</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">设计项目的周期取决于项目的复杂性和规模。小型项目通常需要2-4周，中型项目需要1-2个月，大型项目可能需要3个月或更长时间。我们会在项目开始前提供详细的时间表。</p>
            </div>
            
            <div className="py-4 border-b border-gray-200">
              <h3 className="text-lg font-light mb-2" style={{ color: '#333333' }}>你们提供哪些设计服务？</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">我们提供品牌形象设计、平面设计、网站和移动应用UI/UX设计、产品设计、空间设计以及展览设计等服务。无论您的需求是什么，我们都能为您提供专业的设计解决方案。</p>
            </div>
            
            <div className="py-4 border-b border-gray-200">
              <h3 className="text-lg font-light mb-2" style={{ color: '#333333' }}>你们接受国际项目吗？</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">是的，我们接受来自世界各地的项目。我们的团队成员来自不同的文化背景，能够理解不同市场的需求。我们可以通过视频会议、电子邮件等方式与国际客户保持沟通。</p>
            </div>
            
            <div className="py-4">
              <h3 className="text-lg font-light mb-2" style={{ color: '#333333' }}>设计修改的流程是怎样的？</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">我们的设计过程包括多轮修改。在每个阶段，我们会向您展示设计成果，收集反馈，并进行必要的调整。标准服务包含2-3轮修改，如果需要更多修改，可能会产生额外费用。</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}