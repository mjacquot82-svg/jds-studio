import SectionHeader from './SectionHeader.jsx';
import { processSteps } from '../data/siteContent.js';

function About() {
  return (
    <section id="about" className="section section-shell about-section">
      <div className="about-layout">
        <div className="about-copy reveal">
          <SectionHeader eyebrow="About" title="Built by Marc Jacquot in Walkerton, Ontario">
            Jacquot Digital Solutions is owned by Marc Jacquot and focused on custom software
            for small businesses that need systems built around the way they actually operate.
          </SectionHeader>
          <p>
            Every business is unique. Off-the-shelf software often forces teams to change their
            workflow to fit the tool. Jacquot Digital Solutions starts with the client&apos;s existing
            process, then designs software around the workflow, customers, staff, approvals, and
            decisions that already drive the business.
          </p>
        </div>
        <div className="process-list reveal reveal-delay" aria-label="Jacquot Digital Solutions process">
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
    </section>
  );
}

export default About;
