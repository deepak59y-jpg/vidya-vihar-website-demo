import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, GraduationCap, Award, Compass, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SampleDataBadge, SampleDataInline } from '../components/SampleDataBadge';

export const Academics: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            {t('academics.title')}
          </h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-500">
            {t('academics.subtitle')}
          </p>
        </div>

        {/* Section 1: Affiliation Details with Data Gaps */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Board Affiliation</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Vidya Vihar Inter College is affiliated with the <strong>{t('boardName')}</strong>, conducting intermediate and high school board assessments in compliance with state standards.
              </p>
              <div className="flex items-start space-x-2 text-xs text-amber-700 bg-amber-50 p-4.5 rounded-xl border border-amber-100/50">
                <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="leading-normal">
                  Affiliation registration numbers and specific validation codes are currently being verified with school administration.
                </p>
              </div>
            </div>

            <SampleDataBadge className="h-full">
              <h4 className="font-bold text-gray-800 text-sm mb-4 uppercase tracking-wider">Official Registrar Stubs</h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2.5">
                  <span className="font-semibold text-gray-500">{t('academics.regNumber')}:</span>
                  <SampleDataInline label="TBD" />
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2.5">
                  <span className="font-semibold text-gray-500">{t('academics.udiseCode')}:</span>
                  <SampleDataInline label="TBD" />
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-gray-500">School Code:</span>
                  <SampleDataInline label="TBD" />
                </li>
              </ul>
            </SampleDataBadge>
          </div>
        </section>

        {/* Section 2: Classes Offered */}
        <section className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              {t('academics.classesTitle')}
            </h3>
            <p className="text-sm text-gray-500">
              {t('academics.classesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Middle School */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="h-1.5 w-full bg-blue-500 absolute top-0 left-0" />
              <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-xl mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{t('academics.middleSchool')}</h4>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                {t('academics.middleDesc')}
              </p>
            </div>

            {/* High School */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="h-1.5 w-full bg-primary absolute top-0 left-0" />
              <div className="inline-flex p-3 bg-orange-50 text-primary rounded-xl mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{t('academics.highSchool')}</h4>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                {t('academics.highDesc')}
              </p>
            </div>

            {/* Intermediate */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="h-1.5 w-full bg-emerald-500 absolute top-0 left-0" />
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{t('academics.intermediate')}</h4>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                {t('academics.intermediateDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Intermediate Streams (Classes 11 & 12) */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              {t('academics.streamsTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {t('academics.streamsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Science Stream */}
            <div className="border border-gray-150 p-6 rounded-xl space-y-4 hover:border-primary/50 transition-colors duration-200">
              <div className="flex items-center space-x-3 text-primary">
                <Compass className="w-5 h-5 shrink-0" />
                <h4 className="font-extrabold text-gray-900 text-base">{t('academics.scienceStream')}</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {t('academics.scienceDesc')}
              </p>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                <span>PCM / PCB Combinations</span>
              </div>
            </div>

            {/* Commerce Stream */}
            <div className="border border-gray-150 p-6 rounded-xl space-y-4 hover:border-primary/50 transition-colors duration-200">
              <div className="flex items-center space-x-3 text-primary">
                <Compass className="w-5 h-5 shrink-0" />
                <h4 className="font-extrabold text-gray-900 text-base">{t('academics.commerceStream')}</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {t('academics.commerceDesc')}
              </p>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                <span>Core Business & Accounts</span>
              </div>
            </div>

            {/* Arts Stream */}
            <div className="border border-gray-150 p-6 rounded-xl space-y-4 hover:border-primary/50 transition-colors duration-200">
              <div className="flex items-center space-x-3 text-primary">
                <Compass className="w-5 h-5 shrink-0" />
                <h4 className="font-extrabold text-gray-900 text-base">{t('academics.artsStream')}</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {t('academics.artsDesc')}
              </p>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                <span>Languages & Humanities</span>
              </div>
            </div>
          </div>

          {/* Subject Level Details Data Gap Warning */}
          <div className="mt-8">
            <SampleDataBadge>
              <div className="text-xs sm:text-sm text-gray-600 space-y-2">
                <h5 className="font-bold text-gray-800 flex items-center space-x-1.5">
                  <span>Subject Syllabus List</span>
                </h5>
                <p className="leading-relaxed text-xs">
                  Detailed subject-level curriculums, elective lists, and timetables are unconfirmed. Refer to the UP Board regulation booklets. <SampleDataInline label="TBD - Confirm subjects" />
                </p>
              </div>
            </SampleDataBadge>
          </div>
        </section>

        {/* Section 4: Curriculum Guidelines */}
        <section className="bg-orange-50 border border-orange-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="font-extrabold text-gray-900 text-lg sm:text-xl mb-2">{t('academics.curriculumTitle')}</h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {t('academics.curriculumNote')}
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2.5 rounded-xl border border-orange-200/50 text-xs font-extrabold text-primary shrink-0">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>Strict UP Board Syllabus</span>
          </div>
        </section>

      </div>
    </div>
  );
};
