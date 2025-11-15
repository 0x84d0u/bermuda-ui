import { cn, Heading, Text } from '@bermuda-ui/foundation'
import type * as SectionTypes from './Section.types'

// ----------------------- Root ----------------------- //

export const Root = ({
    children,
    className,
    isAlternative,
    spacing,
    ...jsxProps
}: SectionTypes.RootProps) => {
    return <section
        className={cn(
            isAlternative && 'bg-surface',
            className
        )}
        {...jsxProps}
    >
        {children}
    </section>
}

// ----------------------- Layout  ----------------------- //

export const Header = ({ title, description }: SectionTypes.headerProps) => {
    if (!title && !description) return null;
    return <div>
        {title && <Heading as='h2' isBold color='heading' size='default' text={title} />}
        {description && <Text as='p' size='large' text={description} />}
    </div>
}

export const Body = ({ children }: SectionTypes.bodyProps) => {
    return <div>
        {children}
    </div>
}

export const Footer = ({ footerContent }: SectionTypes.footerProps) => {
    return <div>
        {footerContent}
    </div>
}