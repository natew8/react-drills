import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      family: ['Kaylie', 'Nate', 'Bash', 'Lucas']
    }
  }

  render() {
    let familyList = this.state.family.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return <div className='App'>{familyList}</div>
  }
}


export default App;
