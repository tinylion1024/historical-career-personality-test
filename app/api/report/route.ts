import { NextRequest, NextResponse } from 'next/server';
import { characters } from '@/data/characters';

function generateReport(primaryName: string, secondaryName: string, shadowName: string): string {
  const primary = characters.find((c) => c.name === primaryName);
  const secondary = characters.find((c) => c.name === secondaryName);
  const shadow = characters.find((c) => c.name === shadowName);

  if (!primary || !secondary || !shadow) {
    return '无法生成报告，请重新测试。';
  }

  return `
# 🏆 职场人格测试报告

## 📊 您的职场人格

### 🌟 主人格：${primary.name}
**${primary.title}**

${primary.description}

**核心优势：**
${primary.strengths.map((s) => `• ${s}`).join('\n')}

**潜在短板：**
${primary.weaknesses.map((w) => `• ${w}`).join('\n')}

**职场建议：**
${primary.careerAdvice.map((a) => `• ${a}`).join('\n')}

---

### 🌈 副人格：${secondary.name}
**${secondary.title}**

${secondary.description}

**核心优势：**
${secondary.strengths.map((s) => `• ${s}`).join('\n')}

**潜在短板：**
${secondary.weaknesses.map((w) => `• ${w}`).join('\n')}

---

### 🌑 阴影人格：${shadow.name}
**${shadow.title}**

${shadow.description}

**核心优势：**
${shadow.strengths.map((s) => `• ${s}`).join('\n')}

**需要注意：**
${shadow.weaknesses.map((w) => `• ${w}`).join('\n')}

---

## 💡 综合分析

您同时具备 ${primary.name} 的战略思维和 ${secondary.name} 的人际技巧，这是非常难得的组合。建议在职场中充分发挥 ${primary.strengths[0]} 的优势，同时借鉴 ${secondary.strengths[0]} 来弥补不足。

对于阴影人格 ${shadow.name} 的特质，建议保持警觉，在适当场景下可以善加利用，但要注意避免其弱点对职业发展造成影响。

## 🎯 发展建议

1. **短期（1-3个月）**：专注于深化 ${primary.strengths[0]}，争取在团队中建立专业权威
2. **中期（3-12个月）**：拓展 ${secondary.strengths[0]}，提升跨部门协作能力
3. **长期（1-3年）**：整合三大人格特质，形成独特的职场竞争力

---

*本报告由「中国历史人物·职场人格测试」生成*
`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { result } = body;

    if (!result || !result.primary || !result.secondary || !result.shadow) {
      return NextResponse.json(
        { error: 'Invalid result data' },
        { status: 400 }
      );
    }

    const finalReport = generateReport(result.primary, result.secondary, result.shadow);

    return NextResponse.json({ finalReport });
  } catch (error) {
    console.error('Report generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
