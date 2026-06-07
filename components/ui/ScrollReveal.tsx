'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  let initialTransform = 'translateY(30px)';
  if (direction === 'left') initialTransform = 'translateX(-30px)';
  if (direction === 'right') initialTransform = 'translateX(30px)';

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : initialTransform,
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
