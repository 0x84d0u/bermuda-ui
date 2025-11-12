import React from "react"
import { ShellUI } from "@ui"


// ----------------------- Shell ----------------------- //


export type ShellProps = {
    headerEnabled?: boolean
    headerIsBordered?: boolean
    headerIsFixed?: boolean
    headerActionsContent?: React.ReactNode
    headerBrandingContent?: React.ReactNode
    headerToolbarContent?: React.ReactNode

    containerSize?: ShellUI.ContainerProps['size']
    containerSpacing?: ShellUI.ContainerProps['spacing']

    sidebarEnabled?: boolean
    sidebarPosition?: 'left' | 'right'
    isSidebarOpen?: boolean
    toggleSidebar?: () => void
    sidebarHeaderContent?: React.ReactNode
    sidebarContent?: React.ReactNode
    sidebarFooterContent?: React.ReactNode


    children?: React.ReactNode

    footerContent?: React.ReactNode
}

export const Shell = ({
    headerEnabled = true,
    headerIsBordered = true,
    headerIsFixed = true,
    headerActionsContent,
    headerBrandingContent,
    headerToolbarContent,

    sidebarEnabled = true,
    sidebarPosition = 'left',
    isSidebarOpen = false,
    toggleSidebar,
    sidebarHeaderContent,
    sidebarContent,
    sidebarFooterContent,

    containerSize = 'laptop',
    containerSpacing = 'comfortable',

    footerContent,
    children

}: ShellProps) => {


    return <ShellUI.Root>
        {/* Header */}
        {headerEnabled && <Header
            isBordered={headerIsBordered}
            isFixed={headerIsFixed}
            containerSize={containerSize}
            containerSpacing={containerSpacing}
            toolbarContent={<>
                {sidebarEnabled && <SidebarToggle 
                    isOpen={isSidebarOpen}
                    toggle={toggleSidebar}
                />}
                {headerToolbarContent}
            </>}
            brandingContent={headerBrandingContent}
            actionsContent={headerActionsContent}
        />}

        <ShellUI.Body>

            {sidebarEnabled && <Sidebar 
                isOpen={isSidebarOpen}
                position={sidebarPosition}
                headerContent={sidebarHeaderContent}
                footerContent={sidebarFooterContent}
                children={sidebarContent}
            />}

            <ShellUI.Main>
                {children}
                {footerContent && <Footer
                    containerSize={containerSize}
                    containerSpacing={containerSpacing}
                    children={footerContent}
                />}
            </ShellUI.Main>

        </ShellUI.Body>
    </ShellUI.Root>
}


// ----------------------- Header ----------------------- //

type HeaderProps = Pick<ShellUI.HeaderRootProps, 'isBordered' | 'isFixed'> & {
    containerSize?: ShellUI.ContainerProps['size']
    containerSpacing?: ShellUI.ContainerProps['spacing']
    toolbarContent?: React.ReactNode
    brandingContent?: React.ReactNode
    actionsContent?: React.ReactNode
}

const Header = ({
    isBordered,
    isFixed,
    containerSize,
    containerSpacing,
    toolbarContent,
    brandingContent,
    actionsContent
}: HeaderProps) => {
    return <ShellUI.HeaderRoot
        isBordered={isBordered}
        isFixed={isFixed}
    >
        <ShellUI.Container
            className='h-16 min-h-16 grid grid-cols-3 items-center gap-4'
            size={containerSize}
            spacing={containerSpacing}
        >
            <ShellUI.HeaderToolbar>
                {toolbarContent}
            </ShellUI.HeaderToolbar>
            <ShellUI.HeaderBranding>
                {brandingContent}
            </ShellUI.HeaderBranding>
            <ShellUI.HeaderActions>
                {actionsContent}
            </ShellUI.HeaderActions>
        </ShellUI.Container>
    </ShellUI.HeaderRoot>
}

// ----------------------- Footer ----------------------- //

type FooterProps = {
    containerSize?: ShellUI.ContainerProps['size']
    containerSpacing?: ShellUI.ContainerProps['spacing']

    children?: React.ReactNode
}

const Footer = ({
    containerSize,
    containerSpacing,
    children,
}: FooterProps) => {
    return <ShellUI.FooterRoot>
        <ShellUI.Container
            size={containerSize}
            spacing={containerSpacing}
            className='h-16 min-h-16'
        >
            {children}
        </ShellUI.Container>
    </ShellUI.FooterRoot>
}

// ----------------------- Sidebar ----------------------- //

type SidebarProps = {
    isOpen?: boolean
    position?: 'left' | 'right'
    headerContent?: React.ReactNode
    footerContent?: React.ReactNode
    children?: React.ReactNode
}

const Sidebar = ({
    isOpen,
    position,
    headerContent,
    footerContent,
    children,
}: SidebarProps) => {
    return <ShellUI.SidebarRoot
        isOpen={isOpen}
        position={position}
    >
        {headerContent && <ShellUI.SidebarHeader>{headerContent}</ShellUI.SidebarHeader>}
        <ShellUI.SidebarBody>{children}</ShellUI.SidebarBody>
        {footerContent && <ShellUI.SidebarFooter>{footerContent}</ShellUI.SidebarFooter>}
    </ShellUI.SidebarRoot>
}


// ----------------------- SidebarToggle ----------------------- //

type SidebarToggleProps = { isOpen?: boolean; toggle?: () => void }

const SidebarToggle = ({ isOpen, toggle }: SidebarToggleProps) => {
    return <ShellUI.HeaderButton
        className="laptop:hidden"
        isActive={isOpen}
        onClick={toggle}
    >
        <svg
            className={"h-5 w-5 transition-transform duration-100"}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    </ShellUI.HeaderButton>
}

