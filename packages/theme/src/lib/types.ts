export type ThemeName = 'default' | 'modern' | 'minimalist' | 'retro' | (string & {});
export type ThemeMode = 'light' | 'dark';

export interface Theme {
    value: ThemeName;
    label: string;
    description?: string;
}

export interface Config {
    themes: Theme[];
    defaultTheme: string;
    defaultMode: ThemeMode;
    themeStorageKey: string;
    modeStorageKey: string;
}

export interface State {
    themeName: string;
    themeMode: ThemeMode;
    themes: Theme[];
    setThemeName: (theme: string) => void;
    setThemeMode: (mode: ThemeMode) => void;
    toggleMode: () => void;
    mounted: boolean;
}