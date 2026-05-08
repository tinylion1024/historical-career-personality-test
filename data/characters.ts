export type Character = {
  name: string;
  title: string;
  category: string;
  keywords: string[];
  organizationRole: string;
  risk: string;
  aiValue?: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careerAdvice: string[];
};

export const characters: Character[] = [
  // ========== 一、执行者系 ==========
  {
    name: "诸葛亮",
    title: "蜀汉丞相 · 卧龙先生",
    category: "执行者",
    keywords: ["兜底", "责任感", "操心"],
    organizationRole: "团队稳定器",
    risk: "被责任绑架",
    aiValue: "优秀的流程自动化专家",
    description: "智慧的化身，以鞠躬尽瘁死而后已的精神诠释忠义，是职场中最可靠的兜底型选手。",
    strengths: ["深谋远虑", "依法治国", "清正廉洁", "创新思维"],
    weaknesses: ["事必躬亲", "用人不疑不足", "过于理想化"],
    careerAdvice: ["制度管人", "流程管事", "创新驱动", "以身作则"]
  },
  {
    name: "李时珍",
    title: "明代药圣 · 医学巨匠",
    category: "执行者",
    keywords: ["长期积累", "深度研究", "不争"],
    organizationRole: "隐形专家",
    risk: "没影响力",
    aiValue: "垂直领域深度研究",
    description: "倾尽一生编写《本草纲目》，是最专注的匠人，追求极致深度而非广度。",
    strengths: ["专注极致", "实地考察", "创新突破", "坚持不懈"],
    weaknesses: ["不懂商业", "清贫一生", "不善交际"],
    careerAdvice: ["工匠精神", "深度研究", "著书立说"]
  },
  {
    name: "鲁班",
    title: "春秋鲁国 · 工匠之祖",
    category: "执行者",
    keywords: ["完美主义", "技术洁癖"],
    organizationRole: "质量守门人",
    risk: "过度打磨",
    aiValue: "精密技术与质量控制",
    description: "以巧夺天工著称，是古代最伟大的工匠，追求完美的技术和工程质量。",
    strengths: ["技术创新", "精益求精", "解决难题", "实用主义"],
    weaknesses: ["完美主义", "效率偏低", "不易妥协"],
    careerAdvice: ["技术深耕", "质量为本", "适时收尾"]
  },
  {
    name: "海瑞",
    title: "明代清官 · 海青天",
    category: "执行者",
    keywords: ["正义感", "看不惯问题"],
    organizationRole: "组织免疫系统",
    risk: "容易得罪人",
    aiValue: "合规与风险识别",
    description: "以清廉正直著称，是组织中最敢说话的人，是非对错绝不妥协。",
    strengths: ["刚正不阿", "敢于直言", "廉洁自律", "坚持原则"],
    weaknesses: ["不懂变通", "容易树敌", "忽视灰色地带"],
    careerAdvice: ["守住底线", "策略沟通", "建立同盟"]
  },
  {
    name: "岳飞",
    title: "南宋抗金名将 · 精忠报国",
    category: "执行者",
    keywords: ["忠诚", "执行到底"],
    organizationRole: "核心嫡系",
    risk: "容易被政治牺牲",
    aiValue: "执行力和忠诚度",
    description: "精忠报国，是军人魂的象征，对使命绝对忠诚，不打折扣执行到底。",
    strengths: ["军事才能", "身先士卒", "纪律严明", "忠义无双"],
    weaknesses: ["不懂政治", "过于刚正", "得罪权贵"],
    careerAdvice: ["专业能力", "品牌背书", "注意政治"]
  },
  {
    name: "愚公",
    title: "上古智者 · 韧性化身",
    category: "执行者",
    keywords: ["韧性", "不放弃"],
    organizationRole: "长期难项目推进者",
    risk: "战略方向错误时会很惨",
    aiValue: "复杂问题长期攻关",
    description: "不畏艰难，持之以恒，是面对困难时最能坚持的代表。",
    strengths: ["坚韧不拔", "不怕困难", "长远眼光", "脚踏实地"],
    weaknesses: ["不懂变通", "忽视捷径", "可能方向错误"],
    careerAdvice: ["选对方向", "持续积累", "灵活调整"]
  },

  // ========== 二、组织者系 ==========
  {
    name: "曹操",
    title: "魏武帝 · 乱世枭雄",
    category: "组织者",
    keywords: ["控资源", "控节奏"],
    organizationRole: "天然 leader",
    risk: "压迫感过强",
    aiValue: "资源整合与项目管理",
    description: "雄才大略，文武双全，是历史上最具争议的创业老板，控场能力极强。",
    strengths: ["唯才是举", "通达权变", "文学造诣", "知人善任"],
    weaknesses: ["生性多疑", "残忍好杀", "骄傲自负"],
    careerAdvice: ["不拘一格用人才", "灵活应变", "结果导向"]
  },
  {
    name: "曾国藩",
    title: "晚清重臣 · 湘军创立者",
    category: "组织者",
    keywords: ["稳", "长期主义"],
    organizationRole: "组织构建者",
    risk: "不够锐利",
    aiValue: "组织建设和长期规划",
    description: "以仁义治国，以忍辱负重成就大事，是儒家大丈夫的典型代表，最懂组织建设。",
    strengths: ["坚韧不拔", "知人善任", "自律严谨", "战略眼光"],
    weaknesses: ["过于谨慎", "不善变通", "多疑敏感"],
    careerAdvice: ["稳扎稳打", "重视团队", "长期规划", "德行为先"]
  },
  {
    name: "商鞅",
    title: "秦国变法 · 法家先驱",
    category: "组织者",
    keywords: ["变革", "强推进"],
    organizationRole: "改革负责人",
    risk: "容易被反噬",
    aiValue: "流程再造与变革管理",
    description: "以法治国，是最成功的变法者之一，强力推进改革是其核心能力。",
    strengths: ["锐意改革", "执法严格", "逻辑严密", "执行力强"],
    weaknesses: ["刻薄寡恩", "树敌过多", "不懂妥协"],
    careerAdvice: ["数据管理", "流程优化", "绩效导向"]
  },
  {
    name: "张居正",
    title: "明代首辅 · 改革家",
    category: "组织者",
    keywords: ["经营组织", "提升效率"],
    organizationRole: "CEO型人才",
    risk: "组织依赖过重",
    aiValue: "企业经营与效率提升",
    description: "一条鞭法改革，是最成功的职业经理人，最懂经营组织效率。",
    strengths: ["改革创新", "雷厉风行", "知人善任", "铁腕执行"],
    weaknesses: ["独断专行", "贪恋权力", "忽视清议"],
    careerAdvice: ["变革管理", "KPI导向", "借势而为"]
  },
  {
    name: "刘邦",
    title: "汉高祖 · 布衣天子",
    category: "组织者",
    keywords: ["用人", "整合资源"],
    organizationRole: "平台型 leader",
    risk: "自身能力未必最强",
    aiValue: "平台搭建与资源整合",
    description: "从亭长到皇帝，是最成功的草根创业者，最懂整合资源为我所用。",
    strengths: ["知人善任", "从谏如流", "能屈能伸", "目标明确"],
    weaknesses: ["轻慢士人", "贪图享乐", "猜忌功臣"],
    careerAdvice: ["用人不疑", "借力打力", "快速迭代"]
  },
  {
    name: "司马懿",
    title: "魏晋权臣 · 忍者之王",
    category: "组织者",
    keywords: ["生存", "等时机"],
    organizationRole: "长线博弈者",
    risk: "信任感低",
    aiValue: "风险规避与长期博弈",
    description: "以忍致胜，笑到最后，是职场隐忍的典范，最懂长期博弈。",
    strengths: ["隐忍持重", "深藏不露", "政治智慧", "家族管理"],
    weaknesses: ["过于阴沉", "保守固执", "信任有限"],
    careerAdvice: ["长期规划", "隐忍待机", "建立人脉网络"]
  },

  // ========== 三、影响力系 ==========
  {
    name: "苏轼",
    title: "北宋文豪 · 全才大师",
    category: "影响力",
    keywords: ["表达", "影响力"],
    organizationRole: "内容与认知传播者",
    risk: "容易看起来太轻",
    aiValue: "内容创作与个人品牌",
    description: "诗词书画无所不通，是历史上最有趣的灵魂，最懂内容传播。",
    strengths: ["多才多艺", "乐观豁达", "创新思维", "情商高手"],
    weaknesses: ["政治幼稚", "不善理财", "频繁被贬"],
    careerAdvice: ["斜杠发展", "逆境商高", "持续输出"]
  },
  {
    name: "张良",
    title: "汉初三杰 · 谋圣",
    category: "影响力",
    keywords: ["借力", "协同"],
    organizationRole: "高级协调者",
    risk: "存在感不够",
    aiValue: "跨界协调与资源对接",
    description: "运筹帷幄之中，决胜千里之外，是顶级战略家，最懂借力协同。",
    strengths: ["战略思维", "洞察人心", "急流勇退", "博学多才"],
    weaknesses: ["身体孱弱", "缺乏执行力", "过于超脱"],
    careerAdvice: ["战略规划", "见微知著", "适时进退"]
  },
  {
    name: "刘备",
    title: "蜀汉昭烈帝 · 汉室宗亲",
    category: "影响力",
    keywords: ["情绪价值", "聚人"],
    organizationRole: "团队灵魂",
    risk: "容易理想主义",
    aiValue: "团队文化建设",
    description: "以德服人，以情动人，是最会做人的创业者，最懂情绪价值。",
    strengths: ["以德服人", "知人待士", "百折不挠", "情商极高"],
    weaknesses: ["决策迟缓", "过于仁慈", "缺乏战略"],
    careerAdvice: ["文化凝聚团队", "情感激励", "坚持初心"]
  },
  {
    name: "和珅",
    title: "清代权臣 · 首富贪官",
    category: "影响力",
    keywords: ["社交", "向上管理"],
    organizationRole: "资源连接器",
    risk: "容易空心化",
    aiValue: "人脉资源整合",
    description: "最懂官场运作，是历史上最成功的资源连接器，但核心能力存疑。",
    strengths: ["社交高手", "向上管理", "资源整合", "察言观色"],
    weaknesses: ["缺乏真才", "贪得无厌", "易被取代"],
    careerAdvice: ["建立核心能力", "谨慎社交", "守住底线"]
  },
  {
    name: "妲己",
    title: "商朝宠妃 · 权谋高手",
    category: "影响力",
    keywords: ["情绪影响", "操纵氛围"],
    organizationRole: "情绪场制造者",
    risk: "极度消耗组织",
    aiValue: "氛围营造（负面）",
    description: "以美色和手段著称，是情绪操控的典型代表，短期内效果明显但长期有害。",
    strengths: ["情绪感知", "氛围把控", "人际操控", "快速见效"],
    weaknesses: ["破坏信任", "消耗组织", "短期导向"],
    careerAdvice: ["正向引导", "建立信任", "远离操纵"]
  },
  {
    name: "纪晓岚",
    title: "清代才子 · 铁齿铜牙",
    category: "影响力",
    keywords: ["高情商", "化解冲突"],
    organizationRole: "气氛平衡器",
    risk: "不够强推进",
    aiValue: "冲突调解与氛围维护",
    description: "以机智幽默著称，是职场高情商的代表，最懂化解冲突。",
    strengths: ["高情商", "幽默风趣", "化解尴尬", "人际圆融"],
    weaknesses: ["缺乏锐利", "推进不足", "难当大任"],
    careerAdvice: ["发挥情商优势", "补强专业", "找准定位"]
  },

  // ========== 四、战略者系 ==========
  {
    name: "鬼谷子",
    title: "战国纵横家 · 谋略之祖",
    category: "战略者",
    keywords: ["看趋势", "洞察人性"],
    organizationRole: "战略顾问",
    risk: "容易停留在观察",
    aiValue: "趋势分析与战略咨询",
    description: "培养出孙膑、庞涓、苏秦、张仪，是史上最牛导师，最懂洞察人性。",
    strengths: ["谋略大师", "因材施教", "纵横捭阖", "隐世高人"],
    weaknesses: ["过于神秘", "难以接近", "负面形象"],
    careerAdvice: ["人才培养", "知识变现", "个人品牌"]
  },
  {
    name: "韩信",
    title: "汉初三杰 · 兵仙",
    category: "战略者",
    keywords: ["全局战役", "战术天才"],
    organizationRole: "顶级操盘手",
    risk: "政治敏感度不足",
    aiValue: "复杂项目操盘",
    description: "点兵多多益善，是史上最伟大的军事天才之一，最擅长大局战役。",
    strengths: ["军事天才", "因地制宜", "胆识过人", "善于激励"],
    weaknesses: ["不懂政治", "居功自傲", "不善交际"],
    careerAdvice: ["专业深耕", "打造个人IP", "持续学习政治"]
  },
  {
    name: "王阳明",
    title: "明代大儒 · 心学创始人",
    category: "战略者",
    keywords: ["思想升级", "认知创新"],
    organizationRole: "新范式开创者",
    risk: "领先组织太多",
    aiValue: "认知升级与模式创新",
    description: "知行合一，是儒家修身齐家治国平天下的完整体现，最擅认知突破。",
    strengths: ["心学大师", "知行合一", "带兵打仗", "文学成就"],
    weaknesses: ["仕途不顺", "身体多病", "理论难懂"],
    careerAdvice: ["终身学习", "内心修炼", "实践验证"]
  },
  {
    name: "范蠡",
    title: "越国大夫 · 商圣",
    category: "战略者",
    keywords: ["懂进退", "及时抽身"],
    organizationRole: "高维生存者",
    risk: "不够长期绑定",
    aiValue: "转型与进化能力",
    description: "功成身退，三散千金，是功名利禄的通透者，最懂进退之道。",
    strengths: ["知进退", "商业头脑", "外交能力", "理财智慧"],
    weaknesses: ["隐世态度", "不够进取", "缺乏野心"],
    careerAdvice: ["跨界转型", "风险管理", "财富规划"]
  },

  // ========== 五、生存者系 ==========
  {
    name: "胡雪岩",
    title: "清代红顶商人 · 商圣",
    category: "生存者",
    keywords: ["抓机会", "商业敏锐"],
    organizationRole: "增长先锋",
    risk: "高波动",
    aiValue: "商业机会识别与增长",
    description: "从钱庄学徒到首富，是最成功的商业传奇，最懂抓机会。",
    strengths: ["商业头脑", "人脉经营", "政治嗅觉", "胆识过人"],
    weaknesses: ["官商勾结", "冒险激进", "结局悲惨"],
    careerAdvice: ["资源整合", "政商关系", "风险控制"]
  },
  {
    name: "陶渊明",
    title: "东晋诗人 · 田园诗祖",
    category: "生存者",
    keywords: ["低欲望", "去内耗"],
    organizationRole: "精神稳定者",
    risk: "容易边缘化",
    aiValue: "反内卷与精神健康",
    description: "不为五斗米折腰，是精神独立的代表，最懂去内耗。",
    strengths: ["精神独立", "知足常乐", "内心平静", "专注本质"],
    weaknesses: ["缺乏斗志", "容易满足", "边缘化风险"],
    careerAdvice: ["找到平衡", "守住本心", "适度进取"]
  }
];
