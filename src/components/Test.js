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
/*
Style = {
    .footer {
        padding: 20px;
        background-color: #222;
        color: #fff;
        margin-top: 20px;
      }
      
      .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .footer-content a {
        color: #fff;
        margin-right: 10px;
        text-decoration: none;
      }
      
      .footer-content a:hover {
        text-decoration: underline;
      }
      
}
*/
export default Footer;
