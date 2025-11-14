
// ----------------------- Tokens ----------------------- //

import React from "react"

export type Size = 'small' | 'default' | 'large'
export type Color = 'body' | 'heading' | 'accent' | 'link' | 'muted'

export type JsxProps = {
    className?: string
    id?: string
}

export type Setting = {
    color?: Color
    size?: Size
    isBold?: boolean
    isLight?: boolean
}

export type Content = {
    children?: React.ReactNode
    content?: React.ReactNode
    text?: string
}

// ----------------------- Component Props ----------------------- //

export type TextProps = JsxProps & Setting &
    Content & {
        as?: 'p' | 'span' | 'label'
    }

export type HeadingProps = JsxProps & Setting &
    Content & {
        as?: 'h1' | 'h2' | 'h3' | 'span'
    }

export type DisplayProps = JsxProps & Omit<Setting, 'size'> &
    Content & {
        as?: 'h1' | 'span'
    }





