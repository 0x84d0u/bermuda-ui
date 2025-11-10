import * as React from 'react';

/**
 * Hook for boolean toggle state.
 * 
 * Simpler than useState for boolean values.
 * 
 * @example
 * ```tsx
 * function ToggleExample() {
 *   const [isOn, toggle, setIsOn] = useToggle(false);
 * 
 *   return (
 *     <div>
 *       <p>Status: {isOn ? 'ON' : 'OFF'}</p>
 *       <button onClick={toggle}>Toggle</button>
 *       <button onClick={() => setIsOn(true)}>Turn On</button>
 *       <button onClick={() => setIsOn(false)}>Turn Off</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useToggle(
  initialValue = false
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle, setValue];
}