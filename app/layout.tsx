import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '中国历史人物 · 职场人格测试（24型）',
  description: '通过24道职场情境题，发现你的职场人格类型',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
