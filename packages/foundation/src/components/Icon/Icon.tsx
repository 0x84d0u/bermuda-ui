import * as IconUI from './Icon.ui'
import type * as IconTypes from './Icon.types'

export const Icon = ({ name, transitionName, size= 'default', ...props }: IconTypes.IconProps) => {
  const isTransition = !!transitionName
  return <IconUI.Root size={size}>
    <IconUI.Svg name={name} size={size} {...props} isFirst={isTransition} />
    {isTransition && <IconUI.Svg name={transitionName} size={size} {...props} isSecond />}
  </IconUI.Root>
};

