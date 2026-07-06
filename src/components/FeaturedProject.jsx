import React from 'react';

const projectFeatures = [
  'Upload photos',
  'Live preview',
  'Multiple magnet styles',
  'Secure online ordering',
  'Mobile friendly',
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
            Customers can upload photos, crop images, customize magnets, and order online
            through an intuitive Progressive Web App.
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
          <div className="project-phone project-phone-primary">
            <img
              src="/assets/Untitled.png"
              alt="It's On The Fridge mobile app home screen"
              width="696"
              height="889"
            />
          </div>
          <div className="project-screen-card project-screen-card-wide">
            <img
              src="/assets/mockup.png"
              alt="It's On The Fridge project interface showcase"
              width="1536"
              height="1024"
            />
          </div>
          <div className="project-screen-card project-screen-card-small">
            <img
              src="/assets/Untitled.png"
              alt="It's On The Fridge ordering options screen"
              width="696"
              height="889"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
