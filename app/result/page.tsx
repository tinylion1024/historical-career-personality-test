'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
      let answers = null;
      try {
        answers = localStorage.getItem('testAnswers');
      } catch (e) {
        // localStorage not available in private mode
      }

      if (!answers) {
        router.push('/');
        return;
      }

      try {
        const answersArray: number[] = JSON.parse(answers);

        const scoreRes = await fetch('/api/score', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: answersArray }),
        });
        const scoreData = await scoreRes.json();
        setResult(scoreData.result);

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
    try {
      localStorage.removeItem('testAnswers');
    } catch (e) {
      // localStorage not available
    }
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen ink-texture flex items-center justify-center">
        <div className="text-center">
          <div className="mb-6 text-6xl">🔮</div>
          <h2 className="text-2xl text-cream mb-2">正在解读您的职场基因</h2>
          <p className="text-gold text-sm">大数据分析中，请稍候</p>
          {/* Loading dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen ink-texture flex items-center justify-center">
        <div className="text-center">
          <div className="mb-6 text-6xl">😔</div>
          <h2 className="text-2xl text-cream mb-4">报告生成失败</h2>
          <button
            onClick={handleRestart}
            className="bg-gold text-ink-black py-3 px-8 rounded-xl font-medium hover:bg-gold-light transition-colors"
          >
            返回首页重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ink-texture py-8 px-4">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gold text-sm tracking-widest mb-2">YOUR CAREER PERSONALITY</p>
          <h1 className="text-3xl md:text-4xl font-bold text-cream mb-2">
            你在职场中的「真身」
          </h1>
          <p className="text-cream/50 text-sm">中国历史人物 · 职场二十四型</p>
        </div>

        {/* Personality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Primary */}
          <div className="bg-gradient-to-br from-gold/90 to-gold text-ink-black rounded-2xl p-6 gold-glow">
            <div className="text-center">
              <div className="text-4xl mb-3">👑</div>
              <div className="text-ink-black/60 text-xs uppercase tracking-wider mb-2">主人格</div>
              <div className="text-xl font-bold mb-1">{result.primary}</div>
              <div className="text-ink-black/70 text-sm">核心驱动力</div>
            </div>
          </div>

          {/* Secondary */}
          <div className="bg-ink-slate border border-gold/30 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚔️</div>
              <div className="text-gold text-xs uppercase tracking-wider mb-2">副人格</div>
              <div className="text-cream text-xl font-bold mb-1">{result.secondary}</div>
              <div className="text-cream/60 text-sm">辅助特质</div>
            </div>
          </div>

          {/* Shadow */}
          <div className="bg-ink-slate border border-purple-500/30 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎭</div>
              <div className="text-purple-400 text-xs uppercase tracking-wider mb-2">阴影人格</div>
              <div className="text-cream text-xl font-bold mb-1">{result.shadow}</div>
              <div className="text-cream/60 text-sm">隐藏的另一面</div>
            </div>
          </div>
        </div>

        {/* Report */}
        <div className="bg-ink-dark/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 mb-8 ink-border">
          <div className="prose prose-lg prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-gold text-2xl font-bold mb-4 mt-6 first:mt-0 gold-shimmer">{children}</h1>,
                h2: ({ children }) => <h2 className="text-cream text-xl font-semibold mb-3 mt-6">{children}</h2>,
                h3: ({ children }) => <h3 className="text-gold/90 text-lg font-medium mb-2 mt-4">{children}</h3>,
                p: ({ children }) => <p className="text-cream/80 leading-relaxed mb-4">{children}</p>,
                ul: ({ children }) => <ul className="text-cream/70 space-y-1 mb-4 list-none">{children}</ul>,
                li: ({ children }) => <li className="flex items-start gap-2"><span className="text-gold mt-1">•</span><span>{children}</span></li>,
                strong: ({ children }) => <strong className="text-gold font-semibold">{children}</strong>,
                hr: () => <hr className="border-gold/20 my-6" />,
              }}
            >{report}</ReactMarkdown>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={handleShare}
            className="flex-1 bg-ink-slate border border-gold/30 text-cream py-4 px-8 rounded-xl font-medium text-lg hover:bg-ink-slate/80 hover:border-gold/50 transition-all text-center"
          >
            {copied ? '✨ 已复制，快去分享吧！' : '🔗 复制链接分享给朋友'}
          </button>
          <button
            onClick={handleRestart}
            className="flex-1 bg-gradient-to-r from-gold to-gold-light text-ink-black py-4 px-8 rounded-xl font-medium text-lg hover:opacity-90 transition-all"
          >
            🔄 再测一次
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-cream/30 text-xs">
            中国历史人物 · 职场二十四型人格测试
          </p>
        </div>
      </div>
    </div>
  );
}
