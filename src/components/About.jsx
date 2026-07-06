import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import { processSteps } from '../data/siteContent.js';

function About() {
  return (
    <section id="about" className="section section-shell about-section">
      <div className="about-layout">
        <div className="about-copy reveal">
          <SectionHeader eyebrow="About Marc" title="Built by Marc Jacquot in Walkerton, Ontario">
            I don&apos;t believe businesses should have to change the way they work to fit
            software.
          </SectionHeader>
          <p>
            I believe software should be designed around the way businesses already work. Every
            business is different. That&apos;s why I take the time to understand your workflow
            before building a solution.
          </p>
        </div>
        <div className="process-column reveal reveal-delay">
          <div className="process-column-header">
            <p className="eyebrow">Our Process</p>
            <h2>Understand the problem before building the solution.</h2>
          </div>
          <div className="process-list" aria-label="Jacquot Digital Solutions process">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-step">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
