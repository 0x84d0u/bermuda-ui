import * as React from "react"
import { cn, setDisplayName, Slot } from "@utils"

export type TextSize = "sm" | "md" | "lg" | "xl"
export type TextWeight = "light" | "normal" | "medium" | "bold"
export type TextColor = "foreground" | "muted" | "primary" | "secondary"
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

const sizeClasses: Record<TextSize, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
}

const weightClasses: Record<TextWeight, string> = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
}

const colorClasses: Record<TextColor, string> = {
    foreground: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary",
}


export type TextProps = React.HTMLAttributes<HTMLElement> & {
    asChild?: boolean
    size?: TextSize
    weight?: TextWeight
    color?: TextColor
}

export type HeadingProps = TextProps & { level?: HeadingLevel }
export type BlockquoteProps = TextProps
export type CodeProps = TextProps


export const Text = ({
    asChild = false,
    size = "md",
    weight = "normal",
    color = "foreground",
    className,
    children,
    ...props
}: TextProps) => {
    const Comp = asChild ? Slot : "span"
    return (
        <Comp
            className={cn(sizeClasses[size], weightClasses[weight], colorClasses[color], className)}
            {...props}
        >
            {children}
        </Comp>
    )
}

export const Heading = ({ level = 1, className, children, ...props }: HeadingProps) => {
    const Tag = `h${level}` as React.ElementType
    return (
        <Tag className={cn("font-bold", className)} {...props}>
            {children}
        </Tag>
    )
}

export const Blockquote = ({ className, children, ...props }: BlockquoteProps) => (
    <blockquote className={cn("border-l-4 pl-4 italic text-muted-foreground", className)} {...props}>
        {children}
    </blockquote>
)

export const Code = ({ className, children, ...props }: CodeProps) => (
    <code className={cn("bg-muted px-1 rounded font-mono text-sm", className)} {...props}>
        {children}
    </code>
)

setDisplayName(Text, "TextPrimitive.Text")
setDisplayName(Heading, "TextPrimitive.Heading")
setDisplayName(Blockquote, "TextPrimitive.Blockquote")
setDisplayName(Code, "TextPrimitive.Code")