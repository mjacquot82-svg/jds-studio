import SectionHeader from './SectionHeader.jsx';
import { processSteps } from '../data/siteContent.js';

function About() {
  return (
    <section id="about" className="section section-shell about-section">
      <div className="about-layout">
        <div className="about-copy reveal">
          <SectionHeader eyebrow="About" title="Built by Marc Jacquot in Walkerton, Ontario">
            JDS Studio is the software practice of Marc Jacquot, operating as Jacquot Digital
            Solutions. The studio focuses on building software around a business instead of
            forcing the business to change how it works.
          </SectionHeader>
          <p>
            That means understanding the real workflow first: how customers arrive, how work
            is approved, how teams communicate, how orders move, and where manual steps slow
            the business down. The result is software that fits the operation and gives owners
            clearer control.
          </p>
        </div>
        <div className="process-list reveal reveal-delay" aria-label="JDS Studio process">
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
