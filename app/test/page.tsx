'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { characters } from '@/data/characters';
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
      // Calculate result
      const result = calculateResult(newAnswers);

      try {
        localStorage.setItem('testAnswers', JSON.stringify(newAnswers));
        // Save only the names as strings for sharing
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
    // SSR fallback - show loading state
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
    <div className="min-h-screen ink-texture flex items-center justify-center p-4">
      {/* 背景光晕 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl w-full relative">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="calligraphy text-gold text-sm tracking-widest mb-2">职场人格测试</h1>
          <p className="text-cream/50 text-xs">中国历史人物 · 二十四型</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-cream/70 text-sm mb-3">
            <span className="flex items-center gap-2">
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
          {/* 进度指示点 */}
          <div className="flex justify-center gap-1.5 mt-4">
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
          className={`bg-ink-dark/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 ink-border gold-glow transition-all duration-300 ${
            isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}
        >
          <h2 className="text-xl md:text-2xl text-cream leading-relaxed mb-8 text-center">
            {question.title}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full p-5 rounded-xl text-left transition-all duration-200 border-2 ${
                  selectedOption === index
                    ? 'border-gold bg-gold/10 shadow-lg shadow-gold/5'
                    : 'border-ink-slate hover:border-gold/30 hover:bg-ink-slate/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium flex-shrink-0 transition-all duration-200 ${
                      selectedOption === index
                        ? 'bg-gold text-ink-black'
                        : 'bg-ink-slate text-cream/60'
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={`text-base leading-relaxed ${
                    selectedOption === index ? 'text-cream' : 'text-cream/70'
                  }`}>{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`w-full mt-8 relative overflow-hidden group`}
          >
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              selectedOption === null ? 'opacity-0' : 'opacity-100'
            } bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 group-hover:opacity-100`} />
            <div
              className={`relative py-4 rounded-xl font-medium text-lg transition-all duration-200 ${
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
        <div className="text-center mt-6">
          <p className="text-cream/30 text-xs">
            第 {currentQuestion + 1} / {questions.length} 题
          </p>
        </div>
      </div>
    </div>
  );
}
