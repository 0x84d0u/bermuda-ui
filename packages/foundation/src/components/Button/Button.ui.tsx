import { cn } from '../../styles'
import { Icon as _Icon } from '../Icon'
import type * as ButtonTypes from './Button.types'


// ----------------------- Helpers ----------------------- //

const sizeClasses = {
    global: {
        small: "h-7 text-text-small",
        default: "h-10 text-text-medium",
        large: "h-12 text-text-large"
    } as Record<ButtonTypes.Size, string>,
    withLabel: {
        small: "px-[0.625rem] gap-1",
        default: "px-[1rem] gap-2",
        large: "px-[1.5rem] gap-2.5"
    } as Record<ButtonTypes.Size, string>,
    iconOnly: {
        small: "w-7",
        default: "w-10",
        large: "w-12"
    } as Record<ButtonTypes.Size, string>,

}

const colorClasses = {
    props: {
        default: 'bg-surface text-surface-fg border-border',
        accent: 'bg-accent text-accent-fg border-transparent',
        danger: 'bg-danger text-danger-fg border-transparent',
        ghost: "border-transparent text-surface-fg"
    } as Record<ButtonTypes.Color, string>,
    state: {
        active: "bg-active text-active-fg",
        disabled: "disabled:opacity-50 disabled:pointer-events-none"
    }
}

// ----------------------- Root Component ----------------------- //


export const Root = ({
    children,
    color = 'ghost',
    size = 'default',
    isCircle,
    fullWidth,
    isActive,
    isDisabled,
    isLoading,
    className,
    isSquare,
    ...jsxProps
}: ButtonTypes.RootProps) => {


    return <button
        type='button'
        disabled={isLoading || isDisabled}
        className={cn(
            "transition-all duration-200 ease-standard",
            "cursor-pointer select-none",
            "relative",
            "inline-flex items-center justify-center",
            "font-medium font-sans",
            "border",
            isCircle ? 'rounded-circle' : 'rounded-action',
            isActive ? colorClasses.state.active : colorClasses.props[color],
            colorClasses.state.disabled,
            sizeClasses.global[size],
            isSquare ? sizeClasses.iconOnly[size] : sizeClasses.withLabel[size],
            fullWidth && "w-full",
            isLoading && "cursor-wait",
            className
        )}
        {...jsxProps}
    >
        {children}
    </button>

}

// ----------------------- Label ----------------------- //

export const Label = ({ children, isLoading }: ButtonTypes.LabelProps) => <span className={cn("inline-flex items-center ", isLoading && "invisible")}>{children}</span>

// ----------------------- Icon ----------------------- //

export const Icon = ({ position, name, transitionName, className, ...rest }: ButtonTypes.IconProps) => {
    switch (position) {
        case 'left': return <_Icon name={name} className={cn("-ml-0.5", className)} {...rest} />
        case 'right': return <_Icon name={name} className={cn("-mr-0.5", className)} {...rest} />
        case 'single': return <_Icon name={name} className={className} {...rest} />
        case 'double': return <_Icon name={name} transitionName={transitionName} className={className} {...rest} />
        default: return null
    }
}


// ----------------------- Spinner ----------------------- //

export const Spinner = (props: ButtonTypes.SpinnerProps) => <span className="absolute inset-0 flex items-center justify-center">
    <_Icon name='Loader' className="animate-spin text-current" {...props}/>
</span>

// ----------------------- Badge ----------------------- //

export const Badge = ({ show = false, pulse = false }: ButtonTypes.BadgeProps) => show && <span
    className={cn(
        "absolute",
        "rounded-full select-none pointer-events-none whitespace-nowrap",
        "inline-flex items-center justify-center",
        "text-xs font-medium font-sans",
        "size-2 bg-danger ring-2 ring-danger/50 right-1 top-1",
        pulse && "animate-pulse"

    )}
/>