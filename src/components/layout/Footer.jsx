import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="footer-brand"><img src="/images/footer-logo.svg" alt="UZOFIN logo"/></h3>
            <p className="footer-description">
              Experience the new age of payments with UzOFin and explore new growth opportunities to reach greater heights.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><a href="#features" title="AI Banking Solutions">AI Banking</a></li>
              <li><a href="#pricing" title="Payment Processing Services">Payment</a></li>
              <li><a href="#api" title="Payout Solutions">Payout</a></li>
              <li><a href="#docs" title="Merchant Onboarding Platform">Merchant Onboarding</a></li>
              <li><a href="#frm" title="Fraud Risk Management">FRM</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about" title="About UzoFin">About Us</a></li>
              <li><a href="#careers" title="UzoFin Help Center">Help Center</a></li>
              <li><a href="#contact" title="Contact UzoFin Support">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#help" title="UzoFin Cookie Policy">Cookie Policy</a></li>
              <li><a href="#community" title="UzoFin Privacy Policy">Privacy Policy</a></li>
              <li><a href="#guides" title="UzoFin Terms of Service">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-title">Social</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.linkedin.com/company/uzofin" aria-label="LinkedIn" className="media-icon" title="Follow UzoFin on LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i> /uzofin
                </a>
              </li>
              <li>
                <a href="https://twitter.com/uzofin" aria-label="Twitter" className="media-icon" title="Follow UzoFin on Twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter" aria-hidden="true"></i> /uzofin
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/uzofin" aria-label="Instagram" className="media-icon" title="Follow UzoFin on Instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i> /uzofin
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/uzofin" aria-label="Facebook" className="media-icon" title="Follow UzoFin on Facebook" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook" aria-hidden="true"></i> /uzofin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 UzOFin. All rights reserved</p>
          <p className="mb-0">India (EN)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
