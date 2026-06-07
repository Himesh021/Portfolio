import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="p-5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] backdrop-blur-[12px] animate-float flex flex-col items-center justify-center text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-sm text-slate-400 font-syne uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
