// Icon.tsx
import React from "react";
import * as UI from "./Icon.ui";
import * as Types from "./Icon.types";

/* ------------------------ Icon Component ------------------------ */

export const Icon = ({
  name,
  transition,
  size = "medium",
  className,
  ...props
}: Types.IconProps) => {
  // Simple icon (no transition)
  if (name) {
    return (
      <UI.Root size={size} className={className}>
        <UI.Svg name={name} size={size} {...props} />
      </UI.Root>
    );
  }

  // Icon with transition
  if (transition) {
    const { primary, secondary, active = false } = transition;
    const showPrimary = !active;
    const showSecondary = active;

    return (
      <UI.Root size={size} className={className}>
        <UI.Svg name={primary} size={size} isFirst={showPrimary} isSecond={showSecondary} {...props} />
        <UI.Svg name={secondary} size={size} isFirst={showSecondary} isSecond={showPrimary} {...props} />
      </UI.Root>
    );
  }

  return null;
};

export default Icon;