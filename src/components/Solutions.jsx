import React from 'react';
import SectionHeader from './SectionHeader.jsx';

const problemCards = [
  {
    title: 'Production Management',
    problem:
      'Jobs slow down when production status, assignments, approvals, and deadlines are scattered.',
    solution:
      'A custom production system gives your team one clear place to manage work, track status, and keep jobs moving.',
  },
  {
    title: 'Scheduling',
    problem:
      'Scheduling becomes unreliable when availability, staff capacity, locations, and customer requests are managed separately.',
    solution:
      'A custom scheduling system can match bookings to real constraints and give your team a dependable view of upcoming work.',
  },
  {
    title: 'Customer Portals',
    problem:
      'Customers often need updates, documents, approvals, and payment options outside regular business hours.',
    solution:
      'A secure portal lets customers take action on their own while reducing phone calls and manual follow-up for your team.',
  },
  {
    title: 'Business Dashboards',
    problem:
      'Owners need clear answers without digging through disconnected reports, exports, and outdated spreadsheets.',
    solution:
      'Dashboards surface sales, workload, customer activity, production status, and key signals in a format built for decisions.',
  },
  {
    title: 'Inventory',
    problem:
      'Inventory issues often appear too late, after a job is already delayed or a customer is already waiting.',
    solution:
      'Integrated workflow tools can connect inventory levels, job requirements, purchasing, and status tracking before problems compound.',
  },
  {
    title: 'Automation',
    problem:
      'Repetitive admin work, status updates, notifications, approvals, handoffs, and documents consume valuable time.',
    solution:
      'Automation moves routine tasks through the right steps so your team can spend more time on the work that matters.',
  },
];

function Solutions() {
  return (
    <section id="solutions" className="section section-shell solutions-section">
      <SectionHeader
        eyebrow="Solutions"
        title="Problems We Solve"
      >
        Custom software helps when important work is slowed down by disconnected tools,
        repeated tasks, and information that is hard to find.
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
