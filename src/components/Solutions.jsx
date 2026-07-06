import React from 'react';
import SectionHeader from './SectionHeader.jsx';

const problemCards = [
  {
    title: 'Customers Need Updates',
    problem:
      'Customers often call or message because they are not sure what is happening next.',
    solution:
      'Customer portals, notifications, and clear status updates can help customers stay informed without extra back-and-forth.',
  },
  {
    title: 'Orders Are Hard to Manage',
    problem:
      'Orders can become difficult to follow when details arrive through emails, messages, forms, and phone calls.',
    solution:
      'A focused order workflow can collect the right details upfront and make each order easier to review and manage.',
  },
  {
    title: 'Manual Work Takes Too Much Time',
    problem:
      'Repetitive admin tasks take time away from serving customers and running the business.',
    solution:
      'Workflow automation can reduce repeated steps while keeping your existing way of working intact.',
  },
  {
    title: 'Business Information Is Scattered',
    problem:
      'Important information is harder to use when it is spread across different tools, files, and conversations.',
    solution:
      'Dashboards and reporting can give business owners a clearer view of daily activity and key decisions.',
  },
  {
    title: 'Customers Want Convenience',
    problem:
      'Customers expect simple ways to submit information, place orders, and check progress online.',
    solution:
      'Online ordering and self-service tools can make the customer experience easier while reducing manual follow-up.',
  },
  {
    title: 'Your Current Tools Do Not Fit',
    problem:
      'Generic software can force your team to work around the tool instead of supporting the way your business already runs.',
    solution:
      'Custom software can be shaped around your workflow so the system supports the business instead of getting in the way.',
  },
];

function Solutions() {
  return (
    <section id="solutions" className="section section-shell solutions-section">
      <SectionHeader
        eyebrow="Solutions"
        title="Problems We Solve"
      >
        Jacquot Digital Solutions looks for the business problem first, then explores whether
        custom software can make the work simpler, clearer, or easier to manage.
      </SectionHeader>
      <div className="problem-card-list">
        {problemCards.map((card) => (
          <article className="problem-card reveal" key={card.title}>
            <div className="problem-card-title">
              <h3>{card.title}</h3>
            </div>
            <div className="problem-solution-flow">
              <div>
                <strong>Problem</strong>
                <p>{card.problem}</p>
              </div>
              <span aria-hidden="true">↓</span>
              <div>
                <strong>Solution</strong>
                <p>{card.solution}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Solutions;
