import React from 'react';

export default function ProjectCard({ project, anchor = false }) {
  return <article id={anchor ? 'featured-project' : undefined} className="project-card portfolio-project">
    <div className={`project-art portfolio-art ${project.id}-art`}>
      {project.heroLogo ? <div className="ipm-production-hero">
        <img className="ipm-hero-field" src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} loading="lazy" />
        <img className="ipm-hero-logo" src={project.heroLogo} alt="IPM 2026 International Plowing Match & Rural Expo, Bruce County" width="600" height="600" loading="lazy" />
      </div> : <img src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} loading="lazy" />}
      <span className="image-caption">{project.imageCaption}</span>
    </div>
    <div className="project-body">
      <p className="eyebrow">{project.category}</p>
      <span className={`project-status project-status--${project.statusType}`}>{project.status}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <details id={`project-${project.id}`}>
        <summary>See the Project <span className="sr-only">: {project.title}</span><span aria-hidden="true">↗</span></summary>
        <div className="case-study">
          <h4>Project status — {project.status}</h4><p>{project.statusDescription}</p>
          <h4>The situation</h4><p>{project.situation}</p>
          <h4>What I built</h4><p>{project.built}</p>
          <h4>Useful capabilities</h4><ul>{project.capabilities.map(item => <li key={item}>{item}</li>)}</ul>
          <h4>What it enables</h4><p>{project.enables}</p>
          <h4>Project imagery</h4><p className="case-note">{project.mediaNote}</p>
          {project.image && <a className="text-link" href={project.image} target="_blank" rel="noreferrer">{project.id === 'ipm-2026' ? 'View the original hero background' : 'View the full screenshot'}<span className="sr-only"> (opens in a new tab)</span><span aria-hidden="true">↗</span></a>}
          <a className="case-permalink" href={`#project-${project.id}`}>Link to this project</a>
        </div>
      </details>
      {project.id === 'ipm-2026' && <p>On your phone, go to <strong>theipm.ca</strong> to view the app.</p>}
      {project.liveUrl && <a className="text-link project-live-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.liveLabel || 'Visit Live App'} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
    </div>
  </article>;
}
