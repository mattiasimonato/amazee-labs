import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCourse, removeCourse } from '../store/actions'

import Allergies from '../components/Allergies.js'
import SpiceLevel from '../components/SpiceLevel.js'
import check from '../images/check.svg';
import checkActive from '../images/check-active.svg';

class Course extends Component {

  addItem = (course) => {
    this.props.addCourse(course)
  }

  removeItem = (course, selectedCourses) => {
    this.props.removeCourse(selectedCourses.indexOf(course))
  }

  render() {

    const course =
      <div className="course__item" onClick={() => this.addItem(this.props.course)}>
        <div className="course__wrap-image">
          <img src={this.props.course.image} className="course__image" alt={this.props.course.title}/>
        </div>
        <div className="course__content">
          <h5 className="course__name">{this.props.course.title}</h5>
          <p className="course__description">
            {this.props.course.description}
          </p>
          <div className="course__info">
            <Allergies allergies={this.props.course.allery}/>
            <SpiceLevel level={this.props.course.spiceLevel}/>
          </div>
        </div>
        <div className="course__wrap-icon">
          <img src={check} alt="check inactive" />
        </div>
      </div>

    const activeCourse =
      <div className="course__item" onClick={() => this.removeItem(this.props.course, this.props.selectedCourses)}>
        <div className="course__wrap-image">
          <img src={this.props.course.image} className="course__image" alt={this.props.course.title}/>
        </div>
        <div className="course__content">
          <h5 className="course__name course__name--active">{this.props.course.title}</h5>
          <p className="course__description">
            {this.props.course.description}
          </p>
          <div className="course__info">
            <Allergies allergies={this.props.course.allery}/>
            <SpiceLevel level={this.props.course.spiceLevel}/>
          </div>
        </div>
        <div className="course__wrap-icon">
          <img src={checkActive} alt="check active" />
        </div>
      </div>


    const content = this.props.selectedCourses.indexOf(this.props.course) >= 0
    ?
      activeCourse
    :
     course

    return (
      <div className="course">
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedCourses: state.selectedCourses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCourse: (course) => dispatch(addCourse(course)),
    removeCourse: (course) => dispatch(removeCourse(course)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Course);