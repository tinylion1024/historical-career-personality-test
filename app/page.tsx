'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🏛️ 中国历史人物
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-600 mb-6">
            职场人格测试（24型）
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full" />
        </div>

        <div className="text-left bg-amber-50 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 测试说明</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">●</span>
              <span>共 <strong>24 道</strong>职场情境选择题</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">●</span>
              <span>每题根据您的选择为不同历史人物加分</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">●</span>
              <span>测试结束后获得三大职场人格解读</span>
            </li>
          </ul>
        </div>

        <div className="text-left bg-gray-50 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 您将获得</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="text-3xl mb-2">🌟</div>
              <div className="font-semibold text-amber-600">主人格</div>
              <div className="text-sm text-gray-500">您的核心职场特质</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="text-3xl mb-2">🌈</div>
              <div className="font-semibold text-blue-600">副人格</div>
              <div className="text-sm text-gray-500">您的辅助职场特质</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="text-3xl mb-2">🌑</div>
              <div className="font-semibold text-purple-600">阴影人格</div>
              <div className="text-sm text-gray-500">需要关注的一面</div>
            </div>
          </div>
        </div>

        <button
          onClick={() => router.push('/test')}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-semibold py-4 px-8 rounded-2xl shadow-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200"
        >
          开始测试 🚀
        </button>

        <p className="mt-6 text-sm text-gray-400">
          预计用时：3-5 分钟
        </p>
      </div>
    </div>
  );
}
