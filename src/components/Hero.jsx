import React from 'react';

const orders = [
  ['#1048', 'Custom Magnet Set', '$125.00', 'New'],
  ['#1047', 'Rectangle Magnet', '$85.00', 'In Progress'],
  ['#1046', 'Round Magnet', '$45.00', 'Completed'],
  ['#1045', 'Custom Magnet Set', '$60.00', 'New'],
];

const scheduleBlocks = [
  ['Production', '9:00 AM'],
  ['Team Meeting', '11:00 AM'],
  ['Design Review', '2:00 PM'],
  ['Delivery', '3:00 PM'],
];

function OrdersPanel() {
  return (
    <article className="device-panel orders-device" aria-label="Orders interface preview">
      <div className="panel-title-row">
        <h2>Orders</h2>
        <span>Live</span>
      </div>
      <div className="order-tabs" aria-hidden="true">
        <span>All</span>
        <span>New</span>
        <span>In Progress</span>
        <span>Completed</span>
      </div>
      <div className="order-list">
        {orders.map(([id, item, price, status]) => (
          <div className="order-row" key={id}>
            <strong>{id}</strong>
            <span>{item}</span>
            <span>{price}</span>
            <em>{status}</em>
          </div>
        ))}
      </div>
    </article>
  );
}

function DashboardPanel() {
  return (
    <article className="device-panel dashboard-device" aria-label="Dashboard interface preview">
      <div className="dashboard-shell">
        <aside className="dashboard-sidebar" aria-hidden="true">
          <strong>JDS</strong>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </aside>
        <div className="dashboard-content">
          <div className="panel-title-row">
            <h2>Dashboard</h2>
            <span>Updated</span>
          </div>
          <div className="dashboard-metrics">
            <div>
              <span>Revenue</span>
              <strong>$24,560</strong>
              <small>+12% vs last month</small>
            </div>
            <div>
              <span>Orders</span>
              <strong>128</strong>
              <small>+15% vs last month</small>
            </div>
            <div>
              <span>Customers</span>
              <strong>312</strong>
              <small>+18% vs last month</small>
            </div>
          </div>
          <div className="dashboard-lower">
            <div className="chart-card">
              <span>Revenue Overview</span>
              <svg viewBox="0 0 260 106" role="img" aria-label="Upward revenue chart">
                <polyline points="4,82 28,70 50,76 72,54 96,64 118,42 143,52 168,34 194,45 220,20 256,12" />
              </svg>
            </div>
            <div className="recent-card">
              <span>Recent Orders</span>
              <strong>#1048 <em>Paid</em></strong>
              <strong>#1047 <em>Paid</em></strong>
              <strong>#1046 <em>Processing</em></strong>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function PhonePanel() {
  return (
    <article className="phone-device" aria-label="Mobile app interface preview">
      <div className="phone-speaker" aria-hidden="true"></div>
      <span>It&apos;s On The Fridge</span>
      <strong>Create. Preview. Order.</strong>
      <button type="button">Start Your Order</button>
      <div className="phone-gallery" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="phone-nav" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </article>
  );
}

function SchedulePanel() {
  return (
    <article className="device-panel schedule-device" aria-label="Scheduling interface preview">
      <div className="panel-title-row">
        <h2>Schedule</h2>
        <span>Week</span>
      </div>
      <div className="schedule-days" aria-hidden="true">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
      </div>
      <div className="schedule-board">
        {scheduleBlocks.map(([label, time]) => (
          <div key={`${label}-${time}`}>
            <strong>{label}</strong>
            <span>{time}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy reveal">
        <p className="eyebrow">Custom software. Real solutions.</p>
        <h1>Software Designed Around Your Workflow</h1>
        <p className="hero-subtitle">
          Every business has its own way of operating.
          <br />
          <br />
          Stop adapting your business to generic software. Jacquot Digital Solutions designs
          custom software, customer portals, websites and mobile applications built specifically
          around the way your business works.
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
      <div className="hero-visual reveal reveal-delay" aria-label="Layered custom software interface previews">
        <div className="interface-stage">
          <DashboardPanel />
          <OrdersPanel />
          <PhonePanel />
          <SchedulePanel />
        </div>
      </div>
    </section>
  );
}

export default Hero;
