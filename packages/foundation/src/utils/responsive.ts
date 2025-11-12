// utils/responsive.ts
export type ResponsiveValue<T> = T | {
  base?: T;
  mobile?: T;
  tablet?: T;
  laptop?: T;
  desktop?: T;
  'desktop-xl'?: T;
};

export type Breakpoint = 'base' | 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'desktop-xl';

// Helper type to check if value is a responsive object
type ResponsiveObject<T> = {
  base?: T;
  mobile?: T;
  tablet?: T;
  laptop?: T;
  desktop?: T;
  'desktop-xl'?: T;
};

/**
 * Type guard to check if a value is a responsive object
 */
function isResponsiveObject<T>(value: ResponsiveValue<T>): value is ResponsiveObject<T> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Builds responsive Tailwind classes from a responsive value
 * 
 * @example
 * buildResponsive({ base: 2, tablet: 4, laptop: 6 }, (val) => `gap-${val}`)
 * // Returns: "gap-2 tablet:gap-4 laptop:gap-6"
 */
export function buildResponsive<T>(
  value: ResponsiveValue<T> | undefined,
  mapper: (val: T, breakpoint?: Breakpoint) => string
): string {
  if (value === undefined) return '';
  
  // Simple non-responsive value
  if (!isResponsiveObject(value)) {
    return mapper(value);
  }
  
  // Responsive object
  const classes: string[] = [];
  const breakpoints: Breakpoint[] = ['base', 'mobile', 'tablet', 'laptop', 'desktop', 'desktop-xl'];
  
  for (const bp of breakpoints) {
    const val = value[bp];
    if (val !== undefined) {
      const className = mapper(val, bp);
      if (bp === 'base') {
        classes.push(className);
      } else {
        classes.push(`${bp}:${className}`);
      }
    }
  }
  
  return classes.join(' ');
}

/**
 * Merges multiple responsive class strings
 */
export function mergeResponsiveClasses(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Gets the current breakpoint value from a responsive object
 * Useful for non-CSS logic
 */
export function getBreakpointValue<T>(
  value: ResponsiveValue<T>,
  currentBreakpoint: Breakpoint = 'base'
): T {
  if (!isResponsiveObject(value)) {
    return value;
  }
  
  const breakpointOrder: Breakpoint[] = ['base', 'mobile', 'tablet', 'laptop', 'desktop', 'desktop-xl'];
  const currentIndex = breakpointOrder.indexOf(currentBreakpoint);
  
  // Walk backwards to find the first defined value
  for (let i = currentIndex; i >= 0; i--) {
    const bp = breakpointOrder[i];
    const val = value[bp];
    if (val !== undefined) {
      return val;
    }
  }
  
  // Fallback: return any defined value or undefined
  // This shouldn't happen in practice if you always define at least 'base'
  return value.base as T;
}

/**
 * Breakpoint values in rem for reference
 */
export const BREAKPOINTS = {
  mobile: '40rem',    // 640px
  tablet: '48rem',    // 768px
  laptop: '64rem',    // 1024px
  desktop: '80rem',   // 1280px
  'desktop-xl': '96rem', // 1536px
} as const;