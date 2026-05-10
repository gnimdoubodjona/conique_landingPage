// components/Header.tsx
'use client';

import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../LanguageToggle';
import ThemeToggle from '../ThemeToggle';


const PURPLE = '#541ba6';
const BLUE = '#1b89a6';
const GOLD = '#a68b1b';

export default function Header() {
  const { t } = useTranslation();

  const navItems = [
    { label: t('nav.home'), href: '#accueil' },
    { label: t('nav.projects'), href: '#projets' },
    { label: t('nav.process'), href: '#processus' },
    { label: t('nav.testimonials'), href: '#temoignages' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="relative z-20 px-8 md:px-16 lg:px-32 py-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto border-2 border-black bg-white dark:bg-neutral-900 px-6 py-3">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-fit">
            <div
              className="absolute top-1 left-1 w-8 h-8 border-2 border-black"
              style={{ backgroundColor: GOLD }}
            />
            <div
              className="relative z-10 w-8 h-8 border-2 border-black flex items-center justify-center"
              style={{ backgroundColor: PURPLE }}
            >
              <span className="text-white font-black text-sm">C</span>
            </div>
          </div>
          <p className="text-lg font-black text-black dark:text-white tracking-tight ml-1">
            {t('logo.alt')}
          </p>
        </div>

        {/* ── Navigation (desktop) ── */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative px-5 py-2 text-sm font-semibold text-black/70 dark:text-white/70 transition-all duration-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded"
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── Actions droite ── */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />

          {/* CTA */}
          <button
            className="group flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold border-2 border-black transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: BLUE }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = PURPLE)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = BLUE)}
          >
            <Phone size={14} className="group-hover:animate-bounce transition-transform duration-200" />
            {t('cta.contact')}
          </button>
        </div>

      </nav>
    </header>
  );
}