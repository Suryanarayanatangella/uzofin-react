import React from 'react';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="text-center">
          <h2 className="cta-title">
            The future of your <br />industry <span className="gradient-text">starts here</span>
          </h2>
          <div className="cta-buttons">
            <a href="#demo" className="btn btn-primary-custom btn-lg" role="button">
              Book a Demo <span className="right-arrow" aria-hidden="true"><img src="./images/Arrow.svg" alt="" width="16" height="16"/></span>
            </a>
            <a href="#buildai" className="btn btn-outline-custom btn-lg" role="button">
              Build AI <span className="right-arrow" aria-hidden="true"><img src="./images/Arrow.svg" alt="" width="16" height="16"/></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
