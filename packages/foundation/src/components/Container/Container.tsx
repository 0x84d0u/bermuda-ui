import React from "react"
import { setDisplayName } from "../../helpers"
import { cn } from "../../styles"
import * as ContainerTypes from './Container.types'

const sizeClasses: Record<ContainerTypes.Size, string> = {
    mobile: 'max-w-screen-mobile',
    tablet: 'max-w-screen-tablet',
    laptop: 'max-w-screen-laptop',
    desktop: 'max-w-screen-desktop',
    fluid: 'max-w-unset',
}


const spacingClasses: Record<ContainerTypes.Spacing, string> = {
    compact: "py-6",
    comfortable: "py-12",
    large: "py-32",
}

export const Container = ({
    className,
    size = 'fluid',
    spacing,
    ...jsxProps
}: ContainerTypes.ContainerProps) => {
    return <div
        className={cn(
            "w-full mx-auto px-5",
            spacing && spacingClasses[spacing],
            sizeClasses[size],
            className
        )}
        {...jsxProps}
    />
}

setDisplayName(Container, "Container")
