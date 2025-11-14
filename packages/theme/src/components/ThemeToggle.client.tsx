"use client";

import { Button } from "@bermuda-ui/foundation";
import { useTheme } from "./ThemeProvider.client";

export const ThemeModeToggle = () => {
  const { toggleMode, themeMode, mounted } = useTheme();

  if (!mounted) return <Button isLoading aria-label="theme-toggle" iconOnly="Loader" />;

  const isDark = themeMode === "dark";

  return <Button
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    onClick={toggleMode}
    iconsOnly={[
      isDark ? 'Moon' : 'Sun',
      isDark ? 'Sun' : 'Moon'
    ]}
  />

};
