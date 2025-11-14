
// ----------------------- Tokens ----------------------- //

import React from "react"

export type Size = 'mobile' | 'tablet' | 'laptop' | 'desktop'  | 'fluid'
export type Spacing = 'compact' | 'comfortable' | 'large'

// ----------------------- Component Props  ----------------------- //

export type ContainerProps = React.ComponentProps<'div'> & {
    size?: Size
    spacing?: Spacing
}