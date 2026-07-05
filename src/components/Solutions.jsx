import SectionHeader from './SectionHeader.jsx';
import { solutions } from '../data/siteContent.js';

function Solutions() {
  return (
    <section id="solutions" className="section section-shell solutions-section">
      <SectionHeader
        eyebrow="Solutions"
        title="Business problems first, technology second"
      >
        The right software starts by understanding where time is lost, where customers wait,
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
