import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, GraduationCap, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'academics', label: t('nav.academics') },
    { id: 'admissions', label: t('nav.admissions') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'facilities', label: t('nav.facilities') },
    { id: 'news', label: t('nav.news') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Top saffron accent border bar */}
      <div className="h-1.5 w-full bg-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & School Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="bg-primary/10 p-2 rounded-xl text-primary transition-transform duration-300 group-hover:scale-105">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900 leading-none m-0">
                {t('schoolName')}
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide mt-1">
                {t('schoolType')}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Language Switcher */}
          <div className="hidden lg:flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
            <button
              onClick={() => toggleLanguage('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                i18n.language === 'en'
                  ? 'bg-primary text-white shadow'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => toggleLanguage('hi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                i18n.language === 'hi'
                  ? 'bg-primary text-white shadow'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              हिन्दी
            </button>
          </div>

          {/* Mobile Menu & Language Actions */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Quick Lang toggle on mobile */}
            <button
              onClick={() => toggleLanguage(i18n.language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-gray-200 bg-gray-55 text-xs font-bold text-gray-700 hover:bg-gray-100 cursor-pointer focus:outline-none"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>{i18n.language === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden animate-fade-in border-t border-gray-100 bg-white px-4 py-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Select Language</span>
            <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200">
              <button
                onClick={() => { toggleLanguage('en'); setIsMenuOpen(false); }}
                className={`px-3.5 py-1.5 rounded-md text-xs font-extrabold cursor-pointer ${
                  i18n.language === 'en'
                    ? 'bg-primary text-white shadow'
                    : 'text-gray-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => { toggleLanguage('hi'); setIsMenuOpen(false); }}
                className={`px-3.5 py-1.5 rounded-md text-xs font-extrabold cursor-pointer ${
                  i18n.language === 'hi'
                    ? 'bg-primary text-white shadow'
                    : 'text-gray-500'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
