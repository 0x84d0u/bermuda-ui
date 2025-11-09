# @bermuda-ui/utils

Core utilities for Bermuda UI components. This package contains helper functions and utilities used throughout the component library.

## Installation

\`\`\`bash
pnpm add @bermuda-ui/utils
\`\`\`

## Utilities

### `cn` - Class Name Merging

Intelligently merge Tailwind CSS classes:

\`\`\`tsx
import { cn } from '@bermuda-ui/utils';

// Merge classes
cn('px-4 py-2', 'px-6') // "py-2 px-6" (no conflict)

// Conditional classes
cn('base', isActive && 'active', isDisabled && 'disabled')

// Object syntax
cn({
  'text-red-500': hasError,
  'text-green-500': isSuccess,
})
\`\`\`

### `composeRefs` - Ref Composition

Merge multiple refs:

\`\`\`tsx
import { composeRefs } from '@bermuda-ui/utils';

const Button = forwardRef((props, ref) => {
  const internalRef = useRef(null);
  return <button ref={composeRefs(ref, internalRef)} {...props} />;
});
\`\`\`

### `createContext` - Type-Safe Context

Create type-safe contexts with better error messages:

\`\`\`tsx
import { createContext } from '@bermuda-ui/utils';

const [Provider, useContext] = createContext({
  name: 'TabsContext',
  errorMessage: 'useTabsContext must be used within TabsProvider',
});
\`\`\`

### `Slot` - Polymorphic Components

Create components that can render as different elements:

\`\`\`tsx
import { Slot } from '@bermuda-ui/utils';

function Button({ asChild, ...props }) {
  const Comp = asChild ? Slot : 'button';
  return <Comp {...props} />;
}

// Usage:
<Button asChild>
  <a href="/">Link Button</a>
</Button>
\`\`\`

## Type Utilities

\`\`\`tsx
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  PolymorphicComponentProps,
} from '@bermuda-ui/utils';

type ButtonProps = ComponentPropsWithoutRef<'button'>;
type ButtonElement = ElementRef<'button'>;
\`\`\`