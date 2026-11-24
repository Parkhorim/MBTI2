import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { IntroScreen } from './components/IntroScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { calculateMbtiResult } from './utils/calculator';
import type { CalculationResult } from './types';

const STORAGE_KEY = 'snack_mbti_answers_v1';

export function App() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<CalculationResult | null>(null);

  // 로컬 스토리지에서 이전 응답 불러오기
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed === 'object' && parsed !== null) {
          setAnswers(parsed);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // 응답 업데이트 시 로컬 스토리지 자동 저장
  const handleAnswer = (questionId: number, value: number) => {
    const updated = { ...answers, [questionId]: value };
    setAnswers(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleStart = () => {
    setStep('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinish = () => {
    const res = calculateMbtiResult(answers);
    setResult(res);
    setStep('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (step === 'quiz' && Object.keys(answers).length > 0) {
      if (!window.confirm('검사를 처음부터 다시 시작하시겠습니까?')) {
        return;
      }
    }
    setAnswers({});
    setResult(null);
    setStep('intro');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Navigation */}
      <Navbar onReset={handleReset} showReset={step !== 'intro'} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center">
        {step === 'intro' && <IntroScreen onStart={handleStart} />}
        {step === 'quiz' && (
          <QuizScreen
            answers={answers}
            onAnswer={handleAnswer}
            onFinish={handleFinish}
          />
        )}
        {step === 'result' && result && (
          <ResultScreen result={result} onReset={handleReset} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200/80 bg-white py-6 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-4xl px-4">
          <p className="font-medium text-slate-500">
            © 2026 Snack MBTI. Inspired by 16Personalities NERIS Type Explorer®
          </p>
          <p className="mt-1 text-[11px] text-slate-400">
            본 검사는 16Personalities의 공공 성격 척도를 참고하여 재구성한 3분 스낵형 검사입니다.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
