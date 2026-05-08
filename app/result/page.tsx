'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CharacterData {
  name: string;
  title: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careerAdvice: string[];
}

interface ResultData {
  primary: string;
  secondary: string;
  shadow: string;
}

export default function ResultPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<ResultData | null>(null);
  const [report, setReport] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchResult = async () => {
      const answers = localStorage.getItem('testAnswers');
      if (!answers) {
        router.push('/');
        return;
      }

      try {
        const answersArray: number[] = JSON.parse(answers);

        // Get scores
        const scoreRes = await fetch('/api/score', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: answersArray }),
        });
        const scoreData = await scoreRes.json();
        setResult(scoreData.result);

        // Get report
        const reportRes = await fetch('/api/report', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ result: scoreData.result }),
        });
        const reportData = await reportRes.json();
        setReport(reportData.finalReport);
      } catch (error) {
        console.error('Error fetching result:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResult();
  }, [router]);

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRestart = () => {
    localStorage.removeItem('testAnswers');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-2xl">正在分析您的职场人格...</div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">加载失败，请重试</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          🏛️ 您的职场人格报告
        </h1>

        {/* Personality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Primary */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-6 shadow-2xl">
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <div className="text-white text-sm uppercase tracking-wider mb-2">主人格</div>
              <div className="text-white text-2xl font-bold mb-2">{result.primary}</div>
              <div className="text-amber-100 text-sm">核心驱动力</div>
            </div>
          </div>

          {/* Secondary */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-2xl">
            <div className="text-center">
              <div className="text-5xl mb-4">🌈</div>
              <div className="text-white text-sm uppercase tracking-wider mb-2">副人格</div>
              <div className="text-white text-2xl font-bold mb-2">{result.secondary}</div>
              <div className="text-blue-100 text-sm">辅助特质</div>
            </div>
          </div>

          {/* Shadow */}
          <div className="bg-gradient-to-br from-purple-600 to-fuchsia-700 rounded-3xl p-6 shadow-2xl">
            <div className="text-center">
              <div className="text-5xl mb-4">🌑</div>
              <div className="text-white text-sm uppercase tracking-wider mb-2">阴影人格</div>
              <div className="text-white text-2xl font-bold mb-2">{result.shadow}</div>
              <div className="text-purple-100 text-sm">需关注的一面</div>
            </div>
          </div>
        </div>

        {/* Report */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-700">{report}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={handleShare}
            className="flex-1 bg-white text-slate-800 py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all"
          >
            {copied ? '✅ 已复制链接!' : '📋 分享测试链接'}
          </button>
          <button
            onClick={handleRestart}
            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:from-amber-600 hover:to-orange-600 transition-all"
          >
            🔄 重新测试
          </button>
        </div>
      </div>
    </div>
  );
}
