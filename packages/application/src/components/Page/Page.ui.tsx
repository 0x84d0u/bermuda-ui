import { Container, Typography } from '@bermuda-ui/foundation'
import type * as PageTypes from './Page.types'

export const Root = ({ children }: PageTypes.RootProps) => {
    return <div>
        {children}
    </div>
}

export const Wrapper = ({ children }: PageTypes.WrapperProps) => {
    return <div className='flex flex-col'>
        {children}
    </div>
}

export const Sidbebar = ({
    sidebarContent,
    tableOfContent
}: PageTypes.SidebarProps) => {
    const hasToc = !!(tableOfContent && tableOfContent.length > 0)
    const hasContent = !!sidebarContent
    if (!hasContent && !hasContent) return null;
    return <div>
        {hasToc && <TableOfContent
            tableOfContent={tableOfContent}
        />}
        {hasContent && <div>
            {sidebarContent}
        </div>}
    </div>
}

export const TableOfContent = ({ tableOfContent }: PageTypes.TableOfContentProps) => {
    return <div>
        TOC
    </div>
}
export const Header = ({ title, description }: PageTypes.HeaderProps) => {
    return <section className=''>
        <Container size='laptop' spacing='comfortable'>
            <Typography kind='heading' size={1}>{title}</Typography>
            <Typography kind='text' size='large'>{description}</Typography>
        </Container>
    </section>
}

export const Body = ({ children }: PageTypes.BodyProps) => {
    return <div>
        {children}
    </div>
}

// export const Footer = ({ children }: PageTypes.FooterProps) => {
//     return <div>
//         {children}
//     </div>
// }