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
  base: string;
  open: string;
  fade?: boolean;
  scale?: boolean;
};


export function getPlacementClass(placement?: Placement) {
  switch (placement) {
    // USE translate-x-full (100% of own width)
    case "left": return "-translate-x-full opacity-0 data-[open=true]:translate-x-0 data-[open=true]:opacity-100";
    case "right": return "translate-x-full opacity-0 data-[open=true]:translate-x-0 data-[open=true]:opacity-100";
    case "top": return "-translate-y-full opacity-0 data-[open=true]:translate-y-0 data-[open=true]:opacity-100";
    case "bottom": return "translate-y-full opacity-0 data-[open=true]:translate-y-0 data-[open=true]:opacity-100";
    case "center": return "scale-95 opacity-0 data-[open=true]:scale-100 data-[open=true]:opacity-100";
    default: return "opacity-0 data-[open=true]:opacity-100";
  }
}