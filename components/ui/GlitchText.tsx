'use client';

import React, { useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  useEffect(() => {
    // Only inject the style once
    if (!document.getElementById('glitch-animations')) {
      const style = document.createElement('style');
      style.id = 'glitch-animations';
      style.innerHTML = `
        @keyframes glitch-anim-1 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translateX(0); opacity: 1; }
          10% { clip-path: inset(10% 0 35% 0); transform: translateX(-3px); opacity: 0.8; }
          20% { clip-path: inset(80% 0 5% 0); transform: translateX(3px); opacity: 0.9; }
          30% { clip-path: inset(40% 0 40% 0); transform: translateX(-2px); opacity: 1; }
          40% { clip-path: inset(10% 0 60% 0); transform: translateX(3px); opacity: 0.8; }
          50% { clip-path: inset(30% 0 20% 0); transform: translateX(-1px); opacity: 1; }
          60%, 100% { clip-path: inset(0 0 0 0); transform: translateX(0); opacity: 1; }
        }
        @keyframes glitch-anim-2 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translateX(0); opacity: 1; }
          10% { clip-path: inset(65% 0 0 0); transform: translateX(3px); opacity: 0.8; }
          20% { clip-path: inset(5% 0 80% 0); transform: translateX(-3px); opacity: 0.9; }
          30% { clip-path: inset(40% 0 40% 0); transform: translateX(2px); opacity: 1; }
          40% { clip-path: inset(60% 0 10% 0); transform: translateX(-3px); opacity: 0.8; }
          50% { clip-path: inset(20% 0 30% 0); transform: translateX(1px); opacity: 1; }
          60%, 100% { clip-path: inset(0 0 0 0); transform: translateX(0); opacity: 1; }
        }
        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-wrapper::before {
          color: var(--cyan);
          z-index: -1;
          animation: glitch-anim-1 3s infinite linear alternate-reverse;
        }
        .glitch-wrapper::after {
          color: var(--violet);
          z-index: -2;
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <span className={`glitch-wrapper font-bold ${className}`} data-text={text}>
      {text}
    </span>
  );
}
