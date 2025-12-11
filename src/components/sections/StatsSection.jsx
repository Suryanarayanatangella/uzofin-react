import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="stats-left-content">
              <div className="stats-title-wrapper">
                <h2 className="section-title">
                  Your Business Pays Are Now <br/>
                  Faster and Secure
                </h2>
              </div>
              <div className="img-blk">
                <img src="/images/highlight.png" alt="3D abstract visualization showing financial data flow" className="stats-image" width="500" height="400" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-md-1 col-sm-0 col-xs-0"></div>
          <div className="col-lg-5">
            <div className="stats-vertical">
              <div className="stat-horizontal">
                <h3 className="stat-number gradient-text">11.5M+</h3>
                <p className="stat-label">Transactions processed monthly</p>
              </div>
              <div className="stat-horizontal">
                <h3 className="stat-number second-gradient">99.9%</h3>
                <p className="stat-label">Platform uptime and reliability</p>
              </div>
              <div className="stat-horizontal">
                <h3 className="stat-number third-gradient">70% <small>Faster</small></h3>
                <div className="stat-text">
                  <p className="stat-description">Merchant onboarding with AI automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h4>Our Intelligent<br className="m-dislay-none"/>Financial Suite</h4>
            <div className="list">
              <ul>
                <li>Tools that accelerate every step of your financial workflow</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6">
                <div className="stat-card-horizontal">
                  <h5 className="left-line blue">AI Banking</h5>
                  <p className="stat-label">Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.</p>
                  <div className="trans-blk mt-3">
                    <h3 className="trans-num mb-1">3,969</h3>
                    <p className="trans-time">Transactions per second</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="stat-card-horizontal mt-n3">
                  <h5 className="left-line yellow">Payments</h5>
                  <p className="stat-label">Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.</p>
                  <div className="trans-blk mt-3">
                    <h3 className="trans-num mb-1">1,675</h3>
                    <p className="trans-time">Validator nodes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="stat-card-horizontal">
                  <h5 className="left-line purple">Payouts</h5>
                  <p className="stat-label">Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.</p>
                  <div className="trans-blk mt-3">
                    <h3 className="trans-num mb-1">163,077,581,394</h3>
                    <p className="trans-time">Total transactions</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="stat-card-horizontal mt-n4">
                  <h5 className="left-line green">Merchant Onboarding</h5>
                  <p className="stat-label">Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes.</p>
                  <div className="trans-blk mt-3">
                    <h3 className="trans-num mb-1">100%</h3>
                    <p className="trans-time">On-time merchant Onboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
