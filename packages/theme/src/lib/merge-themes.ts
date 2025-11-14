import { Theme } from "./types";

export function mergeThemes(defaults: Theme[], custom: Theme[]): Theme[] {
    const seen = new Set<string>();
    const merged: Theme[] = [];

    [...defaults, ...custom].forEach((theme) => {
        if (!seen.has(theme.value)) {
            merged.push(theme);
            seen.add(theme.value);
        } else {
            console.warn(`Duplicate theme ignored: "${theme.value}"`);
        }
    });

    return merged;
}



