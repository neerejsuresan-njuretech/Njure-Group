import React from 'react';

/**
 * Artistic Kerala Cultural Neon Background
 * Vibrant, clearly visible animated neon art (55% to 70% opacity):
 * 1. Kathakali Kireedam & Paccha Face: Iconic headdress, ornamental prabhamandalam, chutti jawline, floating gently
 * 2. Chundan Vallam (Snake Boat / Vallamkali): Majestic racing boat visibly surging across the water with rhythmic oars
 * 3. Nilavilakku (Traditional Kerala Brass Lamp): Sacred brass lamp with flickering, dancing flame
 * 4. Swaying Coconut Palm (Thengu): Aerodynamic fronds rhythmically swaying in the Kerala coastal breeze
 * 5. Nettipattam: Golden geometric elephant caparison swaying like in a temple procession
 * 6. Chenda Drum: Cylindrical festival percussion pulsing with Kerala melam rhythm
 * 7. Arabian Sea & Backwater Ripples: Actively rolling undulating neon waves along the horizon
 */
export const KeralaBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Dynamic ambient luminous glow spots that breathe and shift */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl pointer-events-none animate-kerala-ambient-orb" />
      <div 
        className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none animate-kerala-ambient-orb" 
        style={{ animationDelay: '-2s' }}
      />
      <div 
        className="absolute top-2/3 left-1/12 w-80 h-80 bg-amber-400/25 rounded-full blur-3xl pointer-events-none animate-kerala-ambient-orb" 
        style={{ animationDelay: '-4s' }}
      />
      <div 
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none animate-kerala-ambient-orb" 
        style={{ animationDelay: '-1s' }}
      />

      {/* 1. UPPER LEFT: Artistic Kathakali Face & Crown (Kireedam) - Visible Floating & Swaying Motion */}
      <div className="absolute top-8 left-2 sm:left-8 text-cyan-400 animate-kerala-float-kathakali opacity-70">
        <svg
          width="360"
          height="360"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-kerala-neon-glow"
          style={{ filter: 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.55))' }}
        >
          {/* Outer Sun Halo / Prabhamandalam */}
          <circle
            cx="150"
            cy="150"
            r="115"
            stroke="#38bdf8"
            strokeWidth="2.4"
            strokeDasharray="6 4"
          />
          <circle
            cx="150"
            cy="150"
            r="128"
            stroke="#0284c7"
            strokeWidth="1.8"
            strokeDasharray="3 7"
          />

          {/* Tiered Kireedam (Crown) */}
          <path
            d="M 150 25 L 157 55 L 143 55 Z"
            stroke="#fbbf24"
            strokeWidth="2.4"
            fill="#fbbf24"
            fillOpacity="0.3"
          />
          <path
            d="M 120 100 L 150 45 L 180 100 Z"
            stroke="#38bdf8"
            strokeWidth="2.8"
          />
          <path
            d="M 105 125 L 150 55 L 195 125 Z"
            stroke="#38bdf8"
            strokeWidth="2.2"
          />
          {/* Crown discs & gems */}
          <circle cx="150" cy="80" r="8" stroke="#fbbf24" strokeWidth="2.2" fill="#fbbf24" fillOpacity="0.4" />
          <line x1="110" y1="120" x2="190" y2="120" stroke="#38bdf8" strokeWidth="2.6" />
          <line x1="122" y1="100" x2="178" y2="100" stroke="#38bdf8" strokeWidth="2.2" />

          {/* Circular Kundalam (Ear Ornaments) */}
          <circle cx="85" cy="170" r="19" stroke="#fbbf24" strokeWidth="2.5" />
          <circle cx="85" cy="170" r="8.5" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="215" cy="170" r="19" stroke="#fbbf24" strokeWidth="2.5" />
          <circle cx="215" cy="170" r="8.5" stroke="#38bdf8" strokeWidth="2" />

          {/* Paccha (Green Face) & Chutti (White Border Frame) */}
          <path
            d="M 98 140 C 95 195 110 235 150 245 C 190 235 205 195 202 140"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 110 145 C 108 185 120 220 150 228 C 180 220 192 185 190 145"
            stroke="#6ee7b7"
            strokeWidth="2"
            strokeDasharray="4 3"
          />

          {/* Expressive Kathakali Eyes & Eyebrows */}
          {/* Left Eye */}
          <path
            d="M 115 160 Q 130 150 142 162 Q 130 170 115 160 Z"
            stroke="#ffffff"
            strokeWidth="2.2"
            fill="#38bdf8"
            fillOpacity="0.35"
          />
          <circle cx="129" cy="160" r="3.2" fill="#ffffff" />
          <path d="M 112 153 Q 128 142 144 153" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />

          {/* Right Eye */}
          <path
            d="M 158 162 Q 170 150 185 160 Q 170 170 158 162 Z"
            stroke="#ffffff"
            strokeWidth="2.2"
            fill="#38bdf8"
            fillOpacity="0.35"
          />
          <circle cx="171" cy="160" r="3.2" fill="#ffffff" />
          <path d="M 156 153 Q 172 142 188 153" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />

          {/* Forehead Chutti Mark */}
          <path d="M 150 135 L 146 148 L 154 148 Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1.5" />
          {/* Red Lips */}
          <path
            d="M 135 200 Q 150 208 165 200"
            stroke="#fb7185"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 2. UPPER RIGHT: Artistic Coconut Palm (Thengu) Frond - Swaying In The Wind */}
      <div className="absolute -top-10 -right-10 text-emerald-400 animate-kerala-palm-sway opacity-70">
        <svg
          width="480"
          height="480"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-kerala-neon-glow"
          style={{ filter: 'drop-shadow(0 0 12px rgba(16, 185, 129, 0.55))' }}
        >
          {/* Main Central Stem with dynamic curve */}
          <path
            d="M 30 390 Q 170 240 370 60"
            stroke="#10b981"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <path
            d="M 30 390 Q 170 240 370 60"
            stroke="#6ee7b7"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />

          {/* Top Leaflets (Arched cascading palms) */}
          <path d="M 110 320 Q 75 260 50 220" stroke="#34d399" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M 140 285 Q 120 205 95 160" stroke="#34d399" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M 180 245 Q 185 165 170 110" stroke="#34d399" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M 225 200 Q 255 130 260 75" stroke="#34d399" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M 280 150 Q 325 95 345 50" stroke="#34d399" strokeWidth="2.6" strokeLinecap="round" />

          {/* Bottom Leaflets */}
          <path d="M 130 310 Q 185 295 235 305" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M 170 265 Q 235 240 285 235" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M 215 220 Q 285 185 335 175" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M 265 170 Q 335 135 385 120" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M 315 120 Q 375 95 400 80" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />

          {/* Glowing young coconut cluster accent */}
          <circle cx="160" cy="270" r="8.5" stroke="#facc15" strokeWidth="2" fill="#facc15" fillOpacity="0.4" />
          <circle cx="176" cy="264" r="9.5" stroke="#facc15" strokeWidth="2" fill="#facc15" fillOpacity="0.4" />
          <circle cx="169" cy="281" r="8.5" stroke="#facc15" strokeWidth="2" fill="#facc15" fillOpacity="0.4" />
        </svg>
      </div>

      {/* 3. MID LEFT: Sacred Nilavilakku (Traditional Kerala Brass Lamp) with Actively Flickering Flame */}
      <div className="absolute top-[36%] -left-4 sm:left-4 text-amber-300 animate-kerala-float-kathakali opacity-70">
        <svg
          width="280"
          height="400"
          viewBox="0 0 200 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-kerala-neon-glow"
          style={{ filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.55))' }}
        >
          {/* Main Eternal Dancing Flame with dedicated flicker animation */}
          <g className="animate-kerala-flame-flicker origin-[100px_54px]">
            <path
              d="M 100 18 C 84 45 74 65 100 88 C 126 65 116 45 100 18 Z"
              stroke="#fbbf24"
              strokeWidth="3.2"
              fill="#fbbf24"
              fillOpacity="0.45"
            />
            {/* Inner intense flame core */}
            <path
              d="M 100 36 C 92 50 89 64 100 76 C 111 64 108 50 100 36 Z"
              stroke="#fef08a"
              strokeWidth="2.2"
              fill="#fef08a"
              fillOpacity="0.8"
            />
            {/* Halo Radiance rings */}
            <circle cx="100" cy="54" r="22" stroke="#f59e0b" strokeWidth="1.6" strokeDasharray="3 4" />
            <circle cx="100" cy="54" r="32" stroke="#d97706" strokeWidth="1.2" strokeDasharray="2 6" />
          </g>

          {/* Lamp Crown Top Disc (Thattu) */}
          <ellipse cx="100" cy="94" rx="42" ry="7" stroke="#fbbf24" strokeWidth="2.6" />
          {/* 5 Wick Spouts (Thiri) points */}
          <circle cx="60" cy="94" r="3.5" fill="#fef08a" />
          <circle cx="80" cy="98" r="3.5" fill="#fef08a" />
          <circle cx="100" cy="100" r="4" fill="#fef08a" />
          <circle cx="120" cy="98" r="3.5" fill="#fef08a" />
          <circle cx="140" cy="94" r="3.5" fill="#fef08a" />

          {/* Upper Neck Transition */}
          <path d="M 94 101 L 96 138 L 104 138 L 106 101" stroke="#fbbf24" strokeWidth="2.2" />
          <ellipse cx="100" cy="140" rx="26" ry="5" stroke="#fbbf24" strokeWidth="2.2" />

          {/* Slender Fluted Brass Pillar */}
          <path d="M 97 145 L 94 225 L 106 225 L 103 145" stroke="#fbbf24" strokeWidth="2.4" />
          {/* Decorative central ring */}
          <ellipse cx="100" cy="185" rx="14" ry="3.5" stroke="#fbbf24" strokeWidth="2" />

          {/* Lower Pedestal & Stepped Lotus Base */}
          <ellipse cx="100" cy="230" rx="42" ry="7" stroke="#fbbf24" strokeWidth="2.6" />
          <path d="M 70 235 L 55 280 L 145 280 L 130 235" stroke="#fbbf24" strokeWidth="2.2" />
          <ellipse cx="100" cy="282" rx="52" ry="8" stroke="#fbbf24" strokeWidth="3" />
          <line x1="50" y1="285" x2="150" y2="285" stroke="#fbbf24" strokeWidth="2" />
        </svg>
      </div>

      {/* 4. MID-RIGHT: Nettipattam (Revered Temple Caparison / Festival Elephant Ornament) - Swaying gently */}
      <div className="absolute top-[46%] right-2 sm:right-10 text-amber-300 animate-kerala-nettipattam opacity-70">
        <svg
          width="300"
          height="340"
          viewBox="0 0 240 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-kerala-neon-glow"
          style={{ filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.55))' }}
        >
          {/* Top Kumbham (Crown Crescent) */}
          <path
            d="M 70 40 Q 120 15 170 40 Q 120 55 70 40 Z"
            stroke="#fbbf24"
            strokeWidth="2.8"
            fill="#fbbf24"
            fillOpacity="0.35"
          />
          <circle cx="120" cy="25" r="5" fill="#fbbf24" />

          {/* Main Triangular Tapering Outline */}
          <path
            d="M 60 50 L 120 220 L 180 50"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Horizontal Golden Rib Rows (Koombu & Beads) */}
          <line x1="68" y1="75" x2="172" y2="75" stroke="#fbbf24" strokeWidth="2.2" />
          <circle cx="85" cy="75" r="3" fill="#fbbf24" />
          <circle cx="102" cy="75" r="3" fill="#fbbf24" />
          <circle cx="120" cy="75" r="3" fill="#fbbf24" />
          <circle cx="138" cy="75" r="3" fill="#fbbf24" />
          <circle cx="155" cy="75" r="3" fill="#fbbf24" />

          <line x1="78" y1="105" x2="162" y2="105" stroke="#fbbf24" strokeWidth="2.2" />
          <circle cx="95" cy="105" r="3" fill="#fbbf24" />
          <circle cx="120" cy="105" r="3" fill="#fbbf24" />
          <circle cx="145" cy="105" r="3" fill="#fbbf24" />

          <line x1="88" y1="135" x2="152" y2="135" stroke="#fbbf24" strokeWidth="2.2" />
          <circle cx="105" cy="135" r="3" fill="#fbbf24" />
          <circle cx="120" cy="135" r="3" fill="#fbbf24" />
          <circle cx="135" cy="135" r="3" fill="#fbbf24" />

          <line x1="98" y1="165" x2="142" y2="165" stroke="#fbbf24" strokeWidth="2.2" />
          <circle cx="120" cy="165" r="3" fill="#fbbf24" />

          <line x1="108" y1="195" x2="132" y2="195" stroke="#fbbf24" strokeWidth="2.2" />

          {/* Hanging Woolen Tassels / Fringe Arcs */}
          <path d="M 60 55 C 50 65 45 80 50 95" stroke="#f43f5e" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M 180 55 C 190 65 195 80 190 95" stroke="#f43f5e" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="120" cy="235" r="7" stroke="#f43f5e" strokeWidth="2.4" fill="#f43f5e" fillOpacity="0.4" />
        </svg>
      </div>

      {/* 5. LOWER RIGHT: Iconic Chundan Vallam (Snake Boat / Vallamkali) - Actively Gliding & Surging Across Water */}
      <div className="absolute bottom-[10%] right-0 sm:right-6 text-sky-400 animate-kerala-boat-surge opacity-75">
        <svg
          width="520"
          height="250"
          viewBox="0 0 460 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-kerala-neon-glow"
          style={{ filter: 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.55))' }}
        >
          {/* Majestic High Stern (Amaram) rising 15+ ft skyward */}
          <path
            d="M 10 145 C 120 152 240 142 340 105 C 385 88 420 52 415 15 C 408 -2 396 22 375 52 C 335 98 220 125 10 135"
            stroke="#38bdf8"
            strokeWidth="3.4"
            strokeLinecap="round"
          />

          {/* Gold Inlay Trim on Hull */}
          <path
            d="M 30 140 C 130 145 230 135 320 105 C 360 90 395 60 395 35"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeDasharray="5 4"
          />

          {/* Dynamic Diagonal Oarsmen Rhythms (Thanduvallamkali) */}
          <line x1="70" y1="144" x2="50" y2="182" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="110" y1="142" x2="90" y2="180" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="150" y1="139" x2="130" y2="177" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="190" y1="134" x2="170" y2="172" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="230" y1="126" x2="210" y2="164" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="270" y1="115" x2="250" y2="153" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="310" y1="102" x2="290" y2="140" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />

          {/* Oar Blades Splashing */}
          <circle cx="48" cy="184" r="3.8" fill="#38bdf8" />
          <circle cx="88" cy="182" r="3.8" fill="#38bdf8" />
          <circle cx="128" cy="179" r="3.8" fill="#38bdf8" />
          <circle cx="168" cy="174" r="3.8" fill="#38bdf8" />
          <circle cx="208" cy="166" r="3.8" fill="#38bdf8" />

          {/* Backwater Spray Wake */}
          <path
            d="M 5 155 Q 120 162 250 148 Q 360 132 440 100"
            stroke="#06b6d4"
            strokeWidth="2.4"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      {/* 6. LOWER LEFT: Chenda Drum (Kerala Melam Rhythm Motif) - Pulsing with Festival Melam */}
      <div className="absolute bottom-[16%] left-4 sm:left-12 text-indigo-400 animate-kerala-chenda hidden sm:block opacity-70">
        <svg
          width="210"
          height="230"
          viewBox="0 0 160 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-kerala-neon-glow"
          style={{ filter: 'drop-shadow(0 0 12px rgba(129, 140, 248, 0.55))' }}
        >
          {/* Top Drum Head (Kani) */}
          <ellipse cx="80" cy="35" rx="42" ry="12" stroke="#818cf8" strokeWidth="2.6" fill="#818cf8" fillOpacity="0.3" />
          <circle cx="80" cy="35" r="14" stroke="#c084fc" strokeWidth="1.8" strokeDasharray="3 3" />

          {/* Wooden Drum Body (Koodu) */}
          <path d="M 38 35 L 42 135" stroke="#818cf8" strokeWidth="2.4" />
          <path d="M 122 35 L 118 135" stroke="#818cf8" strokeWidth="2.4" />

          {/* Tension Ropes (Varalu) in zigzag festival pattern */}
          <path
            d="M 42 38 L 80 135 L 118 38"
            stroke="#a5b4fc"
            strokeWidth="2"
          />
          <path
            d="M 40 135 L 80 38 L 120 135"
            stroke="#a5b4fc"
            strokeWidth="2"
          />

          {/* Bottom Drum Head */}
          <ellipse cx="80" cy="135" rx="40" ry="12" stroke="#818cf8" strokeWidth="2.6" fill="#818cf8" fillOpacity="0.3" />

          {/* Chenda Stick (Kolu) with graceful strike curve */}
          <path
            d="M 25 15 Q 60 18 78 32"
            stroke="#fbbf24"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 7. BOTTOM HORIZON: Undulating Backwater & Arabian Sea Waves - Active Rolling Wave Motion */}
      <div className="absolute -bottom-2 inset-x-0 text-cyan-400 animate-kerala-water-roll opacity-70">
        <svg
          width="100%"
          height="140"
          viewBox="0 0 1200 130"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 0 12px rgba(6, 182, 212, 0.55))' }}
        >
          <path
            d="M 0 55 C 150 35 300 75 450 55 C 600 35 750 75 900 55 C 1050 35 1150 65 1200 55"
            stroke="#06b6d4"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M 0 78 C 180 62 320 92 500 78 C 680 62 820 92 1000 78 C 1120 68 1180 88 1200 78"
            stroke="#38bdf8"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 0 102 C 120 90 260 115 420 102 C 580 90 740 115 920 102 C 1060 92 1160 110 1200 102"
            stroke="#0284c7"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default KeralaBackground;
