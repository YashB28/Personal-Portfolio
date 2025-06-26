import { ThemeProvider as BaseThemeProvider } from "@/hooks/useTheme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <BaseThemeProvider>{children}</BaseThemeProvider>;
}
