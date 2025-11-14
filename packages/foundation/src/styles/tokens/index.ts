// ------------------------------ Shape Tokens --------------------------------- //

export type Shape = "rounded" | "pill" | "square"

export const shapeClasses: Record<Shape, string> = {
  rounded: "rounded-md",
  pill: "rounded-full",
  square: "rounded-sm",
}

// ------------------------------ Radius Tokens --------------------------------- //

export type Radius = "none" | "sm" | "md" | "lg" | "xl" | "full"

export const radiusClasses: Record<Radius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
}

export * from './size'
export * from './color';

