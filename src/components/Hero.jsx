import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy reveal">
        <p className="eyebrow">Jacquot Digital Solutions</p>
        <h1>Software Designed Around Your Workflow</h1>
        <p className="hero-subtitle">
          Every business has its own way of operating.
          <br />
          <br />
          Stop adapting your business to generic software. Jacquot Digital Solutions designs
          custom software, customer portals, websites and mobile applications that are built
          specifically around the way your business works.
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
          <li>Built Around Your Workflow</li>
          <li>Local Support</li>
          <li>Modern Technology</li>
        </ul>
      </div>
      <div className="hero-visual reveal reveal-delay" aria-label="Custom software interface panels">
        <div className="interface-stage">
          <article className="software-panel panel-dashboard">
            <div className="panel-topline">
              <span>Dashboard</span>
              <strong>Live</strong>
            </div>
            <div className="metric-row">
              <div>
                <span>Orders</span>
                <strong>128</strong>
              </div>
              <div>
                <span>Active Jobs</span>
                <strong>42</strong>
              </div>
            </div>
            <div className="chart-bars" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>

          <article className="software-panel panel-portal">
            <div className="panel-topline">
              <span>Customer Portal</span>
              <strong>Secure</strong>
            </div>
            <div className="portal-list">
              <span>Quote approved</span>
              <span>Files uploaded</span>
              <span>Payment pending</span>
            </div>
          </article>

          <article className="software-panel panel-schedule">
            <div className="panel-topline">
              <span>Scheduling</span>
              <strong>Today</strong>
            </div>
            <div className="schedule-grid" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>

          <article className="software-panel panel-invoices">
            <div className="panel-topline">
              <span>Invoices</span>
              <strong>Synced</strong>
            </div>
            <div className="invoice-line">
              <span>Deposit</span>
              <strong>$1,240</strong>
            </div>
          </article>

          <article className="software-panel panel-mobile">
            <div className="mobile-notch" aria-hidden="true"></div>
            <span>Mobile App</span>
            <strong>Field updates</strong>
          </article>

          <article className="software-panel panel-analytics">
            <div className="panel-topline">
              <span>Analytics</span>
              <strong>+18%</strong>
            </div>
            <div className="analytics-ring" aria-hidden="true"></div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Hero;
