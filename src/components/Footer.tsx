import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { SampleDataInline } from './SampleDataBadge';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const { t } = useTranslation();

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Section 1: About & Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t('schoolName')}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {t('schoolType')}
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-400 mt-2 bg-gray-800/40 p-2.5 rounded-lg border border-gray-800">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>{t('academics.udiseCode')}: <SampleDataInline label="TBD" className="text-[10px]" /></span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400 mt-2 bg-gray-800/40 p-2.5 rounded-lg border border-gray-800">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>{t('academics.regNumber')}: <SampleDataInline label="TBD" className="text-[10px]" /></span>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t('home.quickLinks')}</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: t('nav.home') },
                { id: 'about', label: t('nav.about') },
                { id: 'academics', label: t('nav.academics') },
                { id: 'admissions', label: t('nav.admissions') },
                { id: 'gallery', label: t('nav.gallery') },
                { id: 'facilities', label: t('nav.facilities') },
                { id: 'news', label: t('nav.news') },
                { id: 'contact', label: t('nav.contact') },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="hover:text-primary transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact & Address */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  {t('contact.addressDesc')}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Phone:</span>
                  <SampleDataInline label="TBD" />
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Email:</span>
                  <SampleDataInline label="TBD" />
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">{t('contact.officeHours')}:</span>
                  <SampleDataInline label="TBD" />
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {t('schoolName')}. All Rights Reserved.</p>
          <div className="flex items-center space-x-2 bg-gray-900 border border-gray-800 p-2 rounded-lg">
            <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Demo Version</span>
            <span className="text-gray-600 font-semibold">|</span>
            <span className="text-[10px] text-gray-400">Contains placeholder parameters for evaluation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
