import { Config } from "./types";

export const DEFAULT_CONFIG: Config = {
    defaultTheme: 'default',
    defaultMode: 'light',
    modeStorageKey: 'app-theme-mode',
    themeStorageKey: 'app-theme-name',
    themes: [
        { label: "Default", value: "default" },
        { label: "Minimalist", value: "minimalist" },
        { label: "Modern", value: "modern" },
        { label: "Retro", value: "retro" },
    ]
}

