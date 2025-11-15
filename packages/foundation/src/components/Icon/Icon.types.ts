import React from "react";
import * as Lucide from "lucide-react";

/* ------------------------ Tokens ------------------------ */

export type Name = keyof typeof Lucide;
export type Size = 'inline' | 'small' | 'medium' | 'large';

/* ------------------------ Component Props ------------------------ */

export type RootProps = React.ComponentProps<'span'> & {
  size?: Size;
};

export type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'name'> & {
  name: Name;
  size?: Size;
  isFirst?: boolean;
  isSecond?: boolean;
};

// Simple icon (no transition)
type SimpleIcon = {
  name: Name;
  transition?: never;
  size?: Size;
  className?: string;
};

// Icon with transition
type TransitionIcon = {
  name?: never;
  transition: {
    primary: Name;
    secondary: Name;
    active?: boolean; // true = show secondary, false/undefined = show primary
  };
  size?: Size;
  className?: string;
};

export type IconProps = (SimpleIcon | TransitionIcon) & Omit<React.SVGProps<SVGSVGElement>, 'name'>;