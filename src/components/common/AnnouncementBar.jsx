import { useState, useEffect } from 'react';

export default function AnnouncementBar() {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const offers = [
    'FREE SHIPPING ON ORDERS ABOVE ₹999',
    'FREE SHIPPING ON YOUR FIRST ORDER ABOVE ₹599',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
        setFade(true);
      }, 300);
    }, 3800);

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <div className="w-full bg-[#164e3d] text-white select-none">
      {/* LINE 1: Rotating Free Shipping Announcement Bar */}
      <div className="w-full border-b border-[#113e30]/70 py-0.5 px-3 flex items-center justify-center min-h-[18px]">
        <div
          className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-center transition-opacity duration-300 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {offers[currentOfferIndex]}
        </div>
      </div>

      {/* LINE 2: Mobile App Discount Banner */}
      <div className="w-full py-1 px-2.5 sm:px-4 flex items-center justify-center border-b border-[#113e30]/50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs text-white flex-nowrap whitespace-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Desktop & Tablet Text */}
          <span className="hidden md:inline font-medium">
            Install <strong className="font-bold">Bhagvat Prasadam</strong> App &amp; Get{' '}
            <span className="text-[#FFE899] font-bold underline decoration-[#FFE899]/60 underline-offset-2">
              2% Extra Discount
            </span>{' '}
            on App! Available on:
          </span>

          {/* Mobile Text (compact so buttons fit on 1 single line without overflow) */}
          <span className="inline md:hidden font-medium text-[10px] sm:text-[11px]">
            Install App &amp; Get{' '}
            <span className="text-[#FFE899] font-bold">2% Off:</span>
          </span>

          {/* App Badges: Google Play & App Store */}
          <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on Google Play Store (opens in new tab)"
              className="inline-flex items-center gap-1 bg-black hover:bg-neutral-900 text-white px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold tracking-tight shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186A2.296 2.296 0 0 1 3 20.575V3.425c0-.623.226-1.196.609-1.611z" fill="#00E676" />
                <path d="M17.207 8.586L5.05 1.57A2.28 2.28 0 0 0 3.61 1.814l10.184 10.185 3.413-3.413z" fill="#FFD600" />
                <path d="M3.61 22.186c.427.351.983.473 1.44.244l12.157-7.016-3.414-3.414L3.61 22.186z" fill="#FF3D00" />
                <path d="M21.577 11.127l-4.37-2.541-3.414 3.414 3.414 3.414 4.37-2.541a1.004 1.004 0 0 0 0-1.746z" fill="#00B0FF" />
              </svg>
              <span>Play Store</span>
            </a>

            {/* App Store */}
            <a
              href="https://apps.apple.com/in/app/bhagvat-prasadam/id6751397354"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on Apple App Store (opens in new tab)"
              className="inline-flex items-center gap-1 bg-black hover:bg-neutral-900 text-white px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold tracking-tight shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.59-7.7-11.72-13.97-6.3-9.5-11.11-20.4-14.42-32.69-3.32-12.28-4.97-23.77-4.97-34.46 0-15.01 3.8-27.42 11.41-37.22 7.61-9.79 17.06-14.78 28.36-14.97 4.58 0 9.8 1.15 15.66 3.44 5.86 2.3 9.79 3.52 11.79 3.67 1.63 0 5.73-1.32 12.31-3.95 6.58-2.63 12.1-3.79 16.57-3.48 12.28.98 22.19 5.48 29.74 13.51-10.76 6.52-16.03 15.54-15.82 27.05.22 8.91 3.59 16.41 10.11 22.5 6.53 6.09 14.13 9.78 22.82 11.09-2.07 6.3-4.57 12.72-7.51 19.27zM119.22 33.15c0-7.39 2.66-14.34 7.99-20.86 5.33-6.52 11.96-10.65 19.89-12.29.22 1.3.33 2.45.33 3.44 0 7.39-2.82 14.4-8.47 21.03-5.65 6.63-12.39 10.6-20.21 11.89-.11-1.08-.16-2.16-.16-3.21z" />
              </svg>
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
