import React from "react";
import { IconProps } from "../Icon/Icon.types";


/* ------------------------ Tokens  ------------------------ */

export const KIND_VARIANTS = {
  button: ["primary", "secondary", "ghost", "danger"],
  link: ["inline", "breadcrumb", "toc", "navbar"],
} as const;

export type Kind = keyof typeof KIND_VARIANTS;
export type Variant<K extends Kind> = typeof KIND_VARIANTS[K][number];
export type Size = 'default' | 'large'
export type Curve = 'default' | 'circle'
export type Shape = 'default' | 'square' | 'fullwidth'

/* ------------------------ Component Props ------------------------ */

export type BadgeProps = { isPulsing?: boolean };

type JsxProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type RootProps<K extends Kind> = JsxProps & {
  isLoading?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;

  kind?: K,
  variant?: Variant<K>
  size?: Size
  curve?: Curve
  shape?: Shape

  asChild?: boolean
}


export type ButtonProps<K extends Kind = 'button'> = RootProps<K>
  & Content
  & {
    badgeEnabled?: boolean
    badgePulsing?: boolean
  }

/* ------------------------ Content management ------------------------ */

type IconContent = { icon: IconProps; label?: string; startIcon?: never; endIcon?: never; };
type LabelContent = { label: string; icon?: never; startIcon?: IconProps; endIcon?: IconProps; };
type Content = IconContent | LabelContent;

export type LabelContentProps = Pick<LabelContent, "label" | "startIcon" | "endIcon"> & { isLoading?: boolean };
export type IconContentProps = Pick<IconContent, "icon" | "label"> & { isLoading?: boolean };
