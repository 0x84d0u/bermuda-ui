"use client";

import { Button } from "@bermuda-ui/foundation";
import { useTheme } from "./ThemeProvider.client";

export const ThemeModeToggle = () => {
  const { toggleMode, themeMode, mounted } = useTheme();

  if (!mounted) return <Button isLoading aria-label="theme-toggle" icon={{ name: 'Loader' }} />;

  const isDark = themeMode === "dark";

  return <Button
    kind='button'
    variant='ghost'
    label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    onClick={toggleMode}
    icon={{
      name: isDark ? 'Moon' : 'Sun',
      transitionName: isDark ? 'Sun' : 'Moon'
    }}
  />

};
