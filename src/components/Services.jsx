import React from 'react';
import SectionHeader from './SectionHeader.jsx';

const educationCards = [
  {
    title: 'Generic Software',
    copy: 'One-size-fits-all software often forces businesses to change established processes.',
  },
  {
    title: 'Your Workflow',
    copy: (
      <>
        Every business operates differently.
        <br />
        <br />
        Understanding your workflow comes first.
      </>
    ),
  },
  {
    title: 'Custom Solution',
    copy: 'Software designed specifically around your business—not the other way around.',
  },
  {
    title: 'The Result',
    copy: (
      <>
        Less manual work.
        <br />
        <br />
        Fewer errors.
        <br />
        <br />
        More time to focus on your business.
      </>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="section section-shell education-section">
      <SectionHeader
        eyebrow="Why custom software"
        title="Every Business Is Different."
      >
        Generic software forces businesses to adapt.
        <br />
        <br />
        We build software around the way your business already works.
      </SectionHeader>
      <div className="education-grid">
        {educationCards.map((card, index) => (
          <article className="education-card reveal" key={card.title}>
            <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
