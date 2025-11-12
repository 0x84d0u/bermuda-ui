import { cn, setDisplayName } from "@utils"
import React from "react"

export type RootProps = React.ComponentProps<'div'> & {
    isInteractive?: boolean
}
export const Root = ({
    isInteractive,
    className,
    ...rest
}: RootProps) => {
    return <div
        className={cn(
            "relative rounded-2xl border bg-card text-card-foreground shadow-sm transition-all",
            isInteractive && "hover:shadow-md hover:-translate-y-0.5 cursor-pointer",
            className
        )}
        {...rest}
    />

}

export type HeaderProps = {
    children?: React.ReactNode
    className?: string
}
export const Header = ({ className, ...rest }: HeaderProps) => {
    return <div
        className={cn(
            "flex items-center justify-between px-6 py-4 border-b border-border/50",
            className
        )}
        {...rest}
    />
}

export type BodyProps = {
    children?: React.ReactNode
    className?: string
}
export const Body = ({ className, ...rest }: BodyProps) => {
    return <div
        className={cn(
            "px-6 py-4 text-sm leading-relaxed",
            className
        )}
        {...rest}
    />
}

export type FooterProps = {
    children?: React.ReactNode
    className?: string
}
export const Footer = ({ className, ...rest }: FooterProps) => {
    return <div
        className={cn(
            "px-6 py-3 border-t border-border/50 flex items-center justify-end gap-2",
            className
        )}
        {...rest}
    />
}


setDisplayName(Root,"CardUI.Root")
setDisplayName(Header,"CardUI.Header")
setDisplayName(Body,"CardUI.Body")
setDisplayName(Footer,"CardUI.Footer")
