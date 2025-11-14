import React from "react";
import * as Lucide from "lucide-react";
import { ButtonTypes } from "../Button";


// ----------------------- Tokens ----------------------- //

export type Name = keyof typeof Lucide;
export type Size = ButtonTypes.Size

// ----------------------- UI Props ----------------------- //

export type RootProps = React.ComponentProps<'span'> & {
    size?: Size
}

export type SvgProps = React.SVGProps<SVGSVGElement> & {
    size?: Size;
    className?: string;
    name: Name;

    isFirst?: boolean,
    isSecond?: boolean,
}

// ----------------------- Component Props ----------------------- //

export type IconProps = SvgProps & {
  transitionName?: Name
}