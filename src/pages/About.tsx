import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, MapPin, Compass, Landmark, Eye, Mail, Phone } from 'lucide-react';
import { SampleDataBadge, SampleDataInline } from '../components/SampleDataBadge';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            {t('about.title')}
          </h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-500">
            {t('about.subtitle')}
          </p>
        </div>

        {/* History Section (Sample Data) */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{t('about.historyTitle')}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            {t('about.historyContent')}
          </p>
          <SampleDataBadge>
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-800">Unconfirmed details undergoing validation:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Exact founding/establishment year <SampleDataInline label="TBD" /></li>
                <li>Trust or Management details <SampleDataInline label="TBD" /></li>
                <li>Affiliation / Registration registration certificate numbers <SampleDataInline label="TBD" /></li>
              </ul>
            </div>
          </SampleDataBadge>
        </section>

        {/* Local Context & Connection */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{t('about.contextTitle')}</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>{t('about.contextP1')}</p>
              <p>{t('about.contextP2')}</p>
              <p>{t('about.contextP3')}</p>
            </div>
            
            <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100/50 flex flex-col justify-between">
              <h4 className="font-bold text-gray-800 text-base mb-4 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Geographic Matrix</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-200/50 pb-2">
                  <span className="font-medium text-gray-500">District:</span>
                  <span className="font-bold text-gray-800">Varanasi</span>
                </li>
                <li className="flex justify-between border-b border-gray-200/50 pb-2">
                  <span className="font-medium text-gray-500">Census Town:</span>
                  <span className="font-bold text-gray-800">Salarpur</span>
                </li>
                <li className="flex justify-between border-b border-gray-200/50 pb-2">
                  <span className="font-medium text-gray-500">State:</span>
                  <span className="font-bold text-gray-800">Uttar Pradesh</span>
                </li>
                <li className="flex justify-between border-b border-gray-200/50 pb-2">
                  <span className="font-medium text-gray-500">PIN Code:</span>
                  <span className="font-bold text-gray-800">221112</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium text-gray-500">Salarpur Literacy:</span>
                  <span className="font-bold text-emerald-600">73.97%</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Campus & Environment (Visual description from brief) */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{t('about.campusTitle')}</h3>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            {t('about.campusDescription')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="text-primary font-bold text-lg mb-2">Courtyard</div>
              <p className="text-xs text-gray-500 leading-relaxed">{t('about.campusFeatures.courtyard')}</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="text-primary font-bold text-lg mb-2">Palm Landscaping</div>
              <p className="text-xs text-gray-500 leading-relaxed">{t('about.campusFeatures.greening')}</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="text-primary font-bold text-lg mb-2">Cycle Parking</div>
              <p className="text-xs text-gray-500 leading-relaxed">{t('about.campusFeatures.parking')}</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="text-primary font-bold text-lg mb-2">Solar Lighting</div>
              <p className="text-xs text-gray-500 leading-relaxed">{t('about.campusFeatures.solar')}</p>
            </div>
          </div>
        </section>

        {/* Principal Message Section (Strictly Placeholder) */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{t('about.principal.title')}</h3>
          </div>

          <SampleDataBadge>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              {/* Photo placeholder */}
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-32 h-40 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-1">Photo</span>
                  <span className="text-[10px] text-gray-400">{t('about.principal.nameLabel')}</span>
                </div>
                <div className="mt-3 text-center">
                  <div className="font-bold text-gray-900 text-sm leading-snug">{t('about.principal.nameLabel')}</div>
                  <div className="text-[10px] font-bold text-primary font-mono mt-1">[{t('common.tbd')}]</div>
                </div>
              </div>

              {/* Message content */}
              <div className="md:col-span-3 space-y-4">
                <h4 className="font-bold text-gray-800 text-lg leading-snug border-b border-gray-100 pb-2">
                  {t('about.principal.messageLabel')}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "{t('about.principal.placeholderText')}"
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center space-x-2 text-gray-500 bg-white p-3 rounded-lg border border-gray-100">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>{t('about.principal.contactLabel')}: <SampleDataInline label="TBD" /></span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 bg-white p-3 rounded-lg border border-gray-100">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span>Email: <SampleDataInline label="TBD" /></span>
                  </div>
                </div>
              </div>
            </div>
          </SampleDataBadge>
        </section>

      </div>
    </div>
  );
};
