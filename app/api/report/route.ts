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

**组织定位：** ${primary.organizationRole}
**风险提示：** ${primary.risk}
${primary.aiValue ? `**AI时代价值：** ${primary.aiValue}` : ''}

---

### ⚔️ 副人格：${secondary.name}
**${secondary.title}**

${secondary.description}

**核心优势：**
${secondary.strengths.map((s) => `• ${s}`).join('\n')}

**潜在短板：**
${secondary.weaknesses.map((w) => `• ${w}`).join('\n')}

**组织定位：** ${secondary.organizationRole}

---

### 🎭 阴影人格：${shadow.name}
**${shadow.title}**

${shadow.description}

**需要注意：**
${shadow.weaknesses.map((w) => `• ${w}`).join('\n')}

**风险提示：** ${shadow.risk}
${shadow.aiValue ? `**AI时代价值：** ${shadow.aiValue}` : ''}

---

## 💡 综合分析

您同时具备 **${primary.name}** 和 **${secondary.name}** 的特质，这是非常难得的组合。

**${primary.name}** 赋予您 ${primary.keywords.join('、')}的能力，让您在职场中能够 ${primary.organizationRole}。

**${secondary.name}** 则帮助您 ${secondary.keywords.join('、')}，形成互补。

对于阴影人格 **${shadow.name}** 的特质，建议保持警觉。在适当场景下可以善加利用 ${shadow.keywords.join('、')}的优势，但要注意避免 ${shadow.risk}。

## 🎯 发展建议

1. **短期（1-3个月）**：专注于深化 ${primary.name} 的核心优势——${primary.strengths[0]}，在团队中建立专业权威
2. **中期（3-12个月）**：整合 ${secondary.name} 的特质——${secondary.strengths[0]}，提升综合能力
3. **长期（1-3年）**：学会在 ${shadow.name} 和正面特质之间找到平衡，形成独特的职场竞争力

## 🔮 AI时代提示

${primary.aiValue ? `您的 ${primary.name} 特质在AI时代非常有价值：${primary.aiValue}。` : ''}
${secondary.aiValue ? `而 ${secondary.name} 的 ${secondary.aiValue} 能力，同样是AI时代的稀缺资产。` : ''}
${shadow.aiValue ? (shadow.aiValue.startsWith('（负面）') ? `注意：${shadow.name} 的这种特质在AI时代需要正向引导。` : `此外，${shadow.aiValue} 也是值得关注的增值能力。`) : ''}

---

*本报告由「中国历史人物·职场24型人格测试」生成*
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
