import {
    cn,
    setDisplayName,
    Container as CoreContainer,
    type ContainerProps as CoreContainerProps,
} from "@bermuda-ui/foundation"

import React from "react"


// ----------------------- Root ----------------------- //

export type RootProps = { children?: React.ReactNode; className?: string }
export const Root = ({ className, ...rest }: RootProps) => <div
    className={cn(
        "relative flex flex-col min-h-svh transition-colors duration-200 print:block print:min-h-0",
        className
    )}
    {...rest}
/>
setDisplayName(Root, "ShellUI.Root")

// ----------------------- Body ----------------------- //

export type BodyProps = { children?: React.ReactNode; className?: string }
export const Body = ({ className, ...rest }: BodyProps) => <div
    className={cn(
        "min-h-[calc(100svh - 16rem)] flex-1 flex  w-full",
        className
    )}
    {...rest}
/>
setDisplayName(Body, "ShellUI.Body")


// ----------------------- Main ----------------------- //

export type MainProps = { children?: React.ReactNode; className?: string }
export const Main = ({ className, ...rest }: MainProps) => <div
    className={cn(
        "flex-1 overflow-y-auto overflow-x-hidden scroll-smooth focus-visible:outline-none",
        className
    )}
    {...rest}
/>
setDisplayName(Body, "ShellUI.Main")

// ----------------------- Container ----------------------- //

export type ContainerProps = CoreContainerProps
export const Container = ({ size = 'laptop', spacing = 'comfortable', className, ...rest }: ContainerProps) => <CoreContainer
    size={size}
    spacing={spacing}
    className={className}
    {...rest}
/>
setDisplayName(Container, "ShellUI.Container")


// ----------------------- Header : Root ----------------------- //

export type HeaderRootProps = {
    isFixed?: boolean;
    isBordered?: boolean;
    // isBorderedOnSroll: number;
    children?: React.ReactNode
    className?: string
}

export const HeaderRoot = ({ isFixed, isBordered, className, ...rest }: HeaderRootProps) => {
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
setDisplayName(HeaderRoot, "ShellUI.HeaderRoot")

// ----------------------- Header : Toolbar ----------------------- //

export type HeaderToolbarProps = { children?: React.ReactNode }
export const HeaderToolbar = ({ children }: HeaderToolbarProps) => <div className="flex items-center gap-3 justify-start">{children}</div>
setDisplayName(HeaderToolbar, "ShellUI.HeaderToolbar")

// ----------------------- Header : Branding ----------------------- //

export type HeaderBrandingProps = { children?: React.ReactNode }
export const HeaderBranding = ({ children }: HeaderBrandingProps) => <div className="flex items-center justify-center shrink-0">{children}</div>
setDisplayName(HeaderBranding, "ShellUI.HeaderBranding")

// ----------------------- Header : Actions ----------------------- //

export type HeaderActionsProps = { children?: React.ReactNode }
export const HeaderActions = ({ children }: HeaderActionsProps) => <div className="flex items-center gap-2 justify-end">{children}</div>
setDisplayName(HeaderActions, "ShellUI.HeaderActions")

// ----------------------- Header : Button ----------------------- //

export type HeaderButtonProps = {
    children?: React.ReactNode
    isActive?: boolean
    onClick?: () => void
    className?: string
}
export const HeaderButton = ({isActive, onClick, className, children }: HeaderButtonProps) => <button
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
setDisplayName(HeaderButton, "ShellUI.HeaderButton")


// ----------------------- Footer : Root ----------------------- //

export type FooterRootProps = { children?: React.ReactNode; className?: string }
export const FooterRoot = ({ className, ...rest }: FooterRootProps) => <footer
    className={cn(
        "w-full",
        "transition-all duration-250",
        "bg-background text-foreground border-t border-border",
        className
    )}
    {...rest}
/>
setDisplayName(FooterRoot, "ShellUI.FooterRoot")

// ----------------------- Sidebar : Root ----------------------- //

export type SidebarRootProps = {
    children?: React.ReactNode;
    className?: string
    position?: 'left' | 'right';
    isOpen?: boolean
}
export const SidebarRoot = ({ className, position, isOpen, ...rest }: SidebarRootProps) => <aside
    className={cn(
        "transition-transform duration-350 ease-out",
        "bg-background text-foreground",
        "border-r border-border",
        "flex flex-col",
        "h-[calc(100svh-var(--header-height))] min-h-[calc(100svh-var(--header-height))]",
        // "laptop:h-svh laptop:min-h-svh",
        // "w-(--sidebar-width)",
        "fixed inset-y-0 left-0 top-(--header-height) z-30",
        "laptop:sticky laptop:top-0 laptop:shrink-0",
        "shadow-2xl laptop:shadow-none",
        position === 'right' ? 'order-2' : 'order-0',

        isOpen ? 'translate-x-0' : position === 'right' ? 'translate-x-full laptop:translate-x-0' : '-translate-x-full laptop:translate-x-0',

        "focus-visible:outline-none",
        className
    )}
    {...rest}
/>
setDisplayName(Root, "ShellUI.SidebarRoot")


// ----------------------- Sidebar : Header  ----------------------- //

export type SidebarHeaderProps = { children?: React.ReactNode }
export const SidebarHeader = ({ children }: SidebarHeaderProps) => <div className="shrink-0 px-6 py-4 border-b border-border">{children}</div>
setDisplayName(SidebarHeader, "ShellUI.SidebarHeader")

// ----------------------- Sidebar : Body  ----------------------- //

export type SidebarBodyProps = { children?: React.ReactNode }
export const SidebarBody = ({ children }: SidebarBodyProps) => <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-2">{children}</div>
setDisplayName(SidebarBody, "ShellUI.SidebarBody")

// ----------------------- Sidebar : Footer ----------------------- //

export type SidebarFooterProps = { children?: React.ReactNode }
export const SidebarFooter = ({ children }: SidebarFooterProps) => <div className="shrink-0 px-6 py-4 border-t border-border">{children}</div>
setDisplayName(SidebarFooter, "ShellUI.SidebarFooter")
