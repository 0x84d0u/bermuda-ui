'use client';

import { useEffect, useState, useMemo, useCallback, createContext, useContext, ReactNode } from "react";
import type { Config, State, ThemeMode } from "../lib/types";
import { DEFAULT_CONFIG } from "../lib/default-config";
import { mergeThemes } from "../lib/merge-themes";


const ThemeContext = createContext<State | undefined>(undefined);


export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}


type ThemeProviderProps = {
  children?: ReactNode
  config?: Partial<Config>
}

export function ThemeProvider({
  children,
  config = DEFAULT_CONFIG
}: ThemeProviderProps) {

  const mergedConfig: Config = useMemo(() => ({
    defaultMode: config.defaultMode || DEFAULT_CONFIG.defaultMode,
    defaultTheme: config.defaultTheme || DEFAULT_CONFIG.defaultTheme,
    modeStorageKey: config.modeStorageKey || DEFAULT_CONFIG.modeStorageKey,
    themeStorageKey: config.themeStorageKey || DEFAULT_CONFIG.themeStorageKey,
    themes: mergeThemes(DEFAULT_CONFIG.themes, config.themes || [])
  }), [config.defaultMode, config.defaultTheme, config.modeStorageKey, config.themeStorageKey, config.themes]);

  const {
    defaultMode,
    defaultTheme,
    modeStorageKey,
    themeStorageKey,
    themes,
  } = mergedConfig;

  const [themeName, setThemeNameState] = useState<string>(defaultTheme);
  const [themeMode, setThemeModeState] = useState<ThemeMode>(defaultMode);
  const [isMounted, setMounted] = useState(false);

  // ✅ Memoize validation function
  const isValidTheme = useMemo(
    () => (theme: string) => themes.some(t => t.value === theme),
    [themes]
  );

  // ✅ Initial setup - should only run ONCE
  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem(themeStorageKey);
    const savedMode = localStorage.getItem(modeStorageKey) as ThemeMode;

    if (savedTheme && isValidTheme(savedTheme)) {
      setThemeNameState(savedTheme);
    }

    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setThemeModeState(savedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setThemeModeState('dark');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ← Run only once on mount

  // ✅ Apply theme changes to DOM
  useEffect(() => {
    if (!isMounted) return;

    const root = document.documentElement;

    if (themeName === 'default') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', themeName);
    }

    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem(themeStorageKey, themeName);
    localStorage.setItem(modeStorageKey, themeMode);
  }, [themeName, themeMode, isMounted, themeStorageKey, modeStorageKey]);

  // ✅ Memoize functions to prevent recreation
  const setThemeName = useCallback((theme: string) => {
    if (isValidTheme(theme)) {
      setThemeNameState(theme);
    } else {
      console.warn(`Theme "${theme}" is not registered. Available themes:`, themes.map(t => t.value));
    }
  }, [isValidTheme, themes]);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleMode = useCallback(() => {
    setThemeModeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  // ✅ Memoize the context value to prevent unnecessary re-renders
  const state: State = useMemo(() => ({
    themeName,
    themeMode,
    themes,
    setThemeName,
    setThemeMode,
    toggleMode,
    mounted: isMounted,
  }), [themeName, themeMode, themes, setThemeName, setThemeMode, toggleMode, isMounted]);

  return (
    <ThemeContext.Provider value={state}>
      {children}
    </ThemeContext.Provider>
  );
}