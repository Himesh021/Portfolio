'use client';

import { useRef, useEffect } from 'react';

export function useMagneticTilt() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const dx = (x - centerX) / centerX;
      const dy = (y - centerY) / centerY;

      el.style.transform = `perspective(700px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) translateY(-6px)`;
      el.style.transition = 'none';
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) translateY(0px)';
      el.style.transition = 'transform 0.4s ease';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
