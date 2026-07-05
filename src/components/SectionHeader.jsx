import React from 'react';

function SectionHeader({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'section-header--center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export default SectionHeader;
