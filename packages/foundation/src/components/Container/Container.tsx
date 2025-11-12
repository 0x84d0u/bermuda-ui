import { cn, setDisplayName } from "@utils"
import React from "react"

export type Size = 'mobile' | 'tablet' | 'laptop' | 'desktop'  | 'fluid'

const sizeClasses: Record<Size, string> = {
    mobile: 'max-w-screen-mobile',
    tablet: 'max-w-screen-tablet',
    laptop: 'max-w-screen-laptop',
    desktop: 'max-w-screen-desktop',
    fluid: 'max-w-unset',
}

export type Spacing = 'compact' | 'comfortable' | 'large'

const spacingClasses: Record<Spacing, string> = {
    compact: "px-4 py-2",
    comfortable: "px-6 py-4",
    large: "px-8 py-6",
}

export type ContainerProps = {
    children?: React.ReactNode
    className?: string
    size?: Size
    spacing?: Spacing
}

export const Container = ({
    children,
    className,
    size = 'fluid',
    spacing = 'comfortable',
}: ContainerProps) => {
    return <div
        className={cn(
            "w-full mx-auto",
            spacingClasses[spacing],
            sizeClasses[size],
            className
        )}
    >
        {children}
    </div>
}

setDisplayName(Container, "Container")
