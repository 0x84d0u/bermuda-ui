import { cn } from "../helpers"

// ------------------------------ Types --------------------------------- //

export type ColorTheme = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'destructive' | 'muted'
export type ColorVariant = 'solid' | 'soft' | 'outline' | 'link' | 'ghost'

export type ColorBuildConfig = {
  // Base colors
  includeBg?: boolean
  includeText?: boolean
  includeBorder?: boolean
  includeForeground?: boolean  // For solid variant (text color on colored bg)
  
  // Hover states
  includeHoverBg?: boolean
  includeHoverText?: boolean
  includeHoverBorder?: boolean
  includeHoverUnderline?: boolean
  
  // Active states
  includeActiveBg?: boolean
  includeActiveText?: boolean
  includeActiveBorder?: boolean
  
  // Focus states
  includeFocusRing?: boolean
  includeFocusBorder?: boolean
  includeFocusOutline?: boolean
  
  // Effects
  includeShadow?: boolean
  includeRing?: boolean
  
  // Opacity modifiers (for soft/ghost variants)
  bgOpacity?: number
  hoverBgOpacity?: number
  activeBgOpacity?: number
}

// ------------------------------ Color Token Maps --------------------------------- //

// Background colors
const bgColors: Record<ColorTheme, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  info: "bg-info",
  destructive: "bg-destructive",
  muted: "bg-muted",
}

const bgColorsSoft = (color: ColorTheme, opacity: number = 10) => `bg-${color}/${opacity}`

// Text colors
const textColors: Record<ColorTheme, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  success: "text-success",
  warning: "text-warning",
  info: "text-info",
  destructive: "text-destructive",
  muted: "text-muted",
}

// Foreground colors (for text on colored backgrounds)
const foregroundColors: Record<ColorTheme, string> = {
  primary: "text-primary-foreground",
  secondary: "text-secondary-foreground",
  accent: "text-accent-foreground",
  success: "text-success-foreground",
  warning: "text-warning-foreground",
  info: "text-info-foreground",
  destructive: "text-destructive-foreground",
  muted: "text-muted-foreground",
}

// Border colors
const borderColors: Record<ColorTheme, string> = {
  primary: "border-primary",
  secondary: "border-secondary",
  accent: "border-accent",
  success: "border-success",
  warning: "border-warning",
  info: "border-info",
  destructive: "border-destructive",
  muted: "border-border",
}

// Hover background colors
const hoverBgColors: Record<ColorTheme, string> = {
  primary: "hover:bg-primary-hover",
  secondary: "hover:bg-secondary-hover",
  accent: "hover:bg-accent-hover",
  success: "hover:bg-success-hover",
  warning: "hover:bg-warning-hover",
  info: "hover:bg-info-hover",
  destructive: "hover:bg-destructive-hover",
  muted: "hover:bg-muted-hover",
}

const hoverBgColorsSoft = (color: ColorTheme, opacity: number = 20) => 
  `hover:bg-${color}/${opacity}`

// Hover text colors
const hoverTextColors: Record<ColorTheme, string> = {
  primary: "hover:text-primary-hover",
  secondary: "hover:text-secondary-hover",
  accent: "hover:text-accent-hover",
  success: "hover:text-success-hover",
  warning: "hover:text-warning-hover",
  info: "hover:text-info-hover",
  destructive: "hover:text-destructive-hover",
  muted: "hover:text-muted-foreground",
}

// Hover border colors
const hoverBorderColors: Record<ColorTheme, string> = {
  primary: "hover:border-primary-hover",
  secondary: "hover:border-secondary-hover",
  accent: "hover:border-accent-hover",
  success: "hover:border-success-hover",
  warning: "hover:border-warning-hover",
  info: "hover:border-info-hover",
  destructive: "hover:border-destructive-hover",
  muted: "hover:border-muted-hover",
}

// Active background colors
const activeBgColors: Record<ColorTheme, string> = {
  primary: "active:bg-primary-hover/90",
  secondary: "active:bg-secondary-hover/90",
  accent: "active:bg-accent-hover/90",
  success: "active:bg-success-hover/90",
  warning: "active:bg-warning-hover/90",
  info: "active:bg-info-hover/90",
  destructive: "active:bg-destructive-hover/90",
  muted: "active:bg-muted-hover/90",
}

const activeBgColorsSoft = (color: ColorTheme, opacity: number = 30) => 
  `active:bg-${color}/${opacity}`

// Focus ring colors
const focusRingColors: Record<ColorTheme, string> = {
  primary: "focus-visible:ring-primary-ring",
  secondary: "focus-visible:ring-secondary-ring",
  accent: "focus-visible:ring-accent-ring",
  success: "focus-visible:ring-success-ring",
  warning: "focus-visible:ring-warning-ring",
  info: "focus-visible:ring-info-ring",
  destructive: "focus-visible:ring-destructive-ring",
  muted: "focus-visible:ring-muted-ring",
}

// Focus border colors
const focusBorderColors: Record<ColorTheme, string> = {
  primary: "focus:border-primary",
  secondary: "focus:border-secondary",
  accent: "focus:border-accent",
  success: "focus:border-success",
  warning: "focus:border-warning",
  info: "focus:border-info",
  destructive: "focus:border-destructive",
  muted: "focus:border-border",
}

// Ring colors (for inputs, etc.)
const ringColors: Record<ColorTheme, string> = {
  primary: "ring-primary-ring",
  secondary: "ring-secondary-ring",
  accent: "ring-accent-ring",
  success: "ring-success-ring",
  warning: "ring-warning-ring",
  info: "ring-info-ring",
  destructive: "ring-destructive-ring",
  muted: "ring-muted-ring",
}

// ------------------------------ Core Builder Function --------------------------------- //

export const buildColorProp = (
  color: ColorTheme,
  colorVariant: ColorVariant,
  config: ColorBuildConfig = {}
): string => {
  const {
    // Base
    includeBg = false,
    includeText = false,
    includeBorder = false,
    includeForeground = false,
    
    // Hover
    includeHoverBg = false,
    includeHoverText = false,
    includeHoverBorder = false,
    includeHoverUnderline = false,
    
    // Active
    includeActiveBg = false,
    includeActiveText = false,
    includeActiveBorder = false,
    
    // Focus
    includeFocusRing = false,
    includeFocusBorder = false,
    includeFocusOutline = false,
    
    // Effects
    includeShadow = false,
    includeRing = false,
    
    // Opacities
    bgOpacity = 10,
    hoverBgOpacity = 20,
    activeBgOpacity = 30,
  } = config

  const isSoft = colorVariant === 'soft'
  const isGhost = colorVariant === 'ghost'
  const isOutline = colorVariant === 'outline'
  const isSolid = colorVariant === 'solid'
  const isLink = colorVariant === 'link'

  return cn(
    // Base Background
    includeBg && (
      isSoft || isGhost 
        ? bgColorsSoft(color, bgOpacity)
        : isSolid 
        ? bgColors[color]
        : isOutline 
        ? "bg-transparent"
        : ""
    ),
    
    // Base Text
    includeText && (
      isSolid && includeForeground
        ? foregroundColors[color]
        : textColors[color]
    ),
    
    // Base Border
    includeBorder && (
      isOutline 
        ? cn("border", borderColors[color])
        : ""
    ),
    
    // Hover Background
    includeHoverBg && (
      isSoft || isGhost || isOutline
        ? hoverBgColorsSoft(color, hoverBgOpacity)
        : isSolid
        ? hoverBgColors[color]
        : ""
    ),
    
    // Hover Text
    includeHoverText && hoverTextColors[color],
    
    // Hover Border
    includeHoverBorder && hoverBorderColors[color],
    
    // Hover Underline (for links)
    includeHoverUnderline && "hover:underline",
    
    // Active Background
    includeActiveBg && (
      isSoft || isGhost || isOutline
        ? activeBgColorsSoft(color, activeBgOpacity)
        : isSolid
        ? activeBgColors[color]
        : ""
    ),
    
    // Active Text
    includeActiveText && textColors[color],
    
    // Active Border
    includeActiveBorder && borderColors[color],
    
    // Focus Ring
    includeFocusRing && focusRingColors[color],
    
    // Focus Border
    includeFocusBorder && focusBorderColors[color],
    
    // Focus Outline
    includeFocusOutline && "focus-visible:outline-none",
    
    // Shadow
    includeShadow && "shadow-sm",
    
    // Ring
    includeRing && ringColors[color],
    
    // Link-specific
    isLink && "underline-offset-4",
  )
}

// ------------------------------ Pre-configured Builders --------------------------------- //


// For Button components
export const buildButtonColor = (color: ColorTheme, colorVariant: ColorVariant): string => {
  return buildColorProp(color, colorVariant, {
    includeBg: true,
    includeText: true,
    includeForeground: colorVariant === 'solid',
    includeHoverBg: true,
    includeActiveBg: true,
    includeFocusRing: colorVariant !== 'link',
    includeFocusOutline: true,
    includeShadow: colorVariant === 'solid' || colorVariant === 'outline',
    includeBorder: colorVariant === 'outline',
    includeHoverUnderline: colorVariant === 'link',
  })
}

// For Badge components (static, no interactions)
export const buildBadgeColor = (color: ColorTheme, colorVariant: ColorVariant): string => {
  return buildColorProp(color, colorVariant, {
    includeBg: true,
    includeText: true,
    includeForeground: colorVariant === 'solid',
    includeBorder: colorVariant === 'outline',
  })
}

// For Card components (hover only)
export const buildCardColor = (color: ColorTheme, colorVariant: ColorVariant): string => {
  return buildColorProp(color, colorVariant, {
    includeBg: true,
    includeText: true,
    includeForeground: colorVariant === 'solid',
    includeHoverBg: true,
    includeShadow: true,
    includeBorder: colorVariant === 'outline',
  })
}

// For Link components
export const buildLinkColor = (color: ColorTheme): string => {
  return buildColorProp(color, 'link', {
    includeText: true,
    includeHoverUnderline: true,
    includeFocusRing: true,
    includeFocusOutline: true,
  })
}

// For Text/Typography components (text color only)
export const buildTextColor = (color: ColorTheme): string => {
  return buildColorProp(color, 'ghost', {
    includeText: true,
  })
}

// For Icon components (text/fill color only)
export const buildIconColor = (color: ColorTheme, includeHover: boolean = false): string => {
  return buildColorProp(color, 'ghost', {
    includeText: true,
    includeHoverText: includeHover,
  })
}

// For Input/Textarea components
export const buildInputColor = (color: ColorTheme): string => {
  return buildColorProp(color, 'outline', {
    includeBorder: true,
    includeText: true,
    includeFocusRing: true,
    includeFocusBorder: true,
    includeFocusOutline: true,
  })
}

// For Alert components (background + text, no interactions)
export const buildAlertColor = (color: ColorTheme, colorVariant: ColorVariant = 'soft'): string => {
  return buildColorProp(color, colorVariant, {
    includeBg: true,
    includeText: true,
    includeForeground: colorVariant === 'solid',
    includeBorder: colorVariant === 'outline',
    includeShadow: true,
  })
}

// For Divider/Separator components (border only)
export const buildDividerColor = (color: ColorTheme): string => {
  return buildColorProp(color, 'outline', {
    includeBorder: true,
  })
}

// For Skeleton/Loading components (bg only)
export const buildSkeletonColor = (color: ColorTheme = 'muted'): string => {
  return buildColorProp(color, 'soft', {
    includeBg: true,
    bgOpacity: 15,
  })
}

// For Progress/Indicator components (bg only with different opacities)
export const buildProgressColor = (color: ColorTheme, isFilled: boolean = false): string => {
  return buildColorProp(color, isFilled ? 'solid' : 'soft', {
    includeBg: true,
    bgOpacity: isFilled ? 100 : 20,
  })
}

// For Tooltip/Popover components
export const buildTooltipColor = (color: ColorTheme = 'muted'): string => {
  return buildColorProp(color, 'solid', {
    includeBg: true,
    includeText: true,
    includeForeground: true,
    includeShadow: true,
  })
}

// For Switch/Checkbox active state
export const buildSwitchColor = (color: ColorTheme, isChecked: boolean): string => {
  return buildColorProp(color, isChecked ? 'solid' : 'ghost', {
    includeBg: isChecked,
    includeBorder: !isChecked,
    includeFocusRing: true,
    includeFocusOutline: true,
  })
}

// For Table row hover
export const buildTableRowColor = (color: ColorTheme = 'muted'): string => {
  return buildColorProp(color, 'ghost', {
    includeHoverBg: true,
    hoverBgOpacity: 5,
  })
}

// For Tabs active/inactive states
export const buildTabColor = (color: ColorTheme, isActive: boolean): string => {
  return buildColorProp(color, isActive ? 'soft' : 'ghost', {
    includeBg: isActive,
    includeText: true,
    includeHoverBg: !isActive,
    includeBorder: isActive,
  })
}

// ------------------------------ Exports --------------------------------- //

export { 
  focusRingColors,
  textColors,
  bgColors,
  borderColors,
  foregroundColors,
  hoverBgColors,
  hoverTextColors,
  activeBgColors,
  ringColors,
}