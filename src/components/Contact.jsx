import React, { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';

const encodeForm = (formData) => new URLSearchParams(formData).toString();

function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(formData),
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

  return (
    <section id="contact" className="section section-shell contact-section">
      <div className="contact-layout">
        <div className="contact-copy reveal">
          <SectionHeader
            eyebrow="Contact"
            title="Ready to Build Software Around Your Workflow?"
          >
            Let&apos;s talk about your business, understand how you work today, and explore
            whether custom software can help simplify your operations.
          </SectionHeader>
          <div className="contact-details" aria-label="Business details">
            <p>
              <strong>Jacquot Digital Solutions</strong>
              <span>Custom software for small businesses</span>
            </p>
            <p>
              <strong>Location</strong>
              <span>Walkerton, Ontario, Canada</span>
            </p>
            <p>
              <strong>Website</strong>
              <span>jdsstudio.ca</span>
            </p>
          </div>
        </div>
        <form
          className="contact-form reveal reveal-delay"
          name="consultation"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          aria-label="Consultation request form"
          onSubmit={handleSubmit}
        >
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
          <div className="form-row">
            <label htmlFor="business">Business name</label>
            <input id="business" name="business" type="text" autoComplete="organization" />
          </div>
          <div className="form-row">
            <label htmlFor="project">What do you want to build or improve?</label>
            <textarea id="project" name="project" rows="6" required></textarea>
          </div>
          {formStatus === 'success' && (
            <p className="form-message form-message-success" role="status">
              Thank you. Your consultation request has been sent.
            </p>
          )}
          {formStatus === 'error' && (
            <p className="form-message form-message-error" role="alert">
              Something went wrong. Please try again or email Jacquot Digital Solutions directly.
            </p>
          )}
          <button
            className="button button-primary form-button"
            type="submit"
            disabled={formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? 'Sending...' : 'Send Consultation Request'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
