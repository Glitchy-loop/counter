import React, { Component } from 'react'
import './App.css'

export class App extends Component {
  constructor() {
    super()
  }

  state = {
    count: 0
  }

  addOne() {
    this.setState({
      count: this.state.count + 1
    });
  }

  reset() {
    this.setState({
      count: 0
    })
  }


  plusPenki() {
    this.setState({
      count: this.state.count + 5
    })
  }

  render() {
    return (
      <div
        className="container"
      >
        <div
          className="header"
        >
          <div>
            <h1>
              Skaicius<p />
              <div className="skaicius">{this.state.count}</div>
            </h1>
          </div>
          <p></p>
          <div className="buttons">
            <button
              className="btn"
              onClick={() => this.addOne()}
            >Plius 1</button>
            <button
              className="btn"
              onClick={() => this.plusPenki()}
            >Plius 5</button>
            <button
              className="btn"
              onClick={() => this.reset()}
            >Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
