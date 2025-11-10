import React from "react"
import { ShellPrimitive } from "@primitives"


// ----------------------- Shell ----------------------- //


export type ShellProps = {
    headerEnabled?: boolean
    headerIsBordered?: boolean
    headerIsFixed?: boolean

    containerSize?: ShellPrimitive.ContainerProps['size']
    containerSpacing?: ShellPrimitive.ContainerProps['spacing']

    sidebarEnabled?: boolean
    isSidebarOpen?: boolean
    toggleSidebar?: () => void

    headerActionsContent?: React.ReactNode
    headerBrandingContent?: React.ReactNode
    headerToolbarContent?: React.ReactNode
    footerContent?: React.ReactNode
    children?: React.ReactNode
}

export const Shell = ({
    headerEnabled = true,
    headerIsBordered = true,
    headerIsFixed = true,

    sidebarEnabled = true,
    isSidebarOpen = false,
    toggleSidebar,

    containerSize = 'laptop',
    containerSpacing = 'comfortable',

    headerActionsContent,
    headerBrandingContent,
    headerToolbarContent,
    footerContent,
    children

}: ShellProps) => {


    return <ShellPrimitive.Root>
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

        <ShellPrimitive.Body>
            {/* Sidebar */}

            <div> Sidebar here</div>

            <ShellPrimitive.Main>
                {/* Main Content */}
                {children}
                {/* Footer */}

                {footerContent && <Footer
                    containerSize={containerSize}
                    containerSpacing={containerSpacing}
                    children={footerContent}
                />}
            </ShellPrimitive.Main>

        </ShellPrimitive.Body>
    </ShellPrimitive.Root>
}


// ----------------------- Header ----------------------- //

type HeaderProps = Pick<ShellPrimitive.Header.RootProps, 'isBordered' | 'isFixed'> & {
    containerSize?: ShellPrimitive.ContainerProps['size']
    containerSpacing?: ShellPrimitive.ContainerProps['spacing']
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
    const Base = ShellPrimitive.Header
    return <ShellPrimitive.Header.Root
        isBordered={isBordered}
        isFixed={isFixed}
    >
        <ShellPrimitive.Container
            className='h-16 min-h-16 grid grid-cols-3 items-center gap-4'
            size={containerSize}
            spacing={containerSpacing}
        >
            <ShellPrimitive.Header.Toolbar>
                {toolbarContent}
            </ShellPrimitive.Header.Toolbar>
            <ShellPrimitive.Header.Branding>
                {brandingContent}
            </ShellPrimitive.Header.Branding>
            <ShellPrimitive.Header.Actions>
                {actionsContent}
            </ShellPrimitive.Header.Actions>
        </ShellPrimitive.Container>
    </ShellPrimitive.Header.Root>
}

// ----------------------- Footer ----------------------- //

type FooterProps = {
    containerSize?: ShellPrimitive.ContainerProps['size']
    containerSpacing?: ShellPrimitive.ContainerProps['spacing']

    children?: React.ReactNode
}

const Footer = ({
    containerSize,
    containerSpacing,
    children,
}: FooterProps) => {
    return <ShellPrimitive.Footer.Root>
        <ShellPrimitive.Container
            size={containerSize}
            spacing={containerSpacing}
            className='h-16 min-h-16'
        >
            {children}
        </ShellPrimitive.Container>
    </ShellPrimitive.Footer.Root>
}

// ----------------------- Sidbar ----------------------- //



// ----------------------- SidebarToggle ----------------------- //

type SidebarToggleProps = { isOpen?: boolean; toggle?: () => void }

const SidebarToggle = ({ isOpen, toggle }: SidebarToggleProps) => {
    return <ShellPrimitive.Header.IconButton
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
    </ShellPrimitive.Header.IconButton>
}