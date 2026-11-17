import React, { useState } from 'react';
import { APP_CONFIG } from '../../config/app.config';
import { useApp } from '../../context/AppContext';

interface BrandLogoProps {
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function BrandLogo({ showTagline = false, size = 'md', onClick }: BrandLogoProps) {
  const { systemSettings } = useApp();
  const [imgFailed, setImgFailed] = useState(false);

  const brandName = systemSettings?.websiteName?.trim() || APP_CONFIG.brandName;
  const brandTagline = systemSettings?.brandTagline?.trim() || APP_CONFIG.brandTagline;
  const logoUrl = systemSettings?.logo?.trim() || '';
  const showCustomImage = Boolean(logoUrl && /^https?:\/\//i.test(logoUrl) && !imgFailed);
  const primaryColor = systemSettings?.themeColor?.trim() || '#6D28D9';
  const secondaryColor = systemSettings?.secondaryColor?.trim() || '#4F46E5';

  const iconSize = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-11 w-11' : 'h-9 w-9';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg';

  const content = (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <span
        style={
          showCustomImage
            ? undefined
            : { backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }
        }
        className={`${iconSize} relative inline-flex items-center justify-center overflow-hidden rounded-xl ${
          showCustomImage ? 'bg-white border border-violet-100' : 'text-white shadow-sm shadow-violet-600/25'
        }`}
      >
        {showCustomImage ? (
          <img
            src={logoUrl}
            alt={brandName}
            onError={() => setImgFailed(true)}
            className="h-full w-full object-contain p-0.5"
          />
        ) : (
          <svg viewBox="0 0 36 36" fill="none" className="h-6 w-6" aria-hidden="true">
            <path
              d="M7 25L12 10H18.5C21.2 10 22.8 11.5 22.2 14C21.7 16.1 19.9 17.4 17.5 17.6L21.5 25H17.6L14.2 18.2H12.3L10.3 25H7ZM13.2 15.3H16.9C18.2 15.3 19.1 14.7 19.3 13.7C19.5 12.8 18.8 12.3 17.5 12.3H14.1L13.2 15.3Z"
              fill="currentColor"
            />
            <path
              d="M23.5 10H27.2L24.7 20.4C24.1 23.2 22.1 25.1 19 25.4L18.6 22.7C20.4 22.4 21.2 21.4 21.6 19.6L23.5 10Z"
              fill="#FACC15"
            />
            <path
              d="M11 27.5C16.5 28.4 22.4 26.8 27.5 22.5"
              stroke="#FACC15"
              strokeWidth="2.1"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
      <span className="flex flex-col text-left leading-none">
        <span className={`${titleSize} font-display font-extrabold tracking-tight text-violet-950`}>
          {brandName}
        </span>
        {showTagline && (
          <span className="mt-0.5 text-[11px] font-medium text-slate-500">
            {brandTagline}
          </span>
        )}
      </span>
    </span>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
      >
        {content}
      </button>
    );
  }

  return content;
}
