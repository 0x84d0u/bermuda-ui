"use client";

import React from "react";

type ShellState = {
    sidebarIsOpen?: boolean
    toggleSidebar?: () => void
    closeSidebar?: () => void
    openSidebar?: () => void

    headerIsScrolled?: boolean
}


const ShellContext = React.createContext<Required<ShellState> | undefined>(undefined)

export const ShellProvider = ({ children }: { children?: React.ReactNode }) => {
    const [headerIsScrolled, setHeaderScrolled] = React.useState<boolean>(false)
    const [sidebarIsOpen, setSidebarOpen] = React.useState<boolean>(false)

        // Track header scroll (only needs to run once)
    React.useEffect(() => {
        const onScroll = () => setHeaderScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Handle escape key to close sidebar
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && sidebarIsOpen) {
                setSidebarOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [sidebarIsOpen]);

    // Prevent body scroll when sidebar is open
    React.useEffect(() => {
        if (sidebarIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [sidebarIsOpen]);

    // ✅ Memoize functions
    const closeSidebar = React.useCallback(() => setSidebarOpen(false), []);
    const openSidebar = React.useCallback(() => setSidebarOpen(true), []);
    const toggleSidebar = React.useCallback(() => setSidebarOpen(prev => !prev), []);

    // ✅ Memoize context value - THIS IS CRITICAL!
    const state: Required<ShellState> = React.useMemo(() => ({
        headerIsScrolled,
        
        sidebarIsOpen,
        closeSidebar,
        openSidebar,
        toggleSidebar,
    }), [headerIsScrolled, sidebarIsOpen, closeSidebar, openSidebar, toggleSidebar]);

    return <ShellContext.Provider value={state}>
        {children}
    </ShellContext.Provider>
}


export const useShell = () => {
    const ctx = React.useContext(ShellContext);
    if (!ctx) {
        throw new Error("useShell must be wrapped by its provider")
    }
    return ctx
}

export const useShellSidebar = () => {
    const ctx = React.useContext(ShellContext);
    if (!ctx) {
        throw new Error("useShellSidebar must be wrapped by its provider")
    }
    return {
        isOpen: ctx.sidebarIsOpen,
        close: ctx.closeSidebar,
        open: ctx.openSidebar,
        toggle: ctx.toggleSidebar
    }
}

export const useShellHeader = () => {
    const ctx = React.useContext(ShellContext);
    if (!ctx) {
        throw new Error("useShellHeader must be wrapped by its provider")
    }
    return {
        isScrolled: ctx.headerIsScrolled,
    }
}