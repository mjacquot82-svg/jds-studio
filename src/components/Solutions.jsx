import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import { solutions } from '../data/siteContent.js';

function Solutions() {
  return (
    <section id="solutions" className="section section-shell solutions-section">
      <SectionHeader
        eyebrow="Solutions"
        title="Built around the problems that slow businesses down"
      >
        The right system starts by understanding where work gets delayed, where customers wait,
        and where information falls through the cracks.
      </SectionHeader>
      <div className="solution-list">
        {solutions.map((solution) => (
          <article className="solution-item reveal" key={solution.title}>
            <div>
              <h3>{solution.title}</h3>
            </div>
            <div className="solution-copy">
              <p>
                <strong>Problem:</strong> {solution.problem}
              </p>
              <p>
                <strong>Software approach:</strong> {solution.solution}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Solutions;
