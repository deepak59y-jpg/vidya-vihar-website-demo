import React from 'react';

export const WhatsAppButton: React.FC = () => {
  // WhatsApp link format. We use a mock number for the demo.
  const whatsappUrl = "https://wa.me/910000000000?text=Hello%20Vidya%20Vihar%20Inter%20College,%20I%20have%20an%20admission%20enquiry.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#20BA56] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      aria-label="Contact on WhatsApp"
    >
      {/* Custom SVG WhatsApp Logo */}
      <svg
        className="w-6.5 h-6.5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.51 5.276 3.508 8.48-.003 6.66-5.338 11.999-11.947 11.999-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.792 1.453 5.485.002 9.948-4.428 9.95-9.87.002-2.636-1.02-5.11-2.885-6.978C16.54 1.9 14.075.875 11.458.875 5.975.875 1.512 5.304 1.51 10.748c-.001 1.705.467 3.367 1.354 4.823l-.995 3.634 3.737-.974zm11.367-7.393c-.302-.15-.1.45-1.782-.843-.3-.15-.652-.075-1.55.825-.302.302-.6.452-.9.302-.302-.15-1.282-.472-2.441-1.505-1.003-.896-1.68-2.002-1.877-2.338-.198-.337-.02-.519.148-.686.15-.15.3-.35.452-.524.15-.175.2-.3.302-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.5-.508-.675-.513-.175-.005-.375-.005-.575-.005s-.525.075-.8.375c-.275.3-.1.525-1.05 1.475-.95.95-1.475 2.05-1.475 3.15s.775 2.15 1.05 2.45c.275.3 4.22 6.442 10.22 8.784 1.428.556 2.544.89 3.413 1.166 1.433.456 2.738.393 3.768.24 1.148-.17 2.393-.977 2.731-1.878.337-.9 1.1-2.202.9-2.302-.075-.1-.275-.25-.575-.4z" />
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap font-semibold text-xs ml-0 group-hover:ml-2 tracking-wide uppercase">
        WhatsApp Us
      </span>
    </a>
  );
};
