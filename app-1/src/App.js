import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      newText: ''
    }
  }

  handler(value) {
    this.setState({
      message: value
    })
  }
  render() {
    return (
      <div className="App" >
        <input type='text' onChange={e => this.handler(e.target.value)} />
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default App;
