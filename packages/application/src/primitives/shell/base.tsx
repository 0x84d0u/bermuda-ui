import { cn, ContainerPrimitive, setDisplayName } from "@bermuda-ui/foundation"
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
setDisplayName(Root, "ShellPrimitive.Root")

// ----------------------- Body ----------------------- //

export type BodyProps = { children?: React.ReactNode; className?: string }
export const Body = ({ className, ...rest }: BodyProps) => <div
    className={cn(
        "min-h-[calc(100svh - 16rem)] flex-1 flex  w-full",
        className
    )}
    {...rest}
/>
setDisplayName(Body, "ShellPrimitive.Body")


// ----------------------- Main ----------------------- //

export type MainProps = { children?: React.ReactNode; className?: string }
export const Main = ({ className, ...rest }: MainProps) => <div
    className={cn(
        "flex-1 overflow-y-auto overflow-x-hidden scroll-smooth focus-visible:outline-none",
        className
    )}
    {...rest}
/>
setDisplayName(Body, "ShellPrimitive.Main")

// ----------------------- Container ----------------------- //

export type ContainerProps = ContainerPrimitive.RootProps
export const Container = ({ size = 'laptop', spacing = 'comfortable', className, ...rest }: ContainerProps) => <ContainerPrimitive.Root
    size={size}
    spacing={spacing}
    className={className}
    {...rest}
/>

