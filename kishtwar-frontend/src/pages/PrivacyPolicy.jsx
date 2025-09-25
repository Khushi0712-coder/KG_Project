import React from "react";
import "./Footer.css";; // custom css import

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      {/* Back Link */}
      <div className="back-link">
        <a href="/">← Back to Blog</a>
      </div>

      {/* Title */}
      <div className="title-section">
        <div className="blue-bar"></div>
        <h1 className="page-title">Privacy Policy</h1>
      </div>

      {/* Intro */}
      <p className="intro-text">
        At <strong>Kishtwar Gold</strong>, we value your privacy and are committed
        to protecting your personal data. This Privacy Policy explains the types
        of information we collect, how we use it, and how we keep it safe.
      </p>

      {/* Sections */}
      <section>
        <h2>1. Information We Collect</h2>
        <ul>
          <li>Name, email address, phone number, shipping address.</li>
          <li>
            Payment information (processed securely via payment gateways; we do
            not store card details).
          </li>
          <li>Browsing data (cookies, analytics, device info).</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To process and deliver your orders.</li>
          <li>To communicate updates, offers, and customer support.</li>
          <li>To improve website experience and services.</li>
        </ul>
      </section>

      <section>
        <h2>3. Data Protection</h2>
        <ul>
          <li>We use secure servers and SSL encryption.</li>
          <li>Payment details are processed by trusted third-party gateways.</li>
          <li>
            We never sell or share your personal data with unauthorized parties.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p>
          Our website uses cookies to improve functionality and user experience.
          You may disable cookies in your browser settings.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data.
          You can also opt out of marketing communications at any time.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>For any privacy concerns or inquiries, please contact us at:</p>
        <p className="contact-email">📧 support@kishtwargold.com</p>
      </section>

      {/* Footer */}
      <p className="footer-text">© 2025 Kishtwar Gold. All rights reserved.</p>
    </div>
  );
};

export default PrivacyPolicy;
