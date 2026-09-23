import React from 'react';
export default function Hero() {
  return <section id="home" className="hero section-shell">
    <div className="hero-copy">
      <p className="eyebrow"><span className="small-dot" /> A small studio in Walkerton, Ontario</p>
      <h1>Have a problem in your business that <em>software might solve?</em></h1>
      <p className="hero-intro">I’m Marc. I build practical websites and custom software for businesses and organizations.</p>
      <p>Most projects start with something that’s taking too much time, creating headaches, or simply not working very well. We figure out whether there’s a better way.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#contact">Start a Conversation <span aria-hidden="true">↗</span></a>
        <a className="text-link" href="#work">See What I’ve Built <span aria-hidden="true">↓</span></a>
      </div>
    </div>
    <aside className="personal-card" aria-label="Meet Marc Jacquot">
      <img className="marc-portrait" src="/assets/marc-jacquot.webp" alt="Marc Jacquot with a companion in the mountains" width="1200" height="900" fetchPriority="high" />
      <div className="personal-card-caption"><div><strong>Marc Jacquot</strong><span>Your point of contact. And your developer.</span></div><span className="signature" aria-hidden="true">Hello!</span></div>
    </aside>
    <div className="hero-footnote"><span>Websites & custom software</span><span>Small studio. Direct conversation. Practical ideas.</span></div>
  </section>;
}
