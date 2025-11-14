import { ButtonTypes } from "../Button";
import { TypographyTypes } from "../Typography";


// ----------------------- Tokens ----------------------- //


export type Placement = "left" | "right" | "top" | "bottom";


// ----------------------- UI Props ----------------------- //

export type RootProps = React.HTMLAttributes<HTMLDivElement> & { placement?: Placement; isOpen?: boolean; };



export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type BodyProps = React.HTMLAttributes<HTMLDivElement>;
export type FooterProps = React.HTMLAttributes<HTMLDivElement>;

export type OverlayProps = React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean; };

export type CloseProps = ButtonTypes.ButtonProps
export type TriggerProps = ButtonTypes.ButtonProps;

export type TitleProps = TypographyTypes.HeadingProps



// ----------------------- Component Props ----------------------- //


export type DrawerProps = {
    placement?: Placement;

    // Trigger props
    triggerProps?: TriggerProps;

    // Content props
    title?: React.ReactNode;
    headerContent?: React.ReactNode;
    footerContent?: React.ReactNode;
    children?: React.ReactNode;

    // Behavior props
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    preventBodyScroll?: boolean;

    // Style props
    closeProps?: CloseProps;
    rootProps?: Partial<RootProps>;
    overlayProps?: Partial<OverlayProps>;
};