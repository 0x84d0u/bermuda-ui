import * as React from "react";
import * as UI from "./Button.ui";
import * as Types from "./Button.types";


/* ------------------------ Button Component ------------------------ */
export const Button = React.forwardRef(<K extends Types.Kind>(
  {
    label,
    icon,
    startIcon,
    endIcon,

    badgeEnabled = false,
    badgePulsing = false,

    isLoading = false,
    isActive = false,
    isDisabled = false,

    kind,
    variant,
    size = 'default',
    curve = 'default',
    shape = 'default',


    ...jsxProps
  }: Types.ButtonProps<K>,
  ref: React.Ref<HTMLButtonElement>
) => {
  const _kind = (kind ?? "button") as K;

  // Default variant depends on computed _kind
  const defaultVariant = Types.KIND_VARIANTS[_kind][0];
  const _variant = (variant ?? defaultVariant) as Types.Variant<K>;

  const isIconOnly = UI.isIconOnly(icon);
  const isLabelOnly = UI.isLabelOnly(label, icon);

  return (
    <UI.Root
      isLoading={isLoading}
      isActive={isActive}
      isDisabled={isDisabled}

      kind={_kind}
      variant={_variant}
      size={size}
      curve={curve}
      shape={isIconOnly ? 'square' : shape}

      ref={ref}
      {...jsxProps}
    >
      {badgeEnabled && <UI.Badge isPulsing={badgePulsing} />}
      {isIconOnly && <UI.IconContent icon={icon!} label={label} isLoading={isLoading} />}
      {isLabelOnly && (
        <UI.LabelContent
          label={label!}
          startIcon={startIcon}
          endIcon={endIcon}
          isLoading={isLoading}
        />
      )}
      {isLoading && <UI.Spinner />}
    </UI.Root>
  );
}
);
