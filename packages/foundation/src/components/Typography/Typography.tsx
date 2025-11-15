

import React from 'react';
import type * as Types from './Typography.types'
import { cva } from 'class-variance-authority';
import { cn } from '../../styles';

const rootClass = cva("", {
    variants: {
        kind: { text: "", heading: "", display: "" },
        size: { small: "", medium: "", large: "", 1: "", 2: "", 3: "", 4: "" },
        weight: {
            bold: "font-bold",
            semibold: "font-semibold",
            base: "font-normal",
            light: "font-light",
        },
        underline: {
            always: "underline",
            hover: "hover:underline",
        },
        color: {
            body: "text-text",
            heading: "text-foreground",
            accent: "text-accent-foreground",
            active: "text-active-foreground",
            danger: "text-danger-foreground",
            muted: "text-muted",
        },
    },
    compoundVariants: [
        // Text + size combinations
        { kind: "text", size: "small", className: "text-small leading-relaxed" },
        { kind: "text", size: "medium", className: "text-medium leading-relaxed" },
        { kind: "text", size: "large", className: "text-large leading-relaxed" },

        { kind: "heading", size: 4, className: "text-heading-4 leading-snug" },
        { kind: "heading", size: 3, className: "text-heading-3 leading-snug" },
        { kind: "heading", size: 2, className: "text-heading-2 leading-tight" },
        { kind: "heading", size: 1, className: "text-heading-1 leading-tight" },

        { kind: "display", size: "small", className: "text-display-small leading-none" },
        { kind: "display", size: "medium", className: "text-display-medium leading-none" },
        { kind: "display", size: "large", className: "text-display-large leading-none", },
    ]
});



export const Typography = <K extends Types.Kind>({
    kind,
    size,
    weight,
    underline,
    color,
    children,
    className,
    as,
    ...jsxProps
}: Types.TypographyProps<K>) => {
    const Component = as || getDefaultComponent(kind, size);

    return <Component
        className={cn(
            rootClass({ kind, size, color, underline, weight }),
            className
        )}
        {...jsxProps}
    >
        {children}
    </Component>
};



function getDefaultComponent<K extends Types.Kind>(kind: K, size?: Types.Size<K>): React.ElementType {
    if (kind === 'heading') return `h${size || 1}` as React.ElementType;
    if (kind === 'display') return 'h1';
    return 'span';
}