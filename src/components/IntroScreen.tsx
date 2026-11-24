import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-8 sm:py-14 text-center">
      {/* Top Badge */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-indigo-700 shadow-xs">
        <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-pulse" />
        <span>16Personalities 표준 척도 기반</span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl leading-tight">
        진짜 나를 발견하는 <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          3분 스낵 MBTI 검사
        </span>
      </h1>

      <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg leading-relaxed">
        복잡하고 긴 60문항 대신, 핵심 판정 알고리즘을 담은 <strong>16개 문항</strong>으로
        빠르고 정밀하게 나의 16가지 성격 유형을 확인해 보세요.
      </p>

      {/* Time & Spec Info */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500">
        <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
          <Clock className="h-3.5 w-3.5 text-slate-600" />
          <span>소요 시간: 약 2~3분</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          <span>총 16개 핵심 문항</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
          <span>7점 리커트 원형 척도</span>
        </div>
      </div>

      {/* Start Button */}
      <div className="mt-8 w-full max-w-xs">
        <button
          onClick={onStart}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-300/40 transition-all hover:bg-indigo-700 hover:shadow-indigo-400/50 active:scale-[0.98]"
        >
          <span>검사 시작하기</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Tip Banner */}
      <div className="mt-8 max-w-md rounded-xl border border-slate-200 bg-white/70 p-3.5 text-left text-xs text-slate-500 shadow-xs backdrop-blur-xs">
        <span className="font-bold text-slate-700">💡 더 정확한 결과를 위한 팁:</span>
        <ul className="mt-1 list-disc pl-4 space-y-0.5">
          <li>오래 고민하지 말고 직관적으로 느껴지는 답을 선택하세요.</li>
          <li>‘되고 싶은 모습’보다 ‘평소 나의 솔직한 행동’을 골라주세요.</li>
        </ul>
      </div>

      {/* 4 Personality Groups Preview */}
      <div className="mt-12 w-full text-left">
        <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-slate-400">
          4대 성격군 미리보기
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {/* Analyst */}
          <div className="rounded-2xl border border-purple-200 bg-purple-50/70 p-4 transition hover:shadow-md">
            <div className="text-2xl mb-1">♟️ 🧪 👑 ⚡</div>
            <div className="text-xs font-bold text-purple-900">분석가형</div>
            <div className="text-[11px] text-purple-600 font-medium">INTJ, INTP, ENTJ, ENTP</div>
            <p className="mt-2 text-[11px] text-slate-600 leading-tight">
              합리성과 지적 호기심을 바탕으로 전략과 체계를 세우는 유형
            </p>
          </div>

          {/* Diplomat */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 transition hover:shadow-md">
            <div className="text-2xl mb-1">🌱 🌸 🕊️ ✨</div>
            <div className="text-xs font-bold text-emerald-900">외교관형</div>
            <div className="text-[11px] text-emerald-600 font-medium">INFJ, INFP, ENFJ, ENFP</div>
            <p className="mt-2 text-[11px] text-slate-600 leading-tight">
              따뜻한 공감과 진정성으로 사람과 사회의 가치를 추구하는 유형
            </p>
          </div>

          {/* Sentinel */}
          <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-4 transition hover:shadow-md">
            <div className="text-2xl mb-1">📋 🛡️ 🏛️ 🤝</div>
            <div className="text-xs font-bold text-sky-900">관리자형</div>
            <div className="text-[11px] text-sky-600 font-medium">ISTJ, ISFJ, ESTJ, ESFJ</div>
            <p className="mt-2 text-[11px] text-slate-600 leading-tight">
              원칙과 책임을 지키며 질서 있고 안정된 조직을 만드는 유형
            </p>
          </div>

          {/* Explorer */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 transition hover:shadow-md">
            <div className="text-2xl mb-1">🔧 🎨 🚀 🎉</div>
            <div className="text-xs font-bold text-amber-900">탐험가형</div>
            <div className="text-[11px] text-amber-600 font-medium">ISTP, ISFP, ESTP, ESFP</div>
            <p className="mt-2 text-[11px] text-slate-600 leading-tight">
              자유로운 열정과 순발력으로 현실의 순간을 즐기는 유형
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
