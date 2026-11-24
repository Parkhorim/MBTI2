import React from 'react';
import { Compass, RotateCcw } from 'lucide-react';

interface NavbarProps {
  onReset?: () => void;
  showReset?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onReset, showReset }) => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={onReset}
          className="flex items-center gap-2.5 text-left font-bold tracking-tight text-slate-800 transition hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-sm shadow-indigo-200">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-extrabold text-slate-900">Snack MBTI</span>
            <span className="ml-1.5 hidden rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-600 sm:inline-block">
              16Personalities Style
            </span>
          </div>
        </button>

        {showReset && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-xs transition hover:bg-slate-50 hover:text-slate-900"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>처음으로</span>
          </button>
        )}
      </div>
    </header>
  );
};
