import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header.js'
import PageTitle from './components/PageTitle.js'
import MainContainer from './components/MainContainer.js'
import ConfirmedOrder from './components/ConfirmedOrder.js'
import Menu from './components/Menu.js'
import Footer from './containers/Footer.js'

import './styles/App.scss';

class App extends Component {
  render() {

    const courses = this.props.courses.filter((course) => {
      if (course.courseType.indexOf(this.props.courseTypeSelected) >= 0) {
        return course
      }
      return null
    })

    const courseTitle = this.props.courseTypes[this.props.courseTypeSelected]

    const allergies = this.props.showConfirmedOrder
    ?
      this.props.selectedCourses.map((item) => {
        return item.allery.join()
      })
    :
      null

    const content = this.props.showConfirmedOrder
    ?
      this.props.confirmedOrders.map((item) => {
        return <ConfirmedOrder courseName={item.courseName} orders={item.courses} key={item.courseType}/>
      })
    :
      <Menu courses={courses}/>

    const footer = this.props.showConfirmedOrder
    ?
      null
    :
      <Footer/>

    const pageTitle = this.props.showConfirmedOrder
    ?
      <PageTitle mainTitle="Confirm your order"/>
    :
      <PageTitle mainTitle="à la carte menu" courseTitle={courseTitle}/>

    return (
      <div className="App">
        <Header chef="Mattia Simonato"/>
        {pageTitle}
        <MainContainer>
          {content}
        </MainContainer>
        {footer}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseTypeSelected: state.courseTypeSelected,
    courses: state.courses,
    courseTypes: state.courseTypes,
    selectedCourses: state.selectedCourses,
    showConfirmedOrder: state.showConfirmedOrder,
    confirmedOrders: state.confirmedOrders,
  }
}

export default connect(mapStateToProps, null)(App);

