import * as React from 'react';

/**
 * Type for any React ref
 */
type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * Sets a value to a ref.
 * Works with both callback refs and ref objects.
 * 
 * @example
 * setRef(myRef, element);
 */
function setRef<T>(ref: PossibleRef<T>, value: T): void {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

/**
 * Composes multiple refs into a single ref callback.
 * 
 * Why do we need this?
 * Sometimes you need to attach multiple refs to the same element:
 * 1. Your internal ref (for component logic)
 * 2. A ref passed by the consumer (via forwardRef)
 * 3. A ref from a library (like react-hook-form)
 * 
 * @example
 * const Button = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef(null);
 *   
 *   return (
 *     <button ref={composeRefs(ref, internalRef)}>
 *       {props.children}
 *     </button>
 *   );
 * });
 */
export function composeRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T> {
  return (value: T) => {
    refs.forEach((ref) => setRef(ref, value));
  };
}