'use client';

import { useMagneticTilt } from '@/hooks/useMagneticTilt';

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function MagneticCard({ children, className = '' }: MagneticCardProps) {
  const ref = useMagneticTilt();

  return (
    <div
      ref={ref}
      className={`relative p-6 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[1.2rem] backdrop-blur-[12px] transition-colors duration-300 hover:border-[rgba(0,245,255,0.3)] hover:shadow-[0_20px_60px_rgba(0,245,255,0.08)] group ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[1.2rem]"></div>
      {children}
    </div>
  );
}
