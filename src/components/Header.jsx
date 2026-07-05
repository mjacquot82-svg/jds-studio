import React from 'react';

const heroNavItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#about' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Jacquot Digital Solutions home">
        <img
          className="brand-logo"
          src="/JDSlogo.png"
          alt="Jacquot Digital Solutions"
          width="1536"
          height="1024"
        />
        <span className="brand-tagline">Custom Software. Real Solutions.</span>
      </a>
      <nav className="nav-links" aria-label="Main menu">
        {heroNavItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        Book a Consultation
      </a>
    </header>
  );
}

export default Header;
