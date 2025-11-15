export type Placement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

export type PlacementConfig = {
  /** transform when hidden */
  base: string;

  /** transform when shown */
  open: string;

  /** optional opacity animation */
  fade?: boolean;

  /** optional scale animation */
  scale?: boolean;
};

/**
 * Returns slide, opacity, and scale transforms based on placement.
 * Works for sidebar, drawer, dropdown, popover, tooltip, etc.
 */
export function getPlacementClass(placement?: Placement) {
  switch (placement) {
    case "left":
      return "-translate-x-100 opacity-0 data-[open=true]:translate-x-0 data-[open=true]:opacity-100";
    case "right":
      return "translate-x-100 opacity-0 data-[open=true]:translate-x-0 data-[open=true]:opacity-100";
    case "top":
      return "-translate-y-100 opacity-0 data-[open=true]:translate-y-0 data-[open=true]:opacity-100";
    case "bottom":
      return "translate-y-100 opacity-0 data-[open=true]:translate-y-0 data-[open=true]:opacity-100";
    case "center":
      return "scale-95 opacity-0 data-[open=true]:scale-100 data-[open=true]:opacity-100";
    default:
      return "opacity-0 data-[open=true]:opacity-100";
  }
}

