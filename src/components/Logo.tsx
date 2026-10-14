import React from 'react';
import logoAsset from '../assets/logo.jpg';

interface LogoProps {
  className?: string;
  size?: number | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

/**
 * Official Corporate Logo for Njure Group
 * Powered directly by the user's uploaded repository asset (`Njure Group_1.jpg`)
 */
export const NjureLogo: React.FC<{
  size?: number;
  className?: string;
  alt?: string;
}> = ({ size = 280, className = '', alt = 'Njure Group Logo' }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-full overflow-hidden shrink-0 select-none shadow-2xl transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <img
        src={logoAsset}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-cover rounded-full"
        loading="eager"
      />
    </div>
  );
};

/**
 * Compact circular monogram emblem for navigation and footer
 */
export const NjureEmblem: React.FC<{
  size?: number;
  className?: string;
  alt?: string;
}> = ({ size = 38, className = '', alt = 'Njure Group' }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-full overflow-hidden shrink-0 select-none shadow-md ${className}`}
    >
      <img
        src={logoAsset}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-cover rounded-full"
        loading="eager"
      />
    </div>
  );
};

/**
 * Standard brand lockup for navigation
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const pixelSizes = {
    sm: 32,
    md: 38,
    lg: 48,
    xl: 64,
  };

  const currentSize = typeof size === 'number' ? size : pixelSizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <NjureEmblem size={currentSize} />
      {showText && (
        <span className="text-xl font-bold tracking-tight text-white font-sans leading-none">
          Njure Group
        </span>
      )}
    </div>
  );
};

export default NjureLogo;
