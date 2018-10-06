import React, { Component } from 'react';

import Allergies from '../components/Allergies.js'
import check from '../images/check.svg';

class Course extends Component {
  render() {
    return (
      <div className="course">
        <div className="course__wrap-img">image</div>
        <div className="course__content">
          <h5 className="course__name">Mixed Greens with Poached Eggs, Hazelnuts and Spices</h5>
          <p className="course__description">What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?</p>

          <Allergies/>
        </div>
        <div className="course__wrap-icon">
          <img src={check} alt="check inactive" />
        </div>
      </div>
    );
  }
}

export default Course;
