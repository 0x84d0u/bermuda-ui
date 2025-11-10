import * as React from 'react';

/**
 * Hook to detect clicks outside an element.
 * 
 * Essential for dropdowns, modals, popovers - anything that should close
 * when clicking outside.
 * 
 * @example
 * ```tsx
 * function Dropdown() {
 *   const [isOpen, setIsOpen] = React.useState(false);
 *   const ref = React.useRef(null);
 * 
 *   useClickOutside(ref, () => {
 *     setIsOpen(false);
 *   });
 * 
 *   return (
 *     <div ref={ref}>
 *       <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
 *       {isOpen && <div className="dropdown-menu">Menu content</div>}
 *     </div>
 *   );
 * }
 * ```
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true
) {
  React.useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      
      // Do nothing if clicking ref's element or descendent elements
      if (!element || element.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]);
}