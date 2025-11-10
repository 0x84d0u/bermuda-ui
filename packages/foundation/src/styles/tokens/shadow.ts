/**
 * Shadow Tokens
 * 
 * Elevation system for creating depth in your UI.
 */

export const shadow = {
  sm: 'var(--shadow-sm)',
  base: 'var(--shadow-base)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
  '2xl': 'var(--shadow-2xl)',
} as const;

export type ShadowKey = keyof typeof shadow;