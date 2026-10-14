import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteMeta {
  title: string;
  description: string;
}

const ROUTE_SEO_MAP: Record<string, RouteMeta> = {
  '/': {
    title: 'Njure Group — Enterprise Technology, Handloom Heritage & Clean Mobility',
    description:
      'Corporate portal of Njure Group — a diversified enterprise ecosystem driving next-generation innovation across enterprise technology, handloom heritage apparel, hyperlocal marketplaces, and sustainable mobility.',
  },
  '/about': {
    title: 'About Us | Njure Group — Kerala Roots & Enterprise Ambition',
    description:
      'Learn about Njure Group’s origins in Kozhikode, our leadership philosophy, cultural preservation, and our conviction that technology must uplift human dignity.',
  },
  '/verticals': {
    title: 'Operating Divisions | Njure Tech, Vastrathalam, Dozo, B+ Energies',
    description:
      'Explore Njure Group’s 4 core operating divisions: Njure Tech (ITSM & Voice AI), Vastrathalam (Authentic Handloom Kasavu), Dozo (Hyperlocal Trade), and B+ Energies (Clean Hybrid Mobility).',
  },
  '/vision': {
    title: 'Our Vision & ESG Charter | Njure Group',
    description:
      'Read Njure Group’s Ethical Governance Charter, worker economic guarantees for Kerala weavers, gig partner dignity protections, and our long-term generational roadmap.',
  },
  '/careers': {
    title: 'Careers & Open Roles | Njure Group',
    description:
      'Join our multidisciplinary team at Njure Group. Explore high-impact roles in engineering, artisan operations, and leadership. Direct applications route to info@njuregroup.in.',
  },
  '/contact': {
    title: 'Contact Corporate Desk | Njure Group',
    description:
      'Initiate corporate dialogue with Njure Group. Reach our executive office in Vattoli Bazar, Balussery, Kozhikode, Kerala at info@njuregroup.in or call +91 8281877050.',
  },
};

export function RouteSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top upon route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Dynamic SEO Title & Description matching
    const normalizedPath = pathname.toLowerCase();
    const meta = ROUTE_SEO_MAP[normalizedPath] || ROUTE_SEO_MAP['/'];

    document.title = meta.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // Update OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    // Update OpenGraph URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      const canonicalRoute = normalizedPath === '/' ? 'https://njuregroup.in/' : `https://njuregroup.in/#${normalizedPath}`;
      ogUrl.setAttribute('content', canonicalRoute);
    }
  }, [pathname]);

  return null;
}
