import React from 'react';

const proofItems = ['Built Around Your Workflow', 'Local Support', 'Modern Technology'];

function WindowHeader({ title, status }) {
  return (
    <div className="hero-window-header">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>{title}</p>
      <strong>{status}</strong>
    </div>
  );
}

function DashboardWindow() {
  return (
    <article className="hero-window hero-window-dashboard" aria-label="Dashboard software window">
      <WindowHeader title="Dashboard" status="Live" />
      <div className="hero-metric-grid">
        <div>
          <span>Revenue</span>
          <strong>$24.5k</strong>
          <small>+12%</small>
        </div>
        <div>
          <span>Orders</span>
          <strong>128</strong>
          <small>+15%</small>
        </div>
        <div>
          <span>Customers</span>
          <strong>312</strong>
          <small>+18%</small>
        </div>
      </div>
      <div className="hero-chart" aria-hidden="true">
        <svg viewBox="0 0 420 150">
          <path d="M10 118 C48 92 64 104 96 76 C127 48 150 88 184 60 C218 32 243 62 270 40 C304 14 330 38 358 22 C382 10 398 14 410 4" />
        </svg>
      </div>
    </article>
  );
}

function PortalWindow() {
  return (
    <article className="hero-window hero-window-portal" aria-label="Customer portal software window">
      <WindowHeader title="Customer Portal" status="Secure" />
      <div className="hero-portal-list">
        <span>Quote approved</span>
        <span>Files received</span>
        <span>Payment requested</span>
      </div>
    </article>
  );
}

function SchedulingWindow() {
  return (
    <article className="hero-window hero-window-scheduling" aria-label="Scheduling software window">
      <WindowHeader title="Scheduling" status="Today" />
      <div className="hero-schedule-grid" aria-hidden="true">
        <span>Install</span>
        <span>Review</span>
        <span>Delivery</span>
        <span>Follow-up</span>
      </div>
    </article>
  );
}

function ProductionWindow() {
  return (
    <article className="hero-window hero-window-production" aria-label="Production workflow software window">
      <WindowHeader title="Production" status="On track" />
      <div className="hero-progress-list">
        <span style={{ '--progress': '74%' }}>Intake</span>
        <span style={{ '--progress': '58%' }}>Design</span>
        <span style={{ '--progress': '86%' }}>Build</span>
      </div>
    </article>
  );
}

function AnalyticsWindow() {
  return (
    <article className="hero-window hero-window-analytics" aria-label="Analytics software window">
      <WindowHeader title="Analytics" status="+18%" />
      <div className="hero-analytics-ring" aria-hidden="true"></div>
    </article>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell hero-premium">
      <div className="hero-copy reveal">
        <p className="eyebrow">Custom software. Real solutions.</p>
        <h1>Software Designed Around Your Workflow</h1>
        <p className="hero-subtitle">
          Every business has its own way of operating.
          <br />
          <br />
          Stop adapting your business to generic software. Jacquot Digital Solutions builds
          custom software designed around the way your business already works.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#contact">
            Book a Consultation
          </a>
          <a className="button button-secondary" href="#solutions">
            Explore Solutions
          </a>
        </div>
        <ul className="hero-proof" aria-label="Jacquot Digital Solutions strengths">
          {proofItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="hero-visual reveal reveal-delay" aria-label="Layered custom software interface previews">
        <div className="hero-software-stage">
          <DashboardWindow />
          <PortalWindow />
          <SchedulingWindow />
          <ProductionWindow />
          <AnalyticsWindow />
        </div>
      </div>
    </section>
  );
}

export default Hero;
