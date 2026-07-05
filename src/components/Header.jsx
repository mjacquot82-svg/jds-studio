import { navItems } from '../data/siteContent.js';

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Jacquot Digital Solutions home">
        <span className="brand-mark" aria-hidden="true">JDS</span>
        <span className="brand-name">Jacquot Digital Solutions</span>
      </a>
      <nav className="nav-links" aria-label="Main menu">
        {navItems.map((item) => (
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
