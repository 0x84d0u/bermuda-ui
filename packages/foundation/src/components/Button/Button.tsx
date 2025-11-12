import * as React from "react"
import { ButtonUI } from "@ui"


export type ButtonProps = ButtonUI.RootProps & {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

export const Button = ({
    size,
    color,
    isLoading,
    leftIcon,
    rightIcon,
    children,
    ...rest
}: ButtonProps) => {
    return <ButtonUI.Root
        size={size}
        color={color}
        isLoading={isLoading}
    >
        {leftIcon && <ButtonUI.Icon isLoading={isLoading} position='left'>{leftIcon}</ButtonUI.Icon>}
        <ButtonUI.Spinner isLoading={isLoading} />
        <ButtonUI.Content isLoading={isLoading}>
            {children}
        </ButtonUI.Content>
        {rightIcon && <ButtonUI.Icon isLoading={isLoading} position='right'>{rightIcon}</ButtonUI.Icon>}
    </ButtonUI.Root>
}

Button.displayName = "Button"
