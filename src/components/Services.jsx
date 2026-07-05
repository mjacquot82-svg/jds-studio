import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import { services } from '../data/siteContent.js';

function Services() {
  return (
    <section id="services" className="section section-shell">
      <SectionHeader
        eyebrow="Services"
        title="Software services for smarter small businesses"
      >
        From customer-facing portals to internal management systems, Jacquot Digital Solutions
        builds practical software that saves time and supports the way your business already works.
      </SectionHeader>
      <div className="card-grid service-grid">
        {services.map((service, index) => (
          <article className="service-card reveal" key={service.title}>
            <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
