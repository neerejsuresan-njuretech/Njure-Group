import React from 'react';

interface SnowflakeSpec {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  drift: string;
  opacity: number;
  isStar?: boolean;
}

const SNOWFLAKES: SnowflakeSpec[] = [
  { id: 1, left: '3%', size: 6, duration: '15s', delay: '-2s', drift: '28px', opacity: 0.7 },
  { id: 2, left: '9%', size: 10, duration: '19s', delay: '-7s', drift: '-22px', opacity: 0.55, isStar: true },
  { id: 3, left: '15%', size: 4, duration: '12s', delay: '-4s', drift: '18px', opacity: 0.65 },
  { id: 4, left: '21%', size: 7, duration: '17s', delay: '-11s', drift: '-30px', opacity: 0.6 },
  { id: 5, left: '27%', size: 5, duration: '13s', delay: '-1s', drift: '24px', opacity: 0.75 },
  { id: 6, left: '33%', size: 11, duration: '21s', delay: '-9s', drift: '-18px', opacity: 0.5, isStar: true },
  { id: 7, left: '39%', size: 4, duration: '14s', delay: '-5s', drift: '30px', opacity: 0.65 },
  { id: 8, left: '45%', size: 6, duration: '16s', delay: '-13s', drift: '-26px', opacity: 0.7 },
  { id: 9, left: '51%', size: 5, duration: '11s', delay: '-3s', drift: '20px', opacity: 0.6 },
  { id: 10, left: '57%', size: 10, duration: '20s', delay: '-8s', drift: '-24px', opacity: 0.55, isStar: true },
  { id: 11, left: '63%', size: 4, duration: '13s', delay: '-6s', drift: '26px', opacity: 0.7 },
  { id: 12, left: '69%', size: 7, duration: '18s', delay: '-12s', drift: '-28px', opacity: 0.6 },
  { id: 13, left: '75%', size: 5, duration: '14s', delay: '-2s', drift: '22px', opacity: 0.75 },
  { id: 14, left: '81%', size: 11, duration: '22s', delay: '-10s', drift: '-20px', opacity: 0.5, isStar: true },
  { id: 15, left: '87%', size: 5, duration: '12s', delay: '-4s', drift: '18px', opacity: 0.7 },
  { id: 16, left: '93%', size: 6, duration: '16s', delay: '-9s', drift: '-26px', opacity: 0.65 },
  { id: 17, left: '12%', size: 4, duration: '18s', delay: '-15s', drift: '34px', opacity: 0.45 },
  { id: 18, left: '29%', size: 6, duration: '15s', delay: '-6s', drift: '-16px', opacity: 0.55 },
  { id: 19, left: '48%', size: 8, duration: '19s', delay: '-14s', drift: '26px', opacity: 0.5, isStar: true },
  { id: 20, left: '66%', size: 5, duration: '14s', delay: '-7s', drift: '-22px', opacity: 0.6 },
  { id: 21, left: '84%', size: 6, duration: '17s', delay: '-3s', drift: '28px', opacity: 0.55 },
  { id: 22, left: '96%', size: 4, duration: '13s', delay: '-11s', drift: '-18px', opacity: 0.65 },
];

/**
 * Kerala Christmas Atmosphere Overlay
 * - Iconic hanging Kerala Nakshatra (Christmas Star Lanterns) swaying gently
 * - Soft GPU-composited snowfall and warm golden starlight motes
 * - Pointer-events-none and prefers-reduced-motion compliant
 */
export const ChristmasAtmosphere: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden select-none"
    >
      {/* Hanging Kerala Nakshatra Christmas Star Lantern — Top Left */}
      <div
        className="absolute top-16 left-[18%] hidden md:block animate-christmas-star-swing opacity-75"
        style={{ animationDelay: '-1.2s' }}
      >
        <svg
          width="112"
          height="190"
          viewBox="0 0 112 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 0 14px rgba(251, 191, 36, 0.55))' }}
        >
          {/* Hanging Golden Cord */}
          <line x1="56" y1="0" x2="56" y2="54" stroke="#fcd34d" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* 8-Point Traditional Kerala Christmas Star (Nakshatra) */}
          <polygon
            points="56,52 67,82 98,94 67,106 56,136 45,106 14,94 45,82"
            stroke="#fbbf24"
            strokeWidth="2.2"
            fill="#b91c1c"
            fillOpacity="0.28"
          />
          <polygon
            points="56,64 64,86 86,94 64,102 56,124 48,102 26,94 48,86"
            stroke="#fef08a"
            strokeWidth="1.4"
            fill="#fbbf24"
            fillOpacity="0.32"
          />
          {/* Diagonal Star Rays */}
          <line x1="30" y1="68" x2="82" y2="120" stroke="#fbbf24" strokeWidth="1.4" opacity="0.85" />
          <line x1="82" y1="68" x2="30" y2="120" stroke="#fbbf24" strokeWidth="1.4" opacity="0.85" />
          <circle cx="56" cy="94" r="6" fill="#fef08a" />
          {/* Hanging Festive Tassels */}
          <line x1="56" y1="136" x2="56" y2="168" stroke="#f59e0b" strokeWidth="1.8" />
          <circle cx="56" cy="172" r="3.5" fill="#ef4444" stroke="#fde68a" strokeWidth="1.2" />
          <line x1="45" y1="106" x2="36" y2="146" stroke="#f59e0b" strokeWidth="1.2" opacity="0.7" />
          <line x1="67" y1="106" x2="76" y2="146" stroke="#f59e0b" strokeWidth="1.2" opacity="0.7" />
        </svg>
      </div>

      {/* Hanging Kerala Nakshatra Christmas Star Lantern — Top Right */}
      <div
        className="absolute top-14 right-[14%] hidden lg:block animate-christmas-star-swing opacity-80"
        style={{ animationDelay: '-3.1s' }}
      >
        <svg
          width="132"
          height="220"
          viewBox="0 0 132 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 0 16px rgba(245, 158, 11, 0.58))' }}
        >
          {/* Hanging Golden Cord */}
          <line x1="66" y1="0" x2="66" y2="66" stroke="#fcd34d" strokeWidth="1.6" strokeDasharray="3 3" />
          {/* Outer Halo */}
          <circle cx="66" cy="116" r="46" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 5" opacity="0.55" />
          {/* Iconic Kerala Paper Star Lantern */}
          <polygon
            points="66,64 78,100 116,116 78,132 66,168 54,132 16,116 54,100"
            stroke="#fcd34d"
            strokeWidth="2.4"
            fill="#991b1b"
            fillOpacity="0.32"
          />
          <polygon
            points="66,78 74,106 102,116 74,126 66,154 58,126 30,116 58,106"
            stroke="#fef08a"
            strokeWidth="1.5"
            fill="#fbbf24"
            fillOpacity="0.38"
          />
          <line x1="36" y1="86" x2="96" y2="146" stroke="#fde68a" strokeWidth="1.4" opacity="0.8" />
          <line x1="96" y1="86" x2="36" y2="146" stroke="#fde68a" strokeWidth="1.4" opacity="0.8" />
          <circle cx="66" cy="116" r="7" fill="#fef9c3" />
          {/* Paper Star Tail Streamers */}
          <path d="M 66 168 L 66 204" stroke="#fbbf24" strokeWidth="1.8" />
          <path d="M 59 162 L 50 194" stroke="#ef4444" strokeWidth="1.4" opacity="0.85" />
          <path d="M 73 162 L 82 194" stroke="#ef4444" strokeWidth="1.4" opacity="0.85" />
          <circle cx="66" cy="208" r="4" fill="#fbbf24" />
        </svg>
      </div>

      {/* Gentle Drifting Snowflakes & Warm Starlight Motes */}
      {SNOWFLAKES.map((flake) => (
        <span
          key={flake.id}
          className="absolute top-0 animate-christmas-snow"
          style={
            {
              left: flake.left,
              '--snow-duration': flake.duration,
              '--snow-drift': flake.drift,
              '--snow-opacity': flake.opacity,
              animationDelay: flake.delay,
            } as React.CSSProperties
          }
        >
          {flake.isStar ? (
            <svg
              width={flake.size}
              height={flake.size}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1V15M1 8H15M3 3L13 13M13 3L3 13"
                stroke="#fef3c7"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <span
              className="block rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.75)]"
              style={{ width: flake.size, height: flake.size }}
            />
          )}
        </span>
      ))}
    </div>
  );
};

export default ChristmasAtmosphere;
