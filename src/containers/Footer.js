import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increasePage, decreasePage } from '../store/actions'

import Allergies from '../components/Allergies.js'

class Footer extends Component {

  nextPage = (page, isRequired, selectedCourses) => {
    if (isRequired) {
      console.log('before', selectedCourses)
      if (selectedCourses.length) {
        console.log('after', selectedCourses)
      }
    }
    else {
      this.props.increasePage(page)
    }
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