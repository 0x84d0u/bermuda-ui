"use client";

import { Shell, ShellProps } from "./Shell"
import { ShellProvider, useShell } from "./ShellProvider"

const Hooked = (props: ShellProps) => {
    const {
        sidebarIsOpen,
        toggleSidebar
    } = useShell()
    return <Shell
        isSidebarOpen={sidebarIsOpen}
        toggleSidebar={toggleSidebar}
        {...props}
    />
}

export type ShellControlledProps = ShellProps
export const ShellControlled = (props: ShellControlledProps) => <ShellProvider>
    <Hooked {...props} />
</ShellProvider>