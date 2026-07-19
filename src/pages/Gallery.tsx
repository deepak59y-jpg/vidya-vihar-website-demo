import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Filter, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'gate' | 'courtyard' | 'classroom' | 'parking';
  src: string;
  desc: string;
}

export const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('all');

  // =========================================================================
  // DEMO PLACEHOLDER IMAGES (Sourced from royalty-free Unsplash library)
  // TODO: Replace these static URLs with actual campus photographs from the client:
  // - Gate: Sourced from intermediate gate / facade
  // - Courtyard: Main assembly ground
  // - Classroom: Standard student classrooms
  // - Parking: Bicycle stand compound area
  // =========================================================================
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Main Entrance Gate',
      category: 'gate',
      src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
      desc: 'Security walled compound gate with Hindi institutional lettering.'
    },
    {
      id: '2',
      title: 'Assembly Courtyard',
      category: 'courtyard',
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80',
      desc: 'Central courtyard area where daily morning assemblies and activities take place.'
    },
    {
      id: '3',
      title: 'Campus Landscaping',
      category: 'courtyard',
      src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=80',
      desc: 'Walled campus surrounds featuring palm trees and green vegetation.'
    },
    {
      id: '4',
      title: 'Primary Lecture Hall',
      category: 'classroom',
      src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      desc: 'Cream-colored classrooms with ventilated windows for focused learning.'
    },
    {
      id: '5',
      title: 'Bicycle Stand Compound',
      category: 'parking',
      src: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80',
      desc: 'Dedicated and secure parking space for student bicycles.'
    },
    {
      id: '6',
      title: 'Academic Block exterior',
      category: 'courtyard',
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
      desc: 'Multi-story concrete structures with light cream paint finishes.'
    }
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const tabs = [
    { id: 'all', label: t('gallery.tabs.all') },
    { id: 'gate', label: t('gallery.tabs.gate') },
    { id: 'courtyard', label: t('gallery.tabs.courtyard') },
    { id: 'classroom', label: t('gallery.tabs.classroom') },
    { id: 'parking', label: t('gallery.tabs.parking') }
  ];

  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            {t('gallery.title')}
          </h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-500">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-250 cursor-pointer flex items-center space-x-1.5 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Info Banner */}
        <div className="max-w-4xl mx-auto bg-orange-50 border border-orange-100/50 rounded-xl p-4.5 mb-10 text-center text-xs font-semibold text-primary">
          {t('gallery.note')}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-150">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 text-gray-800 p-2.5 rounded-full shadow-lg">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5">
                <span className="text-[9px] uppercase font-black tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-gray-900 mt-2.5 mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
