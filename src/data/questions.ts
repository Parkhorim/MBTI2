import type { Question } from '../types';

export const QUESTIONS: Question[] = [
  // --- E vs I (에너지 방향) ---
  {
    id: 1,
    text: '주말이나 휴일에는 사람들과 어울려 밖에서 보낼 때 활력이 더 솟아난다.',
    trait: 'EI',
    positiveSide: 'E',
    category: '에너지의 방향 (Mind)',
  },
  {
    id: 2,
    text: '혼자만의 시간을 오랫동안 방해받지 않고 조용히 보낼 때 진정한 재충전이 된다.',
    trait: 'EI',
    positiveSide: 'I',
    category: '에너지의 방향 (Mind)',
  },
  {
    id: 3,
    text: '처음 보는 사람이 많은 낯선 모임에서도 먼저 다가가 스스럼없이 대화를 시작한다.',
    trait: 'EI',
    positiveSide: 'E',
    category: '에너지의 방향 (Mind)',
  },
  {
    id: 4,
    text: '여럿이 모인 자리에서는 대화를 주도하기보다 편안하게 경청하며 분위기를 관찰하는 편이다.',
    trait: 'EI',
    positiveSide: 'I',
    category: '에너지의 방향 (Mind)',
  },

  // --- S vs N (인식 및 정보 수집) ---
  {
    id: 5,
    text: '막연한 상상이나 가능성보다는 지금 당장 눈앞에 검증된 팩트와 현실적인 데이터가 더 중요하다.',
    trait: 'SN',
    positiveSide: 'S',
    category: '인식의 방식 (Energy)',
  },
  {
    id: 6,
    text: '‘만약 세상이 멸망한다면?’, ‘우주 밖에는 뭐가 있을까?’ 같은 엉뚱하고 끝없는 공상을 자주 즐긴다.',
    trait: 'SN',
    positiveSide: 'N',
    category: '인식의 방식 (Energy)',
  },
  {
    id: 7,
    text: '요리나 가구 조립을 할 때 내 감(직관)대로 하기보다 설명서나 레시피를 꼼꼼히 지킨다.',
    trait: 'SN',
    positiveSide: 'S',
    category: '인식의 방식 (Energy)',
  },
  {
    id: 8,
    text: '영화나 음악, 문학 작품을 감상할 때 눈에 보이는 내용 너머의 비유와 숨은 상징을 해석하는 것을 좋아한다.',
    trait: 'SN',
    positiveSide: 'N',
    category: '인식의 방식 (Energy)',
  },

  // --- T vs F (판단 및 결정) ---
  {
    id: 9,
    text: '친구가 고민이나 힘든 일을 털어놓을 때, 감정적 위로보다 현실적이고 구체적인 해결책이 먼저 떠오른다.',
    trait: 'TF',
    positiveSide: 'T',
    category: '판단의 근거 (Nature)',
  },
  {
    id: 10,
    text: '누군가에게 피드백을 줄 때, 내 말이 옳더라도 상대방의 기분이나 자존심이 다치지 않게 완곡히 표현한다.',
    trait: 'TF',
    positiveSide: 'F',
    category: '판단의 근거 (Nature)',
  },
  {
    id: 11,
    text: '중요한 결정을 내릴 때는 개인적인 감정이나 친분보다 원칙, 효율성, 논리적 타당성을 우선시한다.',
    trait: 'TF',
    positiveSide: 'T',
    category: '판단의 근거 (Nature)',
  },
  {
    id: 12,
    text: '타인의 슬픈 사연이나 안타까운 소식을 접하면 마치 내 일처럼 깊이 공감되고 가슴이 먹먹해진다.',
    trait: 'TF',
    positiveSide: 'F',
    category: '판단의 근거 (Nature)',
  },

  // --- J vs P (생활 양식 및 계획) ---
  {
    id: 13,
    text: '여행을 가거나 프로젝트를 시작할 때, 시간대별 일정과 동선을 미리 촘촘하게 계획해두어야 안심된다.',
    trait: 'JP',
    positiveSide: 'J',
    category: '생활의 양식 (Tactics)',
  },
  {
    id: 14,
    text: '짜여진 계획표에 얽매이기보다는 상황과 기분에 따라 즉흥적으로 움직이는 자유로운 방식을 선호한다.',
    trait: 'JP',
    positiveSide: 'P',
    category: '생활의 양식 (Tactics)',
  },
  {
    id: 15,
    text: '해야 할 일이나 과제가 생기면 마감일에 쫓기지 않도록 미리미리 끝내두고 마음 편히 쉰다.',
    trait: 'JP',
    positiveSide: 'J',
    category: '생활의 양식 (Tactics)',
  },
  {
    id: 16,
    text: '마감 직전의 긴박한 압박감이 닥쳤을 때 오히려 놀라운 초인적 집중력과 효율을 발휘한다.',
    trait: 'JP',
    positiveSide: 'P',
    category: '생활의 양식 (Tactics)',
  },
];
