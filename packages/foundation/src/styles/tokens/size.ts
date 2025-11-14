// ------------------------------ Size Tokens --------------------------------- //

export type IconSize = 'small' | 'body' | 'large'
export const iconSizeMap: Record<IconSize, string> = {
  small: "h-4 w-4",
  body: "h-5 w-5",
  large: "h-8 w-8",
}
export const iconPixelSizeMap: Record<IconSize, number> = {
  small: 16,
  body: 20,
  large: 32,
}




export type Size = "xs" | "sm" | "md" | "lg" | "xl"

// Button size tokens
export const buttonSizeClasses: Record<Size, string> = {
  xs: "h-7 px-2.5 text-xs gap-1 rounded-sm",
  sm: "h-8 px-3 text-sm gap-1.5 rounded-md",
  md: "h-9 px-4 text-sm gap-2 rounded-md",
  lg: "h-10 px-5 text-base gap-2 rounded-lg",
  xl: "h-12 px-6 text-lg gap-2.5 rounded-lg",
}

// Icon button size tokens
export const iconSizeClasses: Record<Size, string> = {
  xs: "h-7 w-7 rounded-sm",
  sm: "h-8 w-8 rounded-md",
  md: "h-9 w-9 rounded-md",
  lg: "h-10 w-10 rounded-lg",
  xl: "h-12 w-12 rounded-lg",
}

// Spinner size tokens
export const spinnerSizeClasses: Record<Size, string> = {
  xs: "h-3 w-3",
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
  xl: "h-6 w-6",
}

// Badge size tokens
export const badgeSizeClasses: Record<Size, string> = {
  xs: "h-4 px-1 text-xs gap-0.5",
  sm: "h-5 px-1.5 text-xs gap-1",
  md: "h-6 px-2 text-sm gap-1",
  lg: "h-7 px-2.5 text-sm gap-1.5",
  xl: "h-8 px-3 text-base gap-2",
}

// Input size tokens
export const inputSizeClasses: Record<Size, string> = {
  xs: "h-7 px-2 text-xs rounded-sm",
  sm: "h-8 px-2.5 text-sm rounded-md",
  md: "h-9 px-3 text-sm rounded-md",
  lg: "h-10 px-4 text-base rounded-lg",
  xl: "h-12 px-5 text-lg rounded-lg",
}

// Icon size tokens (for Icon component)
export const iconGlyphSizeClasses: Record<Size, string> = {
  xs: "size-3",
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
  xl: "size-6",
}

// Avatar size tokens
export const avatarSizeClasses: Record<Size, string> = {
  xs: "size-6 text-xs",
  sm: "size-8 text-sm",
  md: "size-10 text-base",
  lg: "size-12 text-lg",
  xl: "size-16 text-xl",
}

