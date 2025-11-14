import { DEFAULT_CONFIG } from "../lib/default-config";
import { Config } from "../lib/types";

export function getThemeScript(
  themeStorageKey: string = DEFAULT_CONFIG.themeStorageKey,
  modeStorageKey: string = DEFAULT_CONFIG.modeStorageKey
): string {
  return `
    (function() {
      try {
        const theme = localStorage.getItem('${themeStorageKey}');
        const mode = localStorage.getItem('${modeStorageKey}');
        
        if (theme && theme !== 'default') {
          document.documentElement.setAttribute('data-theme', theme);
        }
        
        if (mode === 'dark') {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {
        console.error('Theme initialization error:', e);
      }
    })();
  `.trim();
}


export const ThemeScript = ({
  config
}: {
  config: Partial<Config>
}) => <script
  dangerouslySetInnerHTML={{
    __html: getThemeScript(
      config.themeStorageKey || DEFAULT_CONFIG.themeStorageKey, 
      config.modeStorageKey || DEFAULT_CONFIG.modeStorageKey
    )
  }}
></script>