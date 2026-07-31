import React from 'react';
import LegalPage from '../components/LegalPage.jsx';

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Privacy Policy for software applications and services provided by Jacquot Digital Solutions."
      path="/privacy"
    >
      <p className="legal-introduction">
        This Privacy Policy explains how Jacquot Digital Solutions (&ldquo;JDS,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses,
        and protects personal information when you use a JDS website, software application,
        or related service (collectively, the &ldquo;Services&rdquo;). It applies across current
        and future JDS software products unless a product-specific privacy notice states otherwise.
      </p>

      <section aria-labelledby="privacy-information">
        <h2 id="privacy-information">1. Information We Collect</h2>
        <p>Depending on the Service you use, we may collect:</p>
        <ul>
          <li>
            <strong>Account and contact information,</strong> such as your name, email address,
            telephone number, business name, username, and account preferences.
          </li>
          <li>
            <strong>Transaction and business information,</strong> such as order details,
            appointment information, invoices, subscription status, and records you submit to a Service.
          </li>
          <li>
            <strong>Technical and usage information,</strong> such as IP address, device and browser
            type, operating system, log data, pages or features used, and approximate location derived
            from an IP address.
          </li>
          <li>
            <strong>Communications,</strong> including support requests, feedback, and other messages
            you send to us.
          </li>
          <li>
            <strong>Information provided by a customer organization,</strong> when you use a Service
            through a business or other organization that has contracted with JDS.
          </li>
        </ul>
        <p>
          We collect information directly from you, automatically through the Services, and from
          organizations or service providers involved in delivering the Services.
        </p>
      </section>

      <section aria-labelledby="privacy-use">
        <h2 id="privacy-use">2. How We Use Information</h2>
        <p>We use information to:</p>
        <ul>
          <li>Provide, operate, maintain, secure, and improve the Services;</li>
          <li>Create and administer accounts, subscriptions, orders, and transactions;</li>
          <li>Process requests and communicate service, support, security, and administrative notices;</li>
          <li>Personalize features and understand how the Services are used;</li>
          <li>Detect, investigate, and prevent fraud, abuse, security incidents, and technical problems;</li>
          <li>Comply with legal obligations and enforce our agreements; and</li>
          <li>Send marketing communications where permitted by law and subject to your choices.</li>
        </ul>
      </section>

      <section aria-labelledby="privacy-payments">
        <h2 id="privacy-payments">3. Payment Processing</h2>
        <p>
          Payments may be processed by third-party payment providers such as Clover, Square, Stripe,
          or other providers selected for a current or future JDS product. These providers may collect
          payment card, bank account, billing, identity verification, and transaction information under
          their own privacy policies and terms. JDS does not ordinarily receive or store complete payment
          card numbers. We may receive transaction identifiers, payment status, billing contact details,
          and limited payment information needed for accounting, support, fraud prevention, and service delivery.
        </p>
      </section>

      <section aria-labelledby="privacy-cookies">
        <h2 id="privacy-cookies">4. Cookies and Analytics</h2>
        <p>
          The Services may use cookies, local storage, pixels, and similar technologies that are necessary
          for authentication, security, preferences, and core functionality. We may also use analytics tools
          to understand performance and usage. You can control cookies through your browser or device settings,
          although disabling required technologies may prevent parts of a Service from working correctly.
          Where required, we will request consent before using non-essential cookies.
        </p>
      </section>

      <section aria-labelledby="privacy-retention">
        <h2 id="privacy-retention">5. Data Retention</h2>
        <p>
          We retain personal information only for as long as reasonably necessary for the purposes described
          in this Policy, including to provide the Services, maintain business and transaction records, resolve
          disputes, enforce agreements, and satisfy legal, tax, accounting, and security obligations. Retention
          periods vary according to the type of information, the Service, our relationship with you, and applicable
          law. When information is no longer required, we delete, anonymize, or securely dispose of it.
        </p>
      </section>

      <section aria-labelledby="privacy-third-parties">
        <h2 id="privacy-third-parties">6. Third-Party Services and Disclosures</h2>
        <p>We may disclose information:</p>
        <ul>
          <li>
            To vendors that provide hosting, infrastructure, payment processing, communications, analytics,
            security, customer support, and other services on our behalf;
          </li>
          <li>To the organization through which you access a Service, where applicable;</li>
          <li>When you direct us to share it or connect a third-party integration;</li>
          <li>
            To comply with law, legal process, or a valid government request, or to protect rights, safety,
            security, and property; and
          </li>
          <li>
            In connection with a merger, financing, acquisition, reorganization, or sale of all or part of our business,
            subject to appropriate confidentiality protections.
          </li>
        </ul>
        <p>
          Third-party websites, integrations, and services are governed by their own privacy practices. Service
          providers may process information in Canada, the United States, or other jurisdictions where they operate,
          and information may be subject to the laws of those jurisdictions.
        </p>
      </section>

      <section aria-labelledby="privacy-security">
        <h2 id="privacy-security">7. Information Security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards designed to protect personal
          information. No method of transmission or storage is completely secure, however, and we cannot guarantee
          absolute security. You are responsible for protecting your account credentials and promptly notifying us
          of suspected unauthorized access.
        </p>
      </section>

      <section aria-labelledby="privacy-rights">
        <h2 id="privacy-rights">8. Your Rights and Choices</h2>
        <p>
          Subject to applicable law, you may request access to or correction of your personal information, withdraw
          consent where processing is based on consent, request deletion, or ask questions about our privacy practices.
          You may unsubscribe from marketing emails using the link in the message. Some requests may be limited where
          we must retain information for legal, security, contractual, or legitimate business purposes.
        </p>
        <p>
          If a business or other organization controls the information in a JDS Service, please submit your request
          to that organization first. We may need to verify your identity before completing a request.
        </p>
      </section>

      <section aria-labelledby="privacy-children">
        <h2 id="privacy-children">9. Children&apos;s Privacy</h2>
        <p>
          The Services are not directed to children under 13, and we do not knowingly collect personal information
          directly from children under 13 without appropriate authorization. If you believe a child has provided us
          personal information inappropriately, please contact us.
        </p>
      </section>

      <section aria-labelledby="privacy-changes">
        <h2 id="privacy-changes">10. Changes to This Policy</h2>
        <p>
          We may update this Policy as our Services or legal obligations change. We will post the revised Policy at
          this URL and update the effective date. We may provide additional notice when a change is material.
        </p>
      </section>

      <section aria-labelledby="privacy-contact">
        <h2 id="privacy-contact">11. Contact Us</h2>
        <address>
          <strong>Jacquot Digital Solutions</strong>
          <br />
          Walkerton, Ontario, Canada
          <br />
          Website: <a href="https://jdsstudio.ca">jdsstudio.ca</a>
          <br />
          Privacy inquiries: <a href="/#contact">contact us through our website</a>
        </address>
      </section>
    </LegalPage>
  );
}

export default PrivacyPolicy;
