import { cn, ContainerPrimitive, setDisplayName } from "@bermuda-ui/foundation"
import React from "react"

// ----------------------- Root ----------------------- //

export type RootProps = {
    isFixed?: boolean;
    isBordered?: boolean;
    // isBorderedOnSroll: number;
    children?: React.ReactNode
    className?: string
}

export const Root = ({
    isFixed,
    isBordered,
    // isBorderedOnSroll,
    className,
    ...rest
}: RootProps) => {
    return <header
        className={cn(
            "w-full",
            "transition-all duration-250",
            // "bg-accent",
            "bg-background text-foreground",
            // "bg-",
            "shrink-0",
            isFixed && "sticky top-0 z-40 backdrop-blur-md backdrop-saturate-180 bg-background/95",
            "border-b", isBordered ? "border-border shadow-sm" : "border-transparent",
            className
        )}
        {...rest}
    />
}
setDisplayName(Root, "ShellPrimitive.Header.Root")

// ----------------------- Toolbar ----------------------- //

export type ToolbarProps = { children?: React.ReactNode }
export const Toolbar = ({ children }: ToolbarProps) => <div className="flex items-center gap-3 justify-start">{children}</div>
setDisplayName(Toolbar, "ShellPrimitive.Header.Toolbar")

// ----------------------- Branding ----------------------- //

export type BrandingProps = { children?: React.ReactNode }
export const Branding = ({ children }: BrandingProps) => <div className="flex items-center justify-center shrink-0">{children}</div>
setDisplayName(Branding, "ShellPrimitive.Header.Branding")

// ----------------------- Actions ----------------------- //

export type ActionsProps = { children?: React.ReactNode }
export const Actions = ({ children }: ActionsProps) => <div className="flex items-center gap-2 justify-end">{children}</div>
setDisplayName(Actions, "ShellPrimitive.Header.Actions")

// ----------------------- IconButton ----------------------- //

export type IconButtonProps = {
    children?: React.ReactNode
    isActive?: boolean
    onClick?: () => void
    className?: string
}
export const IconButton = ({
    isActive,
    onClick,
    className,
    children
}: IconButtonProps) => <button
        onClick={onClick}
        className={cn(
            "cursor-pointer",
            "transition-colors duration-100",
            "inline-flex items-center justify-center",
            "rounded-lg",
            "h-10 w-10",
            "text-foreground",
            // "hover:bg-background-",
            isActive && "bg-primary text-primary-foreground hover:bg-primary-hover",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            className
        )}
        children={children}
    />
setDisplayName(Actions, "ShellPrimitive.Header.IconButton")
