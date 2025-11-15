import React from "react";
import { cn } from "../../styles";

import * as DrawerTypes from './Drawer.types'

// import { Button, ButtonTypes } from "../Button";
import { Heading } from "../Typography";


// ----------------------- Root ----------------------- //

const animationClasses: Record<DrawerTypes.Placement, { open: string; closed: string }> = {
    right: { open: "translate-x-0", closed: "translate-x-full" },
    left: { open: "translate-x-0", closed: "-translate-x-full" },
    top: { open: "translate-y-0", closed: "-translate-y-full" },
    bottom: { open: "translate-y-0", closed: "translate-y-full" }
};

export const Root = React.forwardRef<HTMLDivElement, DrawerTypes.RootProps>(({ className, placement = "right", isOpen = false, ...props }, ref) => {
    const animation = animationClasses[placement];

    const placementClasses: Record<DrawerTypes.Placement, string> = {
        right: "right-0 top-0 h-full w-80 border-l translate-x-full data-[open=true]:translate-x-0",
        left: "left-0 top-0 h-full w-80 border-r -translate-x-full data-[open=true]:translate-x-0",
        top: "top-0 left-0 w-full h-80 border-b -translate-y-full data-[open=true]:translate-y-0",
        bottom: "bottom-0 left-0 w-full h-80 border-t translate-y-full data-[open=true]:translate-y-0",
    };

    return <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        data-open={isOpen}
        className={cn(
            "fixed z-50 bg-surface text-surface-fg border-border shadow-xl",
            "flex flex-col outline-none overflow-hidden",
            "transition-transform duration-300 ease-in-out",
            placementClasses[placement],
            isOpen ? animation.open : animation.closed,
            className
        )}
        {...props}
    />
});

// ----------------------- Overlay ----------------------- //

export const Overlay = ({ className, isOpen = false, ...props }: DrawerTypes.OverlayProps) => <div
    aria-hidden="true"
    data-open={isOpen}
    className={cn(
        "fixed inset-0 bg-overlay z-40",
        "transition-opacity duration-300",
        "opacity-0 data-[open=true]:opacity-100",
        className
    )}
    {...props}
/>

// ----------------------- HeaderContent ----------------------- //

export const Header = ({ className, ...props }: DrawerTypes.HeaderProps) => <div className={cn("p-4 border-b border-border flex items-center justify-between", className)} {...props} />
export const Body = ({ className, ...props }: DrawerTypes.BodyProps) => <div className={cn("flex-1 p-4 overflow-y-auto", className)} {...props} />
export const Footer = ({ className, ...props }: DrawerTypes.FooterProps) => <div className={cn("p-4 border-t border-border text-sm text-muted-foreground", className)} {...props} />

export const Title = (props: DrawerTypes.TitleProps) => <Heading as="h2" size="small" {...props} />