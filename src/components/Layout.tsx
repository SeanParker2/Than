import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PageLoader from './PageLoader';

type LayoutProps = {
  children: React.ReactNode;
  pageLoading?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, pageLoading = false }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 关闭移动菜单当路由变化时
  useEffect(() => {
    const handleRouteChange = () => setMobileMenuOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <PageLoader pageLoading={pageLoading} />
      <header className="fixed top-0 left-0 w-full h-20 bg-white bg-opacity-90 backdrop-blur-md z-[9999] shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
              src="/logo/logo.png"
              alt="Than Studio"
              width={56}
              height={20}
              className="h-5 w-auto"
              priority
            />
            </Link>
          </div>
          
          {/* 移动端汉堡菜单按钮 */}
          <button 
            className="mobile-nav md:hidden flex flex-col justify-center items-center w-12 h-12 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-[#333] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#333] mt-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#333] mt-1.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          
          {/* 桌面端导航 */}
          <nav className="desktop-nav hidden md:flex items-center space-x-8" role="navigation">
            <Link href="/work" className={`transition-all duration-200 font-medium px-3 py-2 rounded-lg ${currentPath.startsWith('/work') ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}>
              Work
            </Link>
            <Link href="/story" className={`transition-all duration-200 font-medium px-3 py-2 rounded-lg ${currentPath.startsWith('/story') ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}>
              Story
            </Link>
            <Link href="/contact" className={`transition-all duration-200 font-medium px-3 py-2 rounded-lg ${currentPath.startsWith('/contact') ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}>
              Contact
            </Link>
          </nav>
        </div>
        
        {/* 全屏移动端导航菜单 */}
        <div className={`fixed inset-0 z-[10000] bg-[#F9F9F9] transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {/* 关闭按钮 */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="关闭菜单"
          >
            <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* 导航链接 - 垂直居中 */}
          <nav className="flex flex-col items-center justify-center h-full space-y-8" role="navigation">
            <Link 
              href="/work"
              className={`text-4xl font-medium transition-all duration-200 touch-manipulation ${currentPath.startsWith('/work') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="/story"
              className={`text-4xl font-medium transition-all duration-200 touch-manipulation ${currentPath.startsWith('/story') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Story
            </Link>
            <Link 
              href="/contact"
              className={`text-4xl font-medium transition-all duration-200 touch-manipulation ${currentPath.startsWith('/contact') ? 'text-black' : 'text-gray-600 hover:text-black'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-12">
          {/* 主要内容区域 - 极简布局 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            
            {/* 左侧：品牌信息 */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Than Studio
              </h2>
              <p className="text-gray-600 text-base max-w-md leading-relaxed">
                创造有意义的设计体验
              </p>
            </div>
            
            {/* 中间：导航链接 */}
            <div className="flex flex-wrap gap-8">
              <Link href="/work" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                作品集
              </Link>
              <Link href="/story" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                故事
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                联系
              </Link>
            </div>
            
            {/* 右侧：联系信息 */}
            <div className="flex flex-col lg:items-end gap-2">
              <a href="mailto:unsaturated2025@gmail.com" 
                 className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                unsaturated2025@gmail.com
              </a>
              <a href="tel:+8618098986553" 
                 className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                +86 180 9898 6553
              </a>
            </div>
          </div>
          
          {/* 分割线 */}
          <div className="border-t border-gray-100 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* 版权信息 */}
              <p className="text-gray-500 text-sm">
                © 2025 Than Studio. All rights reserved.
              </p>
              
              {/* 社交媒体链接 */}
              <div className="flex items-center gap-4">
                <a href="https://www.xiaohongshu.com/user/profile/629e137b0000000021026e64?xsec_token=YB1EnAzViaXpCVcu24U7fqyOXU0rtmIJfiKNRCGQV9A3E=&xsec_source=app_share&xhsshare=CopyLink&appuid=629e137b0000000021026e64&apptime=1749779112&share_id=2f8fa3a9ebee403d927a640c278f8b35" 
                   className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                   aria-label="小红书">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a href="https://x.com/ThanStudio2025" 
                   className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                   aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;