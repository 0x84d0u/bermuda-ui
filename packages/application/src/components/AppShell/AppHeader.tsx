"use client";
import React from "react"
import { AppHeaderPrimitive } from "@primitives"

export type AppHeaderProps =
    Pick<AppHeaderPrimitive.RootProps, 'isBordered' | 'isFixed'> & {

        containerSize?: AppHeaderPrimitive.ContainerProps['size']
        containerSpacing?: AppHeaderPrimitive.ContainerProps['spacing']

        isBorderedOnScroll?: number

        toolbarContent?: React.ReactNode
        brandingContent?: React.ReactNode
        actionsContent?: React.ReactNode
    }

export const AppHeader = ({
    isBordered,
    isFixed,
    isBorderedOnScroll,
    containerSize,
    containerSpacing,
    toolbarContent,
    brandingContent,
    actionsContent
}: AppHeaderProps) => {

    const [isScrolled, setIsScrolled] = React.useState(false)
    const scrollBreakpoint = isBorderedOnScroll ?? 0


    React.useEffect(() => {
        if (!scrollBreakpoint) return

        const handleScroll = () => {
            setIsScrolled(window.scrollY > scrollBreakpoint)
        }

        handleScroll() // initialize on mount
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [scrollBreakpoint])

    return <AppHeaderPrimitive.Root
        isBordered={!!(scrollBreakpoint && isScrolled) || isBordered}
        isFixed={isFixed}
    >
        <AppHeaderPrimitive.Container
            size={containerSize}
            spacing={containerSpacing}
        >
            <AppHeaderPrimitive.Toolbar>
                {toolbarContent}
            </AppHeaderPrimitive.Toolbar>
            <AppHeaderPrimitive.Branding>
                {brandingContent}
            </AppHeaderPrimitive.Branding>
            <AppHeaderPrimitive.Actions>
                {actionsContent}
            </AppHeaderPrimitive.Actions>
        </AppHeaderPrimitive.Container>
    </AppHeaderPrimitive.Root>
}