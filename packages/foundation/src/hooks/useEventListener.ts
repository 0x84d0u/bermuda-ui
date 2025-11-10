import * as React from 'react';

/**
 * Hook to safely add event listeners.
 * 
 * Handles cleanup automatically and works with window, document, or elements.
 * 
 * @example
 * ```tsx
 * function KeyboardHandler() {
 *   useEventListener('keydown', (event) => {
 *     if (event.key === 'Escape') {
 *       console.log('Escape pressed!');
 *     }
 *   });
 * 
 *   return <div>Press Escape</div>;
 * }
 * 
 * // With element ref:
 * function ClickableDiv() {
 *   const ref = React.useRef<HTMLDivElement>(null);
 * 
 *   useEventListener('click', () => {
 *     console.log('Div clicked!');
 *   }, ref);
 * 
 *   return <div ref={ref}>Click me</div>;
 * }
 * ```
 */
export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: React.RefObject<HTMLElement>
) {
  const savedHandler = React.useRef(handler);

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const targetElement = element?.current || window;
    
    if (!targetElement?.addEventListener) {
      return;
    }

    const eventListener = (event: Event) => {
      savedHandler.current(event as WindowEventMap[K]);
    };

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}