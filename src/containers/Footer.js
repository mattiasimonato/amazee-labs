import React, { Component } from 'react';

import Allergies from '../components/Allergies.js'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">

          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="footer__page">
                <h5 className="footer__title"><span className="footer__title--primary">1</span> / 6 - hors d'ouvres</h5>
              </div>
              <div className="footer__allergies">
                <span className="footer__allergies-title">* All the allergies of this page:</span>
                <Allergies/>
              </div>
            </div>
            <div className="col-md-6 text-center">

                <button className="btn btn-outline-danger button--primary mr-2" disabled>clear</button>
                <button className="btn btn-primary button--primary button" disabled>confirm</button>

            </div>
            <div className="col-md-3 text-right">
              <button className="btn btn-outline-secondary mr-2" disabled>prev</button>
              <button className="btn  btn-outline-secondary" disabled>next</button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
