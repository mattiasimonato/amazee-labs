import React, { Component } from 'react';

import Allergies from '../components/Allergies.js'
import check from '../images/check.svg';

class Course extends Component {
  render() {
    return (
      <div className="course">
        <div className="course__wrap-image">
          <img src={this.props.course.image} className="course__image" alt={this.props.course.title}/>
        </div>
        <div className="course__content">
          <h5 className="course__name">{this.props.course.title}</h5>
          <p className="course__description">
            {this.props.course.description}
          </p>

          <Allergies allergies={this.props.course.allery}/>
        </div>
        <div className="course__wrap-icon">
          <img src={check} alt="check inactive" />
        </div>
      </div>
    );
  }
}

export default Course;
