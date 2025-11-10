import * as React from 'react';

/**
 * Hook to debounce a value.
 * 
 * Delays updating the value until after the specified delay has passed
 * without the value changing. Perfect for search inputs!
 * 
 * @example
 * ```tsx
 * function SearchInput() {
 *   const [searchTerm, setSearchTerm] = React.useState('');
 *   const debouncedSearch = useDebounce(searchTerm, 500);
 * 
 *   React.useEffect(() => {
 *     // This only runs 500ms after user stops typing
 *     if (debouncedSearch) {
 *       fetchSearchResults(debouncedSearch);
 *     }
 *   }, [debouncedSearch]);
 * 
 *   return (
 *     <input
 *       value={searchTerm}
 *       onChange={(e) => setSearchTerm(e.target.value)}
 *       placeholder="Search..."
 *     />
 *   );
 * }
 * ```
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}