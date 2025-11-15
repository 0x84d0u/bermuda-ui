import { ContainerTypes } from "@bermuda-ui/foundation"
import React, { ComponentProps } from "react"

// ----------------------- Tokens ----------------------- //

export type Spacing = ContainerTypes.Spacing

export type jsxProps = Pick<
    ComponentProps<'section'>,
    'className' | 'id'
>

export type Config = {
    isAlternative?: boolean
    containerSize?: ContainerTypes.Size
    spacing?: Spacing
}

export type Content = {
    children?: React.ReactNode
    title?: string
    description?: string
    footerContent?: React.ReactNode
}

// ----------------------- UI Props ----------------------- //

export type RootProps = jsxProps & 
Pick<Content, 'children'> &
Pick<Config, 'isAlternative' | 'spacing'>

export type headerProps = Pick<Content, 'title' | 'description'>
export type bodyProps = Pick<Content, 'children'>
export type footerProps = Pick<Content, 'footerContent'>

// ----------------------- Component Props ----------------------- //

export type SectionProps = jsxProps & Content & Config