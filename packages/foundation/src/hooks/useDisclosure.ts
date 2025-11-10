import * as React from 'react';

/**
 * Hook for managing open/close state.
 * 
 * Common use cases:
 * - Modals, dialogs, drawers
 * - Dropdowns, popovers
 * - Accordions, collapsible sections
 * - Any component with visible/hidden states
 * 
 * @example
 * ```tsx
 * function Modal() {
 *   const { isOpen, open, close, toggle } = useDisclosure();
 * 
 *   return (
 *     <>
 *       <button onClick={open}>Open Modal</button>
 *       {isOpen && (
 *         <div className="modal">
 *           <p>Modal content</p>
 *           <button onClick={close}>Close</button>
 *         </div>
 *       )}
 *     </>
 *   );
 * }
 * ```
 */
export function useDisclosure(initialState = false) {
  const [isOpen, setIsOpen] = React.useState(initialState);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle,
    setIsOpen,
  };
}