import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
