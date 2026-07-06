import React from 'react';
import SectionHeader from './SectionHeader.jsx';

const improvementCards = [
  {
    title: 'Customer Portals',
    copy: 'Give customers a secure place to submit information, review progress, and stay connected.',
  },
  {
    title: 'Workflow Automation',
    copy: 'Reduce repetitive manual work with software designed around your existing workflow.',
  },
  {
    title: 'Online Ordering',
    copy: 'Create simple ordering experiences that help customers place orders with less back-and-forth.',
  },
  {
    title: 'Business Visibility',
    copy: 'Give business owners a clearer view of daily activity through dashboards and reporting.',
  },
  {
    title: 'Progressive Web Apps',
    copy: 'Build mobile-friendly web apps that customers can use easily from their phones.',
  },
  {
    title: 'Custom Business Software',
    copy: 'Create practical business tools around the way your team and customers already work.',
  },
];

function Services() {
  return (
    <section id="services" className="section section-shell education-section">
      <SectionHeader
        eyebrow="Business improvement"
        title="What Can We Help You Improve?"
      >
        Jacquot Digital Solutions builds practical tools around real business workflows,
        customer experiences, and order processes.
      </SectionHeader>
      <div className="education-grid">
        {improvementCards.map((card, index) => (
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
