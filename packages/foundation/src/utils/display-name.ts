import * as React from 'react';

/**
 * Gets the display name of a component.
 * Useful for debugging and dev tools.
 * 
 * @example
 * const MyComponent = () => <div />;
 * getDisplayName(MyComponent); // "MyComponent"
 */
export function getDisplayName(Component: React.ComponentType<any>): string {
  return Component.displayName || Component.name || 'Component';
}

/**
 * Sets the display name of a component.
 * 
 * @example
 * const Button = forwardRef((props, ref) => <button ref={ref} {...props} />);
 * setDisplayName(Button, 'Button');
 */
export function setDisplayName<T extends React.ComponentType<any>>(
  Component: T,
  displayName: string
): T {
  Component.displayName = displayName;
  return Component;
}