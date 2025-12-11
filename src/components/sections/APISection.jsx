import React from 'react';

const APISection = () => {
  return (
    <section className="api-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title-large">Build Faster with Our Powerful API's</h2>
          <p className="section-subtitle">
            Plug into secure, developer-friendly financial API's and launch in days, not months
          </p>
          <a href="#docs" className="btn btn-primary-custom btn-lg mt-3" role="button">
            Start building <span className="right-arrow" aria-hidden="true"><img src="/images/Arrow.svg" alt="" width="16" height="16"/></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default APISection;
