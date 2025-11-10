import { cn, ContainerPrimitive, setDisplayName } from "@bermuda-ui/foundation"
import React from "react"


// ----------------------- Root ----------------------- //

export type RootProps = { children?: React.ReactNode; className?: string }
export const Root = ({ className, ...rest }: RootProps) => <footer
    className={cn(
        "w-full",
        "transition-all duration-250",
        "bg-background text-foreground border-t border-border",
        className
    )}
    {...rest}
/>
setDisplayName(Root, "ShellFooterPrimitive.Root")

