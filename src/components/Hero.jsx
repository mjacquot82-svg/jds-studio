import React from 'react';

const proofItems = ['Built Around Your Workflow', 'Local Support', 'Modern Technology'];

function PanelHeader({ title, meta }) {
  return (
    <div className="hero-panel-header">
      <div className="hero-window-controls" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>{title}</p>
      <strong>{meta}</strong>
    </div>
  );
}

function DashboardPanel() {
  return (
    <article className="hero-panel hero-panel-dashboard" aria-label="Business dashboard interface">
      <PanelHeader title="Operations Dashboard" meta="Live" />
      <div className="hero-dashboard-grid">
        <div>
          <span>Open Workflows</span>
          <strong>42</strong>
          <small>+8 this week</small>
        </div>
        <div>
          <span>Portal Requests</span>
          <strong>18</strong>
          <small>92% on time</small>
        </div>
        <div>
          <span>Revenue Tracked</span>
          <strong>$84k</strong>
          <small>Synced today</small>
        </div>
      </div>
      <div className="hero-dashboard-main">
        <div className="hero-line-chart" aria-hidden="true">
          <svg viewBox="0 0 480 168" focusable="false">
            <path d="M12 126 C54 98 74 116 112 76 C150 36 174 92 214 60 C250 32 280 48 316 34 C360 16 386 40 422 20 C446 8 462 14 472 4" />
          </svg>
        </div>
        <div className="hero-status-list">
          <span>Quote approval</span>
          <span>Order update</span>
          <span>Customer follow-up</span>
        </div>
      </div>
    </article>
  );
}

function CustomerPortalPanel() {
  return (
    <article className="hero-panel hero-panel-portal" aria-label="Customer portal interface">
      <PanelHeader title="Customer Portal" meta="Secure" />
      <div className="hero-portal-card">
        <strong>Jacquot Client Portal</strong>
        <span>Documents, approvals, and payments in one place.</span>
      </div>
      <div className="hero-check-list">
        <span>Quote approved</span>
        <span>Files received</span>
        <span>Invoice ready</span>
      </div>
    </article>
  );
}

function CustomerUpdatesPanel() {
  return (
    <article className="hero-panel hero-panel-updates" aria-label="Customer updates interface">
      <PanelHeader title="Customer Updates" meta="Today" />
      <div className="hero-schedule-board" aria-hidden="true">
        <span>9:00</span>
        <strong>Order Received</strong>
        <span>11:30</span>
        <strong>Proof Sent</strong>
        <span>2:00</span>
        <strong>Customer Reply</strong>
      </div>
    </article>
  );
}

function OrderFlowPanel() {
  return (
    <article className="hero-panel hero-panel-order-flow" aria-label="Order workflow interface">
      <PanelHeader title="Order Flow" meta="On track" />
      <div className="hero-progress-stack">
        <span style={{ '--progress': '82%' }}>Intake</span>
        <span style={{ '--progress': '64%' }}>Review</span>
        <span style={{ '--progress': '48%' }}>Follow-up</span>
      </div>
    </article>
  );
}

function AnalyticsPanel() {
  return (
    <article className="hero-panel hero-panel-analytics" aria-label="Analytics interface">
      <PanelHeader title="Analytics" meta="+18%" />
      <div className="hero-analytics-content">
        <div className="hero-analytics-ring" aria-hidden="true"></div>
        <div>
          <strong>91%</strong>
          <span>Workflow visibility</span>
        </div>
      </div>
    </article>
  );
}

function MobilePanel() {
  return (
    <article className="hero-phone" aria-label="Mobile app interface">
      <div className="hero-phone-speaker" aria-hidden="true"></div>
      <span>Mobile App</span>
      <strong>Field updates</strong>
      <div className="hero-phone-action">Check in</div>
      <div className="hero-phone-grid" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </article>
  );
}

function SoftwareComposition() {
  return (
    <div className="hero-software-stage">
      <DashboardPanel />
      <CustomerPortalPanel />
      <CustomerUpdatesPanel />
      <OrderFlowPanel />
      <AnalyticsPanel />
      <MobilePanel />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell hero-premium">
      <div className="hero-copy reveal">
        <h1>Software Designed Around Your Workflow</h1>
        <p className="hero-subtitle">
          Stop adapting your business to generic software.
          <br />
          <br />
          Jacquot Digital Solutions builds custom software, customer portals, websites, and
          business systems designed specifically around the way your business already works.
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
        <SoftwareComposition />
      </div>
    </section>
  );
}

export default Hero;
