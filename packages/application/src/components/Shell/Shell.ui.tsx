import * as ShellTypes from './Shell.types'
import { Button, cn, Container, getPlacementClass } from '@bermuda-ui/foundation'

// ----------------------- Root ----------------------- //

const gradientBg = `
    radial-gradient(circle 800px at 82% 12%, rgb(from var(--color-accent) r g b / 0.07), transparent),
    radial-gradient(circle 900px at 10% 85%, rgb(from var(--color-accent) r g b / 0.04), transparent),
    radial-gradient(circle 700px at 55% 45%, rgb(from var(--color-accent) r g b / 0.07), transparent),
    radial-gradient(circle 650px at 88% 70%, rgb(from var(--color-accent) r g b / 0.03), transparent),
    var(--color-root)
`

export const Root = ({ className, style, ...jsxProps }: ShellTypes.RootProps) => <div
    className={cn("flex flex-col min-h-svh transition-colors", className)}
    style={{ background: gradientBg, ...style }}
    {...jsxProps}
/>

export const Wrapper = ({ className, ...rest }: ShellTypes.WrapperProps) => <div className={cn("relative flex-1 flex w-full h-full", className)} {...rest} />
export const Body = ({ className, ...rest }: ShellTypes.BodyProps) => <main
    role="main"
    className={cn("flex-1 overflow-y-auto overflow-x-hidden scroll-smooth focus-visible:outline-none", "flex flex-col", className)}
    {...rest}
/>

// ----------------------- Header  ----------------------- //

export const Header = ({
    headerIsEnabled,
    headerIsBordered,
    headerIsFixed,

    sidebarIsEnabled,

    toggleSidebar,
    sidebarIsOpen,

    headerLeftContent,
    headerMidContent,
    headerRightContent
}: ShellTypes.HeaderProps) => {

    // const processedChildren = React.Children.map(children, child => {
    //     if (!React.isValidElement(child)) return child
    //     if (typeof child.type === 'string') {
    //         // It's a DOM element, return as-is
    //         return child
    //     }
    //     const componentType = child.type as React.ComponentType<any>
    //     const isButton = [getDisplayName(Button)].includes((componentType as any).displayName);
    //     if (isButton) return React.cloneElement(child, { ...child.props, variant: "ghost", color: "muted", size: "md" })
    //     return child
    // })

    if (!headerIsEnabled) return null;
    return <header
        className={cn(
            "w-full bg-surface text-surface-fg",
            "shrink-0",
            headerIsFixed && "sticky top-0 z-40 bg-surface/95",
            "border-b", headerIsBordered ? "border-border" : "border-transparent",
        )}
    >
        <Container size='fluid' className='h-(--header-height) min-h-(--header-height) grid grid-cols-3 items-center gap-4'>
            <div className="flex items-center gap-1 justify-start">
                {sidebarIsEnabled && <Button
                    className="laptop:hidden"
                    onClick={toggleSidebar}
                    kind='button'
                    variant='ghost'
                    label="sidebar-toggle"
                    icon={{
                        transition: {
                            primary: 'Menu',
                            secondary: 'X',
                            active: sidebarIsOpen
                        }
                    }}
                />}
                {headerLeftContent}
            </div>
            <div className="flex items-center justify-center shrink-0">{headerMidContent}</div>
            <div className="flex items-center gap-2 justify-end">{headerRightContent}</div>
        </Container>
    </header>
}

// ----------------------- Footer  ----------------------- //

export const Footer = ({
    footerContent,
}: ShellTypes.FooterProps) => {

    return <header
        className={cn(
            "w-full transition-all",
            "bg-surface text-surface-fg border-t border-border",
        )}
    >
        <Container size='fluid' className={cn('h-(--header-height) min-h-(--header-height) grid grid-cols-3 items-center gap-4')}>
            {footerContent}
        </Container>
    </header>
}

// ----------------------- Sidebar  ----------------------- //

export const Sidebar = ({
    sidebarIsEnabled,
    sidebarPlacement = 'left',
    // headerIsEnabled,
    // headerIsFixed,

    sidebarIsOpen,
    closeSidebar,

    sidebarHeaderContent,
    sidebarContent,
    sidebarFooterContent,
}: ShellTypes.SidebarProps) => {
    if (!sidebarIsEnabled) return null;

    return <>
        {/* {sidebarIsOpen && <div
            className={cn(
                "fixed inset-0 bg-overlay z-20 laptop:hidden",
                "transition-opacity",
                getPlacementClass()
            )}
            onClick={closeSidebar}
            aria-hidden="true"
        />} */}

        <aside
            role="complementary"
            aria-hidden={!sidebarIsOpen}
            data-open={sidebarIsOpen}
            className={cn(
                "transition-transform",
                "focus-visible:outline-none",

                "fixed inset-y-0 left-0 z-30",
                "bg-surface text-foreground border-r border-border",
                "flex flex-col",

                getPlacementClass(sidebarPlacement),
                sidebarPlacement === 'right' ? 'order-2' : 'order-0',

                // Height
                "laptop:sticky laptop:top-[calc(var(--header-height)+1px)] laptop:shrink-0",
                "top-[calc(var(--header-height)+1px)]",
                "laptop:h-[calc(100svh-var(--header-height)-1px)]",

                // Width
                "w-full tablet:w-(--sidebar-width)",

            )}>
            {sidebarHeaderContent && <div className="shrink-0 px-6 py-4 border-b border-border">{sidebarHeaderContent}</div>}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-2">{sidebarContent}</div>
            {sidebarFooterContent && <div className="shrink-0 px-6 py-4 border-t border-border">{sidebarFooterContent}</div>}
        </aside>
    </>

}


