import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRouteSeo } from '../seo/routes';

function upsertMeta(selector: string, attrName: 'name' | 'property', attrValue: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function RouteSEO() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // Gracefully upgrade legacy HashRouter URLs (e.g. /#/about -> /about/)
  useEffect(() => {
    if (hash && hash.startsWith('#/')) {
      const target = hash.slice(1).replace(/\/+$/, '');
      navigate(target ? `${target}/` : '/', { replace: true });
    }
  }, [hash, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const meta = getRouteSeo(pathname);

    document.title = meta.title;

    // Update meta description
    upsertMeta('meta[name="description"]', 'name', 'description', meta.description);

    // Update canonical link tag dynamically for every route
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', meta.canonicalUrl);

    // Update OpenGraph metadata
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', meta.ogTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', meta.canonicalUrl);

    // Update Twitter Card metadata
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
    upsertMeta('meta[name="twitter:url"]', 'name', 'twitter:url', meta.canonicalUrl);

    // Sync route-specific JSON-LD structured data
    let routeJsonLd = document.getElementById('route-jsonld') as HTMLScriptElement | null;
    if (!routeJsonLd) {
      routeJsonLd = document.createElement('script');
      routeJsonLd.id = 'route-jsonld';
      routeJsonLd.type = 'application/ld+json';
      document.head.appendChild(routeJsonLd);
    }
    routeJsonLd.textContent = JSON.stringify(meta.jsonLd);
  }, [pathname]);

  return null;
}
