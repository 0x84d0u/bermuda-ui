import * as React from 'react';

/**
 * Hook to get the previous value of a variable.
 * 
 * Useful for comparing current vs previous props/state.
 * 
 * @example
 * ```tsx
 * function Counter({ count }) {
 *   const prevCount = usePrevious(count);
 * 
 *   return (
 *     <div>
 *       <p>Current: {count}</p>
 *       <p>Previous: {prevCount}</p>
 *       <p>
 *         {count > prevCount ? 'Increased' : 'Decreased'}
 *       </p>
 *     </div>
 *   );
 * }
 * ```
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}