import React from 'react';
import { getAssetPath } from '../../utils/assets';

const Header = () => {
  return (
    <header className="header" role="banner">
      <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Main navigation">
        <div className="container">
          <div className="nav-main">
            <div className="logo-prt">
              <a className="navbar-brand" href="#" aria-label="UzoFin Home">
                <img src={getAssetPath('images/logo.svg')} alt="UzoFinbanking logo" />
              </a>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item active">
                  <a className="nav-link" href="#aibanking">AI Banking</a>
                </li>
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    id="navbarDropdownPayments" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                    aria-haspopup="true"
                  >
                    Payments
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownPayments">
                    <li><a className="dropdown-item" href="#">Payments1</a></li>
                    <li><a className="dropdown-item" href="#">Payments2</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    id="navbarDropdownPayout" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                    aria-haspopup="true"
                  >
                    Payout
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownPayout">
                    <li><a className="dropdown-item" href="#">Payout1</a></li>
                    <li><a className="dropdown-item" href="#">Payout2</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Support</a>
                </li>
              </ul>
              <div className="d-dislay-none">
                <a className="btn btn-primary-custom" href="#get-started" role="button">
                  Get Started <span className="right-arrow" aria-hidden="true"><img src={getAssetPath('images/Arrow.svg')} alt="" width="16" height="16"/></span>
                </a>
              </div>
            </div>
            <div className="m-dislay-none">
              <a className="btn btn-primary-custom" href="#get-started" role="button">
                Start building <span className="right-arrow" aria-hidden="true"><img src={getAssetPath('images/Arrow.svg')} alt="" width="16" height="16"/></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
