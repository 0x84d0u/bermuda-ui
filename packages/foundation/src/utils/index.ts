/**
 * @bermuda-ui/utils
 * 
 * Core utilities for Bermuda UI components.
 */

// Class name utilities
export { cn } from './cn';
export { cva , type VariantProps } from 'class-variance-authority';

// Context utilities
export { createContext } from './create-context';

// Compose ref
export { composeRefs } from './compose-refs'

// Slot component (polymorphic components)
export { Slot } from './slot';

// Display name utilities
export { getDisplayName, setDisplayName } from './display-name';

// Type utilities
export type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementRef,
  PartialBy,
  RequiredBy,
  PolymorphicComponentProps,
} from './types';


export { 
  BREAKPOINTS,
  type Breakpoint,
  type ResponsiveValue,
  buildResponsive,
  getBreakpointValue,
  mergeResponsiveClasses,
} from './responsive'