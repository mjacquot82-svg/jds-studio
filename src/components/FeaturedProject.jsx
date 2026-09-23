import React, { useEffect } from 'react';
import Solutions from './Solutions.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects, developmentProjects } from '../data/portfolio.js';

export default function FeaturedProject() {
  useEffect(() => {
    const revealCaseStudy = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (!target?.matches('details')) return;
      target.open = true;
      let parent = target.parentElement?.closest('details');
      while (parent) {
        parent.open = true;
        parent = parent.parentElement?.closest('details');
      }
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
    };
    revealCaseStudy();
    window.addEventListener('hashchange', revealCaseStudy);
    return () => window.removeEventListener('hashchange', revealCaseStudy);
  }, []);

  return <section id="work" className="section section-shell work-section">
    <div className="work-heading">
      <div><p className="eyebrow">A few practical examples</p><h2>Things I’ve Built<span className="accent">.</span></h2></div>
      <p>Different businesses. Real problems.<br />Practical solutions.</p>
    </div>
    <div className="project-grid primary-project-grid">
      {projects.map((project, index) => <ProjectCard key={project.id} project={project} anchor={index === 0} />)}
    </div>
    <section className="development-work" aria-labelledby="development-heading">
      <p className="eyebrow">Work in progress</p>
      <h3 id="development-heading">In Development</h3>
      <div className="project-grid development-grid">
        {developmentProjects.map(project => <article className="project-card development-card" key={project.id}>
          <div className="project-body">
            <p className="eyebrow">{project.category}</p>
            <span className="project-status project-status--development">In Development</span>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        </article>)}
      </div>
    </section>
    <details id="solutions" className="additional-work">
      <summary><span>More work <span className="more-work-name">/ Completed work · Walkerton Homecoming</span></span><span aria-hidden="true">+</span></summary>
      <Solutions />
    </details>
  </section>;
}
