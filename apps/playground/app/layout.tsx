import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@bermuda-ui/theme/client';
import { THEME_DEFAULT_CONFIG } from '@bermuda-ui/theme';
import { ThemeScript } from '@bermuda-ui/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bermuda UI Playground',
  description: 'Testing ground for Bermuda UI components',
};

const themeConfig = THEME_DEFAULT_CONFIG

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript config={themeConfig} />
      </head>
      <body className={inter.className}>
        <ThemeProvider config={themeConfig}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}