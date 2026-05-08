'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { calculateResult } from '@/lib/calculate';

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOptionSelect = useCallback((optionIndex: number) => {
    setSelectedOption(optionIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      const result = calculateResult(newAnswers);

      try {
        localStorage.setItem('testAnswers', JSON.stringify(newAnswers));
        localStorage.setItem('testResult', JSON.stringify({
          primary: result.result.primary.name,
          secondary: result.result.secondary.name,
          shadow: result.result.shadow.name,
        }));
      } catch (e) {
        // localStorage might not be available in private mode
      }
      router.push('/result');
    }
  }, [selectedOption, answers, currentQuestion, router]);

  if (!isClient) {
    return (
      <div className="min-h-screen ink-texture flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-gold text-lg">加载中...</div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen ink-texture flex items-center justify-center p-3 sm:p-4">
      {/* 背景光晕 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-xl w-full relative">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="calligraphy text-gold text-xs sm:text-sm tracking-widest mb-1 sm:mb-2">职场人格测试</h1>
          <p className="text-cream/50 text-xs">中国历史人物 · 二十四型</p>
        </div>

        {/* Progress */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="flex justify-between text-cream/70 text-xs sm:text-sm mb-2 sm:mb-3">
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="text-gold">第</span>
              <span className="text-gold font-medium">{currentQuestion + 1}</span>
              <span className="text-gold">题</span>
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-ink-slate rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* 进度指示点 - mobile隐藏 */}
          <div className="hidden sm:flex justify-center gap-1.5 mt-4">
            {questions.slice(0, 12).map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentQuestion
                    ? 'bg-gold w-4'
                    : index < currentQuestion
                    ? 'bg-gold/50'
                    : 'bg-ink-slate'
                }`}
              />
            ))}
            <span className="text-cream/30 text-xs mx-2">...</span>
          </div>
        </div>

        {/* Question Card */}
        <div
          className={`bg-ink-dark/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 ink-border gold-glow transition-all duration-300 ${
            isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}
        >
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-cream leading-relaxed mb-4 sm:mb-6 md:mb-8 text-center">
            {question.title}
          </h2>

          <div className="space-y-2 sm:space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full p-3 sm:p-4 md:p-5 rounded-xl text-left transition-all duration-200 border-2 active:scale-[0.99] ${
                  selectedOption === index
                    ? 'border-gold bg-gold/10 shadow-lg shadow-gold/5'
                    : 'border-ink-slate hover:border-gold/30 hover:bg-ink-slate/50'
                }`}
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div
                    className={`w-7 h-7 sm:w-8 md:w-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-medium flex-shrink-0 transition-all duration-200 ${
                      selectedOption === index
                        ? 'bg-gold text-ink-black'
                        : 'bg-ink-slate text-cream/60'
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={`text-sm sm:text-base leading-relaxed ${
                    selectedOption === index ? 'text-cream' : 'text-cream/70'
                  }`}>{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`w-full mt-4 sm:mt-6 md:mt-8 relative overflow-hidden group`}
          >
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              selectedOption === null ? 'opacity-0' : 'opacity-100'
            } bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 group-hover:opacity-100`} />
            <div
              className={`relative py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg transition-all duration-200 active:scale-[0.98] ${
                selectedOption === null
                  ? 'bg-ink-slate text-cream/30 cursor-not-allowed'
                  : 'bg-ink-slate text-cream hover:bg-ink-slate/80 hover:text-gold cursor-pointer'
              }`}
            >
              {currentQuestion < questions.length - 1 ? (
                <span className="flex items-center justify-center gap-2">
                  下一题
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  查看结果
                  <span>🎉</span>
                </span>
              )}
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-cream/30 text-xs">
            第 {currentQuestion + 1} / {questions.length} 题
          </p>
        </div>
      </div>
    </div>
  );
}
