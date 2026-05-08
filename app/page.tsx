'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen ink-texture flex items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* 背景装饰 - 墨迹晕染效果 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gold/3 rounded-full blur-3xl" />
      </div>

      {/* 装饰性竖线 */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />
      <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />

      <div className={`max-w-xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* 顶部标题区 */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="mb-4 sm:mb-6">
            <span className="text-gold/70 text-xs sm:text-sm tracking-widest uppercase">Discover Your</span>
          </div>

          <h1 className="calligraphy text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4">
            <span className="gold-shimmer">中国历史人物</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cream/90 mb-4 sm:mb-6 tracking-wide">
            职场人格测试
          </h2>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold text-sm sm:text-base md:text-lg">二十四型</span>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        {/* 主卡片 */}
        <div className="bg-ink-dark/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 ink-border gold-glow">

          {/* 引言 */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <p className="text-sm sm:text-base md:text-lg text-cream/70 leading-relaxed italic">
              「以史为鉴，可以知兴替；以人为鉴，可以明得失。」
            </p>
            <p className="text-gold/60 text-xs sm:text-sm mt-2">—— 《贞观政要》</p>
          </div>

          {/* 测试说明 */}
          <div className="bg-ink-slate/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
            <h3 className="text-gold font-medium mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full" />
              <span className="text-sm sm:text-base">测试说明</span>
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-cream/80 text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-gold mt-0.5 sm:mt-1">壹</span>
                <span>共 <strong className="text-cream">24 道</strong>职场情境选择题</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-gold mt-0.5 sm:mt-1">贰</span>
                <span>每题根据您的选择为历史人物加分</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-gold mt-0.5 sm:mt-1">叁</span>
                <span>测试结束后获得三大职场人格解读</span>
              </li>
            </ul>
          </div>

          {/* 人格类型预览 */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-gold font-medium mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full" />
              <span className="text-sm sm:text-base">人格类型</span>
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div className="bg-ink-slate/30 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-gold/10 hover:border-gold/30 transition-colors">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">👑</div>
                <div className="text-gold text-xs sm:text-sm font-medium">主人格</div>
                <div className="text-cream/50 text-xs mt-0.5 sm:mt-1">核心驱动力</div>
              </div>
              <div className="bg-ink-slate/30 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-gold/10 hover:border-gold/30 transition-colors">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">⚔️</div>
                <div className="text-gold text-xs sm:text-sm font-medium">副人格</div>
                <div className="text-cream/50 text-xs mt-0.5 sm:mt-1">辅助特质</div>
              </div>
              <div className="bg-ink-slate/30 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-gold/10 hover:border-gold/30 transition-colors">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🎭</div>
                <div className="text-gold text-xs sm:text-sm font-medium">阴影人格</div>
                <div className="text-cream/50 text-xs mt-0.5 sm:mt-1">隐藏的另一面</div>
              </div>
            </div>
          </div>

          {/* 开始按钮 */}
          <button
            onClick={() => router.push('/test')}
            className="w-full relative overflow-hidden group active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-r from-gold via-gold-light to-gold text-ink-black font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold/20">
              <span className="text-base sm:text-lg">开始探索你的职场人格</span>
              <span className="ml-2 sm:ml-3">→</span>
            </div>
          </button>

          <p className="text-center text-cream/40 text-xs sm:text-sm mt-4 sm:mt-6">
            预计用时 3-5 分钟
          </p>
        </div>

        {/* 底部装饰 */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-cream/30 text-xs">
            从诸葛亮到陶渊明 · 24 种职场人格
          </p>
        </div>
      </div>
    </div>
  );
}
