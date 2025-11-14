import type * as TypographyTypes from './Typography.types'
import { cn } from '../../styles'

export const Text = ({
    color,
    size = 'default',
    isBold,
    isLight,
    className,

    as : Root = 'span',
    content,
    text,
    children
}: TypographyTypes.TextProps) => {
    // const Root: React.ElementType = as

    const colorClasses: Record<TypographyTypes.Color, string> = {
        body: "text-root-fg",
        heading: "text-surface-fg",
        link: "text-active-fg",
        accent: "text-accent-fg",
        muted: "text-muted-fg"
    }

    const sizeClasses: Record<TypographyTypes.Size, string> = {
        small: "text-text-small",
        default: "text-text-medium",
        large: "text-text-large",
    };

    const weightClass = isBold ? "font-semibold" : isLight ? "font-light" : "font-normal";

    return <Root
        className={cn(
            color && colorClasses[color],
            sizeClasses[size],
            weightClass,
            className,
        )}>
        {content ?? text ?? children}
    </Root>
}