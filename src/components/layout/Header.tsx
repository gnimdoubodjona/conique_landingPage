'use client';

import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../LanguageToggle';

const PURPLE = '#541ba6';
const BLUE = '#1b89a6';

interface NavItem {
  label: string;
  href: string;
}

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: '#accueil' },
    { label: t('nav.projects'), href: '#projets' },
    { label: t('nav.process'), href: '#processus' },
    { label: t('nav.testimonials'), href: '#temoignages' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50">

      {/* Lignes verticales — visibles uniquement quand pas scrollé */}
      <div
        className="absolute left-[60px] top-0 bottom-0 w-px z-10 transition-opacity duration-300"
        style={{ opacity: scrolled ? 0 : 1, backgroundColor: '#e5e7eb' }}
      />
      <div
        className="absolute right-[60px] top-0 bottom-0 w-px z-10 transition-opacity duration-300"
        style={{ opacity: scrolled ? 0 : 1, backgroundColor: '#e5e7eb' }}
      />

      {/* Nav — glass flottante au scroll */}
      <nav
        className="px-4 sm:px-6 py-3 transition-all duration-300"
        style={{
          margin: scrolled ? '8px 16px 0' : '0 61px',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.80)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderRadius: scrolled ? '12px' : '0px',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.10)' : 'none',
          border: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
        }}
      >
        {/* ── Ligne principale ── */}
        <div className="flex justify-between items-center">

          {/* ── Logo ── */}
          <div className="flex items-center">
            <img
              src="/images/coniqueLogo1.png"
              alt={t('logo.alt')}
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* ── Navigation (desktop) ── */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href }: NavItem) => (
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
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: BLUE }}
            
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
            {navItems.map(({ label, href }: NavItem) => (
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