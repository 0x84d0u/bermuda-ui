import { Container } from '@bermuda-ui/foundation'
import type * as SectionTypes from './Section.types'
import * as SectionUI from './Section.ui'


export const Section = ({
    isAlternative,
    containerSize = 'laptop',
    spacing,

    title,
    description,
    children,
    footerContent,

    ...jsxProps
}: SectionTypes.SectionProps) => {

    return <SectionUI.Root
        isAlternative={isAlternative}
        spacing={spacing}
        {...jsxProps}
    >
        <Container size={containerSize}>
            <SectionUI.Header
                title={title}
                description={description}
            />
            <SectionUI.Body
                children={children}
            />
            <SectionUI.Footer
                footerContent={footerContent}
            />
        </Container>
    </SectionUI.Root>
}