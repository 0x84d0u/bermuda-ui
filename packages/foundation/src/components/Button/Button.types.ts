import React from "react"
import { IconTypes } from "../Icon"

// ----------------------- Tokens ----------------------- //

export type Color = 'default' | 'accent' | 'danger' | 'ghost'
export type Size = 'default' | 'small' | 'large'

// ----------------------- Core types ----------------------- //

export type JsxProps = Pick<
    React.ComponentProps<'button'>,
    'className' | 'onClick' | 'type' | 'ref' | 'aria-label'
>

export type Config = {
    color?: Color
    fullWidth?: boolean
    size?: Size
    isCircle?: boolean
    iconProps?: IconTypes.IconProps
    showBadge?: boolean
    badgePulse?: boolean
}

export type State = {
    isLoading?: boolean
    isActive?: boolean
    isDisabled?: boolean
}

export type Content = {
    iconOnly?: IconTypes.Name
    iconsOnly?: IconTypes.Name[]
    iconStart?: IconTypes.Name
    iconEnd?: IconTypes.Name
    label?: string
}

// ----------------------- UI Props ----------------------- //

export type RootProps =
    JsxProps &
    Pick<Config, 'color' | 'fullWidth' | 'size' | 'isCircle'> &
    State & {
        children?: React.ReactNode
        isSquare?: boolean
    }

export type SpinnerProps = Omit<IconTypes.IconProps, 'name'>
    
export type LabelProps =
    Pick<State, 'isLoading'> & {
        children?: string
    }

export type IconProps = IconTypes.IconProps & {
    position?: 'left' | 'right' | 'single' | 'double'
}

export type BadgeProps = {
    show?: boolean
    pulse?: boolean;
}

// ----------------------- Component Props ----------------------- //

export type ButtonProps =
    JsxProps &
    State &
    Content &
    Config
