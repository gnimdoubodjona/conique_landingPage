'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />; // évite l'hydratation mismatch

  const themes = [
    { label: 'light', icon: Sun },
    { label: 'dark', icon: Moon },
    { label: 'system', icon: Monitor },
  ];

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.label === theme);
    const next = themes[(currentIndex + 1) % themes.length];
    setTheme(next.label);
  };

  const currentIcon = themes.find(t => t.label === theme)?.icon ?? Monitor;

  const Icon = currentIcon;

  return (
    <button
      onClick={cycleTheme}
      className="w-9 h-9 flex items-center justify-center border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors rounded"
      aria-label={`Changer le thème, actuellement: ${theme}`}
      title={`Thème: ${theme}`}
    >
      <Icon size={16} strokeWidth={2.5} />
    </button>
  );
}