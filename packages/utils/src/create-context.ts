import * as React from 'react';

/**
 * Creates a type-safe context with a custom hook.
 * Provides better error messages when context is used outside provider.
 * 
 * Why use this instead of React.createContext directly?
 * 1. Automatic error handling (no need for undefined checks)
 * 2. Better error messages
 * 3. Type-safe by default
 * 
 * @example
 * // Create context
 * const [TabsProvider, useTabsContext] = createContext<TabsContextValue>({
 *   name: 'TabsContext',
 *   errorMessage: 'useTabsContext must be used within TabsProvider',
 * });
 * 
 * // Use in component
 * function TabsTrigger() {
 *   const context = useTabsContext(); // Type-safe, no undefined checks needed!
 *   return <button onClick={context.selectTab}>Tab</button>;
 * }
 */
export function createContext<T>(options: {
  name: string;
  errorMessage?: string;
  strict?: boolean;
  defaultValue?: T;
}) {
  const {
    name,
    errorMessage = `use${name} must be used within ${name}Provider`,
    strict = true,
    defaultValue,
  } = options;

  const Context = React.createContext<T | undefined>(defaultValue);
  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (!context && strict) {
      throw new Error(errorMessage);
    }

    return context;
  }

  return [Context.Provider, useContext, Context] as const;
}