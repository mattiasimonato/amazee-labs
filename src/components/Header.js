import React from 'react';
import logo from '../images/amazee-labs-logo.svg';

const Header = (props) => {
  return (
    <header className="header container">
      <div className="row align-items-center">
        <div className="header__logo col-md-6">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__logo col-md-6 text-right">
          <span className="header__label">Chef:</span>
          <strong>{props.chef}</strong>
        </div>
      </div>
    </header>
  )
};

export default Header;