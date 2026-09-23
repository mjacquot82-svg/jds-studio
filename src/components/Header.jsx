import React from 'react';
import { navItems } from '../data/siteContent.js';
export function Brand() {
  return <><span className="lettermark">JDS<span aria-hidden="true">.</span></span><span className="brand-name">Jacquot<br />Digital Solutions</span></>;
}
export default function Header() {
  return <header className="site-header section-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <a className="brand" href="/#home" aria-label="Jacquot Digital Solutions home"><Brand /></a>
    <nav className="nav-links" aria-label="Main menu">{navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <a className="button button-primary nav-cta" href="#contact">Let’s Talk <span aria-hidden="true">↗</span></a>
  </header>;
}
