import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Compass, Phone, Mail, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import { SampleDataBadge, SampleDataInline } from '../components/SampleDataBadge';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  // WhatsApp link format. We use a mock number for the demo.
  const whatsappUrl = "https://wa.me/910000000000?text=Hello%20Vidya%20Vihar%20Inter%20College,%20I%20have%20an%20admission%20enquiry.";

  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-500">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Directions, and Mock Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* School Address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2.5">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>{t('contact.addressTitle')}</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {t('contact.addressDesc')}
              </p>
              
              <div className="bg-orange-50 border border-orange-100 p-4.5 rounded-xl">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5 flex items-center space-x-2">
                  <Compass className="w-4 h-4" />
                  <span>{t('contact.plusCodeTitle')}</span>
                </div>
                <code className="text-xs text-gray-800 font-mono select-all block bg-white p-2 rounded border border-orange-100/50">
                  {t('contact.plusCodeDesc')}
                </code>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2.5">
                <Compass className="w-5 h-5 text-primary shrink-0" />
                <span>{t('contact.directionsTitle')}</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('contact.directionsDesc')}
              </p>
            </div>

            {/* Direct Contacts with Sample Data Badge */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span>{t('contact.contactInfo')}</span>
              </h3>
              
              <SampleDataBadge className="space-y-4">
                {/* Phone */}
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-100/50">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <div className="text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold block sm:inline">Phone: </span>
                    <SampleDataInline label="TBD" />
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-100/50">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <div className="text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold block sm:inline">Email: </span>
                    <SampleDataInline label="TBD" />
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-100/50">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <div className="text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold block sm:inline">Office Hours: </span>
                    <SampleDataInline label="TBD" />
                  </div>
                </div>
              </SampleDataBadge>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20BA56] text-white py-3 rounded-xl shadow font-extrabold uppercase tracking-wider text-xs transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 h-full flex flex-col min-h-[400px]">
              <h3 className="text-lg font-bold text-gray-900 mb-4 px-2 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{t('contact.mapTitle')}</span>
              </h3>
              
              {/* Map Iframe using Plus Code search */}
              <div className="flex-1 w-full relative rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  title="Vidya Vihar Inter College Location Map"
                  src="https://maps.google.com/maps?q=82XJ+6W6%20Salarpur,%20Varanasi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
