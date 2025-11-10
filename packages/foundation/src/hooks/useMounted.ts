import * as React from 'react';

/**
 * Hook to check if component is mounted.
 * 
 * Useful for preventing state updates on unmounted components.
 * 
 * @example
 * ```tsx
 * function DataFetcher() {
 *   const [data, setData] = React.useState(null);
 *   const isMounted = useMounted();
 * 
 *   React.useEffect(() => {
 *     fetchData().then((result) => {
 *       // Only update state if component is still mounted
 *       if (isMounted()) {
 *         setData(result);
 *       }
 *     });
 *   }, [isMounted]);
 * 
 *   return <div>{data}</div>;
 * }
 * ```
 */
export function useMounted(): () => boolean {
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return React.useCallback(() => mountedRef.current, []);
}