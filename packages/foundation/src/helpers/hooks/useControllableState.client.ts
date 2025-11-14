import * as React from 'react';

/**
 * A hook that manages controlled/uncontrolled state.
 * 
 * This is essential for building flexible components that can work both ways:
 * - Controlled: Parent manages state via value + onChange
 * - Uncontrolled: Component manages its own state via defaultValue
 * 
 * @example
 * ```tsx
 * function Input({ value, defaultValue, onChange }) {
 *   const [inputValue, setInputValue] = useControllableState({
 *     value,
 *     defaultValue,
 *     onChange,
 *   });
 * 
 *   return (
 *     <input
 *       value={inputValue}
 *       onChange={(e) => setInputValue(e.target.value)}
 *     />
 *   );
 * }
 * 
 * // Uncontrolled usage:
 * <Input defaultValue="hello" onChange={(val) => console.log(val)} />
 * 
 * // Controlled usage:
 * <Input value={state} onChange={setState} />
 * ```
 */
export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
}): [T | undefined, (value: T) => void] {
  const [internalValue, setInternalValue] = React.useState<T | undefined>(defaultValue);
  
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = React.useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  return [currentValue, setValue];
}