export type Character = {
  name: string;
  title: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careerAdvice: string[];
};

export const characters: Character[] = [
  {
    name: "曾国藩",
    title: "晚清重臣 · 湘军创立者",
    description: "以仁义治国，以忍辱负重成就大事，是儒家大丈夫的典型代表。",
    strengths: ["坚韧不拔", "知人善任", "自律严谨", "战略眼光"],
    weaknesses: ["过于谨慎", "不善变通", "多疑敏感"],
    careerAdvice: ["稳扎稳打", "重视团队", "长期规划", "德行为先"]
  },
  {
    name: "诸葛亮",
    title: "蜀汉丞相 · 卧龙先生",
    description: "智慧的化身，以鞠躬尽瘁死而后已的精神诠释忠义。",
    strengths: ["深谋远虑", "依法治国", "清正廉洁", "创新思维"],
    weaknesses: ["事必躬亲", "用人不疑不足", "过于理想化"],
    careerAdvice: ["制度管人", "流程管事", "创新驱动", "以身作则"]
  },
  {
    name: "曹操",
    title: "魏武帝 · 乱世枭雄",
    description: "雄才大略，文武双全，是历史上最具争议的创业老板。",
    strengths: ["唯才是举", "通达权变", "文学造诣", "知人善任"],
    weaknesses: ["生性多疑", "残忍好杀", "骄傲自负"],
    careerAdvice: ["不拘一格用人才", "灵活应变", "结果导向"]
  },
  {
    name: "刘备",
    title: "蜀汉昭烈帝 · 汉室宗亲",
    description: "以德服人，以情动人，是最会做人的创业者。",
    strengths: ["以德服人", "知人待士", "百折不挠", "情商极高"],
    weaknesses: ["决策迟缓", "过于仁慈", "缺乏战略"],
    careerAdvice: ["文化凝聚团队", "情感激励", "坚持初心"]
  },
  {
    name: "刘邦",
    title: "汉高祖 · 布衣天子",
    description: "从亭长到皇帝，是最成功的草根创业者。",
    strengths: ["知人善任", "从谏如流", "能屈能伸", "目标明确"],
    weaknesses: ["轻慢士人", "贪图享乐", "猜忌功臣"],
    careerAdvice: ["用人不疑", "借力打力", "快速迭代"]
  },
  {
    name: "韩信",
    title: "汉初三杰 · 兵仙",
    description: "点兵多多益善，是史上最伟大的军事天才之一。",
    strengths: ["军事天才", "因地制宜", "胆识过人", "善于激励"],
    weaknesses: ["不懂政治", "居功自傲", "不善交际"],
    careerAdvice: ["专业深耕", "打造个人IP", "持续学习政治"]
  },
  {
    name: "张良",
    title: "汉初三杰 · 谋圣",
    description: "运筹帷幄之中，决胜千里之外，是顶级战略家。",
    strengths: ["战略思维", "洞察人心", "急流勇退", "博学多才"],
    weaknesses: ["身体孱弱", "缺乏执行力", "过于超脱"],
    careerAdvice: ["战略规划", "见微知著", "适时进退"]
  },
  {
    name: "司马懿",
    title: "魏晋权臣 · 忍者之王",
    description: "以忍致胜，笑到最后，是职场隐忍的典范。",
    strengths: ["隐忍持重", "深藏不露", "政治智慧", "家族管理"],
    weaknesses: ["过于阴沉", "保守固执", "信任有限"],
    careerAdvice: ["长期规划", "隐忍待机", "建立人脉网络"]
  },
  {
    name: "商鞅",
    title: "秦国变法 · 法家先驱",
    description: "以法治国，是最成功的变法者之一。",
    strengths: ["锐意改革", "执法严格", "逻辑严密", "执行力强"],
    weaknesses: ["刻薄寡恩", "树敌过多", "不懂妥协"],
    careerAdvice: ["数据管理", "流程优化", "绩效导向"]
  },
  {
    name: "范蠡",
    title: "越国大夫 · 商圣",
    description: "功成身退，三散千金，是功名利禄的通透者。",
    strengths: ["知进退", "商业头脑", "外交能力", "理财智慧"],
    weaknesses: ["隐世态度", "不够进取", "缺乏野心"],
    careerAdvice: ["跨界转型", "风险管理", "财富规划"]
  },
  {
    name: "王阳明",
    title: "明代大儒 · 心学创始人",
    description: "知行合一，是儒家修身齐家治国平天下的完整体现。",
    strengths: ["心学大师", "知行合一", "带兵打仗", "文学成就"],
    weaknesses: ["仕途不顺", "身体多病", "理论难懂"],
    careerAdvice: ["终身学习", "内心修炼", "实践验证"]
  },
  {
    name: "苏轼",
    title: "北宋文豪 · 全才大师",
    description: "诗词书画无所不通，是历史上最有趣的灵魂之一。",
    strengths: ["多才多艺", "乐观豁达", "创新思维", "情商高手"],
    weaknesses: ["政治幼稚", "不善理财", "频繁被贬"],
    careerAdvice: ["斜杠发展", "逆境商高", "持续输出"]
  },
  {
    name: "李时珍",
    title: "明代药圣 · 医学巨匠",
    description: "倾尽一生编写《本草纲目》，是最专注的匠人。",
    strengths: ["专注极致", "实地考察", "创新突破", "坚持不懈"],
    weaknesses: ["不懂商业", "清贫一生", "不善交际"],
    careerAdvice: ["工匠精神", "深度研究", "著书立说"]
  },
  {
    name: "岳飞",
    title: "南宋抗金名将 · 民族英雄",
    description: "精忠报国，是军人魂的象征。",
    strengths: ["军事才能", "身先士卒", "纪律严明", "忠义无双"],
    weaknesses: ["不懂政治", "过于刚正", "得罪权贵"],
    careerAdvice: ["专业能力", "品牌背书", "注意政治敏感"]
  },
  {
    name: "胡雪岩",
    title: "清代红顶商人 · 商圣",
    description: "从钱庄学徒到首富，是最成功的商业传奇。",
    strengths: ["商业头脑", "人脉经营", "政治嗅觉", "胆识过人"],
    weaknesses: ["官商勾结", "冒险激进", "结局悲惨"],
    careerAdvice: ["资源整合", "政商关系", "风险控制"]
  },
  {
    name: "鬼谷子",
    title: "战国纵横家 · 谋略之祖",
    description: "培养出孙膑、庞涓、苏秦、张仪，是史上最牛导师。",
    strengths: ["谋略大师", "因材施教", "纵横捭阖", "隐世高人"],
    weaknesses: ["过于神秘", "难以接近", "负面形象"],
    careerAdvice: ["人才培养", "知识变现", "个人品牌"]
  },
  {
    name: "李世民",
    title: "唐太宗 · 天可汗",
    description: "开创贞观之治，是历史上最成功的皇帝之一。",
    strengths: ["知人善任", "纳谏如流", "文治武功", "胸怀宽广"],
    weaknesses: ["玄武门之变", "晚年骄奢", "继承人问题"],
    careerAdvice: ["团队建设", "绩效管理", "文化建设"]
  },
  {
    name: "武则天",
    title: "中国唯一女皇帝",
    description: "从才人到皇帝，是打破职场天花板的典范。",
    strengths: ["政治智慧", "知人善任", "铁腕手段", "创新制度"],
    weaknesses: ["酷吏政治", "晚年昏聩", "任用外戚"],
    careerAdvice: ["打破偏见", "自我驱动", "政治智慧"]
  },
  {
    name: "成吉思汗",
    title: "蒙古帝国创立者 · 一代天骄",
    description: "建立历史上最大帝国，是最成功的征服者。",
    strengths: ["军事天才", "组织能力", "开放包容", "战略眼光"],
    weaknesses: ["嗜血残暴", "破坏性大", "缺乏建设"],
    careerAdvice: ["国际化视野", "组织扩张", "标准化管理"]
  },
  {
    name: "房玄龄",
    title: "唐代名相 · 贞观之治设计师",
    description: "辅佐李世民治理天下，是最称职的副手。",
    strengths: ["谋划周全", "低调务实", "调和鼎鼐", "忠诚可靠"],
    weaknesses: ["过于低调", "不善表现", "缺乏主见"],
    careerAdvice: ["辅佐艺术", "幕后英雄", "团队配合"]
  },
  {
    name: "杜如晦",
    title: "唐代名相 · 房谋杜断",
    description: "与房玄龄并称，是李世民最重要的谋士。",
    strengths: ["决断果敢", "洞察力强", "执行有力", "忠诚度高"],
    weaknesses: ["英年早逝", "缺乏著述", "后继乏人"],
    careerAdvice: ["果断决策", "快速执行", "培养梯队"]
  },
  {
    name: "张居正",
    title: "明代首辅 · 改革家",
    description: "一条鞭法改革，是最成功的职业经理人。",
    strengths: ["改革创新", "雷厉风行", "知人善任", "铁腕执行"],
    weaknesses: ["独断专行", "贪恋权力", "忽视清议"],
    careerAdvice: ["变革管理", "KPI导向", "借势而为"]
  },
  {
    name: "沈万三",
    title: "明代首富 · 财富传奇",
    description: "富甲天下，是古代最成功的创业者。",
    strengths: ["商业天才", "抓住机遇", "规模化经营", "财富嗅觉"],
    weaknesses: ["不懂政治", "过于高调", "结局悲惨"],
    careerAdvice: ["商业模式创新", "规模化扩张", "政商关系处理"]
  },
  {
    name: "左宗棠",
    title: "晚清重臣 · 收复新疆",
    description: "抬棺出征收复新疆，是最能打仗的CEO。",
    strengths: ["军事才能", "刚正不阿", "战略眼光", "自强不息"],
    weaknesses: ["性格孤傲", "不善交际", "政治能力弱"],
    careerAdvice: ["技术立身", "硬核能力", "战略规划"]
  }
];
