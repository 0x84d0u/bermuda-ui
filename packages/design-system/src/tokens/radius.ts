/**
 * Border Radius Tokens
 * 
 * Consistent corner rounding throughout the UI.
 */

export const radius = {
  none: 'var(--radius-none)',     // 0px
  sm: 'var(--radius-sm)',         // 2px
  base: 'var(--radius-base)',     // 4px
  md: 'var(--radius-md)',         // 6px
  lg: 'var(--radius-lg)',         // 8px
  xl: 'var(--radius-xl)',         // 12px
  '2xl': 'var(--radius-2xl)',     // 16px
  full: 'var(--radius-full)',     // 9999px (fully rounded)
} as const;

export type RadiusKey = keyof typeof radius;