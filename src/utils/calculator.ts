import { QUESTIONS } from '../data/questions';
import type { CalculationResult, Dimension, TraitScore } from '../types';

export const TRAIT_LABELS: Record<Dimension, string> = {
  E: '외향형 (Extraverted)',
  I: '내향형 (Introverted)',
  S: '현실형 (Observant)',
  N: '직관형 (Intuitive)',
  T: '이성형 (Thinking)',
  F: '감정형 (Feeling)',
  J: '계획형 (Judging)',
  P: '탐색형 (Prospecting)',
};

/**
 * 사용자의 응답 배열 (questionId -> value: -3 ~ +3)을 바탕으로 MBTI 결과 산출
 */
export function calculateMbtiResult(answers: Record<number, number>): CalculationResult {
  const scores: Record<Dimension, number> = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  QUESTIONS.forEach((q) => {
    const val = answers[q.id] ?? 0; // -3 ~ +3
    const positive = q.positiveSide;
    const negative = getOppositeDimension(positive);

    if (val > 0) {
      scores[positive] += val;
    } else if (val < 0) {
      scores[negative] += Math.abs(val);
    }
  });

  const eiScore = computeTraitScore('E', 'I', scores.E, scores.I);
  const snScore = computeTraitScore('S', 'N', scores.S, scores.N);
  const tfScore = computeTraitScore('T', 'F', scores.T, scores.F);
  const jpScore = computeTraitScore('J', 'P', scores.J, scores.P);

  const code = `${eiScore.winner}${snScore.winner}${tfScore.winner}${jpScore.winner}`;

  return {
    code,
    scores: {
      EI: eiScore,
      SN: snScore,
      TF: tfScore,
      JP: jpScore,
    },
  };
}

function getOppositeDimension(dim: Dimension): Dimension {
  switch (dim) {
    case 'E':
      return 'I';
    case 'I':
      return 'E';
    case 'S':
      return 'N';
    case 'N':
      return 'S';
    case 'T':
      return 'F';
    case 'F':
      return 'T';
    case 'J':
      return 'P';
    case 'P':
      return 'J';
  }
}

function computeTraitScore(
  left: Dimension,
  right: Dimension,
  leftVal: number,
  rightVal: number,
): TraitScore {
  const total = leftVal + rightVal;
  let leftPercent = 50;
  let rightPercent = 50;

  if (total > 0) {
    leftPercent = Math.round((leftVal / total) * 100);
    rightPercent = 100 - leftPercent;
  }

  // 동점일 경우 기본값 지정
  let winner: Dimension;
  if (leftPercent > rightPercent) {
    winner = left;
  } else if (rightPercent > leftPercent) {
    winner = right;
  } else {
    // 50:50인 경우 기본 우선권
    winner = left;
  }

  return {
    leftType: left,
    rightType: right,
    leftPercent,
    rightPercent,
    winner,
    leftLabel: TRAIT_LABELS[left],
    rightLabel: TRAIT_LABELS[right],
  };
}
