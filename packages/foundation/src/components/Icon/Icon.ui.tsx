import * as Lucide from "lucide-react";
import { cn } from "../../styles";

import type * as IconTypes from './Icon.types';

// ----------------------- Types ----------------------- //

// ----------------------- Helpers ----------------------- //

const sizeClasses: Record<IconTypes.Size, string> = {
    small: 'w-[1rem] h-[1rem]',
    default: 'w-[1.25rem] h-[1.25rem]',
    large: 'w-[1.5rem] h-[1.5rem]',
}

// ----------------------- Root Component ----------------------- //


export const Root = ({ className, size = 'default', ...props }: IconTypes.RootProps) => {
    return <span
        className={cn(
            "inline-flex items-center justify-center relative shrink-0",
            sizeClasses[size],
            className
        )}
        {...props}
    />
}

// ----------------------- Svg Icon ----------------------- //


export const Svg = ({ name, size = "default", className, isFirst, isSecond, ...props }: IconTypes.SvgProps) => {
    const IconComponent = Lucide[name] as Lucide.LucideIcon;
    return <IconComponent
        className={cn(
            "shrink-0 absolute inset-0 transition-all duration-200 ease-in-out",
            sizeClasses[size],
            isFirst && "rotate-0 scale-100 opacity-100",
            isSecond && "rotate-90 scale-0 opacity-0",
            className
        )}
        {...props}
    />;
};

