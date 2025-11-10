/**
 * Color Token Exports
 * 
 * These provide TypeScript access to your design tokens.
 * All values reference CSS variables, keeping them in sync with your theme.
 */

// Base color palette
export const colors = {
  gray: {
    50: 'var(--color-gray-50)',
    100: 'var(--color-gray-100)',
    200: 'var(--color-gray-200)',
    300: 'var(--color-gray-300)',
    400: 'var(--color-gray-400)',
    500: 'var(--color-gray-500)',
    600: 'var(--color-gray-600)',
    700: 'var(--color-gray-700)',
    800: 'var(--color-gray-800)',
    900: 'var(--color-gray-900)',
    950: 'var(--color-gray-950)',
  },
  blue: {
    50: 'var(--color-blue-50)',
    100: 'var(--color-blue-100)',
    200: 'var(--color-blue-200)',
    300: 'var(--color-blue-300)',
    400: 'var(--color-blue-400)',
    500: 'var(--color-blue-500)',
    600: 'var(--color-blue-600)',
    700: 'var(--color-blue-700)',
    800: 'var(--color-blue-800)',
    900: 'var(--color-blue-900)',
    950: 'var(--color-blue-950)',
  },
  green: {
    50: 'var(--color-green-50)',
    100: 'var(--color-green-100)',
    500: 'var(--color-green-500)',
    600: 'var(--color-green-600)',
    700: 'var(--color-green-700)',
  },
  red: {
    50: 'var(--color-red-50)',
    100: 'var(--color-red-100)',
    500: 'var(--color-red-500)',
    600: 'var(--color-red-600)',
    700: 'var(--color-red-700)',
  },
} as const;

// Semantic colors - what components actually use
export const semanticColors = {
  primary: 'var(--color-primary)',
  'primary-foreground': 'var(--color-primary-foreground)',
  secondary: 'var(--color-secondary)',
  'secondary-foreground': 'var(--color-secondary-foreground)',
  destructive: 'var(--color-destructive)',
  'destructive-foreground': 'var(--color-destructive-foreground)',
  success: 'var(--color-success)',
  'success-foreground': 'var(--color-success-foreground)',
  warning: 'var(--color-warning)',
  'warning-foreground': 'var(--color-warning-foreground)',
  muted: 'var(--color-muted)',
  'muted-foreground': 'var(--color-muted-foreground)',
  accent: 'var(--color-accent)',
  'accent-foreground': 'var(--color-accent-foreground)',
  background: 'var(--color-background)',
  foreground: 'var(--color-foreground)',
  card: 'var(--color-card)',
  'card-foreground': 'var(--color-card-foreground)',
  popover: 'var(--color-popover)',
  'popover-foreground': 'var(--color-popover-foreground)',
  border: 'var(--color-border)',
  input: 'var(--color-input)',
  ring: 'var(--color-ring)',
  'ring-offset': 'var(--color-ring-offset)',
} as const;

/**
 * Type-safe semantic color keys
 * Use this in component props for autocomplete
 * 
 * @example
 * interface AlertProps {
 *   variant?: SemanticColor;
 * }
 */
export type SemanticColor = keyof typeof semanticColors;