import React from 'react';
export default function Solutions() {
  return <article className="project-card additional-project">
    <div className="project-art event-art">
      <span className="art-label">Community, with a little less guesswork.</span>
      <div className="event-paper"><span className="eyebrow">A community event companion</span><strong>Home<br />Coming<span>↗</span></strong><div className="event-topics"><span>01 / Find what’s on</span><span>02 / Find your way</span><span>03 / Stay up to date</span></div></div>
      <span className="image-caption">Project overview illustration · not an app screenshot</span>
    </div>
    <div className="project-body"><p className="eyebrow">Community events · Mobile web</p><span className="project-status project-status--completed">Completed event</span><h3>Walkerton Homecoming</h3><p>Built and used for Walkerton Homecoming. The event has now concluded.</p>
      <details id="project-walkerton-homecoming"><summary>See the Project <span className="sr-only">: Walkerton Homecoming</span><span aria-hidden="true">↗</span></summary><div className="case-study">
        <h4>Project status — Completed event</h4><p>The app was built and used for the event, which has now taken place and concluded. This case study preserves the work and the experience it supported.</p>
        <h4>The problem</h4><p>Attendees needed to know what was happening, where to go and where to find event updates.</p>
        <h4>What I built</h4><p>A mobile-first event application with schedules, local information, maps and updates, designed for community celebrations.</p>
        <h4>Useful capabilities</h4><ul><li>Event schedules</li><li>Local information and maps</li><li>Event updates</li></ul>
        <h4>What it enabled</h4><p>Attendees had one place to look for event details, and organizers had a way to share schedules, maps and updates during the celebration.</p>
        <p className="case-note">The illustration summarizes the project. A verified app screenshot can be added when available.</p>
        <a className="case-permalink" href="#project-walkerton-homecoming">Link to this project</a>
      </div></details>
    </div>
  </article>;
}
