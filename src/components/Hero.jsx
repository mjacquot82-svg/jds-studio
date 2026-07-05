function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy reveal">
        <p className="eyebrow">Custom software for small businesses</p>
        <h1>Custom Software Built Around Your Business</h1>
        <p className="hero-subtitle">
          Every business works differently. JDS Studio designs custom software, websites,
          portals, and mobile apps that are built specifically around the way your business
          operates.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#contact">
            Book a Consultation
          </a>
          <a className="button button-secondary" href="#featured-project">
            View Our Work
          </a>
        </div>
      </div>
      <div className="hero-visual reveal reveal-delay" aria-label="Software workflow interface preview">
        <picture>
          <source srcSet="/assets/business-software-hero.webp" type="image/webp" />
          <img
            src="/assets/business-software-hero.png"
            alt="Custom business software dashboards showing workflows, orders, schedules, and operational panels"
            width="1717"
            height="916"
            fetchPriority="high"
          />
        </picture>
      </div>
    </section>
  );
}

export default Hero;
