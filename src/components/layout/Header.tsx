'use client';

import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../LanguageToggle';

const PURPLE = '#541ba6';
const BLUE = '#1b89a6';
const GOLD = '#a68b1b';

interface NavItem {
  label: string;
  href: string;
}

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: '#accueil' },
    { label: t('nav.projects'), href: '#projets' },
    { label: t('nav.process'), href: '#processus' },
    { label: t('nav.testimonials'), href: '#temoignages' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="relative z-20 px-4 sm:px-6 xl:px-12 py-4 bg-white">
      <nav className="max-w-screen-2xl mx-auto border-2 border-black bg-white px-4 sm:px-6 py-3">

        {/* ── Ligne principale ── */}
        <div className="flex justify-between items-center">

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
            <p className="text-lg font-black text-black tracking-tight ml-1">
              {t('logo.alt')}
            </p>
          </div>

          {/* ── Navigation (desktop) ── */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative px-5 py-2 text-sm font-semibold text-black/70 hover:text-black transition-colors duration-200"
                onMouseEnter={() => setHoveredNav(href)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {label}
                <span
                  className="absolute bottom-0 left-5 right-5 h-0.5 bg-black transition-transform duration-200 origin-left"
                  style={{
                    transform: hoveredNav === href ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </a>
            ))}
          </div>

          {/* ── Actions droite ── */}
          <div className="flex items-center gap-2">
            <LanguageToggle />

            {/* CTA — masqué sur mobile */}
            <button
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold border-2 border-black transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = PURPLE;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.backgroundColor = BLUE;
              }}
            >
              <Phone size={14} />
              {t('cta.contact')}
            </button>

            {/* Hamburger — mobile uniquement */}
            <button
              className="md:hidden p-2 border-2 border-black text-black transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* ── Menu mobile déroulant ── */}
        {menuOpen && (
          <div className="md:hidden border-t-2 border-black mt-3 pt-3 flex flex-col gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-black/70 hover:text-black border-b border-black/10 last:border-0 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <button
              className="mt-2 flex items-center justify-center gap-2 px-5 py-2.5 text-white text-sm font-bold border-2 border-black"
              style={{ backgroundColor: BLUE }}
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={14} />
              {t('cta.contact')}
            </button>
          </div>
        )}

      </nav>
    </header>
  );
}