import * as React from 'react';

/**
 * Extracts props from a React component type.
 * 
 * @example
 * type ButtonProps = ComponentPropsWithoutRef<typeof Button>;
 */
export type ComponentPropsWithoutRef<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T>;

/**
 * Extracts props from a React component type, including ref.
 * 
 * @example
 * type ButtonProps = ComponentPropsWithRef<'button'>;
 */
export type ComponentPropsWithRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>;

/**
 * Extracts the element type from a ref.
 * 
 * @example
 * type ButtonElement = ElementRef<'button'>; // HTMLButtonElement
 */
export type ElementRef<T extends React.ElementType> =
  React.ComponentRef<T>;

/**
 * Makes certain properties optional.
 * 
 * @example
 * type User = { id: string; name: string; email: string };
 * type PartialUser = PartialBy<User, 'email'>; // { id: string; name: string; email?: string }
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Makes certain properties required.
 * 
 * @example
 * type User = { id?: string; name?: string };
 * type RequiredUser = RequiredBy<User, 'id'>; // { id: string; name?: string }
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Props for polymorphic components (components that can render as different elements).
 * 
 * @example
 * type ButtonProps<C extends React.ElementType = 'button'> = PolymorphicComponentProps<C, {
 *   variant?: 'primary' | 'secondary';
 * }>;
 */
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = Props &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props | 'as'> & {
    as?: C;
  };