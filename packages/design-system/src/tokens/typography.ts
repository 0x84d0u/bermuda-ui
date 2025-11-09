/**
 * Typography Tokens
 * 
 * Font families, sizes, weights, and line heights.
 */

export const fontFamily = {
  sans: 'var(--font-sans)',
  mono: 'var(--font-mono)',
} as const;

export const fontSize = {
  xs: 'var(--font-size-xs)',       // 12px
  sm: 'var(--font-size-sm)',       // 14px
  base: 'var(--font-size-base)',   // 16px
  lg: 'var(--font-size-lg)',       // 18px
  xl: 'var(--font-size-xl)',       // 20px
  '2xl': 'var(--font-size-2xl)',   // 24px
  '3xl': 'var(--font-size-3xl)',   // 30px
  '4xl': 'var(--font-size-4xl)',   // 36px
  '5xl': 'var(--font-size-5xl)',   // 48px
} as const;

export const fontWeight = {
  normal: 'var(--font-weight-normal)',       // 400
  medium: 'var(--font-weight-medium)',       // 500
  semibold: 'var(--font-weight-semibold)',   // 600
  bold: 'var(--font-weight-bold)',           // 700
} as const;

export const lineHeight = {
  xs: 'var(--line-height-xs)',
  sm: 'var(--line-height-sm)',
  base: 'var(--line-height-base)',
  lg: 'var(--line-height-lg)',
  xl: 'var(--line-height-xl)',
  '2xl': 'var(--line-height-2xl)',
} as const;

export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;