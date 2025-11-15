import React from "react";
import * as Types from './Drawer.types'
import { cn, getPlacementClass } from "@bermuda-ui/foundation";


export const Root = React.forwardRef<HTMLDivElement, Types.RootProps>(({ className, placement = "right", isOpen = false, ...props }, ref) => {

    const placementClasses: Record<Types.Placement, string> = {
        right: "right-0 top-0 h-full w-80 border-l",
        left: "left-0 top-0 h-full w-80 border-r",
        top: "top-0 left-0 w-full h-80 border-b",
        bottom: "bottom-0 left-0 w-full h-80 border-t",
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
            getPlacementClass(placement),
            placementClasses[placement],
            // isOpen ? animation.open : animation.closed,
            className
        )}
        {...props}
    />
});

// ----------------------- Overlay ----------------------- //

export const Overlay = ({ className, isOpen = false, ...props }: Types.OverlayProps) =>isOpen && <div
    aria-hidden="true"
    data-open={isOpen}
    className={cn(
        "fixed inset-0 bg-overlay z-40",
        "transition-opacity duration-300",
        getPlacementClass(),
        className
    )}
    {...props}
/>

// ----------------------- HeaderContent ----------------------- //

export const Header = ({ className, ...props }: Types.HeaderProps) => <div className={cn("p-4 border-b border-border flex items-center justify-between", className)} {...props} />
export const Body = ({ className, ...props }: Types.BodyProps) => <div className={cn("flex-1 p-4 overflow-y-auto", className)} {...props} />
export const Footer = ({ className, ...props }: Types.FooterProps) => <div className={cn("p-4 border-t border-border text-sm text-muted-foreground", className)} {...props} />
