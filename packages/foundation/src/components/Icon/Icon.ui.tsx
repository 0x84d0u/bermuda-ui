// Icon.ui.tsx
import React from "react";
import * as Lucide from "lucide-react";
import { cn, cva } from "../../styles";
import * as Types from "./Icon.types";

/* ------------------------ Variants ------------------------ */

const rootClass = cva(
  "inline-flex items-center justify-center relative shrink-0",
  {
    variants: {
      size: {
        inline: "size-[1em]",   // 1em - scales with parent text
        small: "size-4",        // 16px - small UI elements
        medium: "size-5",       // 20px - standard buttons/UI
        large: "size-6",        // 24px - large buttons/CTAs
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

const svgClass = cva(
  "shrink-0 absolute inset-0 transition-all duration-200 ease-in-out",
  {
    variants: {
      size: {
        inline: "size-[1em]",
        small: "size-4",
        medium: "size-5",
        large: "size-6",
      },
      position: {
        first: "rotate-0 scale-100 opacity-100",
        second: "rotate-90 scale-0 opacity-0",
        none: "",
      },
    },
    defaultVariants: {
      size: "medium",
      position: "none",
    },
  }
);

/* ------------------------ Components ------------------------ */

export const Root = ({ className, size = "medium", ...props }: Types.RootProps) => {
  return (
    <span className={cn(rootClass({ size }), className)} {...props} />
  );
};

export const Svg = ({
  name,
  size = "medium",
  className,
  isFirst,
  isSecond,
  ...props
}: Types.SvgProps) => {
  const IconComponent = Lucide[name] as Lucide.LucideIcon;
  
  const position = isFirst ? "first" : isSecond ? "second" : "none";

  return (
    <IconComponent
      className={cn(svgClass({ size, position }), className)}
      {...props}
    />
  );
};