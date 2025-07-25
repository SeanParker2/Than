import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // 检测移动设备
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // 优化移动端视口
    if (typeof window !== 'undefined') {
      // 防止双击缩放
      let lastTouchEnd = 0;
      document.addEventListener('touchend', (e) => {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          e.preventDefault();
        }
        lastTouchEnd = now;
      }, false);

      // 优化滚动性能
      document.addEventListener('touchmove', (e) => {
        // 允许正常滚动，但优化性能
      }, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 手势识别
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX || !touchStartY) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // 最小滑动距离
    const minSwipeDistance = 50;

    // 水平滑动
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        // 向左滑动 - 可以添加导航逻辑
        console.log('Swipe left');
      } else {
        // 向右滑动 - 可以添加返回逻辑
        console.log('Swipe right');
        if (window.history.length > 1) {
          router.back();
        }
      }
    }

    // 重置触摸坐标
    setTouchStartX(0);
    setTouchStartY(0);
  };

  return (
    <div
      className={`mobile-optimizer ${isMobile ? 'mobile-optimized' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
      
      {/* 移动端优化样式 */}
      <style jsx>{`
        .mobile-optimizer {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
        
        .mobile-optimized {
          /* 优化触摸目标大小 */
        }
        
        .mobile-optimized :global(button),
        .mobile-optimized :global(a),
        .mobile-optimized :global([role="button"]) {
          min-height: 44px;
          min-width: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          touch-action: manipulation;
        }
        
        .mobile-optimized :global(.nav-link) {
          padding: 12px 16px;
          margin: 4px 0;
        }
        
        .mobile-optimized :global(input),
        .mobile-optimized :global(textarea),
        .mobile-optimized :global(select) {
          min-height: 44px;
          font-size: 16px; /* 防止iOS缩放 */
          padding: 12px;
        }
        
        .mobile-optimized :global(.card),
        .mobile-optimized :global(.clickable) {
          cursor: pointer;
          transition: transform 0.1s ease;
        }
        
        .mobile-optimized :global(.card:active),
        .mobile-optimized :global(.clickable:active) {
          transform: scale(0.98);
        }
        
        /* 优化滚动 */
        .mobile-optimized :global(*) {
          -webkit-overflow-scrolling: touch;
        }
        
        /* 优化字体渲染 */
        .mobile-optimized {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* 响应式断点优化 */
        @media (max-width: 480px) {
          .mobile-optimized :global(.container) {
            padding-left: 16px;
            padding-right: 16px;
          }
          
          .mobile-optimized :global(.text-lg) {
            font-size: 1rem;
          }
          
          .mobile-optimized :global(.text-xl) {
            font-size: 1.125rem;
          }
          
          .mobile-optimized :global(.text-2xl) {
            font-size: 1.25rem;
          }
        }
        
        @media (max-width: 360px) {
          .mobile-optimized :global(.grid) {
            grid-template-columns: 1fr;
          }
          
          .mobile-optimized :global(.flex) {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileOptimizer;