import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default App;
