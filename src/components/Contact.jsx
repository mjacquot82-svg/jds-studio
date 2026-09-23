import React, { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
function Contact() {
  const [formStatus, setFormStatus] = useState('idle');
  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setFormStatus('submitting');
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }
      form.reset();
      setFormStatus('success');
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
  };
  return <section id="contact" className="section section-shell contact-section">
      <div className="contact-layout">
        <div className="contact-copy reveal">
          <SectionHeader eyebrow="Let's talk" title="Have something you’ve been wondering if technology could fix?">
            Tell me about it. You don&apos;t need a technical explanation or a project plan.
          </SectionHeader>
          <div className="contact-details" aria-label="Business details">
            <p>
              <strong>Jacquot Digital Solutions</strong>
              <span>You’ll hear directly from Marc.</span>
            </p>
            <p>
              <strong>Location</strong>
              <span>Walkerton, Ontario, Canada</span>
            </p>
            <p>
              <strong>Prefer email?</strong>
              <a href="mailto:contact@jdsstudio.ca">contact@jdsstudio.ca</a>
            </p>
          </div>
        </div>
        <form className="contact-form reveal reveal-delay" name="consultation" method="post" action="/.netlify/functions/contact" data-netlify="true" data-netlify-honeypot="bot-field" aria-label="Start a conversation with Marc" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="consultation" />
          <p className="hidden-field">
            <label htmlFor="bot-field">Leave this field empty</label>
            <input id="bot-field" name="bot-field" tabIndex="-1" autoComplete="off" />
          </p>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <input type="hidden" name="business" value="" />
          <div className="form-row">
            <label htmlFor="project">What’s going on?</label>
            <textarea id="project" name="project" rows="6" required></textarea>
          </div>
          {formStatus === 'success' && <p className="form-message form-message-success" role="status">
              Thanks for reaching out. Your message has been sent to Marc.
            </p>}
          {formStatus === 'error' && <p className="form-message form-message-error" role="alert">
              Your message couldn’t be sent. Please try again or email <a href="mailto:contact@jdsstudio.ca">contact@jdsstudio.ca</a>.
            </p>}
          <button className="button button-primary form-button" type="submit" disabled={formStatus === 'submitting'}>
            {formStatus === 'submitting' ? 'Sending...' : 'Send Your Message ↗'}
          </button>
          <p className="form-note">Your details are used to respond to your message. <a href="/privacy">Privacy policy</a></p>
        </form>
      </div>
    </section>;
}
export default Contact;
