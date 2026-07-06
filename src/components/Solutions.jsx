import React from 'react';
import SectionHeader from './SectionHeader.jsx';

const eventCapabilities = [
  'Event schedules',
  'Vendor directories',
  'Interactive maps',
  'Live updates',
  'Mobile-friendly attendee experiences',
];

const homeComingAppUrl =
  import.meta.env.VITE_HOME_COMING_APP_URL || 'https://walkertonhomecoming.netlify.app/homecoming';
const homeComingPreviewUrl = import.meta.env.VITE_HOME_COMING_PREVIEW_URL || homeComingAppUrl;

function Solutions() {
  return (
    <section id="solutions" className="section section-shell event-app-section">
      <div className="event-app-layout reveal">
        <div className="event-app-copy">
          <SectionHeader eyebrow="Event Applications" title="Apps Built For Events">
            Jacquot Digital Solutions also develops custom event applications for organizers who
            need clear, mobile-friendly ways to share information with attendees.
          </SectionHeader>
          <p>
            Home Coming is a mobile-first event app built for community celebrations, helping
            attendees find schedules, local details, maps, and updates from one clear source while
            reducing organizer workload, repeat questions, and scattered event communication.
          </p>
          <a
            className="button button-primary"
            href={homeComingAppUrl}
            target="_blank"
            rel="noreferrer"
          >
            Launch Full App
          </a>
        </div>
        <div className="event-app-panel" aria-label="Home Coming event application showcase">
          <div className="event-app-preview">
            <div className="event-app-device project-device-stage">
              <div className="project-phone-shell" aria-hidden="true">
                <span></span>
                <span></span>
              </div>
              <div className="project-phone project-phone-primary">
                <div className="project-phone-frame">
                  <span className="project-phone-camera"></span>
                  <div className="project-phone-screen">
                    <iframe
                      src={homeComingPreviewUrl}
                      title="Home Coming live mobile event app"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="project-app-caption">
                <strong>Live Home Coming experience</strong>
                <span>The phone renders the production event app inside the device frame.</span>
              </div>
            </div>
            <div className="event-capability-list">
              {eventCapabilities.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
