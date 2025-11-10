import { cn, ContainerPrimitive, setDisplayName } from "@bermuda-ui/foundation"
import React from "react"

export const HEIGHT = 'h-[4rem] min-h-[4rem]'

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
            "transition-all duration-250",
            "bg-background text-foreground",
            "shrink-0",
            isFixed && "sticky top-0 z-40 backdrop-blur-md backdrop-saturate-180 bg-background/95",
            "border-b", isBordered ? "border-layout-border shadow-sm" : "border-transparent",
            className
        )}
        {...rest}
    />
}
setDisplayName(Root, "AppHeaderPrimitive.Root")


export type ContainerProps = ContainerPrimitive.RootProps
export const Container = ({
    size = 'laptop',
    spacing = 'comfortable',
    className,
    ...rest
}: ContainerProps) => <ContainerPrimitive.Root
        size={size}
        spacing={spacing}
        className={cn(
            HEIGHT,
            "grid grid-cols-[1fr_auto_1fr] items-center gap-4",
            className
        )}
        {...rest}
    />
setDisplayName(Container, "AppHeaderPrimitive.Container")

export type ToolbarProps = { children?: React.ReactNode }
export const Toolbar = ({ children }: ToolbarProps) => <div className="flex items-center gap-3 justify-start">{children}</div>
setDisplayName(Toolbar, "AppHeaderPrimitive.Toolbar")


export type BrandingProps = { children?: React.ReactNode }
export const Branding = ({ children }: BrandingProps) => <div className="flex items-center justify-center shrink-0">{children}</div>
setDisplayName(Branding, "AppHeaderPrimitive.Branding")


export type ActionsProps = { children?: React.ReactNode }
export const Actions = ({ children }: ActionsProps) => <div className="flex items-center gap-2 justify-end">{children}</div>
setDisplayName(Actions, "AppHeaderPrimitive.Actions")
