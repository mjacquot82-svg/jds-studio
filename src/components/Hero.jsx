import React from 'react';

const heroFeatures = [
  'Mobile-first experience',
  'Upload your own photos',
  'Ready-made designs',
  'Local family business',
  'Fast ordering',
];

const readyMadeDesigns = [
  'Family',
  'Pets',
  'Sports',
  'Events',
];

function MobileAppPreview() {
  return (
    <div className="app-preview" aria-label="Interactive It's On The Fridge mobile ordering preview">
      <section className="app-hero">
        <div className="app-fridge-mark" aria-hidden="true">
          <span></span>
          <span></span>
        </div>
        <p>It&apos;s On The</p>
        <h2>Fridge!</h2>
        <strong>Magnets</strong>
      </section>

      <section className="app-intro-card">
        <p>Custom fridge magnets for photos, teams, businesses, events, and more.</p>
        <span>Custom magnets made locally by the Jacquot family.</span>
      </section>

      <section className="app-price-grid" aria-label="Magnet options">
        <button type="button">
          <span>Round Magnet</span>
          <strong>$5.00</strong>
        </button>
        <button type="button">
          <span>Rectangle Magnet</span>
          <strong>$5.00</strong>
        </button>
      </section>

      <section className="app-offer-card">
        <span aria-hidden="true">%</span>
        <div>
          <strong>Special Offer</strong>
          <p>3 for $12 | 5 for $18 | 10 for $35 | Orders over 25 - $3 each</p>
        </div>
      </section>

      <section className="app-action-list" aria-label="Ordering actions">
        <button type="button">
          <strong>Create Your Own Magnet</strong>
          <span>Upload your own photo</span>
        </button>
        <button type="button">
          <strong>Shop Ready-Made Designs</strong>
          <span>Browse pre-made magnet designs</span>
        </button>
      </section>

      <section className="app-upload-card">
        <div className="app-upload-icon" aria-hidden="true"></div>
        <strong>Upload and crop your photo</strong>
        <p>Preview the magnet before placing your order.</p>
      </section>

      <section className="app-designs">
        <div className="app-section-heading">
          <strong>Ready-made designs</strong>
          <span>Browse styles</span>
        </div>
        <div className="app-design-grid">
          {readyMadeDesigns.map((design) => (
            <button type="button" key={design}>
              <span></span>
              <strong>{design}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="app-order-card">
        <div>
          <strong>Order summary</strong>
          <span>2 custom magnets</span>
        </div>
        <button type="button">Place order</button>
      </section>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell hero-premium">
      <div className="hero-phone-column reveal" aria-label="Scrollable mobile app preview">
        <div className="hero-phone-shell">
          <div className="hero-phone-frame">
            <span className="hero-phone-camera"></span>
            <div className="hero-phone-screen">
              <MobileAppPreview />
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          <span></span>
          Scroll to explore
        </div>
      </div>

      <div className="hero-copy reveal reveal-delay">
        <p className="eyebrow">Mobile ordering experience</p>
        <h1>See Exactly What Your Customers Will Experience</h1>
        <p className="hero-subtitle">
          Customers can browse magnet options, upload their own photos, customize their order,
          and place everything directly from their phone.
        </p>
        <ul className="hero-feature-list" aria-label="It's On The Fridge app features">
          {heroFeatures.map((feature) => (
            <li key={feature}>
              <span aria-hidden="true">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#featured-project">
            Create Your Magnet
          </a>
          <a className="button button-secondary" href="#featured-project">
            Browse Designs
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
