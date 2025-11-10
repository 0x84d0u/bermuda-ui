import * as React from "react"
import { ButtonPrimitive } from "@primitives"


export type ButtonProps = ButtonPrimitive.RootProps & {
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
    return <ButtonPrimitive.Root
        size={size}
        color={color}
        isLoading={isLoading}
    >
        {leftIcon && <ButtonPrimitive.Icon isLoading={isLoading} position='left'>{leftIcon}</ButtonPrimitive.Icon>}
        <ButtonPrimitive.Spinner isLoading={isLoading} />
        <ButtonPrimitive.Content isLoading={isLoading}>
            {children}
        </ButtonPrimitive.Content>
        {rightIcon && <ButtonPrimitive.Icon isLoading={isLoading} position='right'>{rightIcon}</ButtonPrimitive.Icon>}
    </ButtonPrimitive.Root>
}

Button.displayName = "Button"
