import React from 'react';
import SectionHeader from './SectionHeader.jsx';

const improvementCards = [
  {
    title: 'Customer Communication',
    copy: 'Help customers stay informed with portals, notifications, and self-service tools.',
  },
  {
    title: 'Order Management',
    copy: 'Simplify the way orders are submitted, tracked, and managed.',
  },
  {
    title: 'Workflow Automation',
    copy: 'Reduce repetitive manual work with software designed around your existing workflow.',
  },
  {
    title: 'Business Visibility',
    copy: 'Give business owners a clearer view of daily operations through dashboards and reporting.',
  },
  {
    title: 'Online Ordering',
    copy: 'Create simple online ordering experiences that improve customer convenience.',
  },
  {
    title: 'Customer Portals',
    copy: 'Provide secure spaces where customers can submit information, review progress, and stay connected.',
  },
];

function Services() {
  return (
    <section id="services" className="section section-shell education-section">
      <SectionHeader
        eyebrow="Business improvement"
        title="What Can We Help You Improve?"
      >
        Custom software is useful when it solves a real business problem. The goal is to
        make daily work clearer, simpler, and easier to manage.
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
