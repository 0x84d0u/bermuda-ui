import * as ShellUI from "./Shell.ui";
import * as ShellTypes from "./Shell.types";

export const Shell = ({
    headerRightContent,
    headerMidContent,
    headerLeftContent,
    sidebarHeaderContent,
    sidebarContent,
    sidebarFooterContent,
    footerContent,
    children,
    ...props
}: ShellTypes.ShellProps) => {
    const config: ShellTypes.Config = props
    const state: ShellTypes.State = props

    return <ShellUI.Root >

        <ShellUI.Header
            {...config}
            {...state}
            headerLeftContent={headerLeftContent}
            headerMidContent={headerMidContent}
            headerRightContent={headerRightContent}
        />

        <ShellUI.Wrapper>
            <ShellUI.Sidebar
                {...config}
                {...state}
                sidebarHeaderContent={sidebarHeaderContent}
                sidebarFooterContent={sidebarFooterContent}
                sidebarContent={sidebarContent}
            />
            <ShellUI.Body>
                <div className="flex flex-col flex-1">
                    {children}
                </div>
                <ShellUI.Footer
                    {...config}
                    {...state}
                    footerContent={footerContent}
                />
            </ShellUI.Body>
        </ShellUI.Wrapper>
    </ShellUI.Root>
}

