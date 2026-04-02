import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNeonBorderProps {
  children: React.ReactNode;
  color?: string;       // e.g. '#e63946' or '#ffffff'
  glowColor?: string;   // rgba for the glow, e.g. 'rgba(230,57,70,0.7)'
  className?: string;
  borderRadius?: string; // e.g. '9999px' for pill, '12px' for rounded
}

/**
 * Wraps any button/element with an animated neon border that spins around it.
 * Uses a pseudo-element conic-gradient trick via inline styles + CSS animation.
 */
export const AnimatedNeonBorder = ({
  children,
  color = '#e63946',
  glowColor = 'rgba(230,57,70,0.7)',
  className,
  borderRadius = '9999px',
}: AnimatedNeonBorderProps) => {
  return (
    <div
      className={cn('relative p-[2px] group', className)}
      style={{ borderRadius }}
    >
      {/* Spinning neon ring */}
      <div
        className="absolute inset-0 neon-spin"
        style={{
          borderRadius,
          background: `conic-gradient(from 0deg, transparent 0deg, ${color} 60deg, transparent 120deg)`,
          filter: `blur(4px)`,
        }}
      />
      {/* Subtle outer glow layer */}
      <div
        className="absolute inset-[-3px] neon-spin-slow opacity-60"
        style={{
          borderRadius,
          background: `conic-gradient(from 180deg, transparent 0deg, ${glowColor} 80deg, transparent 160deg)`,
          filter: `blur(10px)`,
        }}
      />
      {/* Mask: solid dark fill so inner content is clean */}
      <div
        className="relative z-10"
        style={{ borderRadius }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedNeonBorder;
