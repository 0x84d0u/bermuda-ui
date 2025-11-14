import React from "react";

// ----------------------- Tokens ----------------------- //

export type State = {
    sidebarIsOpen?: boolean
    toggleSidebar?: () => void
    closeSidebar?: () => void
    openSidebar?: () => void

    headerIsScrolled?: boolean
}

export type Ctx = Required<State>

export type Config = {
    headerIsEnabled?: boolean
    sidebarIsEnabled?: boolean
    footerIsEnabled?: boolean
    
    headerIsFixed?: boolean
    headerIsBordered?: boolean

    sidebarPosition?: 'left' | 'right'
}

export type Content = {
    headerLeftContent?: React.ReactNode
    headerMidContent?: React.ReactNode
    headerRightContent?: React.ReactNode
    footerContent?: React.ReactNode
    sidebarHeaderContent?: React.ReactNode
    sidebarContent?: React.ReactNode
    sidebarFooterContent?: React.ReactNode
    children?: React.ReactNode
}

// ----------------------- UI Props ----------------------- //

export type RootProps = React.ComponentProps<'div'>
export type WrapperProps = React.ComponentProps<'div'>
export type BodyProps = React.ComponentProps<'main'>

export type HeaderProps = 
    Pick<Config, 'headerIsBordered' | 'headerIsFixed' | 'headerIsEnabled' | 'sidebarIsEnabled'> &
    Pick<Content, 'headerLeftContent' | 'headerMidContent' | 'headerRightContent' > &
    Pick<State, 'toggleSidebar'> 

export type FooterProps = 
    Pick<Content, 'footerContent'>

export type SidebarProps =  
    Pick<Config, 'sidebarIsEnabled' | 'sidebarPosition'> & 
    Pick<State, 'sidebarIsOpen' | 'closeSidebar'> &
    Pick<Content, 'sidebarHeaderContent' | 'sidebarFooterContent' | 'sidebarContent'>


// ----------------------- Component props  ----------------------- //

export type ShellProps = Config & Content & State 

//     // cssVars?: {
//     //     '--header-height': string
//     //     '--sidebar-width': string
//     // }

//     sidebarEnabled?: boolean
//     sidebarPosition?: 'left' | 'right'
//     isSidebarOpen?: boolean
//     toggleSidebar?: () => void
//     closeSidebar?: () => void
//     sidebarHeaderContent?: React.ReactNode
//     sidebarContent?: React.ReactNode
//     sidebarFooterContent?: React.ReactNode


//     children?: React.ReactNode

//     footerContent?: React.ReactNode
