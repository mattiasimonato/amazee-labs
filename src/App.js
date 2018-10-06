import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header.js'
import PageTitle from './components/PageTitle.js'
import MainContainer from './components/MainContainer.js'
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

    return (
      <div className="App">
        <Header chef="Mattia Simonato"/>
        <PageTitle courseTitle={courseTitle}/>
        <MainContainer>
          <Menu courses={courses}/>
        </MainContainer>
        <Footer/>s
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseTypeSelected: state.courseTypeSelected,
    courses: state.courses,
    courseTypes: state.courseTypes
  }
}




export default connect(mapStateToProps, null)(App);