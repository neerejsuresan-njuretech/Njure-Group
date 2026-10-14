import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

/**
 * Official Corporate Logo for "Njure Group"
 * - Solid deep corporate navy blue circular badge (#0A2540 / #0B2545)
 * - Top-center: Stylized white geometric interlocking 'NJ' monogram with integrated nested 'N' structure
 * - Middle: "Njure Group" in clean, bold, white sans-serif
 * - Bottom: "The Blueprint for a Bolder World" in flowing, elegant white script
 * - Balanced, sharply defined, perfectly centered, strictly deep navy blue and crisp white
 */
export const NjureLogo: React.FC<{
  size?: number;
  className?: string;
  title?: string;
}> = ({ size = 280, className = '', title = 'Njure Group Logo' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      role="img"
      aria-label={title}
    >
      {/* Solid Deep Corporate Navy Blue Circle */}
      <circle cx="250" cy="250" r="246" fill="#0A2540" />
      {/* Subtle crisp hairline ring */}
      <circle cx="250" cy="250" r="236" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="2" />

      {/* Interlocking 'NJ' Geometric White Monogram - Centered at X=250 */}
      <g fill="#FFFFFF">
        {/* N: Left vertical pillar */}
        <path d="M 164 100 L 194 100 L 194 214 L 164 214 Z" />

        {/* N: Diagonal bridge cutting downward through the center */}
        <path d="M 194 116 L 274 214 L 242 214 L 174 132 Z" />

        {/* N: Right upright vertical branch */}
        <path d="M 268 100 L 298 100 L 298 186 L 268 148 Z" />

        {/* J: Top floating cap / dot bar */}
        <rect x="308" y="100" width="28" height="15" rx="3" />

        {/* J: Main right vertical stem and bottom interlocking sweep */}
        <path
          d="M 308 128 L 336 128 L 336 236 C 336 255 322 266 300 266 L 188 266 C 170 266 164 252 164 238 L 194 238 C 194 243 199 247 208 247 L 292 247 C 302 247 308 242 308 232 Z"
        />

        {/* Beveled 45-degree chamfer cut on bottom-left elbow */}
        <polygon points="164,238 190,266 164,266" fill="#0A2540" />

        {/* Nested internal continuous interlocking reinforcement bridging the void */}
        <polygon points="194,162 228,204 204,204 182,176" fill="#FFFFFF" />
      </g>

      {/* Main Text: "Njure Group" */}
      <text
        x="250"
        y="336"
        textAnchor="middle"
        fill="#FFFFFF"
        style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
          fontWeight: 700,
          fontSize: '48px',
          letterSpacing: '-0.02em',
        }}
      >
        Njure Group
      </text>

      {/* Tagline: "The Blueprint for a Bolder World" */}
      <text
        x="250"
        y="378"
        textAnchor="middle"
        fill="#FFFFFF"
        style={{
          fontFamily: "'Caveat', cursive",
          fontWeight: 600,
          fontSize: '28px',
          letterSpacing: '0.015em',
        }}
      >
        The Blueprint for a Bolder World
      </text>
    </svg>
  );
};

/**
 * Compact circular monogram emblem for the navbar header
 */
export const NjureEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 38,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Njure Group"
    >
      <circle cx="50" cy="50" r="49" fill="#0A2540" />
      <circle cx="50" cy="50" r="46" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" />
      
      <g fill="#FFFFFF" transform="translate(18, 18) scale(0.64)">
        {/* N left pillar */}
        <rect x="0" y="0" width="14" height="52" />
        {/* N diagonal */}
        <polygon points="14,8 48,52 34,52 6,17" />
        {/* N right pillar */}
        <polygon points="40,0 52,0 52,40 40,24" />
        {/* J top cap */}
        <rect x="58" y="0" width="18" height="7" rx="1.5" />
        {/* J stem & sweep */}
        <path d="M 60 14 L 72 14 L 72 64 C 72 73 64 78 52 78 L 10 78 C 0 78 0 69 0 62 L 14 62 C 14 66 18 68 24 68 L 46 68 C 54 68 58 65 58 58 Z" />
        {/* Chamfer */}
        <polygon points="0,62 10,78 0,78" fill="#0A2540" />
      </g>
    </svg>
  );
};

/**
 * Standard text + emblem combo for navigation
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
