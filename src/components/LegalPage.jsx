import React, { useEffect } from 'react';
import Footer from './Footer.jsx';

const legalNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'EULA', href: '/eula' },
];

function LegalPage({ title, description, path, children }) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = descriptionMeta?.getAttribute('content');
    const previousCanonical = canonical?.getAttribute('href');

    document.title = `${title} | Jacquot Digital Solutions`;
    descriptionMeta?.setAttribute('content', description);
    canonical?.setAttribute('href', `https://jdsstudio.ca${path}`);

    return () => {
      document.title = previousTitle;
      if (previousDescription) descriptionMeta?.setAttribute('content', previousDescription);
      if (previousCanonical) canonical?.setAttribute('href', previousCanonical);
    };
  }, [description, path, title]);

  return (
    <div className="legal-page">
      <header className="legal-header">
        <a className="legal-brand" href="/" aria-label="Jacquot Digital Solutions home">
          <img
            src="/assets/jdsbanner.png"
            alt="Jacquot Digital Solutions"
            width="1536"
            height="1024"
          />
        </a>
        <nav className="legal-nav" aria-label="Legal page navigation">
          {legalNavItems.map((item) => (
            <a key={item.href} href={item.href} aria-current={path === item.href ? 'page' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta legal-contact-link" href="/#contact">
          Contact Us
        </a>
      </header>

      <main id="main-content" className="legal-main">
        <article className="legal-article">
          <header className="legal-title">
            <p className="eyebrow">Jacquot Digital Solutions</p>
            <h1>{title}</h1>
            <p className="legal-effective-date">
              <strong>Effective date:</strong> July 31, 2026
            </p>
          </header>
          <div className="legal-content">{children}</div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default LegalPage;
