import React from 'react';

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
          <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item" title="Home - UzoFin">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
