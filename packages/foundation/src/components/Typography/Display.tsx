import type * as TypographyTypes from './Typography.types'
import { cn } from '../../styles'

export const Display = ({
    color,
    isBold,
    isLight,
    className,

    as : Root = 'span',
    content,
    text,
    children
}: TypographyTypes.DisplayProps) => {
    // const Root: React.ElementType = as

    const colorClasses: Record<TypographyTypes.Color, string> = {
        body: "text-root-fg",
        heading: "text-surface-fg",
        link: "text-active-fg",
        accent: "text-accent-fg",
        muted: "text-muted-fg"
    }

    const weightClass = isBold ? "font-semibold" : isLight ? "font-light" : "font-normal";

    return <Root
        className={cn(
            color && colorClasses[color],
            "text-display",
            weightClass,
            className,
        )}>
        {content ?? text ?? children}
    </Root>
}