import type * as ButtonTypes from './Button.types'
import * as ButtonUI from './Button.ui'

export const Button = ({
    color,
    fullWidth,
    size,
    isCircle,
    iconProps,
    showBadge,
    badgePulse,

    isLoading,
    isActive,
    isDisabled,

    iconOnly,
    iconsOnly,
    iconStart,
    iconEnd,
    label,

    ...jsxProps
}: ButtonTypes.ButtonProps) => {
    const state: ButtonTypes.State = { isActive, isDisabled, isLoading }
    const isIconOnly = !!iconOnly
    const isIconsOnly = !!(iconsOnly && iconsOnly.length === 2)

    const content = isIconOnly ? <ButtonUI.Icon name={iconOnly} position='single' size={size}/> :
        isIconsOnly ? <ButtonUI.Icon name={iconsOnly[0]} transitionName={iconsOnly[1]} position='double' size={size} /> :
            <ButtonUI.Label isLoading={isLoading}>{label}</ButtonUI.Label>

    return <ButtonUI.Root
        color={color}
        fullWidth={fullWidth}
        aria-label={label}
        size={size}
        isCircle={isCircle}
        isSquare={isIconOnly || isIconsOnly}
        {...state}
        {...jsxProps}
    >
        <ButtonUI.Badge show={showBadge} pulse={badgePulse} />
        {isLoading && <ButtonUI.Spinner size={size}/>}
        {iconStart && <ButtonUI.Icon name={iconStart} position='left' size={size} />}
        {content}
        {iconEnd && <ButtonUI.Icon name={iconEnd} position='right' size={size} />}
    </ButtonUI.Root>

}