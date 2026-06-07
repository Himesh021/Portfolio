'use client';

import { useTypewriter } from '@/hooks/useTypewriter';

interface TypewriterProps {
  roles: string[];
  className?: string;
}

export default function Typewriter({ roles, className = '' }: TypewriterProps) {
  const { displayText } = useTypewriter(roles);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}
