import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Landmark, Compass, Award } from 'lucide-react';

export const Facilities: React.FC = () => {
  const { t } = useTranslation();

  const campusFacilities = [
    {
      title: t('facilities.courtyardTitle'),
      desc: t('facilities.courtyardDesc'),
      icon: <Award className="w-8 h-8 text-primary" />,
      color: 'border-blue-500 bg-blue-50/10'
    },
    {
      title: t('facilities.parkingTitle'),
      desc: t('facilities.parkingDesc'),
      icon: <Compass className="w-8 h-8 text-primary" />,
      color: 'border-amber-500 bg-amber-50/10'
    },
    {
      title: t('facilities.classroomTitle'),
      desc: t('facilities.classroomDesc'),
      icon: <Landmark className="w-8 h-8 text-primary" />,
      color: 'border-emerald-500 bg-emerald-50/10'
    },
    {
      title: t('facilities.solarTitle'),
      desc: t('facilities.solarDesc'),
      icon: <Sun className="w-8 h-8 text-primary" />,
      color: 'border-purple-500 bg-purple-50/10'
    }
  ];

  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            {t('facilities.title')}
          </h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-500">
            {t('facilities.subtitle')}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {campusFacilities.map((fac, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-shadow duration-300 ${fac.color}`}
            >
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 shrink-0">
                  {fac.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image stubs note comment */}
        <div className="mt-16 text-center max-w-lg mx-auto bg-orange-50 border border-orange-100/50 rounded-xl p-4.5">
          <p className="text-xs text-primary font-semibold">
            Note: Campus facilities are based on verified visual observation reports. Full facility lists (libraries, laboratories, sports equipment specs) will be added upon confirmation.
          </p>
        </div>

      </div>
    </div>
  );
};
