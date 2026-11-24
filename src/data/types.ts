import type { MbtiTypeInfo, PersonalityGroup } from '../types';

export const GROUP_THEMES: Record<
  PersonalityGroup,
  {
    name: string;
    bg: string;
    text: string;
    accent: string;
    badge: string;
    bar: string;
    light: string;
  }
> = {
  analyst: {
    name: '분석가형 (Analysts)',
    bg: 'bg-purple-900',
    text: 'text-purple-700',
    accent: '#8b5cf6',
    badge: 'bg-purple-100 text-purple-800 border-purple-200',
    bar: 'bg-purple-500',
    light: 'bg-purple-50',
  },
  diplomat: {
    name: '외교관형 (Diplomats)',
    bg: 'bg-emerald-900',
    text: 'text-emerald-700',
    accent: '#10b981',
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    bar: 'bg-emerald-500',
    light: 'bg-emerald-50',
  },
  sentinel: {
    name: '관리자형 (Sentinels)',
    bg: 'bg-sky-900',
    text: 'text-sky-700',
    accent: '#0284c7',
    badge: 'bg-sky-100 text-sky-800 border-sky-200',
    bar: 'bg-sky-500',
    light: 'bg-sky-50',
  },
  explorer: {
    name: '탐험가형 (Explorers)',
    bg: 'bg-amber-900',
    text: 'text-amber-700',
    accent: '#f59e0b',
    badge: 'bg-amber-100 text-amber-800 border-amber-200',
    bar: 'bg-amber-500',
    light: 'bg-amber-50',
  },
};

export const MBTI_TYPES: Record<string, MbtiTypeInfo> = {
  // --- Analysts (분석가형) ---
  INTJ: {
    code: 'INTJ',
    title: '용의주도한 전략가',
    subtitle: '상상력이 풍부하면서도 결단력 있는 완벽주의 지략가',
    group: 'analyst',
    groupName: '분석가형',
    avatar: '♟️',
    themeColor: GROUP_THEMES.analyst,
    summary: [
      '모든 일에 전략과 체계를 세우며, 장기적인 비전을 실현하는 데 탁월합니다.',
      '독립심이 강하고 비효율과 관습에 타협하지 않는 냉철한 합리주의자입니다.',
      '겉으로는 차가워 보이지만 깊은 지적 탐구심과 확고한 내면의 기준을 지닙니다.',
    ],
    strengths: ['치밀한 전략적 통찰력', '강한 독립심과 추진력', '지적 호기심과 높은 기준'],
    weaknesses: ['지나친 완벽주의와 비판적 시선', '감정적 교류의 어려움', '융통성 부족'],
    workStyle: '독립적으로 깊게 사고하고 구조적 문제를 근본부터 해결하는 환경에서 최상의 역량을 발휘합니다.',
    bestMatch: {
      code: 'ENFP',
      name: '재기발랄한 활동가',
      desc: '서로의 부족한 통찰과 활력을 완벽하게 채워주는 상호보완 찰떡궁합',
    },
    famousQuote: '“세상은 끝없는 지적 체스판이며, 모든 행동에는 계산된 이유가 있다.”',
  },

  INTP: {
    code: 'INTP',
    title: '논리적인 사색가',
    subtitle: '끊임없이 새로운 원리를 탐구하는 독창적인 이론가',
    group: 'analyst',
    groupName: '분석가형',
    avatar: '🧪',
    themeColor: GROUP_THEMES.analyst,
    summary: [
      '지적 호기심이 끝이 없으며, 복잡한 문제의 본질을 꿰뚫어 분석합니다.',
      '틀에 갇힌 사고를 거부하고 기존 관념에 끊임없이 의문을 제기합니다.',
      '자신의 관심 분야에 몰입할 때 놀라운 독창성과 통찰력을 드러냅니다.',
    ],
    strengths: ['독창적인 분석력', '열린 사고와 객관성', '복잡한 추상적 개념의 이해'],
    weaknesses: ['실행보다 생각에 매몰되기 쉬움', '일상적 규칙과 마감 관리 취약', '타인의 감정 공감 미숙'],
    workStyle: '간섭 없이 자율성이 보장되며, 새로운 난제를 탐구하고 설계할 때 빛납니다.',
    bestMatch: {
      code: 'ENTJ',
      name: '대담한 통솔자',
      desc: '사색가의 혁신적 아이디어를 통솔자가 거침없이 현실로 실행시키는 환상의 시너지',
    },
    famousQuote: '“질문하지 않는 삶은 배울 수 없으며, 진리는 항상 의심 너머에 있다.”',
  },

  ENTJ: {
    code: 'ENTJ',
    title: '대담한 통솔자',
    subtitle: '대담한 비전과 강력한 카리스마로 목표를 쟁취하는 리더',
    group: 'analyst',
    groupName: '분석가형',
    avatar: '👑',
    themeColor: GROUP_THEMES.analyst,
    summary: [
      '목표가 정해지면 거침없이 사람과 자원을 지휘하여 성과를 만들어냅니다.',
      '비효율을 용납하지 않으며, 결단력 있고 논리적인 전략을 수립합니다.',
      '어려운 위기 상황에서도 주도권을 잡고 조직을 이끄는 타고난 리더입니다.',
    ],
    strengths: ['탁월한 리더십과 카리스마', '강력한 추진력과 결단력', '장기적 비전 기획력'],
    weaknesses: ['타인에게 엄격하고 참을성이 부족함', '감정적 배려 소홀', '지배적이거나 독단적인 태도'],
    workStyle: '스스로 조직을 주도하고 과감한 비전을 성과로 입증할 수 있는 환경을 선호합니다.',
    bestMatch: {
      code: 'INFP',
      name: '열정적인 중재자',
      desc: '통솔자의 추진력과 중재자의 따스한 인간미가 만나 완벽한 조화를 이룸',
    },
    famousQuote: '“불가능이란 없다. 방법이 없다면 내가 만들면 된다.”',
  },

  ENTP: {
    code: 'ENTP',
    title: '뜨거운 논쟁을 즐기는 변론가',
    subtitle: '지적 도전을 두려워하지 않는 재치 만점의 혁신가',
    group: 'analyst',
    groupName: '분석가형',
    avatar: '⚡',
    themeColor: GROUP_THEMES.analyst,
    summary: [
      '기존 질서에 도전하고 새로운 아이디어를 끊임없이 창출해내는 브레인스토머입니다.',
      '뛰어난 언변과 재치로 토론과 대화를 즐기며 다방면에 호기심이 많습니다.',
      '반복적인 일상보다 번뜩이는 직관과 반전의 계기를 만들어내는 것을 좋아합니다.',
    ],
    strengths: ['기민하고 순발력 넘치는 두뇌', '혁신적인 아이디어 발굴', '뛰어난 화술과 설득력'],
    weaknesses: ['뒷심 부족과 끈기 부족', '지나치게 논쟁을 즐겨 반발을 살 수 있음', '세부 실무 경시'],
    workStyle: '형식에 얽매이지 않고 자유롭게 아이디어를 교환하며 창의적인 프로젝트를 시작할 때 강력합니다.',
    bestMatch: {
      code: 'INFJ',
      name: '선의의 옹호자',
      desc: '변론가의 지적 에너지와 옹호자의 깊이 있는 통찰이 서로를 가장 깊게 이해함',
    },
    famousQuote: '“규칙은 깨지기 위해 존재하며, 최고의 아이디어는 치열한 토론 속에서 피어난다.”',
  },

  // --- Diplomats (외교관형) ---
  INFJ: {
    code: 'INFJ',
    title: '선의의 옹호자',
    subtitle: '조용하지만 강인한 신념과 깊은 통찰력을 지닌 이상주의자',
    group: 'diplomat',
    groupName: '외교관형',
    avatar: '🌱',
    themeColor: GROUP_THEMES.diplomat,
    summary: [
      '사람의 마음을 꿰뚫어 보는 섬세한 직관과 세상을 더 낫게 만들려는 신념이 있습니다.',
      '말투는 부드럽지만 원칙과 가치에 대해서는 절대 타협하지 않는 외유내강입니다.',
      '혼자만의 공간에서 에너지를 채우며 타인을 깊이 돕는 것에 보람을 느낍니다.',
    ],
    strengths: ['깊은 공감과 뛰어난 통찰력', '확고한 가치관과 이상주의', '진정성 있는 관계 형성'],
    weaknesses: ['쉽게 번아웃이 오는 감정 소모', '지나치게 높은 이상과 비판 민감성', '마음을 닫는 은둔 경향'],
    workStyle: '인류와 사회에 긍정적인 가치를 전하고 진정성 있는 영향력을 발휘하는 일에 진심입니다.',
    bestMatch: {
      code: 'ENTP',
      name: '뜨거운 논쟁을 즐기는 변론가',
      desc: '서로의 세계를 넓혀주며 지적인 스파크와 영감을 주고받는 영혼의 단짝',
    },
    famousQuote: '“세상을 바꾸는 힘은 조용하지만 흔들리지 않는 신념에서 시작된다.”',
  },

  INFP: {
    code: 'INFP',
    title: '열정적인 중재자',
    subtitle: '마음속 깊은 온기와 진정성을 품은 낭만적 몽상가',
    group: 'diplomat',
    groupName: '외교관형',
    avatar: '🌸',
    themeColor: GROUP_THEMES.diplomat,
    summary: [
      '나만의 개성과 진정성을 가장 소중히 여기며 풍부한 감수성을 지녔습니다.',
      '타인의 감정에 깊이 공감하고 상처받은 이들을 따뜻하게 위로하는 치유자입니다.',
      '현실적인 타협보다 내면의 도덕적 신념과 의미를 좇아 묵묵히 걸어갑니다.',
    ],
    strengths: ['풍부한 상상력과 예술적 감수성', '진심 어린 공감과 포용력', '자신만의 확고한 가치관'],
    weaknesses: ['현실 감각과 실천력 부족', '비판에 대한 지나친 상처', '쉽게 고립되거나 무기력해짐'],
    workStyle: '자신의 가치관과 부합하고, 자율성과 창의적인 자기표현이 가능한 환경에서 빛납니다.',
    bestMatch: {
      code: 'ENTJ',
      name: '대담한 통솔자',
      desc: '중재자의 따뜻한 비전에 통솔자가 현실적인 날개를 달아주는 최고의 궁합',
    },
    famousQuote: '“어둠 속에서도 빛나는 나만의 별을 따라 진실하게 살아가는 것이 인생이다.”',
  },

  ENFJ: {
    code: 'ENFJ',
    title: '정의로운 사회운동가',
    subtitle: '사람들을 따뜻하게 이끌며 긍정적인 변화를 만드는 지도자',
    group: 'diplomat',
    groupName: '외교관형',
    avatar: '🕊️',
    themeColor: GROUP_THEMES.diplomat,
    summary: [
      '타인의 잠재력을 발견하고 북돋아 주는 따뜻하고 매력적인 리더입니다.',
      '탁월한 공감 능력과 뛰어난 화술로 사람들의 마음을 하나로 묶습니다.',
      '모두가 조화롭고 행복한 공동체를 만들기 위해 헌신을 아끼지 않습니다.',
    ],
    strengths: ['자연스러운 친화력과 리더십', '헌신적인 이타심과 공감력', '신뢰를 주는 뛰어난 소통'],
    weaknesses: ['타인의 시선과 인정에 지나치게 집착', '모든 짐을 짊어지려는 과부하', '냉정한 결단의 어려움'],
    workStyle: '팀원들을 독려하고 긍정적인 동기부여를 주도하며 협력적인 성과를 만들어냅니다.',
    bestMatch: {
      code: 'INFP',
      name: '열정적인 중재자',
      desc: '서로의 진심을 누구보다 잘 알아주고 정서적으로 든든한 버팀목이 되어줌',
    },
    famousQuote: '“우리가 함께 손잡을 때, 불가능한 변화도 마침내 현실이 된다.”',
  },

  ENFP: {
    code: 'ENFP',
    title: '재기발랄한 활동가',
    subtitle: '에너지와 영감이 넘쳐흘러 주변을 밝히는 자유로운 영혼',
    group: 'diplomat',
    groupName: '외교관형',
    avatar: '✨',
    themeColor: GROUP_THEMES.diplomat,
    summary: [
      '사람과 세상에 대한 호기심이 가득하며, 지루한 일상을 축제로 만드는 에너자이저입니다.',
      '뛰어난 친화력으로 누구와도 금세 친구가 되며, 영감이 떠오르면 열정적으로 뛰어듭니다.',
      '진정성 있는 감정 교류를 사랑하고 사람들의 특별한 점을 찾아 칭찬합니다.',
    ],
    strengths: ['끝없는 열정과 창의력', '비타민 같은 사교성과 친화력', '열린 시야와 유연한 적응력'],
    weaknesses: ['반복 작업에 대한 극심한 지루함', '감정 기복과 집중력 분산', '마무리가 흐지부지될 위험'],
    workStyle: '창의적인 아이디어를 자유롭게 시도하고 사람들과 생생하게 소통할 때 최고입니다.',
    bestMatch: {
      code: 'INTJ',
      name: '용의주도한 전략가',
      desc: '활동가의 무한한 아이디어를 전략가가 명확한 체계로 현실화해주는 찰떡궁합',
    },
    famousQuote: '“인생은 모험으로 가득한 축제이며, 모든 만남에는 빛나는 가능성이 숨어있다.”',
  },

  // --- Sentinels (관리자형) ---
  ISTJ: {
    code: 'ISTJ',
    title: '청렴결백한 논리주의자',
    subtitle: '책임감과 신뢰의 대명사, 묵묵히 원칙을 지키는 현실주의자',
    group: 'sentinel',
    groupName: '관리자형',
    avatar: '📋',
    themeColor: GROUP_THEMES.sentinel,
    summary: [
      '주어진 약속과 규칙을 철저히 지키며, 조직에서 가장 신뢰받는 든든한 기둥입니다.',
      '사실과 데이터를 바탕으로 실용적인 결정을 내리며 일관성을 중요시합니다.',
      '말보다는 행동으로 자신의 책임감을 입증하는 묵직한 실행가입니다.',
    ],
    strengths: ['타협 없는 정직과 신뢰성', '철저한 계획성과 정리 정돈', '인내심과 높은 책임감'],
    weaknesses: ['변화에 대한 거부감과 보수성', '융통성 부족과 고집', '감정 표현의 서투름'],
    workStyle: '명확한 규칙과 체계가 있고, 성실함과 정확성이 존중받는 환경에서 최강입니다.',
    bestMatch: {
      code: 'ESFP',
      name: '자유로운 영혼의 연예인',
      desc: '철저한 안정감과 즉흥적인 즐거움이 만나 서로에게 인생의 새로운 밸런스를 선물함',
    },
    famousQuote: '“약속은 지켜져야 하며, 신뢰는 성실한 행동의 축적으로만 완성된다.”',
  },

  ISFJ: {
    code: 'ISFJ',
    title: '용감한 수호자',
    subtitle: '묵묵히 주변 사람들을 보살피는 헌신적이고 따뜻한 조력자',
    group: 'sentinel',
    groupName: '관리자형',
    avatar: '🛡️',
    themeColor: GROUP_THEMES.sentinel,
    summary: [
      '세심한 관찰력으로 타인의 필요를 먼저 알아채고 조용히 배려하는 천사입니다.',
      '가족과 조직에 대한 충성심이 높으며 자신이 맡은 일은 끝까지 완수합니다.',
      '칭찬을 바라고 일하지 않지만 인정받을 때 깊은 행복을 느끼는 진정한 수호자입니다.',
    ],
    strengths: ['세심한 배려와 뛰어난 기억력', '성실한 책임감과 충직함', '안정적이고 실질적인 지원'],
    weaknesses: ['자신의 감정과 욕구 억누름', '거절하지 못해 스스로 번아웃 초래', '변화에 대한 불안'],
    workStyle: '사람들에게 실질적인 도움을 주고 질서와 배려가 공존하는 안정적인 조직을 선호합니다.',
    bestMatch: {
      code: 'ESTP',
      name: '모험을 즐기는 사업가',
      desc: '수호자의 따뜻한 울타리 안에서 사업가가 마음껏 뛰어노는 든든한 짝꿍',
    },
    famousQuote: '“가장 큰 기쁨은 내가 소중히 여기는 이들이 편안하고 안전하게 미소 짓는 것이다.”',
  },

  ESTJ: {
    code: 'ESTJ',
    title: '엄격한 관리자',
    subtitle: '질서와 원칙을 세우며 목표를 효율적으로 달성하는 지휘관',
    group: 'sentinel',
    groupName: '관리자형',
    avatar: '🏛️',
    themeColor: GROUP_THEMES.sentinel,
    summary: [
      '옳다고 믿는 원칙과 법도를 수호하며 공동체를 체계적으로 관리합니다.',
      '명확한 기준과 지침으로 일을 분배하고 지체 없이 성과를 끌어냅니다.',
      '정직하고 솔직하며 혼란스러운 상황을 일목요연하게 정돈하는 해결사입니다.',
    ],
    strengths: ['명확한 조직 관리력과 리더십', '헌신적 추진력과 성실함', '논리적이고 객관적인 판단'],
    weaknesses: ['융통성 부족과 완고함', '상대방의 정서적 사정에 대한 무관심', '통제 성향'],
    workStyle: '체계적인 프로세스가 확립되어 있고 공정한 룰에 따라 실적을 내는 환경에서 뛰어납니다.',
    bestMatch: {
      code: 'ISFP',
      name: '호기심 많은 예술가',
      desc: '관리자의 든든한 가이드와 예술가의 부드러운 유연함이 어우러지는 밸런스',
    },
    famousQuote: '“체계와 원칙이 바로 설 때 조직의 성공과 개인의 성장이 보장된다.”',
  },

  ESFJ: {
    code: 'ESFJ',
    title: '사교적인 외교관',
    subtitle: '모두를 아우르며 온기를 전하는 모임의 중심이자 분위기 메이커',
    group: 'sentinel',
    groupName: '관리자형',
    avatar: '🤝',
    themeColor: GROUP_THEMES.sentinel,
    summary: [
      '사람들과 함께할 때 가장 빛나며 주변 사람들의 안부를 꼼꼼히 챙깁니다.',
      '조화로운 인간관계를 최우선으로 여기며 갈등을 중재하고 분위기를 띄웁니다.',
      '전통과 예의를 중시하며 누구에게나 친절하고 다정한 인기인입니다.',
    ],
    strengths: ['뛰어난 친화력과 공감 능력', '세심한 관찰력과 챙김', '책임감 있고 성실한 협동심'],
    weaknesses: ['타인의 시선과 비판에 취약함', '지나친 인정 욕구', '갈등 회피 경향'],
    workStyle: '팀원 간의 유대감이 돈독하고 서로 칭찬과 격려를 아끼지 않는 화기애애한 환경을 좋아합니다.',
    bestMatch: {
      code: 'ISTP',
      name: '만능 재주꾼',
      desc: '외교관의 다정한 배려와 재주꾼의 쿨하고 현실적인 시선이 조화를 이룸',
    },
    famousQuote: '“서로를 향한 따뜻한 관심과 보살핌이 세상을 더욱 살맛 나게 만든다.”',
  },

  // --- Explorers (탐험가형) ---
  ISTP: {
    code: 'ISTP',
    title: '만능 재주꾼',
    subtitle: '도구를 능숙하게 다루며 상황에 민첩하게 적응하는 해결사',
    group: 'explorer',
    groupName: '탐험가형',
    avatar: '🔧',
    themeColor: GROUP_THEMES.explorer,
    summary: [
      '냉철한 이성과 호기심을 동시에 지녀 기계나 문제를 직접 분해하고 해결합니다.',
      '평소엔 과묵하고 차분하지만 위기 상황이 닥치면 탁월한 순발력을 발휘합니다.',
      '불필요한 참견이나 구속을 극도로 싫어하는 쿨한 개인주의자입니다.',
    ],
    strengths: ['탁월한 손재주와 문제해결력', '위기 대처 순발력과 대담함', '실용적이고 합리적인 시각'],
    weaknesses: ['감정 공감과 소통의 부재', '금방 지루해하는 산만함', '지나치게 위험을 감수하는 성향'],
    workStyle: '간섭 없이 자신의 페이스대로 손에 잡히는 구체적인 문제를 직접 해결할 때 역량이 폭발합니다.',
    bestMatch: {
      code: 'ESFJ',
      name: '사교적인 외교관',
      desc: '재주꾼의 덤덤함을 외교관이 따스하게 감싸주고 서로의 부족한 점을 보완해 줌',
    },
    famousQuote: '“백 마디 말보다 한 번 직접 만져보고 뜯어보는 것이 진실을 안다.”',
  },

  ISFP: {
    code: 'ISFP',
    title: '호기심 많은 예술가',
    subtitle: '따뜻한 감성과 독창적인 미적 감각을 지닌 온화한 예술가',
    group: 'explorer',
    groupName: '탐험가형',
    avatar: '🎨',
    themeColor: GROUP_THEMES.explorer,
    summary: [
      '현재의 순간을 오감으로 온전히 즐기며 자연스럽고 편안한 삶을 지향합니다.',
      '타인의 감정을 있는 그대로 존중하며 갈등을 싫어하는 평화주의자입니다.',
      '자신만의 독특한 스타일과 미적 감각으로 조용히 세상을 채색합니다.',
    ],
    strengths: ['섬세한 미적 감각과 감수성', '포용력 넘치는 온화한 태도', '현재를 즐기는 유연성'],
    weaknesses: ['장기적 계획 수립의 어려움', '스트레스에 취약하고 충동적 회피', '자기주장 부족'],
    workStyle: '압박감이나 치열한 경쟁 없이 자유로운 개성과 감성을 표현할 수 있는 환경을 선호합니다.',
    bestMatch: {
      code: 'ESTJ',
      name: '엄격한 관리자',
      desc: '관리자의 체계적인 가이드가 예술가에게 안정감을 주며 멋진 시너지를 발휘함',
    },
    famousQuote: '“아름다움은 눈에 보이는 곳뿐 아니라 마음이 머무는 모든 순간에 존재한다.”',
  },

  ESTP: {
    code: 'ESTP',
    title: '모험을 즐기는 사업가',
    subtitle: '두려움 없이 도전에 뛰어들며 기회를 낚아채는 행동파',
    group: 'explorer',
    groupName: '탐험가형',
    avatar: '🚀',
    themeColor: GROUP_THEMES.explorer,
    summary: [
      '에너지가 넘치고 순발력이 뛰어나며 망설임 없이 직접 몸으로 부딪쳐 배웁니다.',
      '순간적인 기회 포착에 능하며 주변 사람들을 유쾌하게 만드는 매력적인 엔터테이너입니다.',
      '이론적인 탁상공론보다 즉각적인 행동과 손에 잡히는 결과를 좋아합니다.',
    ],
    strengths: ['탁월한 임기응변과 대담함', '넘치는 활력과 친화력', '실용적 현실 감각과 협상력'],
    weaknesses: ['충동성과 성급한 결정', '장기 계획 및 규칙 경시', '직설적인 화법으로 인한 마찰'],
    workStyle: '역동적인 환경에서 즉각적인 피드백을 받고 위기 상황을 발 빠르게 돌파하는 일에 특화되어 있습니다.',
    bestMatch: {
      code: 'ISFJ',
      name: '용감한 수호자',
      desc: '사업가의 넘치는 에너지를 수호자가 든든하고 안정적으로 지켜주는 상호보완 케미',
    },
    famousQuote: '“인생은 망설이기엔 너무 짧다. 지금 당장 뛰어들어 부딪쳐라!”',
  },

  ESFP: {
    code: 'ESFP',
    title: '자유로운 영혼의 연예인',
    subtitle: '가는 곳마다 흥과 즐거움을 전파하는 타고난 스타이자 분위기 메이커',
    group: 'explorer',
    groupName: '탐험가형',
    avatar: '🎉',
    themeColor: GROUP_THEMES.explorer,
    summary: [
      '순간의 즐거움을 사랑하며 어디서나 주목받는 스포트라이트를 즐깁니다.',
      '사람들과 어울려 웃고 떠들 때 진정한 행복을 느끼며 주변에 긍정 에너지를 전파합니다.',
      '따뜻한 공감 능력과 감각적인 스타일로 모두의 사랑을 받는 슈퍼스타입니다.',
    ],
    strengths: ['낙천적인 긍정 에너지', '뛰어난 사교성과 친화력', '감각적인 미적 센스와 끼'],
    weaknesses: ['갈등 회피 및 충동적 소비/행동', '장기적 집중력 부족', '지나치게 즉흥적인 태도'],
    workStyle: '사람들과 활발하게 교류하고 재미있는 이벤트를 만들며 즉각적인 기쁨을 주는 환경에 제격입니다.',
    bestMatch: {
      code: 'ISTJ',
      name: '청렴결백한 논리주의자',
      desc: '연예인의 유쾌함과 논리주의자의 든든한 안정성이 만나 완벽한 균형을 이룸',
    },
    famousQuote: '“오늘이라는 무대의 주인공은 나! 즐기지 않을 이유가 어디 있겠어?”',
  },
};
