import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { I18nProvider } from "../lib/i18n";

interface LayoutProps {
  children: ReactNode;
  hero: ReactNode;
}

export default function Layout({ children, hero }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      storageKey="conique-theme"
    >
      <I18nProvider>
        <div className="relative min-h-screen bg-white dark:bg-neutral-950 flex flex-col transition-colors duration-300">
          <Header />
          {hero}
          <main className="relative flex-grow">{children}</main>
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}