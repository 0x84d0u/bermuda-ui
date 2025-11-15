import React from "react";
import * as Types from "./Button.types";

import { cn, cva } from "../../styles";

import { Icon, IconTypes } from "../Icon";
import { Slot } from "@radix-ui/react-slot";

/* ------------------------ Helpers ------------------------ */

export const isLabelOnly = (label?: string, icon?: IconTypes.IconProps) => !!(label && !icon);
export const isIconOnly = (icon?: IconTypes.IconProps) => !!icon;

/* ------------------------ Helpers ------------------------ */

const rootClass = cva(cn(
  "transition-all duration-200 ease-standard",
  "cursor-pointer select-none",
  "relative inline-flex items-center justify-center",
  "font-medium",
  // isDisabled
  "disabled:opacity-50 disabled:pointer-events-none",
), {
  variants: {
    kind: { button: "", link: "", },
    variant: { primary: "", secondary: "", ghost: "", danger: "", inline: "", breadcrumb: "", toc: "", navbar: "", },
    size: { default: "", large: "" },
    curve: { default: "", circle: "" },
    shape: { default: "", square: "aspect-square", fullwidth: "w-full" },
    isActive: { true: "" },
  },
  compoundVariants: [
    // Curve
    { kind: "button", curve: "default", className: "rounded-action" },
    { kind: "button", curve: "circle", className: "rounded-circle" },

    // Sizes
    { kind: 'button', size: 'default', className: "h-10 px-4 text-small" },
    { kind: 'button', size: 'large', className: "h-12 px-6 text-medium" },

    // Shape
    { kind: "button", shape: "square", className: "px-0" },


    { kind: 'link', size: 'default', className: "text-medium" },
    { kind: 'link', size: 'large', className: "text-largee" },

    // Colors
    { kind: 'button', isActive: false, variant: "primary", className: "border bg-accent text-accent-foreground border-transparent hover:bg-accent/90" },
    { kind: 'button', isActive: false, variant: "secondary", className: "border bg-surface text-foreground border-border hover:bg-surface/80" },
    { kind: 'button', isActive: false, variant: "danger", className: "border bg-danger text-danger-foreground border-transparent hover:bg-danger/90" },
    { kind: 'button', isActive: false, variant: "ghost", className: "border text-surface-foreground border-transparent hover:bg-surface/50" },

    { kind: 'button', isActive: true, className: "border bg-active text-active-foreground border-transparent" },

    { kind: 'link', isActive: false, variant: "inline", className: "text-link hover:underline" },
    { kind: 'link', isActive: false, variant: "breadcrumb", className: "text-muted hover:text-foreground" },
    { kind: 'link', isActive: false, variant: "toc", className: "text-muted hover:text-foreground" },
    { kind: 'link', isActive: false, variant: "navbar", className: "text-muted hover:text-foreground" },

    { kind: 'link', isActive: true, variant: "inline", className: "text-link underline" },
    { kind: 'link', isActive: true, variant: "breadcrumb", className: "text-active font-semibold" },
    { kind: 'link', isActive: true, variant: "toc", className: "text-active font-semibold" },
    { kind: 'link', isActive: true, variant: "navbar", className: "text-active font-semibold" },
  ]
})

/* ------------------------ Components ------------------------ */

export const Root = React.forwardRef(<K extends Types.Kind>(
  {
    isLoading,
    isActive,
    isDisabled,

    kind,
    variant,
    size,
    curve,
    shape,

    asChild,
    className,
    ...jsxProps
  }: Types.RootProps<K>,
  ref: React.Ref<HTMLButtonElement>
) => {
  const Comp = (asChild ? Slot : 'button') as React.ElementType;

  return <Comp
    ref={ref}
    disabled={!!(isDisabled || isLoading)}
    className={cn(rootClass({ kind, variant, size, curve, shape, isActive }), className)}
    {...jsxProps}
  />
})

export const LabelContent = ({ startIcon, label, endIcon, isLoading }: Types.LabelContentProps) => (
  <span className="inline-flex items-center gap-2">
    {!!startIcon && <Icon {...startIcon} className={cn("-ml-0.5", startIcon.className)} />}
    <span className={cn(isLoading && "invisible")}>{label}</span>
    {!!endIcon && <Icon {...endIcon} className={cn("-mr-0.5", endIcon.className)} />}
  </span>
);

export const IconContent = ({ icon, isLoading }: Types.IconContentProps) => (
  <span className="inline-flex items-center gap-1">
    <Icon {...icon} className={cn(isLoading && "invisible", icon.className)} />
  </span>
);

export const Spinner = () => (
  <span className="absolute inset-0 flex items-center justify-center">
    <Icon name="Loader" className="animate-spin text-current" />
  </span>
);

export const Badge = ({ isPulsing }: Types.BadgeProps) => (
  <span
    className={cn(
      "absolute",
      "rounded-full select-none pointer-events-none whitespace-nowrap",
      "inline-flex items-center justify-center",
      "text-xs font-medium font-sans",
      "size-2 bg-danger ring-2 ring-danger/50 right-1 top-1",
      isPulsing && "animate-pulse"
    )}
  />
);
