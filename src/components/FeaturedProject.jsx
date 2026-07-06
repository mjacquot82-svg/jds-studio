import React from 'react';

const projectFeatures = [
  'Upload their own photos',
  'Choose magnet shapes and sizes',
  'Crop and preview images',
  'Place orders online',
  'Track their orders',
];

const productionAppUrl = import.meta.env.VITE_FRIDGE_APP_URL || 'https://itsonthefridge.appthat.ca';

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
          <a
            className="button button-primary"
            href={productionAppUrl || '#featured-project'}
            target={productionAppUrl ? '_blank' : undefined}
            rel={productionAppUrl ? 'noreferrer' : undefined}
          >
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
                {productionAppUrl ? (
                  <iframe
                    src={productionAppUrl}
                    title="It's On The Fridge production mobile home screen"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="project-phone-unavailable">
                    <strong>Production app URL required</strong>
                    <span>Set VITE_FRIDGE_APP_URL to render the live mobile homepage here.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="project-scroll-hint" aria-hidden="true">
            <span></span>
            Scroll to explore
          </div>
          <div className="project-app-caption">
            <strong>Live mobile app experience</strong>
            <span>The phone renders the production mobile homepage inside the device frame.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
