import React from "react";

export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponentProp<
  T extends React.ElementType,
  Props = {}
> = {
  as?: T;
  asChild?: boolean;
} & Props &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props | "as" | "asChild">;

export type PolymorphicComponentPropWithRef<
  T extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<T, Props> & {
  ref?: PolymorphicRef<T>;
};

/**
 * Typed forwardRef helper compatible with polymorphic components.
 * - Keeps type inference for props and ref.
 * - Avoids TS2345 (ForwardRefRenderFunction mismatch).
 */
export function forwardRef<T, P = {}>(
  render: (
    props: React.PropsWithoutRef<P>,
    ref: React.Ref<T>
  ) => React.ReactElement | null
) {
  return React.forwardRef<T, P>(render);
}
