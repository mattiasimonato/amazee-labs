import React, { Component } from 'react';

import Header from './components/Header.js'
import PageTitle from './containers/PageTitle.js'
import MainContainer from './components/MainContainer.js'
import Menu from './components/Menu.js'
import Footer from './containers/Footer.js'

import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header chef="Mattia Simonato"/>
        <PageTitle/>
        <MainContainer>
          <Menu/>
        </MainContainer>
        <Footer/>
      </div>
    );
  }
}

export default App;
