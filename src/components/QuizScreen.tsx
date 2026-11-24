import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { QUESTIONS } from '../data/questions';

interface QuizScreenProps {
  answers: Record<number, number>;
  onAnswer: (questionId: number, value: number) => void;
  onFinish: () => void;
}

const SCALE_OPTIONS = [
  {
    value: 3,
    label: '매우 동의',
    color: 'emerald',
    sizeClass: 'w-12 h-12 sm:w-14 sm:h-14',
    borderClass: 'border-emerald-500 hover:border-emerald-600',
    selectedBg: 'bg-emerald-500 text-white shadow-md shadow-emerald-200',
    unselectedBg: 'bg-white hover:bg-emerald-50 text-emerald-600',
  },
  {
    value: 2,
    label: '동의',
    color: 'emerald',
    sizeClass: 'w-10 h-10 sm:w-12 sm:h-12',
    borderClass: 'border-emerald-400 hover:border-emerald-500',
    selectedBg: 'bg-emerald-500 text-white shadow-md shadow-emerald-200',
    unselectedBg: 'bg-white hover:bg-emerald-50 text-emerald-600',
  },
  {
    value: 1,
    label: '약간 동의',
    color: 'emerald',
    sizeClass: 'w-8 h-8 sm:w-10 sm:h-10',
    borderClass: 'border-emerald-300 hover:border-emerald-400',
    selectedBg: 'bg-emerald-400 text-white shadow-sm shadow-emerald-100',
    unselectedBg: 'bg-white hover:bg-emerald-50 text-emerald-500',
  },
  {
    value: 0,
    label: '보통 / 중립',
    color: 'slate',
    sizeClass: 'w-7 h-7 sm:w-8 sm:h-8',
    borderClass: 'border-slate-300 hover:border-slate-400',
    selectedBg: 'bg-slate-400 text-white shadow-sm',
    unselectedBg: 'bg-white hover:bg-slate-100 text-slate-400',
  },
  {
    value: -1,
    label: '약간 비동의',
    color: 'purple',
    sizeClass: 'w-8 h-8 sm:w-10 sm:h-10',
    borderClass: 'border-purple-300 hover:border-purple-400',
    selectedBg: 'bg-purple-400 text-white shadow-sm shadow-purple-100',
    unselectedBg: 'bg-white hover:bg-purple-50 text-purple-500',
  },
  {
    value: -2,
    label: '비동의',
    color: 'purple',
    sizeClass: 'w-10 h-10 sm:w-12 sm:h-12',
    borderClass: 'border-purple-400 hover:border-purple-500',
    selectedBg: 'bg-purple-500 text-white shadow-md shadow-purple-200',
    unselectedBg: 'bg-white hover:bg-purple-50 text-purple-600',
  },
  {
    value: -3,
    label: '매우 비동의',
    color: 'purple',
    sizeClass: 'w-12 h-12 sm:w-14 sm:h-14',
    borderClass: 'border-purple-500 hover:border-purple-600',
    selectedBg: 'bg-purple-500 text-white shadow-md shadow-purple-200',
    unselectedBg: 'bg-white hover:bg-purple-50 text-purple-600',
  },
];

export const QuizScreen: React.FC<QuizScreenProps> = ({ answers, onAnswer, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalQuestions = QUESTIONS.length;
  const currentQ = QUESTIONS[currentIndex];
  const currentAnswer = answers[currentQ.id];

  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const handleSelect = (val: number) => {
    onAnswer(currentQ.id, val);

    // 자동 다음 질문 이동 (선택 피드백을 보여주기 위해 살짝 딜레이 220ms)
    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 220);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (isAllAnswered) {
      onFinish();
    }
  };

  const isAllAnswered = answeredCount === totalQuestions;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-4 py-6 sm:py-10">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span>진행률: {progressPercent}% ({answeredCount}/{totalQuestions} 완료)</span>
          <span className="text-indigo-600 font-bold">문항 {currentIndex + 1} / {totalQuestions}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/80">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="relative rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm transition-all">
        {/* Category Badge */}
        <div className="mb-4 inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {currentQ.category}
        </div>

        {/* Question Text */}
        <h2 className="min-h-[4rem] text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl sm:min-h-[5rem]">
          {currentQ.text}
        </h2>

        {/* 16Personalities Likert Scale Container */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          {/* Label Header */}
          <div className="flex items-center justify-between px-2 text-xs sm:text-sm font-bold tracking-tight">
            <span className="text-emerald-600 flex items-center gap-1">
              동의 (Agree)
            </span>
            <span className="text-purple-600 flex items-center gap-1">
              비동의 (Disagree)
            </span>
          </div>

          {/* 7 Circle Buttons */}
          <div className="mt-6 flex items-center justify-between gap-1 sm:gap-2 px-1">
            {SCALE_OPTIONS.map((opt) => {
              const isSelected = currentAnswer === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`group relative flex items-center justify-center rounded-full border-2 transition-all duration-150 active:scale-95 ${opt.sizeClass} ${opt.borderClass} ${
                    isSelected ? opt.selectedBg : opt.unselectedBg
                  }`}
                  aria-label={`${opt.label} (${opt.value})`}
                  title={opt.label}
                >
                  {isSelected ? (
                    <Check className="h-4 w-4 stroke-[3]" />
                  ) : (
                    <span
                      className={`h-2 w-2 rounded-full transition-transform group-hover:scale-125 ${
                        opt.color === 'emerald'
                          ? 'bg-emerald-300'
                          : opt.color === 'purple'
                          ? 'bg-purple-300'
                          : 'bg-slate-300'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Text Labels under circles */}
          <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 px-1 font-medium">
            <span>적극 동의</span>
            <span className="hidden sm:inline">동의</span>
            <span>중립</span>
            <span className="hidden sm:inline">비동의</span>
            <span>적극 비동의</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
            currentIndex === 0
              ? 'opacity-0 pointer-events-none'
              : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
          }`}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>이전 문항</span>
        </button>

        {currentIndex === totalQuestions - 1 ? (
          <button
            onClick={onFinish}
            disabled={!isAllAnswered}
            className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-md transition ${
              isAllAnswered
                ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-300/40 animate-bounce'
                : 'bg-slate-300 cursor-not-allowed'
            }`}
          >
            <span>결과 확인하기</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <span>다음</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Question Selector Quick Dots */}
      <div className="mt-8 flex flex-wrap justify-center gap-1.5 px-4">
        {QUESTIONS.map((q, idx) => {
          const isDone = answers[q.id] !== undefined;
          const isCurrent = idx === currentIndex;
          return (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                isCurrent
                  ? 'w-6 bg-indigo-600'
                  : isDone
                  ? 'w-2.5 bg-emerald-500'
                  : 'w-2.5 bg-slate-200'
              }`}
              title={`${idx + 1}번 문항: ${isDone ? '답변 완료' : '미답변'}`}
            />
          );
        })}
      </div>
    </div>
  );
};
