import React, { Component } from 'react';
import Example from './nav'
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Example/>
      <Part1/>
      <Part2/>
      <Part3/>
      <Footer/>
      </div>
    );
  }
}

export default App;
