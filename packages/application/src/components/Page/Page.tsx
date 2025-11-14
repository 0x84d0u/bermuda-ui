import type * as PageTypes from './Page.types'
import * as PageUI from './Page.ui'


export const Page  = ({ 
    title,
    description,
    children,
    isLoading,
}: PageTypes.PageProps) => {


    return <PageUI.Root>
        <PageUI.Wrapper>
            <PageUI.Header 
                title={title}
                description={description}
            />
            <PageUI.Body>
                {children}
            </PageUI.Body>
        </PageUI.Wrapper>
    </PageUI.Root>

}