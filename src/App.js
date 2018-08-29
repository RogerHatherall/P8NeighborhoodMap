import React, { Component } from 'react';
import './App.css';
import * as helperFunctions from './helperFunctions';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Main from './components/Main.js'

class App extends Component {
  state = {
    hotelsArray: [],
    hotelsLoaded: false
  }

  componentWillMount () {
    helperFunctions.getVenues()
    .then(response => response.json())
    .then(res => {
      this.setState({ hotelsArray: res.response.venues },
        () => {
          console.log("ss" + this.state.hotelsArray);
          this.setState({ hotelsLoaded: true },
           () => {
            console.log("ss! " + this.state.hotelsLoaded)
            }
          )
        }
      )
    })
    .catch(error => {console.log(error)})
  }

  render() {
    if (!this.state.hotelsLoaded) {
      console.log("rendering " + this.state.hotelsLoaded)
      return <div>Loading...</div>
    } else {
      console.log("rendering " + this.state.hotelsLoaded)
      return (
        <div className="app">
          <Header/>
          <Main 
            hotelsArray={this.state.hotelsArray}
          />
          <Footer/>
        </div>
      );
    }
  }
}

export default App;
