import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';
import {
  Check,
  Copy,
  Download,
  Heart,
  RefreshCw,
  Sparkles,
  Zap,
} from 'lucide-react';
import { MBTI_TYPES } from '../data/types';
import type { CalculationResult } from '../types';

interface ResultScreenProps {
  result: CalculationResult;
  onReset: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onReset }) => {
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const info = MBTI_TYPES[result.code] || MBTI_TYPES['INTJ'];
  const { scores } = result;

  // 폭죽 효과 트리거
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    try {
      setIsExporting(true);
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        quality: 0.95,
      });
      const link = document.createElement('a');
      link.download = `MBTI-결과-${result.code}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('이미지 저장 실패:', err);
      alert('이미지 저장 중 오류가 발생했습니다.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-4 py-8 sm:py-12">
      {/* Top Banner */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
          <Sparkles className="h-3.5 w-3.5" />
          <span>검사 완료! 당신의 성격 유형 분석 결과입니다</span>
        </div>
      </div>

      {/* Main Shareable Card */}
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg"
      >
        {/* Background Decorative Accent */}
        <div
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ backgroundColor: info.themeColor.accent }}
        />

        {/* Card Header: Group & Avatar */}
        <div className="flex flex-col items-center text-center">
          <span
            className={`inline-block rounded-full px-3.5 py-1 text-xs font-bold border ${info.themeColor.badge}`}
          >
            {info.groupName}
          </span>

          <div className="my-3 text-6xl sm:text-7xl select-none filter drop-shadow-sm">
            {info.avatar}
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            {result.code}
          </h1>

          <h2 className="mt-1 text-xl sm:text-2xl font-bold" style={{ color: info.themeColor.accent }}>
            {info.title}
          </h2>

          <p className="mt-2 max-w-lg text-sm sm:text-base font-medium text-slate-600">
            {info.subtitle}
          </p>

          <blockquote className="mt-4 rounded-xl bg-slate-50 border border-slate-100 px-4 py-2 text-xs italic text-slate-500">
            {info.famousQuote}
          </blockquote>
        </div>

        {/* 16Personalities Trait Percentages Bars */}
        <div className="mt-10 pt-8 border-t border-slate-100">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            4대 성격 척도 백분율 (Personality Breakdown)
          </h3>

          <div className="space-y-5">
            {/* EI Bar */}
            <TraitBarItem
              traitName="마인드 (Mind)"
              leftLabel="외향형 (E)"
              rightLabel="내향형 (I)"
              leftPercent={scores.EI.leftPercent}
              rightPercent={scores.EI.rightPercent}
              winner={scores.EI.winner}
              accentColor={info.themeColor.accent}
            />

            {/* SN Bar */}
            <TraitBarItem
              traitName="에너지 (Energy)"
              leftLabel="현실형 (S)"
              rightLabel="직관형 (N)"
              leftPercent={scores.SN.leftPercent}
              rightPercent={scores.SN.rightPercent}
              winner={scores.SN.winner}
              accentColor={info.themeColor.accent}
            />

            {/* TF Bar */}
            <TraitBarItem
              traitName="본성 (Nature)"
              leftLabel="이성형 (T)"
              rightLabel="감정형 (F)"
              leftPercent={scores.TF.leftPercent}
              rightPercent={scores.TF.rightPercent}
              winner={scores.TF.winner}
              accentColor={info.themeColor.accent}
            />

            {/* JP Bar */}
            <TraitBarItem
              traitName="전술 (Tactics)"
              leftLabel="계획형 (J)"
              rightLabel="탐색형 (P)"
              leftPercent={scores.JP.leftPercent}
              rightPercent={scores.JP.rightPercent}
              winner={scores.JP.winner}
              accentColor={info.themeColor.accent}
            />
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-10 pt-8 border-t border-slate-100 space-y-6">
          {/* Key Traits */}
          <div>
            <h4 className="flex items-center gap-1.5 text-sm font-bold text-slate-900 mb-3">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>주요 성격 특징</span>
            </h4>
            <ul className="space-y-2">
              {info.summary.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl bg-slate-50/80 p-3 text-xs sm:text-sm text-slate-700 border border-slate-100"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-600">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Strengths */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
              <h5 className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-2">
                <Zap className="h-3.5 w-3.5 text-emerald-600" />
                <span>나의 빛나는 강점</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {info.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
              <h5 className="flex items-center gap-1.5 text-xs font-bold text-rose-800 mb-2">
                <span>주의할 점 & 보완점</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {info.weaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Work Style */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <h5 className="text-xs font-bold text-slate-800 mb-1">💼 업무 & 작업 스타일</h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {info.workStyle}
            </p>
          </div>

          {/* Best Match */}
          <div className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-pink-700 mb-1">
                <Heart className="h-3.5 w-3.5 fill-pink-500 text-pink-500" />
                <span>환상의 찰떡궁합 파트너</span>
              </div>
              <div className="text-sm font-bold text-slate-900">
                {info.bestMatch.code} ({info.bestMatch.name})
              </div>
              <p className="mt-0.5 text-xs text-slate-600">
                {info.bestMatch.desc}
              </p>
            </div>
            <div className="text-3xl shrink-0 select-none">
              {MBTI_TYPES[info.bestMatch.code]?.avatar || '🤝'}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={handleDownloadImage}
          disabled={isExporting}
          className="flex w-full sm:flex-1 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          <Download className="h-4 w-4" />
          <span>{isExporting ? '이미지 생성 중...' : '결과 카드 이미지 저장'}</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-emerald-600 font-bold">복사 완료!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>링크 복사</span>
            </>
          )}
        </button>

        <button
          onClick={onReset}
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50"
        >
          <RefreshCw className="h-4 w-4" />
          <span>다시 하기</span>
        </button>
      </div>
    </div>
  );
};

interface TraitBarItemProps {
  traitName: string;
  leftLabel: string;
  rightLabel: string;
  leftPercent: number;
  rightPercent: number;
  winner: string;
  accentColor: string;
}

const TraitBarItem: React.FC<TraitBarItemProps> = ({
  traitName,
  leftLabel,
  rightLabel,
  leftPercent,
  rightPercent,
  winner,
  accentColor,
}) => {
  const isLeftWinner = leftLabel.includes(winner);

  return (
    <div className="text-xs">
      {/* Title & Sublabels */}
      <div className="flex items-center justify-between text-slate-500 mb-1">
        <span className="font-bold text-slate-700">{traitName}</span>
        <span className="text-[11px]">
          {isLeftWinner ? `${leftLabel} ${leftPercent}%` : `${rightLabel} ${rightPercent}%`}
        </span>
      </div>

      <div className="flex items-center justify-between font-semibold mb-1 text-[11px]">
        <span className={isLeftWinner ? 'font-bold text-slate-900' : 'text-slate-400'}>
          {leftLabel} ({leftPercent}%)
        </span>
        <span className={!isLeftWinner ? 'font-bold text-slate-900' : 'text-slate-400'}>
          ({rightPercent}%) {rightLabel}
        </span>
      </div>

      {/* Dual Progress Bar */}
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100 p-0.5 border border-slate-200/60">
        <div
          className="h-full rounded-l-full transition-all duration-500"
          style={{
            width: `${leftPercent}%`,
            backgroundColor: isLeftWinner ? accentColor : '#cbd5e1',
          }}
        />
        <div
          className="h-full rounded-r-full transition-all duration-500"
          style={{
            width: `${rightPercent}%`,
            backgroundColor: !isLeftWinner ? accentColor : '#cbd5e1',
          }}
        />
      </div>
    </div>
  );
};
