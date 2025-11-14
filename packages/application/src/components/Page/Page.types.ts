import React from "react"

// ----------------------- Tokens ----------------------- //
export type Toc = { title: string, id: string }
// export type Layout = 'landing' | 'sidebar' | 'table-of-content' | 'default' | 'one-page' 

export type Config = {
    // layout?: Layout
}

export type Content = {
    title?: string
    description?: string
    children?: React.ReactNode

    tableOfContent?: Toc[]
    sidebarContent?: React.ReactNode
}

export type State = {
    isLoading?: boolean
}

// ----------------------- UI Props ----------------------- //

export type RootProps = React.ComponentProps<'div'>
export type SidebarProps = Pick<Content, 'sidebarContent' | 'tableOfContent'>
export type WrapperProps = React.ComponentProps<'div'>
export type TableOfContentProps = Pick<Content, 'tableOfContent'>

export type HeaderProps = Pick<Content, 'title' | 'description'>
export type BodyProps = React.ComponentProps<'div'>
// export type FooterProps = React.ComponentProps<'div'>


// ----------------------- Component Props ----------------------- //

export type PageProps = State &
    Pick<Content, 'title' | 'description' | 'children'>

export type SidebarPageProps = State &
    Pick<Content, 'title' | 'description' | 'sidebarContent' | 'tableOfContent'>

export type EmptyPageProps = Config & Content
