'use client';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { useState } from 'react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [hovered, setHovered] = useState<boolean>(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-black/70 hover:text-black transition-colors duration-200"
      aria-label="Changer la langue"
    >
      <Languages size={14} strokeWidth={2.5} />
      <span className="uppercase">{i18n.language}</span>
      <span
        className="absolute bottom-0 left-3 right-3 h-0.5 bg-black transition-transform duration-200 origin-left"
        style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }}
      />
    </button>
  );
}