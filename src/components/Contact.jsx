import SectionHeader from './SectionHeader.jsx';

function Contact() {
  return (
    <section id="contact" className="section section-shell contact-section">
      <div className="contact-layout">
        <div className="contact-copy reveal">
          <SectionHeader eyebrow="Contact" title="Start with the workflow you want to improve">
            Tell Jacquot Digital Solutions what your business needs to run more smoothly. Share
            the process, system, portal, app, or customer experience you want to build.
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
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          aria-label="Consultation request form"
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
          <button className="button button-primary form-button" type="submit">
            Send Consultation Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
