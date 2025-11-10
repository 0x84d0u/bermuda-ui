import React from "react"
import { cn, Slot } from "@utils"

/* ------------------ VARIANTS ------------------ */

type ButtonSize = "small" | "medium" | "large"
type ButtonColor = "primary" | "secondary" | "destructive" | "outline"

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
}

const colorClasses: Record<ButtonColor, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover focus:ring-primary-ring",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover focus:ring-secondary-ring",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive-hover focus:ring-destructive-ring",
  outline: "border border-border text-foreground hover:bg-muted focus:ring-primary-ring",
}

/* ------------------ ROOT ------------------ */

type ButtonRootProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  size?: ButtonSize
  color?: ButtonColor
  isLoading?: boolean
}

const ButtonRoot = ({
  asChild = false,
  size = "medium",
  color = "primary",
  isLoading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonRootProps) => {
  const Comp = asChild ? Slot : "button"
  return <Comp
    disabled={isLoading || disabled}
    className={cn(
      "relative inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      "px-6 py-4 rounded-[1pc]",
      sizeClasses[size],
      colorClasses[color],
      className
    )}
    {...props}
  >
    {children}
  </Comp>
}

ButtonRoot.displayName = "ButtonRoot"

/* ------------------ CONTENT ------------------ */

type ButtonContentProps = {
  children: React.ReactNode
  isLoading?: boolean
}

const ButtonContent = ({ children, isLoading }: ButtonContentProps) => (
  <span className={cn("inline-flex items-center gap-2", isLoading && "opacity-50")}>
    {children}
  </span>
)
ButtonContent.displayName = "ButtonContent"

/* ------------------ ICON ------------------ */

type ButtonIconProps = {
  children: React.ReactNode
  position?: "left" | "right"
  isLoading?: boolean
}

const ButtonIcon = ({
  children,
  position = "left",
  isLoading,
}: ButtonIconProps) => (
  <span
    className={cn(
      "inline-flex items-center",
      position === "left" && "-ml-1 mr-2",
      position === "right" && "ml-2 -mr-1",
      isLoading && "opacity-0"
    )}
  >
    {children}
  </span>
)
ButtonIcon.displayName = "ButtonIcon"

/* ------------------ SPINNER ------------------ */

type ButtonSpinnerProps = {
  isLoading?: boolean
}

const ButtonSpinner = ({ isLoading }: ButtonSpinnerProps) => {
  if (!isLoading) return null
  return (
    <span className="absolute inline-flex items-center justify-center">
      <svg
        className="animate-spin h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </span>
  )
}
ButtonSpinner.displayName = "ButtonSpinner"

/* ------------------ COMPOUND EXPORT ------------------ */

export const ButtonPrimitive = Object.assign(ButtonRoot, {
  Root: ButtonRoot,
  Content: ButtonContent,
  Icon: ButtonIcon,
  Spinner: ButtonSpinner,
})

export type {
  ButtonSize,
  ButtonColor,
  ButtonRootProps,
  ButtonContentProps,
  ButtonIconProps,
  ButtonSpinnerProps,
}

