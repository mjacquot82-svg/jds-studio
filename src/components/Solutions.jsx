import React from 'react';
import SectionHeader from './SectionHeader.jsx';

const eventCapabilities = [
  'Event schedules',
  'Vendor directories',
  'Interactive maps',
  'Live updates',
  'Mobile-friendly attendee experiences',
];

function Solutions() {
  return (
    <section id="solutions" className="section section-shell event-app-section">
      <div className="event-app-layout reveal">
        <SectionHeader eyebrow="Event Applications" title="Apps Built For Events">
          Jacquot Digital Solutions also develops custom event applications for organizers who
          need clear, mobile-friendly ways to share information with attendees.
        </SectionHeader>
        <div className="event-app-panel" aria-label="Event app capabilities">
          <div className="event-capability-list">
            {eventCapabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
