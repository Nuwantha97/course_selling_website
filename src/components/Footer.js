import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p>© 2024 Course selling website. All Rights Reserved.</p>
          <p>
            <a href="/about">About us</a>
            <a href="/contact">Contact us</a>
            <a href="/mission">Our Mission</a>
          </p>
        </div>
        <div>
          <p>
            <a href="/help">Help and Support</a>
            <a href="/faqs">FAQs</a>
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
        <div>
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://pinterest.com" target="_blank">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
