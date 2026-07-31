import React from 'react';
import LegalPage from '../components/LegalPage.jsx';

function Eula() {
  return (
    <LegalPage
      title="End User License Agreement"
      description="End User License Agreement for software applications and services provided by Jacquot Digital Solutions."
      path="/eula"
    >
      <p className="legal-introduction">
        This End User License Agreement (&ldquo;Agreement&rdquo;) is a legal agreement between you and
        Jacquot Digital Solutions (&ldquo;JDS,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) governing your access to and use of JDS websites, software applications,
        and related services (collectively, the &ldquo;Services&rdquo;). It applies across current and
        future JDS software products unless separate written terms apply. By accessing or using a Service,
        you agree to this Agreement. If you use a Service for an organization, you represent that you have
        authority to bind that organization.
      </p>

      <section aria-labelledby="eula-license">
        <h2 id="eula-license">1. License to Use JDS Applications</h2>
        <p>
          Subject to this Agreement and payment of applicable fees, JDS grants you a limited, revocable,
          non-exclusive, non-transferable, non-sublicensable license to access and use the Services for their
          intended business or personal purpose during the applicable subscription or service term. The Services
          are licensed, not sold. No rights are granted except those expressly stated in this Agreement.
        </p>
      </section>

      <section aria-labelledby="eula-acceptable-use">
        <h2 id="eula-acceptable-use">2. Acceptable Use</h2>
        <p>You must not, and must not permit another person to:</p>
        <ul>
          <li>Use a Service unlawfully, fraudulently, or to violate another person&apos;s rights;</li>
          <li>Upload malware or harmful code, interfere with a Service, or bypass security or access controls;</li>
          <li>Probe, scan, or test the vulnerability of a Service without written authorization;</li>
          <li>
            Copy, modify, translate, reverse engineer, decompile, disassemble, or attempt to derive source code
            from a Service, except to the limited extent applicable law expressly permits;
          </li>
          <li>Rent, lease, resell, sublicense, or provide a Service to an unauthorized third party;</li>
          <li>Use automated means to extract data or place an unreasonable load on a Service; or</li>
          <li>Remove or alter proprietary notices or use a Service to build a competing product.</li>
        </ul>
      </section>

      <section aria-labelledby="eula-responsibilities">
        <h2 id="eula-responsibilities">3. User Responsibilities</h2>
        <p>
          You are responsible for providing accurate information, maintaining the confidentiality of account
          credentials, restricting access to authorized users, and all activity under your account. You are also
          responsible for your data, your devices and internet connection, maintaining any backups appropriate to
          your needs, and obtaining all permissions and consents needed to submit information to a Service. You must
          promptly notify JDS of suspected unauthorized access or a security incident involving your account.
        </p>
      </section>

      <section aria-labelledby="eula-subscriptions">
        <h2 id="eula-subscriptions">4. Subscription, Payment, and Service Terms</h2>
        <p>
          Some Services require a paid subscription, transaction fee, or other charge. Prices, billing intervals,
          usage limits, renewal terms, and included features are shown when you order or in a separate service agreement.
          Unless stated otherwise, fees are in Canadian dollars, exclusive of applicable taxes, and non-refundable
          except as required by law. Recurring subscriptions renew for the stated renewal period until cancelled in
          accordance with the applicable ordering terms. We may change fees or service plans on reasonable advance
          notice, with changes taking effect at the next renewal unless otherwise stated.
        </p>
        <p>
          Payments may be handled by third-party providers. Your use of their payment services may be subject to
          additional terms. Failure to pay amounts when due may result in suspension or termination of access.
        </p>
      </section>

      <section aria-labelledby="eula-ip">
        <h2 id="eula-ip">5. Intellectual Property</h2>
        <p>
          JDS and its licensors retain all rights, title, and interest in the Services, including software, designs,
          interfaces, documentation, trademarks, and all related intellectual property. You retain ownership of data
          and content you submit. You grant JDS a limited, worldwide license to host, copy, process, transmit, and
          display that content only as needed to provide, secure, support, and improve the Services and meet our legal
          obligations. If you provide feedback, you permit JDS to use it without restriction or compensation.
        </p>
      </section>

      <section aria-labelledby="eula-availability">
        <h2 id="eula-availability">6. Availability and Disclaimer</h2>
        <p>
          We aim to provide reliable Services, but do not guarantee uninterrupted, error-free, or completely secure
          operation or any specific availability or uptime unless a separate written service-level agreement says so.
          A Service may be unavailable because of maintenance, updates, third-party systems, internet or infrastructure
          failures, emergencies, or circumstances beyond our reasonable control. Features may change as products evolve.
        </p>
        <p>
          To the maximum extent permitted by law, the Services are provided &ldquo;as is&rdquo; and &ldquo;as
          available.&rdquo; JDS disclaims all warranties and conditions, express, implied, statutory, or collateral,
          including merchantability, fitness for a particular purpose, title, non-infringement, and those arising from
          course of dealing or usage of trade. Nothing in this Agreement excludes a warranty or right that cannot
          lawfully be excluded.
        </p>
      </section>

      <section aria-labelledby="eula-liability">
        <h2 id="eula-liability">7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, JDS and its owners, personnel, suppliers, and licensors will not be
          liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profit,
          revenue, business, goodwill, data, or use, arising from or related to a Service or this Agreement, even if
          advised that such loss is possible.
        </p>
        <p>
          To the maximum extent permitted by law, the total aggregate liability of JDS arising from or related to a
          Service or this Agreement will not exceed the greater of (a) the amount you paid to JDS for the affected Service
          during the six months immediately before the event giving rise to the claim, and (b) CAD $100. These limitations
          apply regardless of the form of action and even if a remedy fails of its essential purpose. They do not apply
          where liability cannot lawfully be limited.
        </p>
      </section>

      <section aria-labelledby="eula-termination">
        <h2 id="eula-termination">8. Suspension and Termination</h2>
        <p>
          You may stop using a Service at any time and may cancel a subscription as described in the applicable service
          terms. JDS may suspend or terminate access if you materially breach this Agreement, fail to pay fees when due,
          create a security or legal risk, misuse a Service, or if continuing the Service is no longer commercially or
          technically practical. Where reasonable, we will provide notice and an opportunity to remedy the issue.
        </p>
        <p>
          On termination, your license ends and you must stop using the affected Service. Provisions that by their nature
          should survive will survive, including payment obligations, intellectual property, disclaimers, limitations of
          liability, termination consequences, and governing law. Data export or deletion is subject to the applicable
          Service terms and our Privacy Policy.
        </p>
      </section>

      <section aria-labelledby="eula-governing-law">
        <h2 id="eula-governing-law">9. Governing Law</h2>
        <p>
          This Agreement is governed by the laws of the Province of Ontario and the federal laws of Canada applicable
          there, without regard to conflict-of-law rules. Subject to any rights you have under mandatory consumer law,
          the courts located in Ontario, Canada have exclusive jurisdiction over disputes arising from this Agreement
          or the Services.
        </p>
      </section>

      <section aria-labelledby="eula-general">
        <h2 id="eula-general">10. General Terms</h2>
        <p>
          If a provision of this Agreement is unenforceable, it will be modified to the minimum extent necessary and
          the remaining provisions will continue in effect. A failure to enforce a provision is not a waiver. You may
          not assign this Agreement without our written consent; JDS may assign it as part of a reorganization, merger,
          acquisition, or sale of assets. This Agreement and any applicable order or service-specific terms form the
          entire agreement concerning the Services and replace prior discussions on that subject. If service-specific
          terms conflict with this Agreement, the service-specific terms control for that Service.
        </p>
        <p>
          We may update this Agreement to reflect changes to the Services, law, or business practices. We will post the
          updated Agreement at this URL and revise the effective date, and will provide additional notice where required.
          Continued use after an updated Agreement takes effect constitutes acceptance to the extent permitted by law.
        </p>
      </section>

      <section aria-labelledby="eula-contact">
        <h2 id="eula-contact">11. Contact Us</h2>
        <address>
          <strong>Jacquot Digital Solutions</strong>
          <br />
          Walkerton, Ontario, Canada
          <br />
          Website: <a href="https://jdsstudio.ca">jdsstudio.ca</a>
          <br />
          Legal inquiries: <a href="/#contact">contact us through our website</a>
        </address>
      </section>
    </LegalPage>
  );
}

export default Eula;
