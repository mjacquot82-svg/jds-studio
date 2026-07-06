import React from 'react';

const projectFeatures = [
  'Upload their own photos',
  'Choose magnet shapes and sizes',
  'Crop and preview images',
  'Place orders online',
  'Track their orders',
];

const readyMadeDesigns = ['Family', 'Pets', 'Sports', 'Events'];

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

function FeaturedProject() {
  return (
    <section id="featured-project" className="section section-shell project-section">
      <div className="project-showcase reveal">
        <div className="project-copy">
          <p className="eyebrow">Featured Project</p>
          <h2>It&apos;s On The Fridge</h2>
          <p className="project-subtitle">Custom fridge magnets made simple.</p>
          <p>
            Customers can upload their own photos, choose magnet shapes and sizes, crop and
            preview images, place orders online, and track their orders through an intuitive
            Progressive Web App.
          </p>
          <ul className="project-feature-list" aria-label="It's On The Fridge features">
            {projectFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <a className="button button-primary" href="#contact">
            Explore the App
          </a>
        </div>
        <div className="project-device-stage" aria-label="Interactive It's On The Fridge application preview">
          <div className="project-phone-shell" aria-hidden="true">
            <span></span>
            <span></span>
          </div>
          <div className="project-phone project-phone-primary">
            <div className="project-phone-frame">
              <span className="project-phone-camera"></span>
              <div className="project-phone-screen">
                <MobileAppPreview />
              </div>
            </div>
          </div>
          <div className="project-scroll-hint" aria-hidden="true">
            <span></span>
            Scroll to explore
          </div>
          <div className="project-app-caption">
            <strong>Interactive app experience</strong>
            <span>Visitors can scroll inside the phone to explore the ordering flow.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
