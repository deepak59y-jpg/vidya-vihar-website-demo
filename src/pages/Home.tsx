import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Bell, Calendar, Award, Users, GraduationCap, Building2 } from 'lucide-react';
import { SampleDataBadge } from '../components/SampleDataBadge';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, delayMs = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '850ms',
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const images = [
    '/images/img1.webp',
    '/images/img2.webp',
    '/images/img3.webp',
    '/images/img4.webp'
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, images.length]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Background Slideshow */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 border-b border-slate-900">
        {/* Background slideshow images */}
        <div className="absolute inset-0 z-0">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Slide ${idx + 1}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentIdx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Dark gradient overlay (dark navy at ~40-50% opacity, heavier at the bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/60 to-slate-900/40 z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 drop-shadow-md">
              {t('home.heroTitle')}
            </h2>
            
            <p className="text-base sm:text-lg text-orange-50/90 leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-sm font-medium">
              {t('home.heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>{t('home.ctaAdmissions')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => onNavigate('facilities')}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/25 shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center backdrop-blur-sm"
              >
                {t('home.ctaExplore')}
              </button>
            </div>
          </div>
        </div>

        {/* Small dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIdx ? 'bg-primary scale-125 w-4' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Admission Alert Banner */}
      <section className="bg-primary/10 border-y border-primary/20 py-4.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <div className="bg-primary text-white p-2 rounded-lg animate-bounce shrink-0">
            <Bell className="w-5 h-5" />
          </div>
          <p className="text-sm font-bold text-gray-800 leading-snug">
            {t('home.admissionAlert')}
          </p>
          <button
            onClick={() => onNavigate('admissions')}
            className="text-xs font-extrabold text-primary hover:text-orange-700 underline underline-offset-4 cursor-pointer focus:outline-none"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Quick Stats Section with strict Sample Data labels & Watermarks */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll delayMs={0}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                {t('home.stats.title')}
              </h3>
              <p className="text-sm text-gray-500">
                {t('home.stats.subtitle')}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={50}>
            <SampleDataBadge className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-2">
                {/* Stat 1 - Founding Year */}
                <RevealOnScroll delayMs={0} className="w-full">
                  <div className="relative overflow-hidden text-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full">
                    {/* Themed low opacity watermark background */}
                    <img
                      src="/images/img1.webp"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.57] group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="relative z-10 bg-white/78 backdrop-blur-[2px] rounded-xl py-2">
                      <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-xl mb-4">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                        1995 <span className="text-xs font-semibold text-primary font-mono block sm:inline">[Sample]</span>
                      </div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {t('home.stats.yearLabel')}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Stat 2 - Enrolled Students */}
                <RevealOnScroll delayMs={100} className="w-full">
                  <div className="relative overflow-hidden text-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full">
                    <img
                      src="/images/img2.webp"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.57] group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="relative z-10 bg-white/78 backdrop-blur-[2px] rounded-xl py-2">
                      <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-4">
                        <Users className="w-6 h-6" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                        1200+ <span className="text-xs font-semibold text-primary font-mono block sm:inline">[Sample]</span>
                      </div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {t('home.stats.studentsLabel')}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Stat 3 - Teaching Staff */}
                <RevealOnScroll delayMs={200} className="w-full">
                  <div className="relative overflow-hidden text-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full">
                    <img
                      src="/images/img4.webp"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.57] group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="relative z-10 bg-white/78 backdrop-blur-[2px] rounded-xl py-2">
                      <div className="inline-flex p-3 bg-purple-50 text-purple-600 rounded-xl mb-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                        45 <span className="text-xs font-semibold text-primary font-mono block sm:inline">[Sample]</span>
                      </div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {t('home.stats.staffLabel')}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Stat 4 - Exam Pass Rate */}
                <RevealOnScroll delayMs={300} className="w-full">
                  <div className="relative overflow-hidden text-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full">
                    <img
                      src="/images/img3.webp"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.57] group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="relative z-10 bg-white/78 backdrop-blur-[2px] rounded-xl py-2">
                      <div className="inline-flex p-3 bg-amber-50 text-amber-600 rounded-xl mb-4">
                        <Award className="w-6 h-6" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                        98% <span className="text-xs font-semibold text-primary font-mono block sm:inline">[Sample]</span>
                      </div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {t('home.stats.successLabel')}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </SampleDataBadge>
          </RevealOnScroll>
        </div>
      </section>

      {/* Notice Board Preview */}
      <section className="py-16 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <RevealOnScroll delayMs={0}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary block" />
                <span>{t('home.noticesPreviewTitle')}</span>
              </h3>
              <button
                onClick={() => onNavigate('news')}
                className="text-xs sm:text-sm font-bold text-primary hover:text-orange-700 hover:underline cursor-pointer flex items-center space-x-1"
              >
                <span>{t('home.viewAllNotices')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={100}>
            <SampleDataBadge>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative hover:shadow-md transition-shadow duration-300">
                <span className="absolute top-4 right-4 bg-orange-100 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Admission
                </span>
                
                <div className="flex items-center space-x-2 text-xs text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>March 15, 2026</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  Admission Process Open for Academic Session
                </h4>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Admissions are now open for Classes 6, 9, and 11. Parents can collect the enquiry form from the administrative office or submit the online enquiry form on this website. Seats are limited.
                </p>

                <button
                  onClick={() => onNavigate('admissions')}
                  className="text-xs font-bold text-primary hover:text-orange-700 flex items-center space-x-1 cursor-pointer focus:outline-none"
                >
                  <span>Read Requirements & Submit Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </SampleDataBadge>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};
