import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Bell, ShieldCheck, Tag } from 'lucide-react';
import { SampleDataBadge } from '../components/SampleDataBadge';

interface NoticeItem {
  id: string;
  title: string;
  date: string;
  content: string;
  category: string;
}

export const NewsNotices: React.FC = () => {
  const { t } = useTranslation();

  const noticesList = t('news.sampleNotices', { returnObjects: true }) as NoticeItem[];

  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            {t('news.title')}
          </h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-500">
            {t('news.subtitle')}
          </p>
        </div>

        {/* Notice Board */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2.5">
              <Bell className="w-5.5 h-5.5 text-primary" />
              <span>{t('news.noticeBoardTitle')}</span>
            </h3>
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Preview</span>
            </span>
          </div>

          {Array.isArray(noticesList) && noticesList.map((notice) => (
            <SampleDataBadge key={notice.id}>
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm relative">
                {/* Category tag */}
                <div className="absolute top-4 right-4 bg-orange-50 border border-orange-100 text-primary text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center space-x-1 select-none">
                  <Tag className="w-3 h-3" />
                  <span>{notice.category}</span>
                </div>
                
                {/* Notice Date */}
                <div className="flex items-center space-x-2 text-xs text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{notice.date}</span>
                </div>
                
                {/* Notice Title */}
                <h4 className="text-lg font-bold text-gray-900 mb-3 leading-snug pr-16">
                  {notice.title}
                </h4>
                
                {/* Notice Content */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {notice.content}
                </p>
              </div>
            </SampleDataBadge>
          ))}
        </div>

      </div>
    </div>
  );
};
