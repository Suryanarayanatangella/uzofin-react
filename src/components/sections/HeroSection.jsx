import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-left" aria-hidden="true"></div>
      <div className="hero-bg-right" aria-hidden="true"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <div className="hero-content">
              <h1 className="hero-title">
                AI-powered <span className="gradient-text">Banking & Payment Solutions</span><br/>
                built for Modern Businesses
              </h1>
              <p className="hero-description">
                With our AI-powered banking and payment solutions, you can easily manage your finances,<br/>
                make payments, and track your transactions in real-time.
              </p>
              <div className="hero-buttons">
                <a href="#get-started" className="btn btn-primary-custom btn-lg" role="button" title="Start using UzoFin's AI-powered banking solutions">
                  Get Started <span className="right-arrow" aria-hidden="true"><img src="/images/Arrow.svg" alt="" width="16" height="16"/></span>
                </a>
                <a href="#about" className="btn btn-outline-custom btn-lg" role="button" title="Learn more about UzoFin">
                  About Us <span className="right-arrow" aria-hidden="true"><img src="/images/Arrow.svg" alt="" width="16" height="16"/></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
