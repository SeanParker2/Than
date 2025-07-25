/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // 移动端优化断点
      'mobile': {'max': '767px'},
      'tablet': {'min': '768px', 'max': '1023px'},
      'desktop': {'min': '1024px'},
      // 触摸设备
      'touch': {'raw': '(hover: none)'},
      'no-touch': {'raw': '(hover: hover)'},
    },
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        // 触摸友好的间距
        'touch': '44px', // 最小触摸目标
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      fontSize: {
        // 移动端优化字体大小
        'xs-mobile': ['0.75rem', { lineHeight: '1.2' }],
        'sm-mobile': ['0.875rem', { lineHeight: '1.3' }],
        'base-mobile': ['1rem', { lineHeight: '1.4' }],
        'lg-mobile': ['1.125rem', { lineHeight: '1.4' }],
        'xl-mobile': ['1.25rem', { lineHeight: '1.4' }],
      },
      animation: {
        'touch-feedback': 'touchFeedback 0.1s ease-in-out',
      },
      keyframes: {
        touchFeedback: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    // 添加触摸优化插件
    function({ addUtilities }) {
      const newUtilities = {
        '.touch-manipulation': {
          'touch-action': 'manipulation',
        },
        '.touch-pan-x': {
          'touch-action': 'pan-x',
        },
        '.touch-pan-y': {
          'touch-action': 'pan-y',
        },
        '.touch-none': {
          'touch-action': 'none',
        },
        '.tap-highlight-transparent': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        '.scroll-smooth-touch': {
          '-webkit-overflow-scrolling': 'touch',
        },
        '.font-smooth': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}