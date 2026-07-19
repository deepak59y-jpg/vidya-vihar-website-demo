import React from 'react';
import { useTranslation } from 'react-i18next';

interface SampleDataBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const SampleDataBadge: React.FC<SampleDataBadgeProps> = ({ children, className = '' }) => {
  const { t } = useTranslation();
  return (
    <div className={`relative border-2 border-dashed border-primary/60 rounded-xl p-5 bg-primary/5 shadow-inner ${className}`}>
      <span className="absolute -top-3 left-4 bg-primary text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow-sm select-none">
        {t('common.sampleDataTag')}
      </span>
      <div className="pt-1">
        {children}
      </div>
    </div>
  );
};

export const SampleDataInline: React.FC<{ className?: string; label?: string }> = ({ className = '', label }) => {
  const { t } = useTranslation();
  return (
    <span className={`inline-flex items-center text-primary font-mono text-xs border border-dashed border-primary/60 px-2 py-0.5 rounded bg-primary/5 select-none font-semibold ${className}`}>
      {label || t('common.tbdLabel')}
    </span>
  );
};
