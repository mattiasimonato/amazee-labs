import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header.js'
import PageTitle from './components/PageTitle.js'
import MainContainer from './components/MainContainer.js'
import ConfirmedOrder from './components/ConfirmedOrder.js'
import Menu from './components/Menu.js'
import Footer from './containers/Footer.js'
import Allergies from './components/Allergies.js'

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

    const allergies = this.props.confirmedOrders.length
    ? <div className="allergies__wrap">
        <h4 className="allergies__title">All the allergies of this page:</h4>
        <Allergies allergies={this.props.confirmedAllergies}/>
      </div>
    :
      null

    const content = this.props.confirmedOrders.length
    ?
      this.props.confirmedOrders.map((item) => {
        return <ConfirmedOrder courseName={item.courseName} orders={item.courses} key={item.courseType}/>
      })
    :
      <Menu courses={courses}/>

    const footer = this.props.confirmedOrders.length
    ?
      null
    :
      <Footer/>

    const pageTitle = this.props.confirmedOrders.length
    ?
      <PageTitle mainTitle="Confirm your order"/>
    :
      <PageTitle mainTitle="à la carte menu" courseTitle={courseTitle}/>

    return (
      <div className="App">
        <Header chef="Mattia Simonato"/>
        {pageTitle}
        <MainContainer>
          {allergies}
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
    confirmedOrders: state.confirmedOrders,
    confirmedAllergies: state.confirmedAllergies,
  }
}

export default connect(mapStateToProps, null)(App);

