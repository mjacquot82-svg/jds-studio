import React from 'react';

const projectFeatures = [
  'Upload their own photos',
  'Choose magnet shapes and sizes',
  'Crop and preview images',
  'Place orders online',
  'Track their orders',
];

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
        <div className="project-device-stage" aria-label="It's On The Fridge application screenshots">
          <div className="project-phone-shell" aria-hidden="true">
            <span></span>
            <span></span>
          </div>
          <div className="project-phone project-phone-primary">
            <div className="project-phone-frame">
              <span className="project-phone-camera"></span>
              <img
                src="/assets/untitled.png"
                alt="It's On The Fridge mobile app home screen"
                width="696"
                height="889"
              />
            </div>
          </div>
          <div className="project-app-caption">
            <strong>Real application home screen</strong>
            <span>Customers can start an order, review pricing, and choose how they want to create their magnet.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
