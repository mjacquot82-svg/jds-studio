import React from 'react';
import { processSteps } from '../data/siteContent.js';
export default function About() {
  return <section id="about" className="section section-shell about-section">
    <div className="about-layout"><div><p className="eyebrow">The person behind JDS</p><h2>A small studio.<br />A direct connection.</h2><p className="location">Built by Marc Jacquot<br />in Walkerton, Ontario.</p></div>
      <div className="about-copy"><p className="lead">When you work with JDS,<br />you work directly with me.</p><p>I’m Marc. I build websites and software around the people who use them. You can tell me what’s going on in plain language — you don’t need to translate it into a technical brief.</p><p>I don’t believe businesses should have to change the way they work to fit software. I’d rather understand your day-to-day work and find an approach that fits.</p><a className="text-link" href="#contact">Let’s work out what would help <span aria-hidden="true">↗</span></a></div>
    </div>
    <div className="process-heading"><p className="eyebrow">How we get there</p><h2>Understand the problem<br />before building the solution.</h2></div>
    <ol className="process-list">{processSteps.map((step, i) => <li key={step.title}><span className="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
  </section>;
}
