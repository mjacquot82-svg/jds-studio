import React from 'react';
import { Brand } from './Header.jsx';
export default function Footer() {
  return <footer className="site-footer section-shell"><a className="brand" href="/#home" aria-label="Jacquot Digital Solutions home"><Brand /></a><p>Built by Marc in Walkerton, Ontario.<br /><span>© 2026 Jacquot Digital Solutions</span></p><nav aria-label="Footer"><a href="/privacy">Privacy</a><a href="/eula">Terms of use</a><a href="/#contact">Let’s Talk ↗</a></nav></footer>;
}
