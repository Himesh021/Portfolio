import React from 'react';

interface StatCardProps {
  value?: string;
  label: string;
  subtext?: string;
  delay?: number;
}

export default function StatCard({ value, label, subtext, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="p-6 bg-[#F6F5F0] border border-[#E8E6DF] rounded-2xl animate-float flex flex-col items-start justify-center text-left h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      {value && (
        <div className="text-4xl font-semibold text-gray-900 mb-2 tracking-tight">
          {value}
        </div>
      )}
      <div className="text-sm text-gray-500 font-medium uppercase tracking-widest leading-snug max-w-[130px]">
        {label}
      </div>
      {subtext && (
        <div className="text-sm text-gray-700 mt-3 font-medium tracking-wide">
          {subtext}
        </div>
      )}
    </div>
  );
}
