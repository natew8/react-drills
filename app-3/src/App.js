import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredString: '',
      family: ['Kaylie', 'Nate', 'Bash', 'Lucas', 'Heather', 'Cory', 'Jared', 'Kim', 'Katie', 'Joey', 'Billy', 'Paige', 'Tilda', 'Dov', 'Gus']
    }
  }

  handleFilter(filter) {
    this.setState({ filteredString: filter })
  }

  render() {
    let familyToDisplay = this.state.family
      .filter((element, index) => {
        return element.includes(this.state.filteredString)
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })
    return (
      <div className='App'>
        <input onChange={e => this.handleFilter(e.target.value)} type='text' />
        {familyToDisplay}
      </div>
    )
  }
}

export default App;
