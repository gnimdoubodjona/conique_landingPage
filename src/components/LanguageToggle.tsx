'use client';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors rounded"
      aria-label="Changer la langue"
    >
      <Languages size={14} strokeWidth={2.5} />
      <span className="uppercase">{i18n.language}</span>
    </button>
  );
}