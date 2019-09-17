import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    count: 0,
  }

  inc = () => {
    this.setState({count: this.state.count + 1})
  }

  dec = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div className='conteiner'>
        <h1>Simple React Counter App</h1>
        <h3>Count: {this.state.count} </h3> 
        <button className='btn' onClick={this.inc}>+</button>
        <button className='btn' onClick={this.dec}>-</button>
        <h6>author: Roman Vavrynkevych</h6>
      </div>
    )
  }
}

