import * as React from 'react';
import { composeRefs } from './compose-refs';

/**
 * Checks if a component is a Slot component.
 */
function isSlotComponent(
  child: React.ReactNode
): child is React.ReactElement {
  return React.isValidElement(child) && (child.type as any)?.$$typeof === Symbol.for('react.forward_ref');
}

/**
 * Props for the Slot component.
 */
interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * Slot component that merges props with its child.
 * 
 * This is useful for creating components that can render as different elements.
 * Think of it as a "passthrough" component.
 * 
 * @example
 * // Button that can render as a link
 * function Button({ asChild, ...props }) {
 *   const Comp = asChild ? Slot : 'button';
 *   return <Comp {...props} />;
 * }
 * 
 * // Usage:
 * <Button asChild>
 *   <a href="/home">Go Home</a>
 * </Button>
 * // Renders: <a href="/home" class="button-classes">Go Home</a>
 */
export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  (props, forwardedRef) => {
    const { children, ...slotProps } = props;

    if (!React.isValidElement(children)) {
      return null;
    }

    return React.cloneElement(children, {
      ...slotProps,
      ...(children.props as any),
      ref: forwardedRef
        ? composeRefs(forwardedRef, (children as any).ref)
        : (children as any).ref,
    } as any);
  }
);

Slot.displayName = 'Slot';