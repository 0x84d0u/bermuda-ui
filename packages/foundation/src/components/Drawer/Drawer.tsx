"use client"

import React from "react"
import * as DrawerUI from "./Drawer.ui";
import * as DrawerTypes from './Drawer.types'


export const Drawer = ({
    placement = "right",

    triggerProps = { label: "Open drawer" },
    title,
    headerContent,
    footerContent,
    children,

    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    preventBodyScroll = true,

    closeProps,
    rootProps,
    overlayProps,
}: DrawerTypes.DrawerProps) => {
    // Handle controlled/uncontrolled state
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

    // Refs for focus management
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const drawerRef = React.useRef<HTMLDivElement>(null);
    const previousFocusRef = React.useRef<HTMLElement | null>(null);

    // IDs for accessibility
    const titleId = React.useId();
    const descriptionId = React.useId();

    // State change handlers
    const setOpen = React.useCallback((newOpen: boolean) => {
        if (!isControlled) {
            setUncontrolledOpen(newOpen);
        }
        onOpenChange?.(newOpen);
    }, [isControlled, onOpenChange]);

    const open = React.useCallback(() => setOpen(true), [setOpen]);
    const close = React.useCallback(() => setOpen(false), [setOpen]);
    // const toggle = React.useCallback(() => setOpen(!isOpen), [setOpen, isOpen]);

    // Handle overlay click
    const handleOverlayClick = React.useCallback(() => {
        if (closeOnOverlayClick) {
            close();
        }
    }, [closeOnOverlayClick, close]);

    // Handle escape key
    React.useEffect(() => {
        if (!isOpen || !closeOnEscape) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                close();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, closeOnEscape, close]);

    // Prevent body scroll when open
    React.useEffect(() => {
        if (!preventBodyScroll) return;

        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            const previousOverflow = document.body.style.overflow;
            const previousPaddingRight = document.body.style.paddingRight;

            document.body.style.overflow = "hidden";
            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            }

            return () => {
                document.body.style.overflow = previousOverflow;
                document.body.style.paddingRight = previousPaddingRight;
            };
        }
    }, [isOpen, preventBodyScroll]);

    // Focus management
    React.useEffect(() => {
        if (isOpen) {
            // Store current focus
            previousFocusRef.current = document.activeElement as HTMLElement;

            // Focus first focusable element in drawer
            requestAnimationFrame(() => {
                if (drawerRef.current) {
                    const focusable = drawerRef.current.querySelector<HTMLElement>(
                        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    );
                    focusable?.focus();
                }
            });
        } else {
            // Restore focus when closing
            if (previousFocusRef.current && document.body.contains(previousFocusRef.current)) {
                previousFocusRef.current.focus();
            }
        }
    }, [isOpen]);

    // Focus trap
    React.useEffect(() => {
        if (!isOpen || !drawerRef.current) return;

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;

            const focusableElements = drawerRef.current!.querySelectorAll<HTMLElement>(
                'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
            }
        };

        document.addEventListener("keydown", handleTabKey);
        return () => document.removeEventListener("keydown", handleTabKey);
    }, [isOpen]);

    return (
        <>
            <DrawerUI.Trigger ref={triggerRef} {...triggerProps} onClick={open} />
            {isOpen && (
                <>
                    <DrawerUI.Overlay
                        isOpen={isOpen}
                        onClick={handleOverlayClick}
                        {...overlayProps}
                    />
                    <DrawerUI.Root
                        ref={drawerRef}
                        placement={placement}
                        isOpen={isOpen}
                        aria-labelledby={title ? titleId : undefined}
                        aria-describedby={descriptionId}
                        {...rootProps}
                    >
                        <DrawerUI.Header>
                            <div className="flex-1">
                                {title && <DrawerUI.Title id={titleId}>{title}</DrawerUI.Title>}
                                {headerContent}
                            </div>
                            <DrawerUI.CloseButton {...closeProps} onClick={close} />
                        </DrawerUI.Header>
                        <DrawerUI.Body id={descriptionId}>{children}</DrawerUI.Body>
                        {footerContent && <DrawerUI.Footer>{footerContent}</DrawerUI.Footer>}
                    </DrawerUI.Root>
                </>
            )}
        </>
    );
};