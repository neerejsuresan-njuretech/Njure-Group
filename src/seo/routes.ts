export interface RouteSeoConfig {
  /** Normalized route key without trailing slash (except '/') */
  path: string;
  /** Canonical full URL on njuregroup.in */
  canonicalUrl: string;
  /** Output directory relative to dist/ ('' for root index.html) */
  outputDir: string;
  /** Page <title> (30-60 chars ideal) */
  title: string;
  /** Meta description (120-160 chars ideal) */
  description: string;
  /** OpenGraph / Twitter title */
  ogTitle: string;
  /** Page-specific Schema.org JSON-LD graph */
  jsonLd: Record<string, unknown>;
  /** Semantic HTML injected into #root during static build for instant crawler indexing */
  staticHtml: string;
}

export const SITE_ORIGIN = 'https://njuregroup.in';

const SHARED_NAV_HTML = `
  <header>
    <nav aria-label="Primary Navigation">
      <a href="/">Njure Group</a>
      <a href="/about/">About Us</a>
      <a href="/verticals/">Our Verticals</a>
      <a href="/vision/">Vision &amp; Impact</a>
      <a href="/careers/">Careers</a>
      <a href="/contact/">Contact</a>
    </nav>
  </header>
`;

const SHARED_FOOTER_HTML = `
  <footer>
    <p>Njure Group — Vattoli Bazar, Balussery, Kozhikode, Kerala 673612, India</p>
    <p>Email: <a href="mailto:info@njuregroup.in">info@njuregroup.in</a> | Phone: <a href="tel:+918281877050">+91 8281877050</a></p>
    <nav aria-label="Footer Directory">
      <a href="/">Home</a> |
      <a href="/about/">About Us</a> |
      <a href="/verticals/">Operating Verticals</a> |
      <a href="/vision/">Vision &amp; ESG</a> |
      <a href="/careers/">Careers</a> |
      <a href="/contact/">Contact</a>
    </nav>
  </footer>
`;

export const SEO_ROUTES: RouteSeoConfig[] = [
  {
    path: '/',
    canonicalUrl: `${SITE_ORIGIN}/`,
    outputDir: '',
    title: 'Njure Group – Enterprise Tech, Handloom & Clean Mobility',
    description:
      'Explore Njure Group in Kozhikode, Kerala: enterprise ITSM & Voice AI (Njure Tech), handloom heritage (Vastrathalam), Dozo hyperlocal trade, and B+ Energies.',
    ogTitle: 'Njure Group – Enterprise Tech, Handloom & Clean Mobility',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_ORIGIN}/#webpage`,
      url: `${SITE_ORIGIN}/`,
      name: 'Njure Group – Enterprise Tech, Handloom & Clean Mobility',
      description:
        'Corporate portal of Njure Group — a diversified enterprise ecosystem headquartered in Kozhikode, Kerala across enterprise software, handloom heritage, hyperlocal trade, and clean hybrid mobility.',
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      about: { '@id': `${SITE_ORIGIN}/#corporation` },
      inLanguage: 'en-IN',
    },
    staticHtml: `
      <div style="background:#07192f;color:#f1f5f9;min-height:100vh;padding:24px;font-family:system-ui,sans-serif;">
        ${SHARED_NAV_HTML}
        <main>
          <h1>Njure Group — The Blueprint for a Bolder World</h1>
          <p>Njure Group is a diversified enterprise ecosystem headquartered in Vattoli Bazar, Balussery, Kozhikode, Kerala, driving human-centered innovation across four operating divisions: Njure Tech, Vastrathalam, Dozo, and B+ Energies.</p>
          <section>
            <h2>Our Four Operating Divisions</h2>
            <ul>
              <li><strong>Njure Tech</strong> (<a href="https://tech.njuregroup.in">tech.njuregroup.in</a>): Enterprise ITSM automation via ScribbleIT, low-latency multilingual Voice AI, and zero-trust cloud infrastructure.</li>
              <li><strong>Vastrathalam</strong> (<a href="https://vastrathalam.njuregroup.in">vastrathalam.njuregroup.in</a>): Authentic Kerala Kasavu handloom sarees woven in partnership with Balaramapuram, Chendamangalam, and Kuthampully weaver cooperatives.</li>
              <li><strong>Dozo</strong>: Hyperlocal community service and trade marketplace ensuring local electricians, plumbers, and technicians retain over 92% of their earnings.</li>
              <li><strong>B+ Energies</strong>: Clean mobility engineering developing indigenous parallel hybrid motorcycle powertrains to reduce daily fuel costs by 45–60%.</li>
            </ul>
          </section>
          <section>
            <h2>Explore Njure Group</h2>
            <ul>
              <li><a href="/about/">About Njure Group &amp; Kerala Roots</a></li>
              <li><a href="/verticals/">Detailed Operating Divisions &amp; Architecture</a></li>
              <li><a href="/vision/">Our Vision, Ethics &amp; ESG Charter</a></li>
              <li><a href="/careers/">Open Roles &amp; Careers at Njure Group</a></li>
              <li><a href="/contact/">Contact Corporate Desk &amp; Partnerships</a></li>
            </ul>
          </section>
        </main>
        ${SHARED_FOOTER_HTML}
      </div>
    `,
  },
  {
    path: '/about',
    canonicalUrl: `${SITE_ORIGIN}/about/`,
    outputDir: 'about',
    title: 'About Us – Njure Group Kerala Roots & Leadership',
    description:
      'Discover Njure Group’s story from Balussery, Kozhikode in Kerala, our founding ethos of human dignity, cultural stewardship, and enterprise leadership.',
    ogTitle: 'About Us – Njure Group Kerala Roots & Leadership',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${SITE_ORIGIN}/about/#webpage`,
          url: `${SITE_ORIGIN}/about/`,
          name: 'About Us – Njure Group Kerala Roots & Leadership',
          description:
            'Discover Njure Group’s story from Balussery, Kozhikode in Kerala, our founding ethos of human dignity, cultural stewardship, and enterprise leadership.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          mainEntity: { '@id': `${SITE_ORIGIN}/#corporation` },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_ORIGIN}/about/` },
          ],
        },
      ],
    },
    staticHtml: `
      <div style="background:#07192f;color:#f1f5f9;min-height:100vh;padding:24px;font-family:system-ui,sans-serif;">
        ${SHARED_NAV_HTML}
        <main>
          <h1>About Njure Group — Rooted in Kerala, Built for the World</h1>
          <p>Headquartered in Vattoli Bazar, Balussery, Kozhikode, Kerala, Njure Group was founded by Neeraj Suresan on a clear conviction: enterprise technology and modern commerce must uplift human dignity, empower artisans, and protect working families.</p>
          <section>
            <h2>Our Heritage &amp; Philosophy</h2>
            <p>Inspired by Kerala’s enduring craft traditions and global engineering ambition, Njure Group bridges enterprise software, handloom weaving heritage, fair-pay hyperlocal commerce, and clean hybrid mobility under one ethical umbrella.</p>
          </section>
          <p><a href="/verticals/">Explore Our Operating Verticals</a> | <a href="/vision/">Read Our Vision &amp; ESG Charter</a></p>
        </main>
        ${SHARED_FOOTER_HTML}
      </div>
    `,
  },
  {
    path: '/verticals',
    canonicalUrl: `${SITE_ORIGIN}/verticals/`,
    outputDir: 'verticals',
    title: 'Operating Verticals – Njure Tech, Vastrathalam, Dozo, B+',
    description:
      'Explore Njure Group’s four divisions: Njure Tech (ScribbleIT ITSM & Voice AI), Vastrathalam Kasavu handlooms, Dozo hyperlocal trade, and B+ Energies.',
    ogTitle: 'Operating Verticals – Njure Tech, Vastrathalam, Dozo, B+',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `${SITE_ORIGIN}/verticals/#webpage`,
          url: `${SITE_ORIGIN}/verticals/`,
          name: 'Operating Verticals – Njure Tech, Vastrathalam, Dozo, B+',
          description:
            'Explore Njure Group’s four divisions: Njure Tech (ScribbleIT ITSM & Voice AI), Vastrathalam Kasavu handlooms, Dozo hyperlocal trade, and B+ Energies.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          about: { '@id': `${SITE_ORIGIN}/#corporation` },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Operating Verticals', item: `${SITE_ORIGIN}/verticals/` },
          ],
        },
      ],
    },
    staticHtml: `
      <div style="background:#07192f;color:#f1f5f9;min-height:100vh;padding:24px;font-family:system-ui,sans-serif;">
        ${SHARED_NAV_HTML}
        <main>
          <h1>Operating Divisions &amp; Verticals — Njure Group</h1>
          <section>
            <h2>Njure Tech — Enterprise Technology &amp; Voice AI</h2>
            <p>Architecting ScribbleIT IT Service Management (ITSM), sub-300ms multilingual Voice AI engines, and sovereign zero-trust cloud systems. Visit <a href="https://tech.njuregroup.in">tech.njuregroup.in</a>.</p>
          </section>
          <section>
            <h2>Vastrathalam — Kerala Handloom Heritage</h2>
            <p>Direct fair-trade partnerships with master weaver cooperatives in Balaramapuram, Chendamangalam, and Kuthampully for certified authentic Kasavu sarees. Visit <a href="https://vastrathalam.njuregroup.in">vastrathalam.njuregroup.in</a>.</p>
          </section>
          <section>
            <h2>Dozo — Dignified Hyperlocal Marketplace</h2>
            <p>Connecting households with verified local electricians, plumbers, and neighborhood technicians who retain over 92% of service earnings with rapid escrow payouts.</p>
          </section>
          <section>
            <h2>B+ Energies — Clean Hybrid Mobility R&amp;D</h2>
            <p>Developing indigenous parallel hybrid two-wheeler powertrains engineered to cut daily commuting fuel costs by 45–60% without range anxiety.</p>
          </section>
        </main>
        ${SHARED_FOOTER_HTML}
      </div>
    `,
  },
  {
    path: '/vision',
    canonicalUrl: `${SITE_ORIGIN}/vision/`,
    outputDir: 'vision',
    title: 'Vision, Ethics & ESG Charter – Njure Group',
    description:
      'Read Njure Group’s Ethical Governance Charter, fair-wage commitments for Kerala handloom weavers, gig worker dignity standards, and green mobility roadmap.',
    ogTitle: 'Vision, Ethics & ESG Charter – Njure Group',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/vision/#webpage`,
          url: `${SITE_ORIGIN}/vision/`,
          name: 'Vision, Ethics & ESG Charter – Njure Group',
          description:
            'Read Njure Group’s Ethical Governance Charter, fair-wage commitments for Kerala handloom weavers, gig worker dignity standards, and green mobility roadmap.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          about: { '@id': `${SITE_ORIGIN}/#corporation` },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Vision & Impact', item: `${SITE_ORIGIN}/vision/` },
          ],
        },
      ],
    },
    staticHtml: `
      <div style="background:#07192f;color:#f1f5f9;min-height:100vh;padding:24px;font-family:system-ui,sans-serif;">
        ${SHARED_NAV_HTML}
        <main>
          <h1>Vision, Human Philosophy &amp; ESG Charter — Njure Group</h1>
          <p>Njure Group commits to transparent governance, direct artisan prosperity, fair earnings retention for gig partners, and practical clean-mobility engineering built for long-term multi-generational impact.</p>
          <section>
            <h2>Core Pillars of Our Governance Charter</h2>
            <ul>
              <li>Direct-to-artisan margins for Kerala’s heritage handloom weaving families.</li>
              <li>Over 92% earnings retention and transparent algorithmic fairness for Dozo service partners.</li>
              <li>Accessible fuel-saving hybrid mobility engineering via B+ Energies.</li>
              <li>Privacy-first, zero-trust enterprise architecture at Njure Tech.</li>
            </ul>
          </section>
          <p><a href="/contact/">Connect With Our Governance Desk</a></p>
        </main>
        ${SHARED_FOOTER_HTML}
      </div>
    `,
  },
  {
    path: '/careers',
    canonicalUrl: `${SITE_ORIGIN}/careers/`,
    outputDir: 'careers',
    title: 'Careers & Open Roles – Join Njure Group Kerala',
    description:
      'Apply for open roles at Njure Group in Kozhikode, Kerala across software engineering, textile merchandising, hyperlocal operations, and hybrid mobility R&D.',
    ogTitle: 'Careers & Open Roles – Join Njure Group Kerala',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/careers/#webpage`,
          url: `${SITE_ORIGIN}/careers/`,
          name: 'Careers & Open Roles – Join Njure Group Kerala',
          description:
            'Apply for open roles at Njure Group in Kozhikode, Kerala across software engineering, textile merchandising, hyperlocal operations, and hybrid mobility R&D.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          about: { '@id': `${SITE_ORIGIN}/#corporation` },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Careers', item: `${SITE_ORIGIN}/careers/` },
          ],
        },
        {
          '@type': 'ItemList',
          name: 'Open Roles at Njure Group',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'JobPosting',
                title: 'Full-Stack Software Engineer (Njure Tech)',
                description:
                  'Architect next-generation ITSM orchestration modules for ScribbleIT, low-latency conversational voice AI pipelines, and enterprise-grade distributed systems.',
                employmentType: 'FULL_TIME',
                hiringOrganization: { '@id': `${SITE_ORIGIN}/#corporation` },
                jobLocation: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Kozhikode',
                    addressRegion: 'Kerala',
                    postalCode: '673612',
                    addressCountry: 'IN',
                  },
                },
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'JobPosting',
                title: 'Artisan Sourcing & Textile Merchandiser (Vastrathalam)',
                description:
                  'Work directly with Kerala handloom weaver cooperatives, certify authentic Kasavu zari thread counts, and curate seasonal bridal and heritage collections.',
                employmentType: 'FULL_TIME',
                hiringOrganization: { '@id': `${SITE_ORIGIN}/#corporation` },
                jobLocation: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Kozhikode',
                    addressRegion: 'Kerala',
                    postalCode: '673612',
                    addressCountry: 'IN',
                  },
                },
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'JobPosting',
                title: 'Hyperlocal Operations & Community Lead (Dozo)',
                description:
                  'Onboard and empower verified neighborhood electricians, plumbers, and local merchants across Malabar, ensuring fair-pay compliance and community trust.',
                employmentType: 'FULL_TIME',
                hiringOrganization: { '@id': `${SITE_ORIGIN}/#corporation` },
                jobLocation: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Kozhikode',
                    addressRegion: 'Kerala',
                    postalCode: '673612',
                    addressCountry: 'IN',
                  },
                },
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@type': 'JobPosting',
                title: 'Powertrain & Battery Systems Prototype Engineer (B+ Energies)',
                description:
                  'Research, design, and bench-test parallel hybrid two-wheeler motor couplings and thermal-safe battery management systems calibrated for tropical conditions.',
                employmentType: 'FULL_TIME',
                hiringOrganization: { '@id': `${SITE_ORIGIN}/#corporation` },
                jobLocation: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Kozhikode',
                    addressRegion: 'Kerala',
                    postalCode: '673612',
                    addressCountry: 'IN',
                  },
                },
              },
            },
          ],
        },
      ],
    },
    staticHtml: `
      <div style="background:#07192f;color:#f1f5f9;min-height:100vh;padding:24px;font-family:system-ui,sans-serif;">
        ${SHARED_NAV_HTML}
        <main>
          <h1>Careers &amp; Open Roles at Njure Group</h1>
          <p>Build meaningful enterprise software, preserve Kerala’s handloom heritage, empower hyperlocal communities, and engineer clean hybrid mobility from our Kozhikode, Kerala headquarters.</p>
          <section>
            <h2>Current Openings</h2>
            <ul>
              <li><strong>Full-Stack Software Engineer — Njure Tech</strong> (Kozhikode, Kerala · Hybrid · Full-time)</li>
              <li><strong>Artisan Sourcing &amp; Textile Merchandiser — Vastrathalam</strong> (Kozhikode / Trivandrum Belt · Full-time)</li>
              <li><strong>Hyperlocal Operations &amp; Community Lead — Dozo</strong> (Kozhikode Regional Hub · Full-time)</li>
              <li><strong>Powertrain &amp; Battery Systems Prototype Engineer — B+ Energies</strong> (Kozhikode Engineering Lab · Full-time)</li>
            </ul>
            <p>Submit applications directly to <a href="mailto:info@njuregroup.in?cc=neerej.suresan.s@gmail.com">info@njuregroup.in</a>.</p>
          </section>
        </main>
        ${SHARED_FOOTER_HTML}
      </div>
    `,
  },
  {
    path: '/contact',
    canonicalUrl: `${SITE_ORIGIN}/contact/`,
    outputDir: 'contact',
    title: 'Contact Njure Group – Kozhikode Corporate Desk',
    description:
      'Contact Njure Group in Vattoli Bazar, Balussery, Kozhikode, Kerala for enterprise partnerships, ITSM pilots, press, or investments at info@njuregroup.in.',
    ogTitle: 'Contact Njure Group – Kozhikode Corporate Desk',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': `${SITE_ORIGIN}/contact/#webpage`,
          url: `${SITE_ORIGIN}/contact/`,
          name: 'Contact Njure Group – Kozhikode Corporate Desk',
          description:
            'Contact Njure Group in Vattoli Bazar, Balussery, Kozhikode, Kerala for enterprise partnerships, ITSM pilots, press, or investments at info@njuregroup.in.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          mainEntity: { '@id': `${SITE_ORIGIN}/#corporation` },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_ORIGIN}/contact/` },
          ],
        },
      ],
    },
    staticHtml: `
      <div style="background:#07192f;color:#f1f5f9;min-height:100vh;padding:24px;font-family:system-ui,sans-serif;">
        ${SHARED_NAV_HTML}
        <main>
          <h1>Contact Njure Group Corporate Desk</h1>
          <p>Reach our executive desk for strategic partnerships, Njure Tech ITSM and Voice AI pilots, Vastrathalam heritage collaborations, investor dialogues, and press inquiries.</p>
          <address>
            <p><strong>Corporate Headquarters:</strong> Vattoli Bazar, Balussery, Kozhikode, Kerala — PIN 673612, India</p>
            <p><strong>Corporate Email:</strong> <a href="mailto:info@njuregroup.in">info@njuregroup.in</a></p>
            <p><strong>Direct Hotline:</strong> <a href="tel:+918281877050">+91 8281877050</a></p>
          </address>
        </main>
        ${SHARED_FOOTER_HTML}
      </div>
    `,
  },
];

export function normalizeRoutePath(pathname: string): string {
  const cleaned = pathname.replace(/\/+$/, '').toLowerCase();
  return cleaned === '' ? '/' : cleaned;
}

export function getRouteSeo(pathname: string): RouteSeoConfig {
  const normalized = normalizeRoutePath(pathname);
  return SEO_ROUTES.find((route) => route.path === normalized) || SEO_ROUTES[0];
}
