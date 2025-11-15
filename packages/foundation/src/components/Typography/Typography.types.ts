

export const KIND_SIZES = {
    text: ["small", "medium", "large"],
    heading: [1, 2, 3, 4],
    display: ["small", "medium", "large"],
} as const;

export type Kind = keyof typeof KIND_SIZES;
export type Size<K extends Kind> = (typeof KIND_SIZES)[K][number];
export type Weight = 'bold' | 'semibold' | 'base' | 'light';
export type Underline = 'always' | 'hover';
export type Color = 'body' | 'heading' | 'accent' | 'active' | 'danger' | 'muted';


export type TypographyProps<K extends Kind> = React.HTMLAttributes<HTMLElement> & {
    kind: K;
    size?: Size<K>;
    weight?: Weight;
    underline?: Underline;
    color?: Color;
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}
