'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      // Save answers to localStorage and navigate to result
      localStorage.setItem('testAnswers', JSON.stringify(newAnswers));
      router.push('/result');
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>问题 {currentQuestion + 1} / {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div
          className={`bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300 ${
            isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
            {question.title}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-200 border-2 ${
                  selectedOption === index
                    ? 'border-amber-500 bg-amber-50 shadow-md'
                    : 'border-gray-200 hover:border-amber-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      selectedOption === index
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-gray-700">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`w-full mt-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 ${
              selectedOption === null
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transform hover:scale-105'
            }`}
          >
            {currentQuestion < questions.length - 1 ? '下一题 →' : '查看结果 🎉'}
          </button>
        </div>

        {/* Question dots */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentQuestion
                  ? 'bg-amber-500 w-4'
                  : index < currentQuestion
                  ? 'bg-amber-300'
                  : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
