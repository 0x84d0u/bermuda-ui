// components/layout.tsx
import React from 'react';
import { ResponsiveValue, buildResponsive, mergeResponsiveClasses } from '../../utils/responsive';

type BaseLayoutProps = {
    children: React.ReactNode;
    className?: string;
    as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav';
};

type FlexLayoutProps = BaseLayoutProps & {
    type: 'flex';
    direction?: ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
    align?: ResponsiveValue<'start' | 'center' | 'end' | 'stretch' | 'baseline'>;
    justify?: ResponsiveValue<'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'>;
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
    wrap?: ResponsiveValue<'wrap' | 'nowrap' | 'wrap-reverse'>;
};

type GridLayoutProps = BaseLayoutProps & {
    type: 'grid';
    columns?: ResponsiveValue<number | 'auto-fit' | 'auto-fill'>;
    rows?: ResponsiveValue<number>;
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
    alignItems?: ResponsiveValue<'start' | 'center' | 'end' | 'stretch'>;
    justifyItems?: ResponsiveValue<'start' | 'center' | 'end' | 'stretch'>;
};

type CenterLayoutProps = BaseLayoutProps & {
    type: 'center';
    axis?: 'both' | 'horizontal' | 'vertical';
    inline?: boolean;
};

type SplitLayoutProps = BaseLayoutProps & {
    type: 'split';
    direction?: ResponsiveValue<'horizontal' | 'vertical'>;
    ratio?: ResponsiveValue<'1:1' | '1:2' | '2:1' | '1:3' | '3:1'>;
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
};

type StackLayoutProps = BaseLayoutProps & {
    type: 'stack';
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
    align?: ResponsiveValue<'start' | 'center' | 'end' | 'stretch'>;
};

type ClusterLayoutProps = BaseLayoutProps & {
    type: 'cluster';
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
    justify?: ResponsiveValue<'start' | 'center' | 'end' | 'between'>;
    align?: ResponsiveValue<'start' | 'center' | 'end' | 'stretch'>;
};

type SidebarLayoutProps = BaseLayoutProps & {
    type: 'sidebar';
    side?: ResponsiveValue<'left' | 'right'>;
    sideWidth?: ResponsiveValue<string>; // e.g., '250px', '20rem'
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
    contentMin?: ResponsiveValue<string>; // Min width before stacking, e.g., '50%'
};

type ReelLayoutProps = BaseLayoutProps & {
    type: 'reel';
    itemWidth?: ResponsiveValue<string>; // e.g., '250px', '15rem'
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
    height?: ResponsiveValue<string>;
    snap?: boolean; // Scroll snap
};

type CoverLayoutProps = BaseLayoutProps & {
    type: 'cover';
    minHeight?: ResponsiveValue<string>; // e.g., '100vh', '500px'
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
    centered?: number; // Index of child to center (pushes others to edges)
};

type FrameLayoutProps = BaseLayoutProps & {
    type: 'frame';
    ratio?: ResponsiveValue<'16:9' | '4:3' | '1:1' | '21:9' | '3:2'>;
    cover?: boolean; // object-cover vs object-contain
};

type SwitcherLayoutProps = BaseLayoutProps & {
    type: 'switcher';
    threshold?: ResponsiveValue<string>; // Switch point, e.g., '768px'
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
    limit?: number; // Max items per row
};

type MasonryLayoutProps = BaseLayoutProps & {
    type: 'masonry';
    columns?: ResponsiveValue<number>;
    gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24>;
};

export type LayoutProps =
    | FlexLayoutProps
    | GridLayoutProps
    | CenterLayoutProps
    | SplitLayoutProps
    | StackLayoutProps
    | ClusterLayoutProps
    | SidebarLayoutProps
    | ReelLayoutProps
    | CoverLayoutProps
    | FrameLayoutProps
    | SwitcherLayoutProps
    | MasonryLayoutProps;

export function Layout(props: LayoutProps) {
    const { children, className = '', as: Component = 'div' } = props;

    let layoutClasses = '';

    switch (props.type) {
        case 'flex': {
            layoutClasses = mergeResponsiveClasses(
                'flex',
                buildResponsive(props.direction, (d) => `flex-${d}`),
                buildResponsive(props.align, (a) => `items-${a}`),
                buildResponsive(props.justify, (j) => `justify-${j}`),
                buildResponsive(props.gap, (g) => `gap-${g}`),
                buildResponsive(props.wrap, (w) => `flex-${w}`)
            );
            break;
        }

        case 'grid': {
            layoutClasses = mergeResponsiveClasses(
                'grid',
                buildResponsive(props.columns, (c) =>
                    typeof c === 'number' ? `grid-cols-${c}` : `grid-cols-${c}`
                ),
                buildResponsive(props.rows, (r) => `grid-rows-${r}`),
                buildResponsive(props.gap, (g) => `gap-${g}`),
                buildResponsive(props.alignItems, (a) => `items-${a}`),
                buildResponsive(props.justifyItems, (j) => `justify-items-${j}`)
            );
            break;
        }

        case 'center': {
            const baseClasses = props.inline ? 'inline-flex' : 'flex';
            const axisClasses = {
                both: 'items-center justify-center',
                horizontal: 'justify-center',
                vertical: 'items-center',
            }[props.axis || 'both'];
            layoutClasses = `${baseClasses} ${axisClasses}`;
            break;
        }

        case 'split': {
            const ratioMap = {
                '1:1': 'grid-cols-2',
                '1:2': 'grid-cols-[1fr_2fr]',
                '2:1': 'grid-cols-[2fr_1fr]',
                '1:3': 'grid-cols-[1fr_3fr]',
                '3:1': 'grid-cols-[3fr_1fr]',
            };

            layoutClasses = mergeResponsiveClasses(
                'grid',
                buildResponsive(props.direction, (d) =>
                    d === 'vertical' ? 'grid-rows-2' : ''
                ),
                buildResponsive(props.ratio, (r) => ratioMap[r] || 'grid-cols-2'),
                buildResponsive(props.gap, (g) => `gap-${g}`)
            );
            break;
        }

        case 'stack': {
            layoutClasses = mergeResponsiveClasses(
                'flex flex-col',
                buildResponsive(props.gap, (g) => `gap-${g}`),
                buildResponsive(props.align, (a) => `items-${a}`)
            );
            break;
        }

        case 'cluster': {
            layoutClasses = mergeResponsiveClasses(
                'flex flex-wrap',
                buildResponsive(props.gap, (g) => `gap-${g}`),
                buildResponsive(props.justify, (j) => `justify-${j}`),
                buildResponsive(props.align, (a) => `items-${a}`)
            );
            break;
        }

        case 'sidebar': {
            const sideWidthStyle = props.sideWidth
                ? buildResponsive(props.sideWidth, (w) => `[--sidebar-width:${w}]`)
                : '';

            const contentMinStyle = props.contentMin
                ? buildResponsive(props.contentMin, (m) => `[--content-min:${m}]`)
                : '[--content-min:50%]';

            const sideClasses = buildResponsive(props.side, (s) =>
                s === 'right' ? 'flex-row-reverse' : 'flex-row'
            );

            layoutClasses = mergeResponsiveClasses(
                'flex flex-wrap',
                sideClasses,
                buildResponsive(props.gap, (g) => `gap-${g}`),
                sideWidthStyle,
                contentMinStyle,
                // Custom sidebar styles
                '[&>:first-child]:flex-[1_1_var(--sidebar-width,250px)]',
                '[&>:last-child]:flex-[999_1_0%] [&>:last-child]:min-w-[var(--content-min,50%)]'
            );
            break;
        }

        case 'reel': {
            const heightStyle = props.height
                ? buildResponsive(props.height, (h) => `h-[${h}]`)
                : '';

            const itemWidthStyle = props.itemWidth
                ? buildResponsive(props.itemWidth, (w) => `[&>*]:w-[${w}] [&>*]:flex-shrink-0`)
                : '[&>*]:flex-shrink-0';

            layoutClasses = mergeResponsiveClasses(
                'flex overflow-x-auto overflow-y-hidden',
                buildResponsive(props.gap, (g) => `gap-${g}`),
                props.snap ? 'snap-x snap-mandatory [&>*]:snap-start' : '',
                heightStyle,
                itemWidthStyle
            );
            break;
        }

        case 'cover': {
            const minHeightStyle = props.minHeight
                ? buildResponsive(props.minHeight, (h) => `min-h-[${h}]`)
                : 'min-h-screen';

            // If centered prop is provided, add margin-auto to that child
            const centeredStyles = props.centered !== undefined
                ? `[&>:nth-child(${props.centered + 1})]:my-auto`
                : '';

            layoutClasses = mergeResponsiveClasses(
                'flex flex-col',
                minHeightStyle,
                buildResponsive(props.gap, (g) => `gap-${g}`),
                centeredStyles
            );
            break;
        }

        case 'frame': {
            const ratioMap = {
                '16:9': 'aspect-video',
                '4:3': 'aspect-[4/3]',
                '1:1': 'aspect-square',
                '21:9': 'aspect-[21/9]',
                '3:2': 'aspect-[3/2]',
            };

            layoutClasses = mergeResponsiveClasses(
                'relative overflow-hidden',
                buildResponsive(props.ratio, (r) => ratioMap[r] || 'aspect-video'),
                props.cover
                    ? '[&>*]:absolute [&>*]:inset-0 [&>*]:w-full [&>*]:h-full [&>*]:object-cover'
                    : '[&>*]:absolute [&>*]:inset-0 [&>*]:w-full [&>*]:h-full [&>*]:object-contain'
            );
            break;
        }

        case 'switcher': {
            const thresholdStyle = props.threshold
                ? buildResponsive(props.threshold, (t) => `[--threshold:${t}]`)
                : '[--threshold:48rem]';

            const limitStyle = props.limit
                ? `[&>*]:flex-[1_1_calc((var(--threshold)-100%)*999)] [&>*]:max-w-[calc(100%/${props.limit})]`
                : '[&>*]:flex-[1_1_calc((var(--threshold)-100%)*999)]';

            layoutClasses = mergeResponsiveClasses(
                'flex flex-wrap',
                buildResponsive(props.gap, (g) => `gap-${g}`),
                thresholdStyle,
                limitStyle
            );
            break;
        }

        case 'masonry': {
            layoutClasses = mergeResponsiveClasses(
                buildResponsive(props.columns, (c) => `columns-${c}`),
                buildResponsive(props.gap, (g) => `gap-${g}`),
                '[&>*]:break-inside-avoid [&>*]:mb-[var(--gap,1rem)]'
            );
            break;
        }
    }

    return (
        <Component className={`${layoutClasses} ${className}`.trim()}>
            {children}
        </Component>
    );
}