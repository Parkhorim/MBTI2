export type TraitType = 'EI' | 'SN' | 'TF' | 'JP';

export type Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type PersonalityGroup = 'analyst' | 'diplomat' | 'sentinel' | 'explorer';

export interface Question {
  id: number;
  text: string;
  trait: TraitType;
  positiveSide: Dimension; // '동의' 시 점수가 가산되는 성향 (예: 'E' or 'I')
  category: string;
}

export interface TraitScore {
  leftType: Dimension;
  rightType: Dimension;
  leftPercent: number;
  rightPercent: number;
  winner: Dimension;
  leftLabel: string;
  rightLabel: string;
}

export interface MbtiTypeInfo {
  code: string;
  title: string;
  subtitle: string;
  group: PersonalityGroup;
  groupName: string;
  avatar: string;
  themeColor: {
    bg: string;
    text: string;
    accent: string;
    badge: string;
    bar: string;
    light: string;
  };
  summary: string[];
  strengths: string[];
  weaknesses: string[];
  workStyle: string;
  bestMatch: {
    code: string;
    name: string;
    desc: string;
  };
  famousQuote: string;
}

export interface CalculationResult {
  code: string;
  scores: {
    EI: TraitScore;
    SN: TraitScore;
    TF: TraitScore;
    JP: TraitScore;
  };
}
