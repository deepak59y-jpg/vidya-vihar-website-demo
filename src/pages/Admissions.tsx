import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, FileText, CheckCircle2, Send, HelpCircle, Loader2 } from 'lucide-react';
import { SampleDataBadge } from '../components/SampleDataBadge';

export const Admissions: React.FC = () => {
  const { t } = useTranslation();

  // Form states
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    classApplied: '',
    whatsappNumber: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const classes = ['6', '7', '8', '9', '10', '11', '12'];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.studentName.trim()) {
      newErrors.studentName = t('admissions.validation.nameRequired');
    }
    if (!formData.parentName.trim()) {
      newErrors.parentName = t('admissions.validation.parentRequired');
    }
    if (!formData.classApplied) {
      newErrors.classApplied = t('admissions.validation.classRequired');
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = t('admissions.validation.phoneRequired');
    } else if (!/^\d{10}$/.test(formData.whatsappNumber.replace(/\D/g, ''))) {
      newErrors.whatsappNumber = t('admissions.validation.phonePattern');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        studentName: '',
        parentName: '',
        classApplied: '',
        whatsappNumber: '',
        message: ''
      });
    }, 1500);
  };

  const docs = t('admissions.docsList', { returnObjects: true }) as string[];

  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            {t('admissions.title')}
          </h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-500">
            {t('admissions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Requirements & Timelines */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Cycle and Entry points */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t('admissions.cycleTitle')}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                {t('admissions.cycleDesc')}
              </p>
              <div className="bg-orange-50 border border-orange-100/50 p-4 rounded-xl">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  {t('admissions.entryPointsTitle')}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  {t('admissions.entryPointsList')}
                </p>
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t('admissions.docsTitle')}</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                {t('admissions.docsDesc')}
              </p>
              <ul className="space-y-3.5">
                {Array.isArray(docs) && docs.map((doc, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium leading-normal">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fee structure placeholder (Strict TBD) */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t('admissions.feesTitle')}</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                {t('admissions.feesDesc')}
              </p>
              <SampleDataBadge>
                <div className="text-center py-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-2xl font-extrabold text-gray-900 mb-1">
                    {t('common.tbd')}
                  </div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {t('common.tbdLabel')}
                  </div>
                </div>
              </SampleDataBadge>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8 sticky top-24">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{t('admissions.formTitle')}</h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                {t('admissions.formDesc')}
              </p>

              {isSuccess ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center animate-fade-in">
                  <div className="inline-flex p-3.5 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-2">
                    {t('admissions.successTitle')}
                  </h4>
                  <p className="text-xs text-emerald-700 leading-relaxed mb-6">
                    {t('admissions.successDesc')}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-accent hover:bg-emerald-700 text-white text-xs font-extrabold uppercase tracking-wider rounded-lg shadow transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Student Name */}
                  <div>
                    <label htmlFor="studentName" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      {t('admissions.fieldName')} *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        errors.studentName
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                          : 'border-gray-250 focus:border-primary/60 focus:ring-primary/20'
                      }`}
                    />
                    {errors.studentName && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.studentName}</p>
                    )}
                  </div>

                  {/* Parent Name */}
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      {t('admissions.fieldParent')} *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        errors.parentName
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                          : 'border-gray-250 focus:border-primary/60 focus:ring-primary/20'
                      }`}
                    />
                    {errors.parentName && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.parentName}</p>
                    )}
                  </div>

                  {/* Class Applied For */}
                  <div>
                    <label htmlFor="classApplied" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      {t('admissions.fieldClass')} *
                    </label>
                    <select
                      id="classApplied"
                      name="classApplied"
                      value={formData.classApplied}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        errors.classApplied
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                          : 'border-gray-250 focus:border-primary/60 focus:ring-primary/20'
                      }`}
                    >
                      <option value="">{t('admissions.selectClassPlaceholder')}</option>
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>
                          Class {cls}
                        </option>
                      ))}
                    </select>
                    {errors.classApplied && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.classApplied}</p>
                    )}
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label htmlFor="whatsappNumber" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      {t('admissions.fieldWhatsApp')} *
                    </label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        errors.whatsappNumber
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                          : 'border-gray-250 focus:border-primary/60 focus:ring-primary/20'
                      }`}
                    />
                    {errors.whatsappNumber && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.whatsappNumber}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      {t('admissions.fieldMessage')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-250 text-sm focus:outline-none focus:ring-2 focus:border-primary/60 focus:ring-primary/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 px-4 bg-primary hover:bg-primary/95 text-white font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t('common.submitting')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t('common.submit')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
