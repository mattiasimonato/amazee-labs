import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increasePage, decreasePage } from '../store/actions'
import toastr from 'toastr'

import Allergies from '../components/Allergies.js'

import 'toastr/build/toastr.min.css';

class Footer extends Component {

  nextPage = (page, isRequired, selectedCourses) => {
    if (isRequired) {
      if (this.checkRequiredCourses(selectedCourses, this.props.courseTypeSelected)) {
        this.props.increasePage(page)
      }
      else {
        toastr.info(`${this.props.courseTypes[this.props.courseTypeSelected].name} need at least 1 course selected`)
      }
    }
    else {
      this.props.increasePage(page)
    }
  }

  checkRequiredCourses = (selectedCourses, courseTypeSelected) => {
    const result = selectedCourses.filter((course) => {
      if (course.courseType.indexOf(courseTypeSelected) >= 0) {
        return course
      }
      return null
    })
    return !!result.length
  }

  prevPage = (page) => {
    this.props.decreasePage(page)
  }

  renderPrevButton = () => {
    if (this.props.courseTypeSelected === 0) return false
    return true
  }

  renderNextButton = () => {
    if (this.props.courseTypeSelected === this.props.courseTypes.length - 1) return false
    return true
  }

  render() {
    const prevButton = this.renderPrevButton()
    ?
      <button className="btn btn-outline-secondary mr-2"
      onClick={() => this.prevPage(this.props.courseTypeSelected - 1)}>
        prev
      </button>
    :
      null

    const nextButton = this.renderNextButton()
    ?
      <button className="btn  btn-outline-secondary"
      onClick={() => this.nextPage(this.props.courseTypeSelected + 1,
      this.props.courseTypes[this.props.courseTypeSelected].isRequired,
      this.props.selectedCourses)}>
        next
      </button>
    :
      null

    return (
      <footer className="footer">
        <div className="container">

          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="footer__page">
                <h5 className="footer__title">
                  <span className="footer__title--primary">
                    {this.props.courseTypeSelected + 1}
                  </span>
                  &nbsp;/ {this.props.courseTypes.length} -
                  &nbsp;{this.props.courseTypes[this.props.courseTypeSelected].name}
                </h5>
              </div>
              <div className="footer__allergies">
                <span className="footer__allergies-title">* All the allergies of this page:</span>
                <Allergies/>
              </div>
            </div>
            <div className="col-md-4 text-center">

                <button className="btn btn-primary button--primary button" disabled>confirm</button>

            </div>
            <div className="col-md-4 text-right">
              {prevButton}
              {nextButton}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseTypeSelected: state.courseTypeSelected,
    courseTypes: state.courseTypes,
    selectedCourses: state.selectedCourses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increasePage: (page) => dispatch(increasePage(page)),
    decreasePage: (page) => dispatch(decreasePage(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);